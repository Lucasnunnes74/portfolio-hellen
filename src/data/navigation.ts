import type { SectionInfo } from './types.ts'

/** Âncora do topo da página (hero). Não aparece no menu. */
export const heroId = 'inicio'

export const sections = {
  about: {
    id: 'sobre',
    label: 'Sobre',
    title: 'Sobre mim',
  },
  skills: {
    id: 'competencias',
    label: 'Competências',
    title: 'Competências',
    intro: 'Principais competências, organizadas por área de atuação.',
  },
  experience: {
    id: 'experiencia',
    label: 'Experiência',
    title: 'Experiência profissional',
    intro: 'Trajetória construída de forma progressiva em empresas de grande porte, da mais recente para a mais antiga.',
  },
  education: {
    id: 'formacao',
    label: 'Formação',
    title: 'Formação acadêmica',
  },
  contact: {
    id: 'contato',
    label: 'Contato',
    title: 'Vamos conversar?',
    intro: 'Fale comigo por e-mail, telefone ou LinkedIn.',
  },
} satisfies Record<string, SectionInfo>

/** Itens do menu, na ordem em que as seções aparecem na página. */
export const navItems: SectionInfo[] = [
  sections.about,
  sections.skills,
  sections.experience,
  sections.education,
  sections.contact,
]

/** Ids observados para destacar no menu a seção que está na tela. */
export const trackedSectionIds: string[] = [heroId, ...navItems.map((item) => item.id)]
