'use client'

import { useLanguage } from '@/context/language'

export default function PortsSection() {
  const { lang, tr } = useLanguage()
  const p = tr.ports

  const isTR = lang === 'tr'

  const stats = [
    { value: '30+', label: isTR ? 'Türk Limanı'   : 'Turkish Ports' },
    { value: '60+', label: isTR ? 'Tersane'        : 'Shipyards',
      sub: isTR ? 'Tuzla & Yalova' : 'Tuzla & Yalova' },
    { value: '2',   label: isTR ? 'Boğaz'          : 'Straits' },
    { value: '7/24',label: isTR ? 'Kesintisiz Hizmet' : 'Operations' },
  ]

  return (
    <section id="ports" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Header ──────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">
            {p.overline}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            {p.title}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">{p.subtitle}</p>
        </div>

        {/* ── Stats strip ─────────────────────────── */}
        <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              {i > 0 && <span className="hidden sm:block w-px h-10 bg-gray-200 mt-1" />}
              <div className="text-center">
                <div className="text-brand font-bold text-2xl leading-none mb-1">{s.value}</div>
                <div className="text-slate-600 text-sm font-medium">{s.label}</div>
                {s.sub && (
                  <div className="text-slate-400 text-xs mt-0.5">{s.sub}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Orange divider ──────────────────────── */}
        <div className="relative mb-12">
          <div className="h-px bg-gray-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        </div>

        {/* ── Footer note ─────────────────────────── */}
        <p className="text-center text-slate-400 text-sm mt-10">
          {p.note}{' '}
          <a href="#contact" className="text-brand hover:underline font-medium">
            {p.noteLink}
          </a>
          .
        </p>

      </div>
    </section>
  )
}
