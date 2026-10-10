import styles from './SkipLink.module.css'

/** Primeiro item da ordem de tabulação: leva direto ao conteúdo principal. */
export default function SkipLink() {
  return (
    <a className={styles.skipLink} href="#conteudo">
      Pular para o conteúdo
    </a>
  )
}
