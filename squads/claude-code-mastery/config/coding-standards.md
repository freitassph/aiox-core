# Claude Code Mastery — Coding Standards

Este documento define os padrões de excelência técnica (Tier S+++) para o uso e automação do Claude Code CLI.

## 1. Gestão de Contexto (CLAUDE.md)

### 1.1. Estrutura Obrigatória
Todo projeto DEVE ter um `CLAUDE.md` na raiz com as seguintes seções:
- **Build/Test Commands**: Lista exata de comandos para buildar e testar.
- **Style Guidelines**: Padrões de código específicos do projeto.
- **Context Pinning**: Entidades e arquivos críticos que devem permanecer no contexto.

### 1.2. Manutenção de Rot
- O arquivo `CLAUDE.md` deve ser revisado a cada 50 interações (`compaction` trigger).
- Informações depreciadas devem ser removidas imediatamente para economizar context budget.
- Use `*optimize-context` para automatizar a limpeza.

## 2. Padrões de MCP (Model Context Protocol)

### 2.1. Tool Selection
- Prefira ferramentas que retornam dados estruturados (JSON) sobre texto puro.
- Limite o retorno de ferramentas de busca a 500 tokens para evitar inchaço do contexto.

### 2.2. Server Config
- Servidores MCP devem ser registrados via `claude mcp add` apenas se forem essenciais para a story atual.
- Servidores não utilizados devem ser revogados para reduzir o overhead de descoberta de ferramentas.

## 3. Hooks e Automação

### 3.1. Lifecycle Hooks
- **pre_tool_use**: Use para validar permissões ou fazer backup de arquivos críticos.
- **post_tool_use**: Use para rodar linters ou disparar notificações de telemetria.
- **pre_compact**: Use para persistir estados importantes antes que o Claude resuma o histórico.

### 3.2. Error Handling
- Falhas em comandos de build devem disparar automaticamente o agente `roadmap-sentinel` para documentar o problema.

## 4. Estilo de Código (TypeScript/Node.js)

- **Strict Mode**: `strict: true` é obrigatório em `tsconfig.json`.
- **Imports**: Sempre use Absolute Imports com aliases (`@/`).
- **Documentation**: JSDoc obrigatório em exportações públicas.
- **Error Shield**: Todo bloco async deve ter try/catch com logging contextualizado.

## 5. Security & Permissions

- **Managed Mode**: Em ambientes sensíveis, o Claude Code deve rodar em modo `managed`.
- **Allowlists**: Comandos destrutivos (`rm`, `kill`, `push`) devem estar em allowlists explícitas.
- **Secret Scan**: Proibido commitar segredos. Use variáveis de ambiente via `.env.example`.
