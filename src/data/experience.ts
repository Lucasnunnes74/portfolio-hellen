import type { Company } from './types.ts'

// Da experiência mais recente para a mais antiga.
// Empresas com mais de um cargo são exibidas como progressão de carreira.
export const experience: Company[] = [
  {
    id: 'pagbank',
    name: 'PagBank',
    period: 'out/2024 – atual',
    current: true,
    roles: [
      {
        title: 'Analista de Logística Pleno',
        bullets: [
          'Planejamento e acompanhamento de fluxos logísticos, garantindo prazos de entrega, SLA e otimização de rotas e processos operacionais',
          'Controle e atualização de KPIs, com relatórios gerenciais para apoio à decisão e melhoria contínua',
          'Interface direta com transportadoras, fornecedores e áreas internas (comercial, financeiro e atendimento)',
          'Suporte na negociação de prazos, custos logísticos e contratos de prestação de serviços, buscando redução de despesas e mais eficiência',
          'Uso de sistemas ERP e ferramentas de gestão logística para registro, análise de dados e padronização de processos',
          'Participação em projetos de melhoria contínua e automação de rotinas, com ganho de produtividade e redução de retrabalho',
        ],
      },
    ],
  },
  {
    id: 'lojas-renner',
    name: 'Lojas Renner S.A.',
    period: 'nov/2021 – out/2024',
    duration: '3 anos',
    roles: [
      {
        title: 'Analista de Logística JR',
        period: 'jan/2024 – out/2024',
        bullets: [
          'Planejamento das operações logísticas de distribuição, assegurando prazos, qualidade nas entregas e aderência aos níveis de serviço',
          'Monitoramento de pedidos e transferências entre centros de distribuição e lojas, com acuracidade das informações e rastreabilidade',
          'Interface com transportadoras, fornecedores e equipes internas, resolvendo ocorrências e devoluções',
        ],
      },
      {
        title: 'Assistente de Logística',
        // No LinkedIn o término aparece como out/2024; aqui usamos dez/2023 para não sobrepor o cargo seguinte.
        period: 'nov/2021 – dez/2023',
        bullets: [
          'Apoio às rotinas operacionais: recebimento, separação, conferência e expedição de mercadorias',
          'Suporte ao monitoramento de pedidos e transferências, com atualização de status e rastreabilidade das cargas',
          'Alimentação e atualização de sistemas ERP e planilhas de controle, gerando relatórios operacionais',
        ],
      },
    ],
  },
  {
    id: 'total-express',
    name: 'Total Express',
    location: 'Barueri, SP',
    period: 'nov/2018 – nov/2021',
    roles: [
      {
        title: 'Analista de Atendimento ao Cliente',
        bullets: [
          'Gestão de carteira de clientes, com atendimento ativo e receptivo e manutenção do relacionamento comercial',
          'Intermediação e monitoramento do fluxo de entregas, do remetente ao destinatário final',
          'Acompanhamento de indicadores de SLA, com análises preventivas e corretivas para reduzir atrasos',
          'Contato com embarcadores e parceiros logísticos para tratativa de ocorrências e definição de prioridades',
          'Análise de performance de entregas e relatórios gerenciais para identificar gargalos e oportunidades',
        ],
      },
    ],
  },
  {
    id: 'luft-healthcare',
    name: 'Luft Healthcare',
    location: 'Itapevi, SP',
    period: 'fev/2016 – fev/2018',
    roles: [
      {
        title: 'Auxiliar Administrativo',
        period: 'fev/2017 – fev/2018',
        bullets: [
          'Organização, conferência e controle de documentação de entregas',
          'Arquivamento físico e digital e atualização de registros para rastreabilidade e auditorias',
          'Tratativa e conferência de canhotos de entrega, com registro sistêmico e devolução ao cliente final',
          'Contato com bases operacionais e filiais para alinhar informações logísticas e resolver pendências documentais',
        ],
      },
      {
        title: 'Jovem Aprendiz',
        period: 'fev/2016 – jan/2017',
        bullets: [
          'Manuseio de documentação de entrega, guarda de arquivos, canhotos para devolução ao cliente final e contato com bases e filiais',
        ],
      },
    ],
  },
]
