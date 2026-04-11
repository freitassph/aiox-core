---
task: medical-briefing-task
responsavel: "@medical-prd-architect"
responsavel_type: Agent
atomic_layer: Task
elicit: false
---

# Task: Medical Briefing — Coleta Completa de Informações

## purpose
Coletar todas as informações necessárias do cliente (médico/clínica) para iniciar o projeto com clareza total. Sem o briefing completo, nenhuma outra task pode começar.

## entrada
- Cliente (médico ou representante da clínica) disponível para sessão de 60-90 min
- Canal de comunicação definido (video chamada, presencial, telefone)
- Formulário de briefing estruturado (este documento)

## saida
- Briefing Document completo com 5 blocos preenchidos
- Cliente aprovou informações coletadas
- Pendências documentadas com plano de follow-up
- Handoff pronto para PRD creation

## checklist
- [ ] BLOCO 1: Identificação Profissional completo
- [ ] BLOCO 2: Clínica/Consultório completo
- [ ] BLOCO 3: Serviços e Procedimentos completo
- [ ] BLOCO 4: Conteúdo e Provas Sociais completo
- [ ] BLOCO 5: Objetivo de Conversão completo
- [ ] BLOCO 6: Técnico e Deadline completo
- [ ] Cliente aprovou briefing por email ou assinatura
- [ ] Pendências listadas com responsáveis e datas

## pre-conditions
- Contrato assinado e pagamento inicial recebido
- Contato do cliente (médico ou representante) confirmado
- Agendamento da sessão de briefing confirmado
- Formulário de briefing preparado e enviado pré-sessão (opcional)

## Objetivo
Coletar todas as informações necessárias do cliente (médico/clínica) para iniciar o projeto com clareza total. Sem o briefing completo, nenhuma outra task pode começar.

## Agente Responsável
`medical-prd-architect` (Camila Santos)

## Método
Entrevista guiada com o médico responsável pelo projeto. Pode ser feita em 1 sessão de 60-90 min ou em 2 sessões de 45 min. Ao final, compilar em documento estruturado.

---

## BLOCO 1 — Identificação Profissional (10 min)

```
□ Nome completo do médico (como deve aparecer na comunicação)
□ CRM: CRM-____ ___________
□ RQE: ___________ (obrigatório quando há especialidade registrada)
□ Especialidade registrada no CFM: _______________________
□ Subespecialidades / focos de atuação:
  1. ___________________________________________
  2. ___________________________________________
  3. ___________________________________________
□ Anos de formado: _______ | Anos na especialidade: _______
□ Faculdade de medicina: ___________________________
□ Residência: ____________________________________
□ Fellowship / Subespecialização: _________________
□ Mestrado / Doutorado: ___________________________
□ Publicações relevantes: (link Lattes / PubMed se houver)
□ Afiliações: SBM □ | AMB □ | CFM □ | CRM Regional □ | [Sociedade de Especialidade] □
□ Premiações / Certificações: _____________________
```

## BLOCO 2 — Clínica / Consultório (10 min)

```
□ Nome fantasia da clínica: _______________________
□ CNPJ: ________________________________________
□ Endereço completo: _____________________________
□ Complemento: ___________ | Bairro: ____________
□ Cidade: _________________ | UF: _____ | CEP: ___________
□ Telefone principal: (___) ____________________
□ Telefone secundário: (___) ___________________
□ WhatsApp Business: (___) _____________________
□ Email profissional: ___________________________
□ Site atual (se houver): _______________________
□ Horário de atendimento:
  Segunda a Sexta: _______ às _______
  Sábado: _______ às _______ (ou não atende □)
  Domingo: _______ às _______ (ou não atende □)
□ Retorno de contatos: em até _____ horas
□ Equipe: apenas eu □ | com outros médicos □ | equipe de apoio □
  Se com outros médicos: nomes e CRM: ________________
```

## BLOCO 3 — Serviços & Procedimentos (15 min)

