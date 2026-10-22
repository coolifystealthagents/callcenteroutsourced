export const researchPagePath = (page: number) => page === 1 ? '/research' : `/research/page/${page}`

export function researchPageCount(itemCount: number, pageSize: number) {
  return Math.max(1, Math.ceil(itemCount / pageSize))
}

export function validResearchArchivePage(value: string, pageCount: number) {
  if (!/^[1-9]\d*$/.test(value)) return null
  const page = Number(value)
  return Number.isSafeInteger(page) && page >= 2 && page <= pageCount ? page : null
}