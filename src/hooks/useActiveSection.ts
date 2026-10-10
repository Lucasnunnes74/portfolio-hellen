import { useEffect, useState } from 'react'

/**
 * Descobre qual seção está em foco durante a rolagem (a última cuja borda superior
 * já passou de um terço da altura da janela). No fim da página, vale a última seção.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const referenceLine = window.innerHeight / 3
      let current: string | null = null
      for (const id of ids) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= referenceLine) current = id
      }
      const reachedBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (reachedBottom && ids.length > 0) current = ids[ids.length - 1]
      setActiveId(current)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ids])

  return activeId
}
