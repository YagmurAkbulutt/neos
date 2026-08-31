import type { MetadataRoute } from 'next'
import { companyPageSlugs } from '@/lib/companyPages'
import { services } from '@/lib/services'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/contact'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => {
    const images = Array.from(
      new Set([service.heroImage, ...service.images.map((image) => image.src)].map((image) => absoluteUrl(image))),
    )

    return {
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      images,
    }
  })

  const companyRoutes: MetadataRoute.Sitemap = companyPageSlugs.map((slug) => ({
    url: absoluteUrl(`/who-we-are/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [absoluteUrl('/images/pages/company-hero.jpeg')],
  }))

  return [...staticRoutes, ...serviceRoutes, ...companyRoutes]
}
