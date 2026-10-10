import { sections } from '../data/navigation.ts'
import { profile } from '../data/profile.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import styles from './About.module.css'

/** Primeiro parágrafo em destaque; o último (perfil) ganha um realce lateral. */
function paragraphClass(index: number, total: number): string {
  if (index === 0) return styles.lead
  if (index === total - 1) return styles.highlight
  return styles.paragraph
}

export default function About() {
  const paragraphs = profile.summary

  return (
    <Section info={sections.about} layout="split">
      <div className={styles.text}>
        {paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 80}>
            <p className={paragraphClass(index, paragraphs.length)}>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
