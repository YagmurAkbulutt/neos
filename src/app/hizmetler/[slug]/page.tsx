import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import servicesTR from '@/i18n/servicesTR'
import { getRelatedServices, getService, services } from '@/lib/services'
import { getCanonicalServiceSlug, serviceSlugs, type ServiceSlug } from '@/lib/routes'
import ServicePageClient from '@/components/ServicePageClient'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: serviceSlugs.tr[s.slug as ServiceSlug] }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const canonicalSlug = getCanonicalServiceSlug(slug)
  if (!canonicalSlug) return {}

  const service = getService(canonicalSlug)
  if (!service) return {}

  const trService = servicesTR[service.slug]
  return {
    title: `${trService?.title ?? service.title} — NEOS Maritime`,
    description: (trService?.overview ?? service.overview).slice(0, 155),
  }
}

export default async function TurkishServicePage({ params }: Props) {
  const { slug } = await params
  const canonicalSlug = getCanonicalServiceSlug(slug)
  if (!canonicalSlug) notFound()

  const service = getService(canonicalSlug)
  if (!service) notFound()

  const related = getRelatedServices(service.related)
  return <ServicePageClient service={service} related={related} />
}
