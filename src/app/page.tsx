'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import WhyNeosSection from '@/components/WhyNeosSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PortsSection from '@/components/PortsSection'
import Footer from '@/components/Footer'
import { contactPath } from '@/lib/routes'

function TankerDivider() {
  const { lang, tr } = useLanguage()
  const q = tr.tankerQuote
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <Image src="/images/pages/home-hero.jpeg" alt="Container ship at sea" fill className="object-cover object-center" quality={80} />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand/30" />
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="text-center text-white max-w-3xl flex flex-col items-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">{q.overline}</p>
          <p className="text-xl md:text-3xl font-bold tracking-tight leading-snug whitespace-pre-line mb-6">{q.text}</p>
          <Link 
            href={contactPath(lang)} 
            className="group inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-brand/10 hover:shadow-brand/20"
          >
            <span>{tr.nav.contact}</span>
            <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <TestimonialsSection />
        <WhyNeosSection />
        <PortsSection />
        <TankerDivider />
      </main>
      <Footer />
    </>
  )
}
