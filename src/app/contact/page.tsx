import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us — NEOS Maritime',
  description: 'Get in touch with NEOS Maritime & Shipping Agency S.A. Professional ship agency services across all Turkish ports, shipyards, and the Turkish Straits.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
