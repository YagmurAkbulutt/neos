'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function ContactPageClient() {
  const { lang, tr } = useLanguage()
  const c = tr.contact
  const homeLabel = lang === 'tr' ? 'Ana Sayfa' : 'Home'

  return (
    <>
      <Navbar heroGlass />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
          <Image
            src="/images/pages/contact-hero.jpeg"
            alt={tr.nav.contact}
            fill
            priority
            className="object-cover object-center animate-fade-in"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/25" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 pt-32">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/45 text-sm mb-5">
              <Link href="/" className="hover:text-white transition-colors">{homeLabel}</Link>
              <span>/</span>
              <span className="text-white">{tr.nav.contact}</span>
            </nav>

            <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-up">
              {c.overline}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.08] animate-fade-up">
              {tr.nav.contact}
            </h1>
          </div>
        </section>

        <div className="h-1 bg-brand animate-fade-in" />

        {/* Contact Form and Details */}
        <ContactSection isPage={true} />
      </main>

      <Footer />
    </>
  )
}
