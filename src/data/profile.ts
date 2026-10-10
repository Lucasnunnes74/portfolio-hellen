import type { ContactItem, Profile } from './types.ts'

export const profile: Profile = {
  name: 'Hellen Almeida',
  role: 'Analista de Logística',
  headline: 'Analista de Logística | Transporte | Supply Chain, ERP e Otimização de Operações',
  focusAreas: ['Transporte', 'Supply Chain', 'ERP', 'Otimização de Operações'],
  tagline: 'Planejo e acompanho fluxos logísticos com foco em prazos, indicadores e resultados.',
  location: 'Itapevi, São Paulo, Brasil',
  // Para trocar a foto, substitua o arquivo public/foto-hellen.jpg (de preferência em retrato, 4:5).
  photo: { src: '/foto-hellen.jpg', alt: 'Foto de perfil de Hellen Almeida' },
  resume: { href: '/curriculo-hellen-almeida.pdf', fileName: 'Curriculo-Hellen-Almeida.pdf' },
  cta: { contact: 'Falar comigo', resume: 'Baixar currículo' },
  summary: [
    'Bacharel em Logística com ampla vivência na área, construída de forma progressiva em empresas de grande porte dos segmentos de varejo e serviços financeiros.',
    'Experiência no planejamento e na gestão de fluxos logísticos, acompanhamento de pedidos e transferências Middle Mile, assegurando rastreabilidade das mercadorias, cumprimento de prazos e atendimento aos níveis de serviço estabelecidos.',
    'Sólida experiência na análise e atualização de indicadores de desempenho, na elaboração de relatórios gerenciais e na utilização de sistemas ERP e ferramentas de gestão, contribuindo para a padronização de processos e o suporte à tomada de decisão.',
    'Perfil analítico, organizado, com foco em resultados e capacidade de integração entre diferentes áreas.',
  ],
}

export const contacts: ContactItem[] = [
  {
    kind: 'email',
    label: 'E-mail',
    value: 'hellencunha45@gmail.com',
    href: 'mailto:hellencunha45@gmail.com',
  },
  {
    kind: 'phone',
    label: 'Telefone',
    value: '(11) 98664-1805',
    href: 'tel:+5511986641805',
  },
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/hellen-almeida-568046137',
    href: 'https://www.linkedin.com/in/hellen-almeida-568046137',
    external: true,
  },
  {
    kind: 'location',
    label: 'Cidade',
    value: 'Itapevi, São Paulo, Brasil',
  },
]
