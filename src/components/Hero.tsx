import { useState } from 'react'
import { experience } from '../data/experience.ts'
import { heroId, sections } from '../data/navigation.ts'
import { profile } from '../data/profile.ts'
import { classNames } from '../utils/classNames.ts'
import { getInitials } from '../utils/getInitials.ts'
import ButtonLink from './ButtonLink.tsx'
import Icon from './Icon.tsx'
import styles from './Hero.module.css'

const currentJob = experience.find((company) => company.current)

export default function Hero() {
  // Se o arquivo da foto não existir (ou falhar ao carregar), mostramos um monograma no lugar.
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id={heroId} className={styles.hero} aria-labelledby="hero-titulo">
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={classNames('container', styles.inner)}>
        <div className={styles.content}>
          <h1 id="hero-titulo" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.role}>{profile.role}</p>

          <ul className={styles.focus} aria-label="Áreas de atuação">
            {profile.focusAreas.map((area) => (
              <li key={area} className={styles.focusItem}>
                {area}
              </li>
            ))}
          </ul>

          <p className={styles.tagline}>{profile.tagline}</p>

          <p className={styles.location}>
            <Icon name="map-pin" className={styles.locationIcon} />
            <span>{profile.location}</span>
          </p>

          <div className={styles.actions}>
            <ButtonLink variant="primary" icon="arrow-right" href={`#${sections.contact.id}`}>
              {profile.cta.contact}
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              icon="download"
              href={profile.resume.href}
              download={profile.resume.fileName}
            >
              {profile.cta.resume}
            </ButtonLink>
          </div>
        </div>

        <div className={styles.portrait}>
          <div className={styles.frame}>
            {photoFailed ? (
              <div className={styles.placeholder} aria-hidden="true">
                {getInitials(profile.name)}
              </div>
            ) : (
              <img
                className={styles.photo}
                src={profile.photo.src}
                alt={profile.photo.alt}
                width={544}
                height={680}
                fetchPriority="high"
                decoding="async"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>

          {currentJob && (
            <p className={styles.badge}>
              <span className={styles.badgeLabel}>Atualmente</span>
              <span className={styles.badgeRole}>{currentJob.roles[0].title}</span>
              <span className={styles.badgeCompany}>{currentJob.name}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
