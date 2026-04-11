#!/usr/bin/env node
/**
 * System Health Check — Pedro Sistema Agente Squad
 * Checks all running services, database connectivity, and external integrations.
 * Usage: node scripts/health-check.js [--url url] [--verbose]
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

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

class HealthChecker {
  constructor(options = {}) {
    this.baseUrl = options.url || process.env.APP_URL || 'http://localhost:3000';
    this.verbose = options.verbose || false;
    this.results = [];
    this.timeout = options.timeout || 5000;
  }

  async checkEndpoint(name, endpointPath, expectedStatus = 200) {
    const url = `${this.baseUrl}${endpointPath}`;
    const start = Date.now();

    return new Promise((resolve) => {
      const client = url.startsWith('https') ? https : http;

      const req = client.get(url, { timeout: this.timeout }, (res) => {
        const duration = Date.now() - start;
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          const passed = res.statusCode === expectedStatus;
          const result = {
            name,
            url,
            status: res.statusCode,
            expectedStatus,
            responseTime: `${duration}ms`,
            passed,
            body: this.verbose ? data.substring(0, 200) : null
          };
          this.results.push(result);
          resolve(result);
        });
      });

      req.on('error', (err) => {
        const duration = Date.now() - start;
        const result = {
          name,
          url,
          status: 'ERROR',
          expectedStatus,
          responseTime: `${duration}ms`,
          passed: false,
          error: err.message
        };
        this.results.push(result);
        resolve(result);
      });

      req.on('timeout', () => {
        req.destroy();
        const result = {
          name,
          url,
          status: 'TIMEOUT',
          expectedStatus,
          responseTime: `${this.timeout}ms`,
          passed: false,
          error: `Request timed out after ${this.timeout}ms`
        };
        this.results.push(result);
        resolve(result);
      });
    });
  }

  async checkAll() {
    const checks = [
      { name: 'Application', path: '/' },
      { name: 'API Health', path: '/api/health' },
      { name: 'Auth Endpoint', path: '/api/auth/login', expectedStatus: 405 },
      { name: 'API Version', path: '/api/v1/status' },
      { name: 'Frontend App', path: '/app' },
      { name: 'OpenAPI Docs', path: '/api/docs' },
    ];

    log('Running health checks...', 'cyan');
    log(`Base URL: ${this.baseUrl}`, 'cyan');
    log(`Timeout: ${this.timeout}ms\n`, 'cyan');

    for (const check of checks) {
      const result = await this.checkEndpoint(
        check.name,
        check.path,
        check.expectedStatus || 200
      );

      const statusIcon = result.passed ? 'PASS' : 'FAIL';
      const statusColor = result.passed ? 'green' : 'red';
      log(`  [${statusIcon}] ${result.name} — ${result.status} (${result.responseTime})`, statusColor);

      if (result.error && this.verbose) {
        log(`         Error: ${result.error}`, 'yellow');
      }
    }
  }

  printSummary() {
    const passed = this.results.filter(r => r.passed).length;
    const failed = this.results.filter(r => !r.passed).length;
    const total = this.results.length;

    log('\n========================================', 'bold');
    log('  Health Check Summary', 'bold');
    log('========================================', 'bold');
    log(`  Total Checks: ${total}`, 'cyan');
    log(`  Passed: ${passed}`, 'green');
    log(`  Failed: ${failed}`, failed > 0 ? 'red' : 'green');

    const avgResponseTime = this.results
      .filter(r => typeof r.responseTime === 'string' && r.responseTime.includes('ms'))
      .map(r => parseInt(r.responseTime))
      .reduce((a, b) => a + b, 0) / total;

    log(`  Avg Response Time: ${avgResponseTime.toFixed(0)}ms`, 'cyan');
    log(`  Status: ${failed === 0 ? 'HEALTHY' : 'UNHEALTHY'}`, failed === 0 ? 'green' : 'red');
    log('========================================', 'bold');

    return { total, passed, failed, healthy: failed === 0 };
  }

  generateReport() {
    const summary = this.printSummary();
    const report = {
      squad: 'pedro-sistema-agente',
      tool: 'health-check',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary,
      results: this.results
    };
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const urlFlag = args.indexOf('--url');
  const verboseFlag = args.includes('--verbose');

  const checker = new HealthChecker({
    url: urlFlag !== -1 ? args[urlFlag + 1] : undefined,
    verbose: verboseFlag
  });

  checker.checkAll().then(() => {
    const summary = checker.printSummary();
    process.exit(summary.healthy ? 0 : 1);
  });
}

module.exports = HealthChecker;
