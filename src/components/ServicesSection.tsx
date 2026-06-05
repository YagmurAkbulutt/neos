'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/language'
import { services } from '@/lib/services'
import { servicePath } from '@/lib/routes'
import ScrollReveal from '@/components/ScrollReveal'

export default function ServicesSection() {
  const { lang, tr } = useLanguage()
  const s = tr.services

  return (
    <section id="services" className="relative scroll-mt-20 pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-t border-b border-slate-100">
      {/* Premium Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-navy-light/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <ScrollReveal from="bottom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
              <span className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase">{s.overline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5 leading-none">
              {s.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
              {s.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {s.items.map((item, i) => {
            const serviceData = services.find((srv) => srv.slug === item.slug)
            const bgImage = serviceData?.heroImage || '/hizmetler/liman-acenteligi-01.jpg'

            return (
              <ScrollReveal key={item.slug} from="bottom" delay={(i % 3) * 100} duration={600} className="h-full">
                <Link
                  href={servicePath(item.slug, lang)}
                  className="group relative min-h-[270px] rounded-3xl overflow-hidden border border-slate-100 hover:border-brand/40 shadow-sm hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 flex flex-col justify-between p-7 sm:p-8 h-full"
                >
                  {/* Background Image Wrapper */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={bgImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority={i < 3}
                    />
                    {/* Multi-layered Premium Overlay */}
                    <div className="absolute inset-0 bg-navy-deep/15 transition-opacity duration-500 group-hover:bg-navy-deep/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/35 to-navy-deep/5 transition-all duration-500 group-hover:via-navy-deep/45 group-hover:from-navy-deep/75" />
                  </div>

                  {/* Text Contents at Bottom */}
                  <div className="relative z-10 w-full mt-auto">
                    <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-brand-light transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-brand-light text-sm font-semibold group-hover:text-brand transition-all duration-300 font-display">
                      <span>{s.learnMore}</span>
                      <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
