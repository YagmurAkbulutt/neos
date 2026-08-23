import type { Lang } from '@/i18n/translations'

export type ServiceSlug =
  | 'port-agency'
  | 'straits-agency'
  | 'shipyard-agency'
  | 'husbandry-agency'
  | 'protecting-agency'
  | 'lsd-work-materials-supply'

export type CompanySlug = 'about-us' | 'vision' | 'mission' | 'values'

const routeSegments = {
  services: 'services',
  company: 'who-we-are',
  contact: 'contact',
} as const

export const serviceSlugs: Record<Lang, Record<ServiceSlug, string>> = {
  en: {
    'port-agency': 'port-agency',
    'straits-agency': 'straits-agency',
    'shipyard-agency': 'shipyard-agency',
    'husbandry-agency': 'husbandry-agency',
    'protecting-agency': 'protecting-agency',
    'lsd-work-materials-supply': 'lsd-work-materials-supply',
  },
  tr: {
    'port-agency': 'port-agency',
    'straits-agency': 'straits-agency',
    'shipyard-agency': 'shipyard-agency',
    'husbandry-agency': 'husbandry-agency',
    'protecting-agency': 'protecting-agency',
    'lsd-work-materials-supply': 'lsd-work-materials-supply',
  },
}

export const legacyTurkishServiceSlugs: Record<string, ServiceSlug> = {
  'liman-acenteligi': 'port-agency',
  'bogaz-acenteligi': 'straits-agency',
  'tersane-acenteligi': 'shipyard-agency',
  'husbandry-acenteligi': 'husbandry-agency',
  'koruyucu-acentelik': 'protecting-agency',
  'lsd-isleri-ve-malzeme-tedarigi': 'lsd-work-materials-supply',
}

export const companySlugs: Record<Lang, Record<CompanySlug, string>> = {
  en: {
    'about-us': 'about-us',
    vision: 'vision',
    mission: 'mission',
    values: 'values',
  },
  tr: {
    'about-us': 'about-us',
    vision: 'vision',
    mission: 'mission',
    values: 'values',
  },
}

export const legacyTurkishCompanySlugs: Record<string, CompanySlug> = {
  hakkimizda: 'about-us',
  vizyon: 'vision',
  misyon: 'mission',
  degerlerimiz: 'values',
}

function invert<T extends string>(record: Record<T, string>) {
  return Object.fromEntries(
    Object.entries(record).map(([canonical, localized]) => [localized, canonical]),
  ) as Record<string, T>
}

const serviceCanonicalBySlug = {
  ...invert(serviceSlugs.en),
  ...legacyTurkishServiceSlugs,
}

const companyCanonicalBySlug = {
  ...invert(companySlugs.en),
  ...legacyTurkishCompanySlugs,
}

export function getCanonicalServiceSlug(slug: string): ServiceSlug | null {
  return serviceCanonicalBySlug[slug] ?? null
}

export function getCanonicalCompanySlug(slug: string): CompanySlug | null {
  return companyCanonicalBySlug[slug] ?? null
}

export function servicePath(slug: string, lang: Lang) {
  const canonical = getCanonicalServiceSlug(slug)
  if (!canonical) return `/${routeSegments.services}/${slug}`
  return `/${routeSegments.services}/${serviceSlugs[lang][canonical]}`
}

export function companyPath(slug: string, lang: Lang) {
  const canonical = getCanonicalCompanySlug(slug)
  if (!canonical) return `/${routeSegments.company}/${slug}`
  return `/${routeSegments.company}/${companySlugs[lang][canonical]}`
}

export function contactPath(lang: Lang) {
  void lang
  return `/${routeSegments.contact}`
}

export function getLanguageFromPath(pathname: string): Lang | null {
  void pathname
  return null
}

export function localizePath(pathname: string, lang: Lang) {
  const suffixStart = pathname.search(/[?#]/)
  const pathOnly = suffixStart >= 0 ? pathname.slice(0, suffixStart) : pathname
  const suffix = suffixStart >= 0 ? pathname.slice(suffixStart) : ''
  const segments = pathOnly.split('/').filter(Boolean)

  if (segments.length === 0) return `/${suffix}`

  const [section, slug] = segments

  if (section === routeSegments.services) {
    return slug ? `${servicePath(slug, lang)}${suffix}` : `/${routeSegments.services}${suffix}`
  }

  if (section === routeSegments.company) {
    return slug ? `${companyPath(slug, lang)}${suffix}` : `/${routeSegments.company}${suffix}`
  }

  if (section === routeSegments.contact) {
    return `${contactPath(lang)}${suffix}`
  }

  return pathname
}
