import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CompanyPageClient from '@/components/CompanyPageClient'
import { companyPages, companyPageSlugs, type CompanyPageSlug } from '@/lib/companyPages'
import { createPageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return companyPageSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!companyPageSlugs.includes(slug as CompanyPageSlug)) return {}

  const page = companyPages.en[slug as CompanyPageSlug]
  return createPageMetadata({
    title: `${page.title} — NEOS Maritime`,
    description: page.lead,
    path: `/who-we-are/${page.slug}`,
    image: '/images/pages/company-hero.jpeg',
  })
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params
  if (!companyPageSlugs.includes(slug as CompanyPageSlug)) notFound()

  return <CompanyPageClient slug={slug as CompanyPageSlug} />
}
