import type { SkillGroup } from './types.ts'

// Todas as "Principais competências" do currículo estão aqui. As demais etiquetas
// repetem termos que já aparecem no resumo e nas atividades da experiência.
export const skillGroups: SkillGroup[] = [
  {
    id: 'logistica',
    title: 'Logística e operações',
    skills: [
      'Logística',
      'Supply Chain',
      'Middle Mile',
      'E-commerce',
      'Planejamento de fluxos logísticos',
      'Acompanhamento de pedidos e transferências',
      'Rastreabilidade de mercadorias',
    ],
  },
  {
    id: 'indicadores',
    title: 'Indicadores e dados',
    skills: [
      'Indicadores de Desempenho (KPIs)',
      'SLA',
      'Relatórios gerenciais',
      'Power BI',
      'Análise de performance de entregas',
    ],
  },
  {
    id: 'sistemas',
    title: 'Sistemas e ferramentas',
    skills: [
      'Sistemas ERP',
      'Ferramentas de gestão logística',
      'Planilhas de controle',
      'Melhoria contínua e automação de rotinas',
    ],
  },
  {
    id: 'relacionamento',
    title: 'Relacionamento e gestão',
    skills: [
      'Relacionamento com transportadoras e fornecedores',
      'Negociação de prazos e custos logísticos',
      'Gestão de carteira de clientes',
      'Tratativa de ocorrências',
    ],
  },
]
