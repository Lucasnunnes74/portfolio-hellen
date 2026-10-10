import { useEffect, useRef, useState } from 'react'
import { heroId, navItems, trackedSectionIds } from '../data/navigation.ts'
import { profile } from '../data/profile.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import { useScrolled } from '../hooks/useScrolled.ts'
import { classNames } from '../utils/classNames.ts'
import { getInitials } from '../utils/getInitials.ts'
import Icon from './Icon.tsx'
import styles from './Header.module.css'

// Mesmo ponto de quebra usado em Header.module.css: a partir dele o menu aparece em linha.
const DESKTOP_NAV_QUERY = '(min-width: 48rem)'
const MENU_ID = 'menu-principal'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(trackedSectionIds)
  const scrolled = useScrolled()
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setMenuOpen(false)

  // Com o menu aberto: Esc fecha (devolvendo o foco ao botão) e clicar fora também fecha.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  // Ao ampliar a janela até o layout de desktop, o menu volta a ficar fechado no mobile.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_NAV_QUERY)
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      ref={headerRef}
      className={styles.header}
      data-scrolled={scrolled}
      data-menu-open={menuOpen}
    >
      <div className={classNames('container', styles.bar)}>
        <a className={styles.brand} href={`#${heroId}`} onClick={closeMenu}>
          <span className={styles.monogram} aria-hidden="true">
            {getInitials(profile.name)}
          </span>
          <span className={styles.brandName}>{profile.name}</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} className={styles.toggleIcon} />
        </button>

        <nav id={MENU_ID} className={styles.nav} aria-label="Principal">
          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={styles.link}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
