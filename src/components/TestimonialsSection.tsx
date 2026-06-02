'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { useLanguage } from '@/context/language'
import ScrollReveal from '@/components/ScrollReveal'

function QuoteIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.17 6C4.88 7.58 3.5 9.72 3.5 12.41V18h6.21v-6.11H6.62c.1-1.35.86-2.55 2.29-3.61L7.17 6Zm9 0c-2.29 1.58-3.67 3.72-3.67 6.41V18h6.21v-6.11h-3.09c.1-1.35.86-2.55 2.29-3.61L16.17 6Z" />
    </svg>
  )
}

export default function TestimonialsSection() {
  const { lang, tr } = useLanguage()
  const testimonials = tr.testimonials

  const baseTrack = useMemo(() => {
    if (testimonials.items.length === 0) return []

    const minimumCards = 6
    const repeatCount = Math.max(1, Math.ceil(minimumCards / testimonials.items.length))
    return Array.from({ length: repeatCount }, () => testimonials.items).flat()
  }, [testimonials.items])

  const testimonialTrack = useMemo(() => [...baseTrack, ...baseTrack], [baseTrack])

  return (
    <section id="testimonials" className="section-pad bg-slate-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal from="bottom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">
                {testimonials.overline}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
                {testimonials.title}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                {testimonials.subtitle}
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 w-full sm:w-auto"
            >
              {tr.nav.contact}
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal from="bottom" delay={150}>
          <div className="relative -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 overflow-hidden -my-5 py-5">
            {/* Fade Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent sm:w-28" />

            <div className="flex w-max gap-5 animate-marquee">
              {testimonialTrack.map((item, index) => (
                <article
                  key={`${item.name}-${item.company}-${index}`}
                  aria-hidden={index >= baseTrack.length}
                  className="flex min-h-[280px] w-[290px] sm:w-[360px] shrink-0 flex-col bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                    <QuoteIcon />
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-7">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <div className="text-navy font-bold text-sm">{item.name}</div>
                    <div className="text-slate-400 text-xs font-medium mt-1">{item.company}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
