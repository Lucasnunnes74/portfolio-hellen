import { experience } from '../data/experience.ts'
import { sections } from '../data/navigation.ts'
import ExperienceItem from './ExperienceItem.tsx'
import Section from './Section.tsx'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <Section info={sections.experience} layout="split">
      <ol className={styles.timeline}>
        {experience.map((company) => (
          <li key={company.id} className={styles.item}>
            <ExperienceItem company={company} />
          </li>
        ))}
      </ol>
    </Section>
  )
}
