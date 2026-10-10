import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** Fração do elemento que precisa aparecer para disparar (0 a 1). */
  threshold?: number
  rootMargin?: string
}

/**
 * Informa se o elemento já entrou na tela. Dispara uma única vez e para de observar.
 * Sem suporte a IntersectionObserver, considera o elemento visível desde o início.
 */
export function useInView<T extends Element>({
  threshold = 0.1,
  rootMargin = '0px 0px -8% 0px',
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (inView || !element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [inView, threshold, rootMargin])

  return { ref, inView }
}
