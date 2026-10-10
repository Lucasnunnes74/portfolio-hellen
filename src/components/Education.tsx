import { education } from '../data/education.ts'
import { sections } from '../data/navigation.ts'
import Icon from './Icon.tsx'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import styles from './Education.module.css'

export default function Education() {
  return (
    <Section info={sections.education} tone="alt" layout="split" compact>
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={item.id}>
            <Reveal>
              <article className={styles.card}>
                <span className={styles.icon}>
                  <Icon name="graduation-cap" />
                </span>
                <div>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
