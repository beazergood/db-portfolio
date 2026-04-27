#!/usr/bin/env node
/**
 * db-portfolio — dev orchestrator
 *
 * Runs both static servers in parallel with prefixed, colour-coded output.
 * No npm dependencies — pure Node child_process. Mirrors the scraps and
 * enable-platform pattern at a smaller scale.
 *
 * Usage: npm run dev
 */

const { spawn } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');

const colors = {
  reset:  '\x1b[0m',
  dim:    '\x1b[2m',
  green:  '\x1b[32m',
  purple: '\x1b[35m',
  cyan:   '\x1b[36m',
  red:    '\x1b[31m',
};

const procs = [
  {
    label: 'site',
    color: colors.green,
    cmd:   'python3',
    args:  ['-m', 'http.server', '8080'],
    cwd:   path.join(root, 'static'),
    url:   'http://localhost:8080/',
  },
  {
    label: 'docs',
    color: colors.purple,
    cmd:   'python3',
    args:  ['-m', 'http.server', '8081'],
    cwd:   path.join(root, 'docs'),
    url:   'http://localhost:8081/',
  },
];

function prefix(p) {
  return `${p.color}[${p.label.padEnd(4)}]${colors.reset}`;
}

const children = procs.map((p) => {
  const child = spawn(p.cmd, p.args, {
    cwd: p.cwd,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (d) => process.stdout.write(`${prefix(p)} ${d}`));
  child.stderr.on('data', (d) => process.stderr.write(`${prefix(p)} ${d}`));
  child.on('exit', (code) => {
    if (code !== 0 && code !== null) {
      console.log(`${colors.red}[${p.label}]${colors.reset} exited with code ${code}`);
    }
  });

  return child;
});

console.log('');
console.log(`${colors.cyan}db-portfolio dev${colors.reset}`);
procs.forEach((p) => {
  console.log(`${prefix(p)} → ${p.url}`);
});
console.log(`${colors.dim}(Ctrl-C to stop both)${colors.reset}\n`);

function shutdown() {
  console.log(`\n${colors.dim}stopping…${colors.reset}`);
  children.forEach((c) => {
    if (!c.killed) c.kill('SIGTERM');
  });
  setTimeout(() => process.exit(0), 200);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
