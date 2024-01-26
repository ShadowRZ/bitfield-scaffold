export default function concatURLParts(base: string, route: string) {
  const newBase = base.endsWith('/') ? base.slice(0, -1) : base
  return `${newBase}${route}`
}
