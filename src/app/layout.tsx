import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/context/language'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NEOS Maritime — Ship Agency in Turkey',
  description:
    'Professional ship agency services across Turkish ports, shipyards, and the Turkish Straits. Available 24/7. Established 2018 with 23 years of industry experience.',
  keywords:
    'ship agency Turkey, gemi acentesi, maritime agency Istanbul, Turkish ports, husbandry services',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
