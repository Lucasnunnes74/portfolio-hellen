/** Junta nomes de classe ignorando valores vazios (false, null, undefined). */
export function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ')
}
