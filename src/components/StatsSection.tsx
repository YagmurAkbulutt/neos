'use client'

import { useLanguage } from '@/context/language'

export default function StatsSection() {
  const { tr } = useLanguage()
  const track = [...tr.stats, ...tr.stats, ...tr.stats]

  return (
    <section className="relative overflow-hidden bg-navy py-10 md:py-12">
      <style>{`
        @keyframes neos-stats-slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 z-10 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 z-10 bg-gradient-to-l from-navy to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div
        className="flex w-max gap-4 px-5 sm:px-8 lg:px-10"
        style={{ animation: 'neos-stats-slide 24s linear infinite' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running'
        }}
      >
        {track.map((stat, i) => (
          <div
            key={`${stat.value}-${stat.label}-${i}`}
            className="flex-shrink-0 w-[230px] sm:w-[260px] rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-5 shadow-lg shadow-black/10 backdrop-blur-sm"
          >
            <div className="text-3xl md:text-4xl font-bold text-brand tracking-tight leading-none mb-2">
              {stat.value}
            </div>
            <div className="text-white font-semibold text-sm md:text-base mb-1">{stat.label}</div>
            <div className="text-white/40 text-xs md:text-sm leading-relaxed">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
    </section>
  )
}