```
□ Liste TODOS os serviços / procedimentos oferecidos:
  1. ____________________________________________
  2. ____________________________________________
  3. ____________________________________________
  4. ____________________________________________
  5. ____________________________________________
  6. ____________________________________________
  (continuar conforme necessário)

□ Dos listados acima, quais geram MAIS RECEITA? (top 3)
  1. ______________ 2. ______________ 3. ______________

□ Quais têm MAIOR DEMANDA de busca de pacientes? (top 3)
  1. ______________ 2. ______________ 3. ______________

□ Quais são seus MAIORES DIFERENCIAIS versus outros médicos da área?
  ____________________________________________

□ Convênios aceitos (listar TODOS):
  □ Unimed   □ Amil       □ SulAmérica  □ Bradesco Saúde
  □ Porto Seguro □ NotreDame  □ Hapvida    □ São Francisco
  □ Outros: ___________________________________
□ Consulta particular: □ Sim. Valor: R$ _______  □ Prefere não informar
```

## BLOCO 4 — Identidade Visual (10 min)

```
□ Existe logo atualmente?
  □ Sim → disponibilizar em SVG ou PNG de alta resolução
  □ Não → criar no projeto □ | usar só tipografia □

□ Cores da identidade visual atual (se houver): ___________

□ Escolha 3 adjetivos que representam sua marca:
  □ Sóbrio      □ Acolhedor   □ Tecnológico  □ Humano
  □ Exclusivo   □ Acessível   □ Especializado □ Moderno
  □ Clássico    □ Inovador    □ Familiar     □ Científico

□ Sites médicos que admira (colocar links):
  1. ___________________________________________
  2. ___________________________________________
  3. ___________________________________________

□ Sites que NÃO quer se parecer (opcional):
  1. ___________________________________________

□ Fotos profissionais disponíveis?
  □ Sim → entregues em alta resolução
  □ Não → agendaremos produção fotográfica
□ Fotos do consultório/clínica disponíveis?
  □ Sim □ Não
```

## BLOCO 5 — Público-Alvo & Conversão (10 min)

```
□ Público principal por faixa etária:
  □ 18-30  □ 30-45  □ 45-60  □ 60+  □ Crianças (via pais)

□ Gênero predominante: □ Feminino  □ Masculino  □ Equilibrado

□ Perfil socioeconômico:
  □ Classes A/B (alta renda)
  □ Classes B/C (média)
  □ Todas as classes

□ Ação principal que o site deve gerar: (marcar 1 principal)
  □ Ligação telefônica
  □ Mensagem WhatsApp
  □ Agendamento online
  □ Email de contato

□ Ação secundária: _____________________________

□ Principais objeções que IMPEDEM o agendamento:
  1. ___________________________________________
  2. ___________________________________________
  3. ___________________________________________

□ Meta de agendamentos via digital por mês: _______
□ Percentual atual de pacientes via digital: _______%
```

## BLOCO 6 — Técnico & Prazo (5 min)

```
□ Domínio:
  □ Já existe: ___________________________
  □ Criar novo: preferência de domínio: _______________
  □ TLD preferencial: □ .med.br  □ .com.br  □ .com

□ Hosting: □ Vercel (recomendado) □ Outro: ___________

□ Sistema de agendamento atual: □ Doctoralia □ Calendly □ Outro: ___ □ Nenhum

□ CRM/Marketing: □ RD Station  □ HubSpot  □ Nenhum  □ Outro: ___

□ Google Meu Negócio já configurado? □ Sim □ Não

□ Prazo desejado para lançamento: ________________

□ Orçamento para produção de fotos: □ Incluso □ Por conta do cliente □ Não necessário

□ Depoimentos de pacientes disponíveis?
  □ Sim → quantos? ___ (apenas sobre atendimento, CFM-compliant)
  □ Não → coletar no processo □

□ Número de pacientes atendidos (aproximado): ______
□ Nota média Google/Doctoralia atual: ★ _____ (___ avaliações)
```

---

## Compilação Final

Após a entrevista, compilar em `briefing-document.md` com:
1. Resumo executivo (1 parágrafo)
2. Todos os dados coletados organizados
3. Gaps identificados (informações faltantes)
4. Próximos passos com responsável e prazo

## Critérios de Aceite

```
□ CRM e RQE verificados no portal CFM
□ Todos os serviços listados
□ Fotos do médico entregues ou produção agendada
□ Ação principal de conversão definida
□ Prazo de lançamento alinhado
□ Briefing revisado e aprovado pelo médico
```

## Output
- **`/docs/briefing-document.md`** — Briefing completo compilado
- **`/docs/compliance-risk-flags.md`** — Alertas de riscos CFM por especialidade
