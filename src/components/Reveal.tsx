import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView.ts'
import { classNames } from '../utils/classNames.ts'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Atraso da animação, em milissegundos (útil para escalonar itens vizinhos). */
  delay?: number
}

/** Faz o conteúdo surgir suavemente (fade + slide) quando entra na tela. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={classNames(styles.reveal, className)}
      data-visible={inView}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
