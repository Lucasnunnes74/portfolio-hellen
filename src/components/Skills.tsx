import { sections } from '../data/navigation.ts'
import { skillGroups } from '../data/skills.ts'
import type { SkillGroupId } from '../data/types.ts'
import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import styles from './Skills.module.css'

const groupIcons: Record<SkillGroupId, IconName> = {
  logistica: 'truck',
  indicadores: 'chart',
  sistemas: 'monitor',
  relacionamento: 'users',
}

export default function Skills() {
  return (
    <Section info={sections.skills} tone="alt">
      <ul className={styles.grid}>
        {skillGroups.map((group, index) => (
          <li key={group.id} className={styles.cell}>
            <Reveal className={styles.reveal} delay={(index % 2) * 90}>
              <article className={styles.card}>
                <header className={styles.cardHeader}>
                  <span className={styles.icon}>
                    <Icon name={groupIcons[group.id]} />
                  </span>
                  <h3 className={styles.cardTitle}>{group.title}</h3>
                </header>
                <ul className={styles.chips}>
                  {group.skills.map((skill) => (
                    <li key={skill} className={styles.chip}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
