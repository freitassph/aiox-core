#!/usr/bin/env node
/**
 * sync-squads-to-ide.js — Universal Squad Sync
 *
 * Syncs all squad agents to ALL supported IDEs:
 *   - Claude Code  → .claude/commands/{squad}/agents/
 *   - Cursor       → .cursor/rules/agents/
 *   - Codex        → .codex/agents/
 *   - Gemini       → .gemini/commands/{agent}.toml + .gemini/rules/{squad}/agents/
 *   - Antigravity  → .antigravity/rules/agents/
 *
 * Usage:
 *   node scripts/sync-squads-to-ide.js
 *   npm run sync:squads
 *
 * How it works:
 *   1. Reads .aiox/squad-sync-manifest.json (list of files written last run)
 *   2. Deletes ONLY those files (preserves native AIOX agents)
 *   3. Auto-detects all squads/*/agents/ directories
 *   4. Writes fresh files to each IDE
 *   5. Saves updated manifest
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT          = path.resolve(__dirname, '..');
const MANIFEST_FILE = path.join(ROOT, '.aiox', 'squad-sync-manifest.json');

// ─── Manifest ────────────────────────────────────────────────────────────────

function loadManifest() {
  if (!fs.existsSync(MANIFEST_FILE)) return { files: [], squadDirs: [] };
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
  } catch {
    return { files: [], squadDirs: [] };
  }
}

function saveManifest(data) {
  fs.mkdirSync(path.dirname(MANIFEST_FILE), { recursive: true });
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(data, null, 2));
}

// ─── Cleanup ─────────────────────────────────────────────────────────────────

function cleanPreviousSync(manifest) {
  let removed = 0;

  // Remove squad-owned directories (Claude Code, Gemini rules)
  for (const rel of (manifest.squadDirs || [])) {
    const abs = path.join(ROOT, rel);
    if (fs.existsSync(abs)) {
      fs.rmSync(abs, { recursive: true, force: true });
      removed++;
    }
  }

  // Remove individual tracked files (Cursor, Codex, Antigravity, Gemini commands)
  for (const rel of (manifest.files || [])) {
    const abs = path.join(ROOT, rel);
    if (fs.existsSync(abs)) {
      fs.unlinkSync(abs);
      removed++;
    }
  }

  if (removed > 0) console.log(`🧹 Cleaned ${removed} items from previous sync\n`);
}

// ─── Squad detection ─────────────────────────────────────────────────────────

function detectSquads() {
  const squadsDir = path.join(ROOT, 'squads');
  if (!fs.existsSync(squadsDir)) return [];

  return fs.readdirSync(squadsDir)
    .filter(name => {
      const stat = fs.statSync(path.join(squadsDir, name));
      if (!stat.isDirectory()) return false;
      return fs.existsSync(path.join(squadsDir, name, 'agents'));
    })
    .map(name => ({
      id:  name,
      src: path.join(ROOT, 'squads', name, 'agents'),
    }));
}

// ─── Frontmatter parser ───────────────────────────────────────────────────────

function parseFrontmatter(src) {
  const match = src.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    result[key] = val;
  }
  return result;
}

// ─── Format converters ────────────────────────────────────────────────────────

/** Claude Code, Cursor, Codex, Gemini rules — full markdown as-is */
function toFullMarkdown(src) {
  return src;
}

