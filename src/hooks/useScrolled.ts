import { useEffect, useState } from 'react'

/** Verdadeiro quando a página já foi rolada além de `offset` pixels. */
export function useScrolled(offset = 8): boolean {
  const [scrolled, setScrolled] = useState(() => window.scrollY > offset)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}
