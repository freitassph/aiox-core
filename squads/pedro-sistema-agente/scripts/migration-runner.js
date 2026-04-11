#!/usr/bin/env node
/**
 * Database Migration Runner — Pedro Sistema Agente Squad
 * Validates and runs Supabase/PostgreSQL migrations safely.
 * Usage: node scripts/migration-runner.js [--dry-run] [--env env]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

class MigrationRunner {
  constructor(options = {}) {
    this.dryRun = options.dryRun || false;
    this.env = options.env || 'development';
    this.migrationsDir = options.migrationsDir || 'supabase/migrations';
    this.schemaFile = options.schemaFile || 'supabase/schema.sql';
  }

  validateEnvironment() {
    log('Validating environment...', 'cyan');

    const envVars = [
      'SUPABASE_URL',
      'SUPABASE_SERVICE_ROLE_KEY',
      'DATABASE_URL'
    ];

    let valid = true;
    for (const envVar of envVars) {
      if (!process.env[envVar]) {
        log(`  [FAIL] Missing environment variable: ${envVar}`, 'red');
        valid = false;
      } else {
        log(`  [PASS] ${envVar} is set`, 'green');
      }
    }

    return valid;
  }

  checkMigrationStatus() {
    log('\nChecking migration status...', 'cyan');

    try {
      const status = execSync('supabase migration list', {
        encoding: 'utf-8',
        env: { ...process.env, CI: 'true' }
      });
      log(status, 'cyan');
      return true;
    } catch (error) {
      log(`  [WARN] Could not fetch migration status: ${error.message}`, 'yellow');
      return false;
    }
  }

  validateSchema() {
    log('\nValidating schema integrity...', 'cyan');

    if (!fs.existsSync(this.schemaFile)) {
      log(`  [WARN] Schema file not found: ${this.schemaFile}`, 'yellow');
      return false;
    }

    const schema = fs.readFileSync(this.schemaFile, 'utf-8');

    // Check for RLS policies
    const hasRLS = schema.includes('ENABLE ROW LEVEL SECURITY') ||
                   schema.includes('ENABLE ROW SECURITY');
    log(`  RLS policies: ${hasRLS ? 'Found' : 'NOT FOUND (security risk)'}`,
        hasRLS ? 'green' : 'red');

    // Check for indexes
    const indexCount = (schema.match(/CREATE INDEX/g) || []).length;
    log(`  Indexes defined: ${indexCount}`, indexCount > 0 ? 'green' : 'yellow');

    // Check for foreign keys
    const fkCount = (schema.match(/REFERENCES/g) || []).length;
    log(`  Foreign keys: ${fkCount}`, fkCount > 0 ? 'green' : 'yellow');

    return hasRLS;
  }

  runMigrations() {
    log('\nRunning migrations...', 'cyan');

    if (this.dryRun) {
      log('  [DRY RUN] Would execute migrations — no changes made', 'yellow');
      try {
        const output = execSync('supabase db push --dry-run', {
          encoding: 'utf-8',
          env: { ...process.env, CI: 'true' }
        });
        log(output, 'cyan');
        return true;
      } catch (error) {
        log(`  [FAIL] Migration validation failed: ${error.message}`, 'red');
        return false;
      }
    }

    try {
      const output = execSync('supabase db push', {
        encoding: 'utf-8',
        env: { ...process.env, CI: 'true' }
      });
      log(`  [PASS] Migrations applied successfully`, 'green');
      log(output, 'cyan');
      return true;
    } catch (error) {
      log(`  [FAIL] Migration failed: ${error.message}`, 'red');
      if (error.stdout) console.log(error.stdout);
      if (error.stderr) console.error(error.stderr);
      return false;
    }
  }

  verifyRLSPolicies() {
    log('\nVerifying RLS policies...', 'cyan');

    const rlsCheck = `
      SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
      FROM pg_policies
      WHERE schemaname = 'public'
      ORDER BY tablename, policyname;
    `;

    // This would need to run against the actual database
    log('  [INFO] RLS verification requires direct database connection', 'yellow');
    log('  Run: supabase db exec to manually verify policies', 'cyan');
    return true;
  }

  async run() {
    log('========================================', 'bold');
    log('  Database Migration Runner', 'bold');
    log('========================================', 'bold');
    log(`  Environment: ${this.env}`, 'cyan');
    log(`  Mode: ${this.dryRun ? 'DRY RUN' : 'LIVE'}`, this.dryRun ? 'yellow' : 'red');
    log('========================================', 'bold');

    if (!this.validateEnvironment()) {
      log('\n  Environment validation failed. Aborting.', 'red');
      process.exit(1);
    }

    this.checkMigrationStatus();
    const schemaValid = this.validateSchema();

    if (this.dryRun) {
      log('\n  Dry run complete. Review output above before running live.', 'yellow');
      return;
    }

    if (!this.dryRun && !schemaValid) {
      log('\n  Schema validation warnings detected.', 'yellow');
      log('  Run with --dry-run first to review changes.', 'cyan');
      const readline = require('readline');
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      const answer = await new Promise(resolve =>
        rl.question('  Continue anyway? (yes/no): ', resolve)
      );
      rl.close();
      if (answer.toLowerCase() !== 'yes') {
        log('  Aborted by user.', 'yellow');
        process.exit(0);
      }
    }

    const migrationSuccess = this.runMigrations();

    if (migrationSuccess) {
      this.verifyRLSPolicies();
      log('\n  Migration completed successfully.', 'green');
    } else {
      log('\n  Migration failed. Review errors above.', 'red');
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const envFlag = args.indexOf('--env');
  const env = envFlag !== -1 ? args[envFlag + 1] : 'development';

  const runner = new MigrationRunner({ dryRun, env });
  runner.run().catch((err) => {
    log(`Unexpected error: ${err.message}`, 'red');
    process.exit(1);
  });
}

module.exports = MigrationRunner;
