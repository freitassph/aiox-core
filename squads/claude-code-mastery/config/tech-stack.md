# Claude Code Mastery — Tech Stack

Este documento define a stack tecnológica recomendada e suportada pelo squad Claude Code Mastery (Tier S+++).

## 1. Core Engine
- **Claude Code CLI**: Versão latest (0.24.x+).
- **LLM**: Anthropic Claude 3.5 Sonnet (default) ou Claude 3.5 Opus (complex architecture).
- **Runtime**: Node.js v20+ (LTS).

## 2. Infrastructure & Orchestration
- **AIOX Core**: Framework de orquestração de squads.
- **MCP (Model Context Protocol)**: Host e clients para integração de ferramentas.
- **Git**: Workflow baseado em feature branches e semantic commits.

## 3. Development Tools
- **Linter**: ESLint com regras de segurança rigorosas.
- **Formater**: Prettier.
- **Testing**: Vitest ou Jest para testes unitários; Playwright para browser automation via MCP.
- **Types**: TypeScript 5.x+.

## 4. Specialized MCP Servers
- **Context7**: Para ingestão de documentação técnica.
- **Supabase**: Para persistência de estado e autenticação em squads SaaS.
- **Stitch**: Para automação de UI/UX design components.
- **Exa/Tavily**: Para busca web em tempo real.

## 5. Deployment Pipelines
- **Vercel/Railway**: Para hospedagem rápida de interfaces.
- **GitHub Actions**: Para CI/CD e compliance checking.
- **Docker**: Para sandboxing de ferramentas customizadas.
