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
  services: { en: 'services', tr: 'hizmetler' },
  company: { en: 'who-we-are', tr: 'biz-kimiz' },
  contact: { en: 'contact', tr: 'iletisim' },
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
    'port-agency': 'liman-acenteligi',
    'straits-agency': 'bogaz-acenteligi',
    'shipyard-agency': 'tersane-acenteligi',
    'husbandry-agency': 'husbandry-acenteligi',
    'protecting-agency': 'koruyucu-acentelik',
    'lsd-work-materials-supply': 'lsd-isleri-ve-malzeme-tedarigi',
  },
}

export const companySlugs: Record<Lang, Record<CompanySlug, string>> = {
  en: {
    'about-us': 'about-us',
    vision: 'vision',
    mission: 'mission',
    values: 'values',
  },
  tr: {
    'about-us': 'hakkimizda',
    vision: 'vizyon',
    mission: 'misyon',
    values: 'degerlerimiz',
  },
}

function invert<T extends string>(record: Record<T, string>) {
  return Object.fromEntries(
    Object.entries(record).map(([canonical, localized]) => [localized, canonical]),
  ) as Record<string, T>
}

const serviceCanonicalBySlug = {
  ...invert(serviceSlugs.en),
  ...invert(serviceSlugs.tr),
}

const companyCanonicalBySlug = {
  ...invert(companySlugs.en),
  ...invert(companySlugs.tr),
}

export function getCanonicalServiceSlug(slug: string): ServiceSlug | null {
  return serviceCanonicalBySlug[slug] ?? null
}

export function getCanonicalCompanySlug(slug: string): CompanySlug | null {
  return companyCanonicalBySlug[slug] ?? null
}

export function servicePath(slug: string, lang: Lang) {
  const canonical = getCanonicalServiceSlug(slug)
  if (!canonical) return `/${routeSegments.services[lang]}/${slug}`
  return `/${routeSegments.services[lang]}/${serviceSlugs[lang][canonical]}`
}

export function companyPath(slug: string, lang: Lang) {
  const canonical = getCanonicalCompanySlug(slug)
  if (!canonical) return `/${routeSegments.company[lang]}/${slug}`
  return `/${routeSegments.company[lang]}/${companySlugs[lang][canonical]}`
}

export function contactPath(lang: Lang) {
  return `/${routeSegments.contact[lang]}`
}

export function getLanguageFromPath(pathname: string): Lang | null {
  const [segment] = pathname.split('/').filter(Boolean)
  if (!segment) return null

  if (
    segment === routeSegments.services.tr ||
    segment === routeSegments.company.tr ||
    segment === routeSegments.contact.tr
  ) {
    return 'tr'
  }

  if (
    segment === routeSegments.services.en ||
    segment === routeSegments.company.en ||
    segment === routeSegments.contact.en
  ) {
    return 'en'
  }

  return null
}

export function localizePath(pathname: string, lang: Lang) {
  const suffixStart = pathname.search(/[?#]/)
  const pathOnly = suffixStart >= 0 ? pathname.slice(0, suffixStart) : pathname
  const suffix = suffixStart >= 0 ? pathname.slice(suffixStart) : ''
  const segments = pathOnly.split('/').filter(Boolean)

  if (segments.length === 0) return `/${suffix}`

  const [section, slug] = segments

  if (section === routeSegments.services.en || section === routeSegments.services.tr) {
    return slug ? `${servicePath(slug, lang)}${suffix}` : `/${routeSegments.services[lang]}${suffix}`
  }

  if (section === routeSegments.company.en || section === routeSegments.company.tr) {
    return slug ? `${companyPath(slug, lang)}${suffix}` : `/${routeSegments.company[lang]}${suffix}`
  }

  if (section === routeSegments.contact.en || section === routeSegments.contact.tr) {
    return `${contactPath(lang)}${suffix}`
  }

  return pathname
}
