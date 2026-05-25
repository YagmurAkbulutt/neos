import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CompanyPageClient from '@/components/CompanyPageClient'
import { companyPages, companyPageSlugs } from '@/lib/companyPages'
import { companySlugs, getCanonicalCompanySlug } from '@/lib/routes'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return companyPageSlugs.map((slug) => ({ slug: companySlugs.tr[slug] }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const canonicalSlug = getCanonicalCompanySlug(slug)
  if (!canonicalSlug) return {}

  const page = companyPages.tr[canonicalSlug]
  return {
    title: `${page.title} — NEOS Maritime`,
    description: page.lead,
  }
}

export default async function TurkishCompanyPage({ params }: Props) {
  const { slug } = await params
  const canonicalSlug = getCanonicalCompanySlug(slug)
  if (!canonicalSlug) notFound()

  return <CompanyPageClient slug={canonicalSlug} />
}
