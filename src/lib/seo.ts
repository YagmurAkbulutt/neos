import type { Metadata } from 'next'

const fallbackSiteUrl = 'https://neosmaritime.com'

export const siteConfig = {
  name: 'NEOS Maritime & Shipping Agency S.A.',
  shortName: 'NEOS Maritime',
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, ''),
  title: 'NEOS Maritime — Ship Agency in Turkey',
  description:
    'Professional ship agency services across Turkish ports, shipyards, and the Turkish Straits. Available 24/7.',
  keywords: [
    'ship agency Turkey',
    'gemi acentesi',
    'maritime agency Istanbul',
    'Turkish ports',
    'Turkish Straits agency',
    'shipyard agency Turkey',
    'husbandry agency',
  ],
  email: 'agency@neosmaritime.com',
  phone: '+90 216 356 06 64',
  address: 'Caddebostan Mah. Omerpasa Sok. No 4 Daire 7, Kadikoy / Istanbul, Turkey',
  logoPath: '/images/brand/logo.png',
  defaultImagePath: '/images/pages/home-hero.jpeg',
  linkedIn: 'https://www.linkedin.com/company/neos-maritime/',
} as const

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultImagePath,
  type = 'website',
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.shortName,
      images: [
        {
          url: absoluteUrl(image),
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logoPath),
    image: absoluteUrl(siteConfig.defaultImagePath),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Caddebostan Mah. Omerpasa Sok. No 4 Daire 7',
      addressLocality: 'Kadikoy',
      addressRegion: 'Istanbul',
      addressCountry: 'TR',
    },
    sameAs: [siteConfig.linkedIn],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.shortName,
    url: siteConfig.url,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.logoPath),
      },
    },
  }
}

export function serviceJsonLd({
  name,
  description,
  path,
  image,
}: {
  name: string
  description: string
  path: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    serviceType: 'Ship agency service',
  }
}
