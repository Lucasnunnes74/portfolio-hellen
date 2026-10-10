import { contacts } from '../data/profile.ts'
import { sections } from '../data/navigation.ts'
import type { ContactItem, ContactKind } from '../data/types.ts'
import { classNames } from '../utils/classNames.ts'
import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import styles from './Contact.module.css'

const contactIcons: Record<ContactKind, IconName> = {
  email: 'mail',
  phone: 'phone',
  linkedin: 'linkedin',
  location: 'map-pin',
}

function ContactCard({ item }: { item: ContactItem }) {
  const content = (
    <>
      <span className={styles.icon}>
        <Icon name={contactIcons[item.kind]} />
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.value}>{item.value}</span>
      </span>
    </>
  )

  if (!item.href) {
    return <div className={styles.card}>{content}</div>
  }

  const externalProps = item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <a className={classNames(styles.card, styles.link)} href={item.href} {...externalProps}>
      {content}
      {item.external && <span className="visually-hidden">(abre em nova aba)</span>}
      <Icon name="arrow-up-right" className={styles.arrow} />
    </a>
  )
}

export default function Contact() {
  return (
    <Section info={sections.contact} tone="band">
      <ul className={styles.grid}>
        {contacts.map((item, index) => (
          <li key={item.kind} className={styles.cell}>
            <Reveal className={styles.reveal} delay={(index % 2) * 90}>
              <ContactCard item={item} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
