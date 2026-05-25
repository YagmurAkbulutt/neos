import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Iletisim — NEOS Maritime',
  description:
    'NEOS Maritime & Shipping Agency S.A. ile iletisime gecin. Turkiye limanlari, tersaneleri ve Turk Bogazlari genelinde profesyonel gemi acenteligi hizmetleri.',
}

export default function TurkishContactPage() {
  return <ContactPageClient />
}
