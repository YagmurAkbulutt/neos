import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getService, getRelatedServices, services } from '@/lib/services'
import ServicePageClient from '@/components/ServicePageClient'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.title} — NEOS Maritime`,
    description: service.overview.slice(0, 155),
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const related = getRelatedServices(service.related)
  return <ServicePageClient service={service} related={related} />
}
