/** Iniciais de um nome: "Hellen Almeida" vira "HA". */
export function getInitials(name: string, max = 2): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}
