#!/usr/bin/env node
/**
 * Deploy Orchestrator — Pedro WebApp Squad
 * Handles deployment to Vercel, VPS, or self-hosted environments with health checks.
 * Usage: node scripts/deploy-orchestrator.js [--target vercel|vps|docker] [--env production|staging]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

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

// Deployment configurations
const DEPLOY_TARGETS = {
  vercel: {
    name: 'Vercel',
    steps: ['validate', 'build', 'deploy', 'verify'],
    commands: {
      deploy: 'npx vercel --prod --yes',
      deployStaging: 'npx vercel --yes',
      verify: 'curl -f https://{domain}/api/health'
    },
    envFiles: {
      production: '.env.production',
      staging: '.env.staging'
    }
  },
  vps: {
    name: 'VPS (Docker)',
    steps: ['validate', 'build', 'docker-build', 'docker-push', 'deploy', 'migrate', 'verify'],
    commands: {
      dockerBuild: 'docker build -t webapp:${version} .',
      dockerPush: 'docker push registry.example.com/webapp:${version}',
      deploy: 'ssh deploy@${host} "cd /opt/webapp && docker-compose pull && docker-compose up -d"',
      migrate: 'ssh deploy@${host} "cd /opt/webapp && docker-compose run --rm app npm run db:migrate"',
      verify: 'curl -f https://{host}/api/health'
    },
    envFiles: {
      production: '.env.production',
      staging: '.env.staging'
    }
  },
  docker: {
    name: 'Docker Compose (Self-Hosted)',
    steps: ['validate', 'build', 'compose-up', 'migrate', 'verify'],
    commands: {
      composeUp: 'docker-compose up -d --build',
      migrate: 'docker-compose run --rm app npm run db:migrate',
      verify: 'curl -f http://localhost:3000/api/health'
    },
    envFiles: {
      production: '.env.production',
      staging: '.env.staging'
    }
  }
};

class DeployOrchestrator {
  constructor(options = {}) {
    this.target = options.target || 'vercel';
    this.env = options.env || 'production';
    this.version = options.version || `v${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${process.env.GITHUB_SHA?.slice(0, 7) || 'local'}`;
    this.host = options.host || process.env.DEPLOY_HOST || 'localhost';
    this.domain = options.domain || process.env.DEPLOY_DOMAIN || 'localhost';
    this.results = [];
    this.startTime = Date.now();
  }

  get config() {
    return DEPLOY_TARGETS[this.target];
  }

  async runStep(name, fn) {
    log(`\n  [${(this.results.length + 1).toString().padStart(2, '0')}/${this.config.steps.length}] ${name}`, 'cyan');
    const stepStart = Date.now();

    try {
      const result = await fn();
      const duration = ((Date.now() - stepStart) / 1000).toFixed(1);
      log(`    [PASS] ${name} completed in ${duration}s`, 'green');
      this.results.push({ step: name, status: 'pass', duration });
      return result;
    } catch (error) {
      const duration = ((Date.now() - stepStart) / 1000).toFixed(1);
      log(`    [FAIL] ${name} failed after ${duration}s`, 'red');
      log(`    Error: ${error.message}`, 'red');
      this.results.push({ step: name, status: 'fail', duration, error: error.message });
      throw error;
    }
  }

  async validate() {
    return this.runStep('Validate Environment', () => {
      // Check required files
      const requiredFiles = ['package.json', 'next.config.js', 'tsconfig.json'];
      const envFile = this.config.envFiles[this.env];

      for (const file of requiredFiles) {
        if (!fs.existsSync(file)) {
          throw new Error(`Missing required file: ${file}`);
        }
      }

      if (envFile && !fs.existsSync(envFile)) {
        log(`    [WARN] Environment file not found: ${envFile}`, 'yellow');
      }

      // Check Node version
      const nodeVersion = process.version;
      const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
      if (majorVersion < 18) {
        throw new Error(`Node.js 18+ required, found ${nodeVersion}`);
      }

      log(`    Node: ${nodeVersion}, Target: ${this.config.name}, Env: ${this.env}`, 'cyan');
      return { node: nodeVersion, target: this.target, env: this.env };
    });
  }

  async build() {
    return this.runStep('Build Application', () => {
      const output = execSync('npm run build', {
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: 'production' }
      });
      return { output };
    });
  }

  async dockerBuild() {
    return this.runStep('Build Docker Image', () => {
      const cmd = this.config.commands.dockerBuild.replace('${version}', this.version);
      execSync(cmd, { encoding: 'utf-8', stdio: 'inherit' });
      return { version: this.version };
    });
  }

  async dockerPush() {
    return this.runStep('Push Docker Image', () => {
      const cmd = this.config.commands.dockerPush.replace('${version}', this.version);
      execSync(cmd, { encoding: 'utf-8', stdio: 'inherit' });
      return { version: this.version };
    });
  }

  async deploy() {
    return this.runStep(`Deploy to ${this.config.name}`, () => {
      const cmd = this.env === 'staging'
        ? (this.config.commands.deployStaging || this.config.commands.deploy)
        : this.config.commands.deploy;

      const processedCmd = cmd
        .replace('${host}', this.host)
        .replace('${domain}', this.domain)
        .replace('${version}', this.version);

      execSync(processedCmd, { encoding: 'utf-8', stdio: 'inherit' });
      return { deployed: true };
    });
  }

  async composeUp() {
    return this.runStep('Start Docker Compose', () => {
      execSync(this.config.commands.composeUp, { encoding: 'utf-8', stdio: 'inherit' });
      return { deployed: true };
    });
  }

  async migrate() {
    return this.runStep('Run Database Migrations', () => {
      const cmd = this.config.commands.migrate.replace('${host}', this.host);
      execSync(cmd, { encoding: 'utf-8', stdio: 'pipe' });
      return { migrated: true };
    });
  }

  async verify() {
    return this.runStep('Verify Deployment', async () => {
      const healthUrl = this.config.commands.verify
        .replace('{host}', this.host)
        .replace('{domain}', this.domain);

      return new Promise((resolve, reject) => {
        const client = healthUrl.startsWith('https') ? https : http;
        const timeout = 30000;
        const start = Date.now();

        const check = () => {
          const elapsed = Date.now() - start;
          if (elapsed > timeout) {
            reject(new Error(`Health check timed out after ${timeout}ms`));
            return;
          }

          client.get(healthUrl, { timeout: 5000 }, (res) => {
            let data = '';
            res.on('data', chunk => { data += chunk; });
            res.on('end', () => {
              if (res.statusCode >= 200 && res.statusCode < 300) {
                resolve({ status: res.statusCode, healthy: true, responseTime: `${Date.now() - start}ms` });
              } else {
                setTimeout(check, 2000);
              }
            });
          }).on('error', () => {
            setTimeout(check, 2000);
          });
        };

        check();
      });
    });
  }

  async deploy() {
    log('\n========================================', 'bold');
    log(`  Pedro WebApp — Deploy to ${this.config.name}`, 'bold');
    log(`  Version: ${this.version}`, 'bold');
    log(`  Environment: ${this.env}`, 'bold');
    log('========================================', 'bold');

    const stepMap = {
      validate: () => this.validate(),
      build: () => this.build(),
      'docker-build': () => this.dockerBuild(),
      'docker-push': () => this.dockerPush(),
      deploy: () => this.deploy(),
      'compose-up': () => this.composeUp(),
      migrate: () => this.migrate(),
      verify: () => this.verify()
    };

    for (const step of this.config.steps) {
      const fn = stepMap[step];
      if (!fn) {
        log(`    [WARN] Unknown step: ${step}`, 'yellow');
        continue;
      }
      try {
        await fn();
      } catch {
        this.printSummary();
        process.exit(1);
      }
    }

    this.printSummary();
  }

  printSummary() {
    const totalDuration = ((Date.now() - this.startTime) / 1000).toFixed(1);
    const passed = this.results.filter(r => r.status === 'pass').length;
    const failed = this.results.filter(r => r.status === 'fail').length;

    log('\n========================================', 'bold');
    log('  Deployment Summary', 'bold');
    log('========================================', 'bold');
    log(`  Target: ${this.config.name}`, 'cyan');
    log(`  Environment: ${this.env}`, 'cyan');
    log(`  Version: ${this.version}`, 'cyan');
    log(`  Duration: ${totalDuration}s`, 'cyan');
    log(`  Steps: ${passed}/${this.results.length} passed`, failed === 0 ? 'green' : 'red');
    log(`  Status: ${failed === 0 ? 'SUCCESS' : 'FAILED'}`, failed === 0 ? 'green' : 'red');
    log('========================================', 'bold');
  }
}

async function main() {
  const args = process.argv.slice(2);
  const targetFlag = args.indexOf('--target');
  const envFlag = args.indexOf('--env');
  const hostFlag = args.indexOf('--host');
  const domainFlag = args.indexOf('--domain');

  const target = targetFlag !== -1 ? args[targetFlag + 1] : 'vercel';
  const env = envFlag !== -1 ? args[envFlag + 1] : 'production';
  const host = hostFlag !== -1 ? args[hostFlag + 1] : undefined;
  const domain = domainFlag !== -1 ? args[domainFlag + 1] : undefined;

  if (!DEPLOY_TARGETS[target]) {
    log(`Unknown target: ${target}. Available: ${Object.keys(DEPLOY_TARGETS).join(', ')}`, 'red');
    process.exit(1);
  }

  const orchestrator = new DeployOrchestrator({ target, env, host, domain });
  await orchestrator.deploy();
}

main().catch((err) => {
  log(`\n  Unexpected error: ${err.message}`, 'red');
  process.exit(1);
});

module.exports = { DeployOrchestrator, DEPLOY_TARGETS };
