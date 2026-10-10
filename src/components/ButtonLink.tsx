import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../utils/classNames.ts'
import Icon, { type IconName } from './Icon.tsx'
import styles from './ButtonLink.module.css'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  icon?: IconName
  children: ReactNode
}

/** Link com aparência de botão. Usa <a> porque a ação é navegar ou baixar um arquivo. */
export default function ButtonLink({
  variant = 'primary',
  icon,
  className,
  children,
  ...anchorProps
}: ButtonLinkProps) {
  return (
    <a className={classNames(styles.button, styles[variant], className)} {...anchorProps}>
      {icon && <Icon name={icon} className={styles.icon} />}
      <span>{children}</span>
    </a>
  )
}
