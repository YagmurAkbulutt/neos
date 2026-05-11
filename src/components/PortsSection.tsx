'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/language'

export default function PortsSection() {
  const { tr } = useLanguage()
  const p = tr.ports

  return (
    <section id="ports" className="section-pad bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{p.overline}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">{p.title}</h2>
          <p className="text-slate-500 text-lg leading-relaxed">{p.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60 aspect-[3/4]">
            <Image src="/port-aerial.jpeg" alt="Aerial view of container port" fill className="object-cover" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-white font-bold text-xl mb-1">30+</div>
              <div className="text-white/60 text-sm">{p.imageCaption}</div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {p.regions.map((region) => (
              <div key={region.region} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                  <h3 className="font-bold text-navy text-sm tracking-wide uppercase">{region.region}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.ports.map((port) => (
                    <span key={port} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full hover:border-brand/40 hover:text-brand hover:bg-brand/5 transition-colors duration-200 cursor-default">
                      {port}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          {p.note}{' '}
          <a href="#contact" className="text-brand hover:underline font-medium">{p.noteLink}</a>.
        </p>
      </div>
    </section>
  )
}
