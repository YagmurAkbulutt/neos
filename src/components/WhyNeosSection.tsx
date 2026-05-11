'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/language'

export default function WhyNeosSection() {
  const { tr } = useLanguage()
  const w = tr.whyNeos

  return (
    <section id="about" className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{w.overline}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5 leading-[1.1]">{w.title}</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">{w.subtitle}</p>

            <div className="flex flex-col gap-6 mb-10">
              {w.pillars.map((p) => (
                <div key={p.num} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand/8 group-hover:bg-brand/15 flex items-center justify-center transition-colors duration-300">
                    <span className="text-brand text-xs font-bold tracking-wider">{p.num}</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-navy mb-1">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200">
              {w.cta}
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/15 aspect-[4/5]">
              <Image src="/g.jpeg" alt="Ship captain at navigation console" fill className="object-cover object-center" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl shadow-gray-200/80 p-5 flex items-center gap-4 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy leading-none">{w.stat1.value}</div>
                <div className="text-slate-500 text-sm mt-0.5">{w.stat1.label}</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-navy rounded-2xl shadow-xl p-4 text-white text-center">
              <div className="text-2xl font-bold text-brand leading-none">{w.stat2.value}</div>
              <div className="text-white/50 text-xs mt-0.5 font-medium">{w.stat2.label}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
