/** Interfaces dos dados do site. Os componentes apenas renderizam o que vem destes tipos. */

export interface Profile {
  name: string
  /** Cargo curto, em destaque no hero. */
  role: string
  /** Cargo completo, como aparece no LinkedIn. */
  headline: string
  /** Áreas de atuação exibidas como etiquetas no hero. */
  focusAreas: string[]
  /** Frase curta de posicionamento. */
  tagline: string
  location: string
  photo: { src: string; alt: string }
  resume: { href: string; fileName: string }
  cta: { contact: string; resume: string }
  /** Botão flutuante de WhatsApp. `href` é o link wa.me já com a mensagem inicial. */
  whatsapp: { href: string; label: string; ariaLabel: string }
  /** Resumo profissional, um parágrafo por item. */
  summary: string[]
}

export type ContactKind = 'email' | 'phone' | 'linkedin' | 'location'

export interface ContactItem {
  kind: ContactKind
  label: string
  /** Texto exibido. */
  value: string
  /** mailto:, tel: ou https. Sem href, o item é apenas informativo. */
  href?: string
  /** Abre em nova aba (links externos). */
  external?: boolean
}

export interface SectionInfo {
  /** Âncora usada no menu e no id da seção. */
  id: string
  /** Texto do item no menu. */
  label: string
  /** Título (h2) da seção. */
  title: string
  intro?: string
}

export type SkillGroupId = 'logistica' | 'indicadores' | 'sistemas' | 'relacionamento'

export interface SkillGroup {
  id: SkillGroupId
  title: string
  skills: string[]
}

export interface Role {
  title: string
  /** Omitido quando a empresa tem um único cargo (vale o período da empresa). */
  period?: string
  bullets: string[]
}

export interface Company {
  id: string
  name: string
  location?: string
  period: string
  duration?: string
  /** Emprego atual. */
  current?: boolean
  /** Do cargo mais recente para o mais antigo. */
  roles: Role[]
}

export interface Education {
  id: string
  degree: string
  institution: string
}
