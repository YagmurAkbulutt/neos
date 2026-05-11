'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/language'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import WhyNeosSection from '@/components/WhyNeosSection'
import PortsSection from '@/components/PortsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

function TankerDivider() {
  const { tr } = useLanguage()
  const q = tr.tankerQuote
  return (
    <div className="relative h-56 md:h-72 overflow-hidden">
      <Image src="/gg.jpeg" alt="Container ship at sea" fill className="object-cover object-center" quality={80} />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand/30" />
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="text-center text-white max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">{q.overline}</p>
          <p className="text-2xl md:text-4xl font-bold tracking-tight leading-snug whitespace-pre-line">{q.text}</p>
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
        <WhyNeosSection />
        <PortsSection />
        <TankerDivider />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
