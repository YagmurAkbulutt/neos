'use client'

import { useLanguage } from '@/context/language'

export default function StatsSection() {
  const { tr } = useLanguage()

  return (
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/8">
          {tr.stats.map((stat, i) => (
            <div key={i} className="py-12 px-6 text-center lg:py-14">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-white/35 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
