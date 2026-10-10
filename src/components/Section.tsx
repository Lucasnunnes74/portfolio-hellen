import type { ReactNode } from 'react'
import { navItems } from '../data/navigation.ts'
import type { SectionInfo } from '../data/types.ts'
import { classNames } from '../utils/classNames.ts'
import Reveal from './Reveal.tsx'
import styles from './Section.module.css'

interface SectionProps {
  info: SectionInfo
  /** Cor de fundo: padrão, alternada (cinza-azulado) ou faixa com leve tom de azul-petróleo. */
  tone?: 'default' | 'alt' | 'tint'
  /** "split" coloca o título ao lado do conteúdo em telas largas. */
  layout?: 'stacked' | 'split'
  /** Reduz o espaço vertical, para seções com pouco conteúdo. */
  compact?: boolean
  children: ReactNode
}

/** Estrutura comum das seções: faixa de fundo, cabeçalho (número, título e introdução) e conteúdo. */
export default function Section({
  info,
  tone = 'default',
  layout = 'stacked',
  compact = false,
  children,
}: SectionProps) {
  const position = navItems.findIndex((item) => item.id === info.id) + 1
  const titleId = `${info.id}-titulo`

  return (
    <section
      id={info.id}
      aria-labelledby={titleId}
      className={classNames(styles.section, styles[tone], compact && styles.compact)}
    >
      <div className={classNames('container', styles.inner, layout === 'split' && styles.split)}>
        <Reveal className={styles.header}>
          {position > 0 && (
            <p className={styles.eyebrow} aria-hidden="true">
              {String(position).padStart(2, '0')}
            </p>
          )}
          <h2 id={titleId} className={styles.title}>
            {info.title}
          </h2>
          {info.intro && <p className={styles.intro}>{info.intro}</p>}
        </Reveal>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
}
