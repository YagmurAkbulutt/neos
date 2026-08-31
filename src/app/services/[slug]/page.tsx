import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getService, getRelatedServices, services } from '@/lib/services'
import { createPageMetadata, serviceJsonLd } from '@/lib/seo'
import ServicePageClient from '@/components/ServicePageClient'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return createPageMetadata({
    title: `${service.title} — NEOS Maritime`,
    description: service.overview.slice(0, 155),
    path: `/services/${service.slug}`,
    image: service.heroImage,
  })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const related = getRelatedServices(service.related)
  const structuredData = serviceJsonLd({
    name: service.title,
    description: service.overview,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageClient service={service} related={related} />
    </>
  )
}
