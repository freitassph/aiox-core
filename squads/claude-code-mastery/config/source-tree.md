# Claude Code Mastery — Source Tree Standard

Padrão de organização de diretórios para squads e projetos gerenciados pelo Claude Code Mastery.

## 1. Squad Structure (AIOX Standard)
```bash
/squad-name
├── squad.yaml             # Manifest principal do squad
├── README.md              # Documentação Executiva
├── agents/                # Definições de Agentes (.md)
├── tasks/                 # Definições de Tasks (.md)
├── workflows/             # Orquestração de workflows (.yaml)
├── checklists/            # Critérios de aceitação (.md)
├── templates/             # Blueprints de arquivos (.md/.yaml)
├── config/                # Políticas e standards (.md)
└── data/                  # Dados de suporte e bases de conhecimento
```

## 2. Web Project Structure (Recommended)
```bash
/project-root
├── .claude/               # Configuração local do Claude Code
├── .gemini/               # Metadados de agentes Google
├── CLAUDE.md              # Contexto operacional primário
├── src/
│   ├── components/        # UI components
│   ├── services/          # Business logic
│   ├── hooks/             # Custom React/Lifecyle hooks
│   └── utils/             # Helpers puros
├── tests/                 # Unit, Integration, E2E
├── docs/                  # Documentação de arquitetura/stories
└── package.json           # Dependências e scripts
```

## 3. Automation Assets
- Todos os arquivos de automação (`scripts/`) devem ser documentados no `CLAUDE.md`.
- Arquivos temporários de build devem ser ignorados no `.gitignore` mas mapeados no `source-tree.md` se forem críticos para o runtime.
