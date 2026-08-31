import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Us — NEOS Maritime',
  description:
    'Get in touch with NEOS Maritime & Shipping Agency S.A. Professional ship agency services across all Turkish ports, shipyards, and the Turkish Straits.',
  path: '/contact',
  image: '/images/pages/home-hero.jpeg',
})

export default function ContactPage() {
  return <ContactPageClient />
}
