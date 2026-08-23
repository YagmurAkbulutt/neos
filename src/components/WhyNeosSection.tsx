'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'
import { companyPath, contactPath, type CompanySlug } from '@/lib/routes'
import ScrollReveal from '@/components/ScrollReveal'

const pillarIcons = [
  // About Us — anchor/ship wheel
  <svg key="about" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>,
  // Vision — eye / horizon
  <svg key="vision" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  // Mission — target / compass
  <svg key="mission" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>,
  // Values — diamond / gem
  <svg key="values" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>,
]

export default function WhyNeosSection() {
  const { lang, tr } = useLanguage()
  const w = tr.whyNeos
  const pageSlugs: CompanySlug[] = ['about-us', 'vision', 'mission', 'values']

  return (
    <section id="about" className="relative scroll-mt-20 pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white border-t border-b border-slate-100">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-navy-light/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* ── HEADER ROW ── */}
        <ScrollReveal from="bottom">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-6 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
                <span className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase">{w.overline}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1] max-w-xl">
                {w.title}
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center lg:pt-6">
              <p className="text-slate-600 text-lg leading-relaxed mb-4 font-semibold">
                {w.subtitle}
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                {w.homeIntro}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── CONTENT ROW ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Premium Visual Collage & Stats */}
          <ScrollReveal from="left" className="lg:col-span-5 relative flex flex-col justify-center min-h-[350px] lg:min-h-[450px]">
            {/* Decorative Borders */}
            <div className="absolute -inset-4 rounded-3xl border border-slate-100 pointer-events-none -z-10" />
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-brand/20 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-brand/20 pointer-events-none" />
            
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] bg-slate-100 group w-full h-full">
              <Image 
                src="/images/pages/about-overview.jpeg" 
                alt="Vessel at port" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                quality={90} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphic Stats Widget */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 left-2 sm:left-auto bg-white/90 border border-white/20 backdrop-blur-md rounded-2xl p-5 shadow-xl shadow-navy/10 flex items-center gap-8 max-w-sm">
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">{w.stat1.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-navy tracking-tight">{w.stat1.value}</span>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">{w.stat2.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-brand tracking-tight">{w.stat2.value}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Modern 4-pillar list with descriptions */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 mt-12 lg:mt-0">
            <div className="grid sm:grid-cols-2 gap-5">
              {w.pillars.map((p, index) => (
                <ScrollReveal key={p.num} from="right" delay={index * 100} duration={600}>
                  <Link
                    href={companyPath(pageSlugs[index], lang)}
                    className="group flex flex-col justify-between bg-white hover:bg-slate-50 rounded-2xl p-6 transition-all duration-300 border border-slate-100 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 h-full"
                  >
                    <div>
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-brand/10 group-hover:bg-brand text-brand group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                          {pillarIcons[index]}
                        </div>
                        <span className="text-xs font-bold text-slate-300 group-hover:text-brand/40 tracking-widest transition-colors">
                          {p.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-navy mb-2 font-display tracking-tight transition-colors group-hover:text-brand">
                        {p.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                        {p.desc}
                      </p>
                    </div>

                    {/* Discover More Link */}
                    <span className="text-xs font-bold text-brand group-hover:text-brand-dark flex items-center gap-1 mt-auto pt-3 border-t border-slate-100/50">
                      {w.discoverMore} 
                      <svg className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <ScrollReveal from="right" delay={400} duration={600} className="mt-4 flex items-center gap-4 flex-wrap">
              <Link 
                href={contactPath(lang)} 
                className="group inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand/15 hover:shadow-brand/25"
              >
                <span>{w.cta.replace(' →', '')}</span>
                <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  )
}
