'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useLanguage } from '@/context/language'

function AnchorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  )
}
function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}
function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}

const icons: ReactNode[] = [
  <AnchorIcon key="a" />, <WrenchIcon key="w" />, <UsersIcon key="u" />,
  <FileIcon key="f" />, <CoinIcon key="c" />, <DropletIcon key="d" />,
]

export default function ServicesSection() {
  const { tr } = useLanguage()
  const s = tr.services

  return (
    <>
      {/* Image divider */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image src="/gggg.jpeg" alt="Container port at dusk with cranes" fill className="object-cover object-center" quality={80} />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm font-semibold tracking-widest uppercase text-brand mb-2">{s.bannerOverline}</p>
            <p className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl mx-auto px-5">{s.bannerText}</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section id="services" className="section-pad bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{s.overline}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">{s.title}</h2>
            <p className="text-slate-500 text-lg leading-relaxed">{s.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.items.map((item, i) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-2xl hover:shadow-gray-200/70 hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="w-12 h-12 bg-brand/8 group-hover:bg-brand/15 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <span className="text-brand">{icons[i]}</span>
                </div>
                <h3 className="text-[17px] font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  {s.learnMore} <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
