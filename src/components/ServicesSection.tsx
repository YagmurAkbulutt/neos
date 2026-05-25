'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { useLanguage } from '@/context/language'
import { services } from '@/lib/services'
import { servicePath } from '@/lib/routes'
import ScrollReveal from '@/components/ScrollReveal'

function AnchorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  )
}

function StraitsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function ShipyardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function HusbandryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  )
}

function ProtectingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function LsdIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <polygon points="12 22.08 12 12 3 6.92 3 17 12 22.08" />
      <polygon points="12 22.08 21 17 21 6.92 12 12 12 22.08" />
      <polygon points="12 12 21 6.92 12 1.84 3 6.92 12 12" />
    </svg>
  )
}

function getServiceIcon(slug: string): ReactNode {
  switch (slug) {
    case 'port-agency':
      return <AnchorIcon />
    case 'straits-agency':
      return <StraitsIcon />
    case 'shipyard-agency':
      return <ShipyardIcon />
    case 'husbandry-agency':
      return <HusbandryIcon />
    case 'protecting-agency':
      return <ProtectingIcon />
    case 'lsd-work-materials-supply':
      return <LsdIcon />
    default:
      return <AnchorIcon />
  }
}

export default function ServicesSection() {
  const { lang, tr } = useLanguage()
  const s = tr.services

  return (
    <section id="services" className="relative section-pad overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-t border-b border-slate-100">
      {/* Premium Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-navy-light/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <ScrollReveal from="bottom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
              <span className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase">{s.overline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5 leading-none">
              {s.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
              {s.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {s.items.map((item, i) => {
            const serviceData = services.find((srv) => srv.slug === item.slug)
            const bgImage = serviceData?.heroImage || '/hizmetler/liman-acenteligi-01.jpg'

            return (
              <ScrollReveal key={item.slug} from="bottom" delay={(i % 3) * 100} duration={600} className="h-full">
                <Link
                  href={servicePath(item.slug, lang)}
                  className="group relative min-h-[270px] rounded-3xl overflow-hidden border border-slate-100 hover:border-brand/40 shadow-sm hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 flex flex-col justify-between p-7 sm:p-8 h-full"
                >
                  {/* Background Image Wrapper */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={bgImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority={i < 3}
                    />
                    {/* Multi-layered Premium Overlay */}
                    <div className="absolute inset-0 bg-navy-deep/30 transition-opacity duration-500 group-hover:bg-navy-deep/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/10 transition-all duration-500 group-hover:via-navy-deep/80 group-hover:from-navy-deep/90" />
                  </div>

                  {/* Floating Glassmorphic Icon Badge */}
                  <div className="relative z-10 self-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 group-hover:bg-brand group-hover:border-brand shadow-lg shadow-black/10">
                      {getServiceIcon(item.slug)}
                    </div>
                  </div>

                  {/* Text Contents at Bottom */}
                  <div className="relative z-10 w-full mt-6">
                    <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-brand-light transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-brand-light text-sm font-semibold group-hover:text-brand transition-all duration-300 font-display">
                      <span>{s.learnMore}</span>
                      <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
