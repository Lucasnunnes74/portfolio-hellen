import { useLayoutEffect } from 'react'

function readHashId(): string {
  try {
    return decodeURIComponent(window.location.hash.slice(1))
  } catch {
    return '' // âncora malformada na URL: ignora
  }
}

/**
 * O conteúdo só existe depois que o React monta a página, então o navegador não consegue
 * rolar sozinho até uma âncora que já venha na URL (ex.: /#contato). Fazemos isso aqui,
 * antes da primeira pintura, para não haver "pulo" visível.
 */
export function useScrollToHash(): void {
  useLayoutEffect(() => {
    const id = readHashId()
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])
}
