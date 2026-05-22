'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/language'
import { TurkeyPortsMap } from '@/components/TurkeyPortsMap'

const PORT_NAMES = [
  'İstanbul', 'Kocaeli', 'Tekirdağ', 'Bandırma', 'Çanakkale',
  'Aliağa', 'İzmir', 'Bodrum', 'Antalya', 'Mersin', 'İskenderun',
  'Zonguldak', 'Sinop', 'Samsun', 'Trabzon', 'Hopa',
]
const TICKER_ITEMS = [...PORT_NAMES, ...PORT_NAMES]

export default function PortsSection() {
  const { lang, tr } = useLanguage()
  const p = tr.ports
  const isTR = lang === 'tr'

  const [hovered, setHovered] = useState<string | null>(null)

  const regionStats = [
    { label: isTR ? 'Marmara & Boğazlar' : 'Marmara & Straits', count: 8 },
    { label: isTR ? 'Ege'                : 'Aegean',             count: 7 },
    { label: isTR ? 'Akdeniz'            : 'Mediterranean',      count: 5 },
    { label: isTR ? 'Karadeniz'          : 'Black Sea',          count: 6 },
  ]

  return (
    <section id="ports" className="bg-navy overflow-hidden">

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-10">
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
              className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span className="text-white/70 text-sm font-medium">{r.label}</span>
              <span className="text-brand text-sm font-bold">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Turkey map ──────────────────────────────────────── */}
      <div className="px-4 sm:px-8 lg:px-16 pb-4">
        <div className="max-w-5xl mx-auto" style={{ filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.5))' }}>
          <TurkeyPortsMap />
        </div>
      </div>

      {/* ── Scrolling port names ticker ─────────────────────── */}
      <div className="relative overflow-hidden border-t border-white/8 py-5">
        <style>{`
          @keyframes ports-ticker {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>

        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-navy to-transparent" />

        <div
          className="flex items-center w-max"
          style={{ animation: 'ports-ticker 38s linear infinite' }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {TICKER_ITEMS.map((name, i) => (
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

      {/* ── Footer note ─────────────────────────────────────── */}
      <div className="pb-16 pt-6 text-center">
        <p className="text-white/30 text-sm">
          {p.note}{' '}
          <a href="#contact" className="text-brand hover:text-brand-light font-semibold transition-colors">
            {p.noteLink}
          </a>
        </p>
      </div>

    </section>
  )
}
