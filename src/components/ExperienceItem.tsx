import type { Company, Role } from '../data/types.ts'
import Icon from './Icon.tsx'
import Reveal from './Reveal.tsx'
import styles from './ExperienceItem.module.css'

/** Progressão de carreira na mesma empresa, em ordem cronológica: do primeiro cargo ao mais recente. */
function CareerPath({ roles }: { roles: Role[] }) {
  const steps = [...roles].reverse()

  return (
    <div className={styles.path}>
      <p className={styles.pathLabel}>
        <Icon name="trending-up" className={styles.pathIcon} />
        Progressão de carreira
      </p>
      <ol className={styles.pathSteps}>
        {steps.map((role, index) => (
          <li key={role.title} className={styles.pathItem}>
            {index > 0 && <Icon name="arrow-right" className={styles.pathArrow} />}
            <span className={styles.pathStep}>{role.title}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function ExperienceItem({ company }: { company: Company }) {
  const hasProgression = company.roles.length > 1
  const [firstRole] = company.roles

  return (
    <Reveal className={styles.reveal}>
      <span className={styles.marker} data-current={company.current ? 'true' : undefined} aria-hidden="true" />

      <article className={styles.card}>
        <header className={styles.header}>
          <div>
            <h3 className={styles.company}>{company.name}</h3>
            {!hasProgression && <h4 className={styles.singleRole}>{firstRole.title}</h4>}
          </div>

          <div className={styles.meta}>
            <p className={styles.periodRow}>
              <span className={styles.period}>{company.period}</span>
              {company.duration && <span className={styles.duration}>({company.duration})</span>}
              {company.current && <span className={styles.badge}>Atual</span>}
            </p>
            {company.location && (
              <p className={styles.location}>
                <Icon name="map-pin" className={styles.locationIcon} />
                {company.location}
              </p>
            )}
          </div>
        </header>

        {hasProgression ? (
          <>
            <CareerPath roles={company.roles} />
            <div className={styles.roles}>
              {company.roles.map((role) => (
                <div key={role.title} className={styles.roleBlock}>
                  <div className={styles.roleHeader}>
                    <h4 className={styles.roleTitle}>{role.title}</h4>
                    {role.period && <p className={styles.rolePeriod}>{role.period}</p>}
                  </div>
                  <Bullets items={role.bullets} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <Bullets items={firstRole.bullets} />
        )}
      </article>
    </Reveal>
  )
}
