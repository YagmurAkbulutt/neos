'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/context/language'
import { TurkeyPortsMap } from '@/components/TurkeyPortsMap'
import { contactPath } from '@/lib/routes'
import ScrollReveal from '@/components/ScrollReveal'

const PORT_NAMES_TR = [
  'İstanbul', 'Kocaeli', 'Tekirdağ', 'Bandırma', 'Çanakkale',
  'Aliağa', 'İzmir', 'Bodrum', 'Antalya', 'Mersin', 'İskenderun',
  'Zonguldak', 'Samsun', 'Trabzon', 'Hopa',
]

const PORT_NAMES_EN = [
  'Istanbul', 'Kocaeli', 'Tekirdag', 'Bandirma', 'Canakkale',
  'Aliaga', 'Izmir', 'Bodrum', 'Antalya', 'Mersin', 'Iskenderun',
  'Zonguldak', 'Samsun', 'Trabzon', 'Hopa',
]

export default function PortsSection() {
  const { lang, tr } = useLanguage()
  const p = tr.ports
  const isTR = lang === 'tr'

  const portNames = isTR ? PORT_NAMES_TR : PORT_NAMES_EN
  const tickerItems = [...portNames, ...portNames]

  const [hovered, setHovered] = useState<string | null>(null)

  const regionStats = [
    { label: isTR ? 'Marmara & Boğazlar' : 'Marmara & Straits', count: 8 },
    { label: isTR ? 'Ege'                : 'Aegean',             count: 7 },
    { label: isTR ? 'Akdeniz'            : 'Mediterranean',      count: 5 },
    { label: isTR ? 'Karadeniz'          : 'Black Sea',          count: 5 },
  ]

  return (
    <section 
      id="ports" 
      className="relative scroll-mt-20 bg-navy overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #0f2040 0%, #0a1628 55%, #060e1a 100%)",
      }}
    >
      {/* Tech grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.45)_100%)]" />

      {/* ── Header ──────────────────────────────────────────── */}
      <ScrollReveal from="bottom" className="relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-12 pb-6 lg:pt-16 lg:pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">
                {p.overline}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                {p.title}
              </h2>
            </div>
            <p className="text-white/45 text-base leading-relaxed max-w-sm lg:text-right">
              {p.subtitle}
            </p>
          </div>

          {/* Region pill counters */}
          <div className="flex flex-wrap gap-3 mt-10">
            {regionStats.map(r => (
              <div
                key={r.label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-brand/40 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-brand" />
                <span className="text-white/70 text-sm font-medium">{r.label}</span>
                <span className="text-brand text-sm font-bold">{r.count}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Turkey map ──────────────────────────────────────── */}
      <ScrollReveal from="bottom" delay={100} duration={800} className="relative z-10">
        <div className="px-4 sm:px-8 lg:px-16 pb-4">
          <div className="max-w-5xl mx-auto shadow-2xl shadow-black/50 rounded-2xl">
            <TurkeyPortsMap />
          </div>
        </div>
      </ScrollReveal>

      {/* ── Scrolling port names ticker ─────────────────────── */}
      <div className="px-4 sm:px-8 lg:px-16">
        <div 
          className="max-w-5xl mx-auto relative z-10 overflow-hidden py-5"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <style>{`
            @keyframes ports-ticker {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>

          <div
            className="flex items-center w-max"
            style={{ animation: 'ports-ticker 38s linear infinite' }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {tickerItems.map((name, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <span
                  className="text-sm font-medium tracking-wide transition-colors px-5 cursor-default whitespace-nowrap"
                  style={{ color: hovered === name ? 'var(--color-brand)' : 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {name}
                </span>
                <span className="text-brand/35 text-xs select-none">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer note ─────────────────────────────────────── */}
      <div className="relative z-10 pb-12 pt-4 lg:pb-16 text-center">
        <p className="text-white/30 text-sm">
          {p.note}{' '}
          <Link href={contactPath(lang)} className="text-brand hover:text-brand-light font-semibold transition-colors">
            {p.noteLink}
          </Link>
        </p>
      </div>

    </section>
  )
}

