'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'

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
  const { tr } = useLanguage()
  const w = tr.whyNeos
  const pageSlugs = ['about-us', 'vision', 'mission', 'values']

  return (
    <section id="about" className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left column */}
          <div className="flex flex-col">
            <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{w.overline}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5 leading-[1.1]">{w.title}</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-4">{w.subtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">{w.homeIntro}</p>

            {/* 2×2 pillar cards */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {w.pillars.map((p, index) => (
                <Link
                  key={p.num}
                  href={`/who-we-are/${pageSlugs[index]}`}
                  className="group relative bg-slate-50 hover:bg-navy rounded-2xl p-5 transition-all duration-300 border border-slate-100 hover:border-navy hover:shadow-lg hover:shadow-navy/10 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-brand/10 group-hover:bg-brand/20 flex items-center justify-center transition-colors duration-300 text-brand group-hover:text-brand">
                      {pillarIcons[index]}
                    </div>
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white/30 tracking-widest transition-colors">{p.num}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-navy group-hover:text-white mb-1.5 transition-colors">{p.title}</h3>
                  <span className="text-xs font-semibold text-brand group-hover:text-brand/70 flex items-center gap-1 transition-colors">
                    {w.discoverMore} <span className="translate-x-0 group-hover:translate-x-0.5 inline-block transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>

            <Link href="#contact" className="self-start inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200">
              {w.cta}
            </Link>
          </div>

          {/* Right column — compact image */}
          <div className="relative mt-4 lg:mt-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/15 aspect-[3/2]">
              <Image src="/neos2.jpeg" alt="Ship captain at navigation console" fill className="object-cover object-bottom" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent" />
              {/* bottom caption bar */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-0.5">{w.stat1.label}</div>
                  <div className="text-white text-2xl font-bold leading-none">{w.stat1.value}</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-right">
                  <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-0.5">{w.stat2.label}</div>
                  <div className="text-brand text-2xl font-bold leading-none">{w.stat2.value}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
