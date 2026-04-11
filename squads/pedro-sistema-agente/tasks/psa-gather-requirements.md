---
task: Gather Requirements
responsavel: "@psa-pm"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project_blueprint: docs/PROJECT.md (gerado por psa-maestro)
Saida: |
  - prd: docs/PRD.md
  - personas: docs/personas.md
  - stories: docs/stories/ (user stories com ACs)
---

# *gather-requirements

Transforma o blueprint em PRD executável com requisitos, personas e user stories.

## Fases de Execução

### Fase 1: Brief Analysis + Personas
**Ações:**
- Ler PROJECT.md e identificar os usuários do sistema
- Criar 2-3 personas em `docs/personas.md`: nome, cargo, contexto, goals, frustrações
- Para secretária IA: Persona 1 = Paciente (usuário final), Persona 2 = Dono da clínica (admin), Persona 3 = Recepcionista (se houver)

**Critério de conclusão:** Personas cobertas, sem sobreposição de objetivos entre elas

### Fase 2: Functional Requirements
**Ações:**
- Listar TODOS os requisitos funcionais com ID e prioridade:
  - P0: sistema não funciona sem isso
  - P1: usuário frustrado sem isso
  - P2: nice-to-have
- Formato: `FR-001 [P0] Usuário pode enviar mensagem para o agente via WhatsApp`
- Cobrir todos os fluxos: onboarding, operação normal, casos de erro

**Critério de conclusão:** Todos os FR têm ID, prioridade, e critério de aceite claro

### Fase 3: Non-Functional Requirements
**Ações:**
- NFR de Performance: tempo de resposta, throughput, disponibilidade
- NFR de Segurança: autenticação, dados sensíveis, LGPD
- NFR de Escalabilidade: quantos clientes simultâneos, crescimento esperado
- NFR de Manutenibilidade: logs, alertas, deploy

**Formato:** `NFR-001 O agente deve responder em < 5 segundos em 95% dos casos`

**Critério de conclusão:** NFRs cobrem performance, segurança, disponibilidade

### Fase 4: PRD Writing
**Ações:**
- Escrever `docs/PRD.md` completo com: Overview, Personas, FR (priorizados), NFR, Constraints, Out of Scope, Success Metrics
- Seção "Out of Scope" é tão importante quanto o escopo — deixa claro o que NÃO será feito

**Critério de conclusão:** PRD aprovado por psa-maestro sem seções "a definir"

### Fase 5: User Stories P0
**Ações:**
- Para cada FR-P0, criar user story em `docs/stories/`
- Formato Given/When/Then para cada acceptance criterion
- Cada story tem dependências explícitas

**Critério de conclusão:** Todas as stories P0 têm ACs testáveis e completos

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| FRs com AC completo | 100% | Review manual |
| Stories P0 com ACs | 100% | Checklist |
| Ambiguidades no PRD | 0 | Review por psa-maestro |


## Purpose
O propósito desta tarefa é garantir a execução impecável de um módulo específico do sistema Pedro Henrique, seguindo os rigorosos padrões de qualidade S+++.

## Entrada
- Requisitos técnicos detalhados
- Contexto do projeto vindo do Maestro
- Dependências de sistemas externos validadas

## Saida
- Código fonte documentado e testado
- Artefatos de design ou infraestrutura validados
- Relatório de conformidade técnica

## Checklist
- [ ] Validar conformidade com os padrões de código
- [ ] Executar testes de unidade e integração
- [ ] Revisar documentação técnica
- [ ] Obter aprovação do Auditor

## Pre-conditions
- Ambiente de desenvolvimento configurado
- Todas as dependências do agente resolvidas
- Goal da tarefa claramente definido e aceito pela squad
