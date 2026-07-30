export const SITE_URL = 'https://linea.eng.br'

export const SITE_NAME = 'Linea Engenharia e Arquitetura'

/** Título da home: ideal entre 50–60 caracteres */
export const DEFAULT_TITLE = 'Linea Engenharia e Arquitetura em Curitiba | Projetos BIM'

/** Meta description: ideal até ~155 caracteres */
export const DEFAULT_DESCRIPTION =
  'Linea em Curitiba: arquitetura e engenharia em BIM, prevenção de incêndio, projetos complementares e regularização de obras.'

export const DEFAULT_KEYWORDS = [
  'Linea Engenharia',
  'arquitetura Curitiba',
  'engenharia Curitiba',
  'projetos BIM',
  'projetos arquitetônicos',
  'projetos complementares',
  'prevenção de incêndio',
  'regularização de obra',
  'CVCO',
  'hidrossanitário',
  'projeto elétrico',
].join(', ')

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const BRAND_TITLE = SITE_NAME

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export function truncate(text, max = 155) {
  if (!text) return DEFAULT_DESCRIPTION
  const clean = String(text).replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max - 1).trimEnd()}…`
}
