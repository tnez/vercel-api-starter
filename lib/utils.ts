/**
 * Given the query term from a NowRequest which can be either a string, array of
 * strings, or undefined, return the first string, or undefined.
 */
export function flattenQueryTerm(
  term: string | string[] | undefined,
): string | undefined {
  if (!term) return undefined
  if (typeof term === 'string') return term
  return term[0]
}
