import { profile } from '../data/profile.ts'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          © {currentYear} {profile.name}
        </p>
      </div>
    </footer>
  )
}