/** Antigravity — condensed: heading + role + quick commands */
function toAntigravityFormat(src, agentFile, squadId) {
  const lines   = src.split('\n');
  const fm      = parseFrontmatter(src);
  const agentId = fm.agent   || agentFile.replace('.md', '');
  const role    = fm.role    || fm.persona || '';

  const headingLine = lines.find(l => l.startsWith('# ') && !l.startsWith('## '));
  const heading     = headingLine ? headingLine.replace('# ', '').trim() : agentId;

  const cmdIdx = lines.findIndex(l => /## Comandos/.test(l));
  let cmdBlock = '';
  if (cmdIdx !== -1) {
    const cmds = [];
    for (let i = cmdIdx + 1; i < lines.length && !lines[i].startsWith('## '); i++) {
      if (lines[i].startsWith('- `*')) cmds.push(lines[i]);
    }
    if (cmds.length) cmdBlock = '\n## Quick Commands\n\n' + cmds.slice(0, 8).join('\n') + '\n';
  }

  return `# ${heading} (@${agentId})\n\n> ${role}\n${cmdBlock}\n---\n*Squad: ${squadId} — Synced from squads/${squadId}/agents/${agentFile}*\n`;
}

/** GitHub Copilot — .github/agents/{agent}.agent.md */
function toGithubCopilot(src, agentFile, squadId) {
  const fm      = parseFrontmatter(src);
  const agentId = fm.agent   || agentFile.replace('.md', '');
  const role    = fm.role    || fm.persona || '';
  const lines   = src.split('\n');

  const headingLine = lines.find(l => l.startsWith('# ') && !l.startsWith('## '));
  const heading     = headingLine ? headingLine.replace('# ', '').trim() : agentId;
  const description = `${heading} — ${role} (Squad: ${squadId})`
    .replace(/'/g, "\\'")
    .slice(0, 200);

  const frontmatter = [
    '---',
    `name: ${agentId}`,
    `description: '${description}'`,
    `tools: ['read', 'edit', 'search', 'execute']`,
    '---',
    '',
  ].join('\n');

  return frontmatter + src;
}

/** Gemini CLI — TOML command that points to rules file */
function toGeminiToml(src, agentFile, squadId) {
  const fm      = parseFrontmatter(src);
  const agentId = fm.agent   || agentFile.replace('.md', '');
  const role    = fm.role    || fm.persona || '';
  const lines   = src.split('\n');

  const headingLine = lines.find(l => l.startsWith('# ') && !l.startsWith('## '));
  const heading     = headingLine ? headingLine.replace('# ', '').trim() : agentId;

  const description = `${heading} — ${role} (Squad: ${squadId})`
    .replace(/"/g, '\\"')
    .slice(0, 200);

  const rulesPath = `.gemini/rules/${squadId}/agents/${agentFile}`;

  return [
    `description = "${description}"`,
    `prompt = """`,
    `Ative o agente ${agentId}:`,
    `1. Leia a definição completa em ${rulesPath}`,
    `2. Siga as activation-instructions do bloco YAML`,
    `3. Mostre Quick Commands e aguarde input do usuário`,
    `Mantenha a persona até *exit.`,
    `"""`,
    '',
  ].join('\n');
}

// ─── File helpers ─────────────────────────────────────────────────────────────

function writeFile(absPath, content, relFiles) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content);
  relFiles.push(path.relative(ROOT, absPath));
}

// ─── .gitignore sync ──────────────────────────────────────────────────────────

function syncGitignore(squads) {
  const gitignorePath = path.join(ROOT, '.gitignore');
  if (!fs.existsSync(gitignorePath)) return;

  let content = fs.readFileSync(gitignorePath, 'utf8');

  const marker = '# Published squads (whitelisted for repository)';
  if (!content.includes(marker)) {
    console.warn('  [WARN] .gitignore: marcador de squads não encontrado, pulando sync');
    return;
  }

  let added = 0;
  for (const squad of squads) {
    const entry = `!squads/${squad.id}/`;
    if (!content.includes(entry)) {
      content = content.replace(marker, `${marker}\n${entry}`);
      added++;
    }
  }

  if (added > 0) {
    fs.writeFileSync(gitignorePath, content);
    console.log(`📋 .gitignore: ${added} squad(s) whitelistado(s)\n`);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const manifest  = loadManifest();
cleanPreviousSync(manifest);

const squads = detectSquads();
if (squads.length === 0) {
  console.log('⚠️  No squads found in squads/*/agents/');
  process.exit(0);
}

const newManifest = { files: [], squadDirs: [] };

syncGitignore(squads);

let totalFiles = 0;

for (const squad of squads) {
  const agentFiles = fs.readdirSync(squad.src).filter(f => f.endsWith('.md'));
  if (agentFiles.length === 0) continue;

  console.log(`\n📦 ${squad.id} (${agentFiles.length} agents)`);

  // Track squad-owned dirs (will be rm -rf on next run)
  const claudeDir  = path.relative(ROOT, path.join(ROOT, '.claude/commands', squad.id));
  const geminiDir  = path.relative(ROOT, path.join(ROOT, '.gemini/rules', squad.id));
  newManifest.squadDirs.push(claudeDir, geminiDir);

  for (const file of agentFiles) {
    const content = fs.readFileSync(path.join(squad.src, file), 'utf8');
    const fm      = parseFrontmatter(content);
    const agentId = fm.agent || file.replace('.md', '');

    // 1. Claude Code — .claude/commands/{squad}/agents/{file}
    writeFile(
      path.join(ROOT, '.claude/commands', squad.id, 'agents', file),
      toFullMarkdown(content),
      newManifest.files,
    );

    // 2. Cursor — .cursor/rules/agents/{file}
    writeFile(
      path.join(ROOT, '.cursor/rules/agents', file),
      toFullMarkdown(content),
      newManifest.files,
    );

    // 3. Codex — .codex/agents/{file}
    writeFile(
      path.join(ROOT, '.codex/agents', file),
      toFullMarkdown(content),
      newManifest.files,
    );

    // 4. Gemini rules — .gemini/rules/{squad}/agents/{file} (full)
    writeFile(
      path.join(ROOT, '.gemini/rules', squad.id, 'agents', file),
      toFullMarkdown(content),
      newManifest.files,
    );

    // 5. Gemini commands — .gemini/commands/{agentId}.toml
    writeFile(
      path.join(ROOT, '.gemini/commands', `${agentId}.toml`),
      toGeminiToml(content, file, squad.id),
      newManifest.files,
    );

    // 6. Antigravity — .antigravity/rules/agents/{file} (condensed)
    writeFile(
      path.join(ROOT, '.antigravity/rules/agents', file),
      toAntigravityFormat(content, file, squad.id),
      newManifest.files,
    );

    // 7. GitHub Copilot — .github/agents/{agentId}.agent.md
    writeFile(
      path.join(ROOT, '.github/agents', `${agentId}.agent.md`),
      toGithubCopilot(content, file, squad.id),
      newManifest.files,
    );

    console.log(`   ✓ ${agentId}`);
    totalFiles++;
  }
}

saveManifest(newManifest);

console.log(`\n✅ Sync complete: ${totalFiles} agents → 7 IDE targets`);
console.log(`   Claude Code · Cursor · Codex · Gemini · Antigravity · GitHub Copilot\n`);
