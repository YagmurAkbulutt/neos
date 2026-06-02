'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/language'

export default function HeroSection() {
  const { tr } = useLanguage()
  const h = tr.hero

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      <Image
        src="/ggg.jpeg"
        alt="Aerial view of container ship at sea"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-navy/62 z-20" />
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-navy/80 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-deep/70 to-transparent z-20" />

      {/* Content wrapper */}
      <div className="relative z-30 text-center text-white px-5 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2 text-sm font-medium mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse-dot" />
          {h.badge}
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.06] tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {h.title1}
          <br />
          <span className="text-brand">{h.titleAccent}</span> {h.title2}
        </h1>

        <p
          className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {h.subtitle}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="#contact"
            className="group bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-brand/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            {h.cta1}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#services"
            className="border border-white/25 hover:border-white/55 hover:bg-white/8 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 backdrop-blur-sm w-full sm:w-auto inline-flex items-center justify-center"
          >
            {h.cta2}
          </a>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-30">
        <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-medium">{h.scroll}</span>
        <div className="relative w-px h-10 bg-white/10 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-white/60 to-transparent rounded-full animate-scroll-drop" />
        </div>
      </div>
    </section>
  )
}

