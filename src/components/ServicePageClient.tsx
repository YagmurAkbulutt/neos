'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'
import type { ServiceItem } from '@/lib/services'
import { contactPath, servicePath } from '@/lib/routes'
import servicesTR from '@/i18n/servicesTR'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceImageSlider from '@/components/ServiceImageSlider'
import ScrollReveal from '@/components/ScrollReveal'

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

type Props = { service: ServiceItem; related: ServiceItem[] }

export default function ServicePageClient({ service, related }: Props) {
  const { lang, tr } = useLanguage()
  const ui = tr.servicePage

  // Turkish content if available, fallback to English
  const trData = lang === 'tr' ? servicesTR[service.slug] : null
  const title     = trData?.title     ?? service.title
  const tagline   = trData?.tagline   ?? service.tagline
  const overview  = trData?.overview  ?? service.overview
  const highlights = trData?.highlights ?? service.highlights
  const included  = trData?.included  ?? service.included
  const process   = trData?.process   ?? service.process

  // Translated related service title
  const relatedTitle = (rel: ServiceItem) =>
    lang === 'tr' ? (servicesTR[rel.slug]?.title ?? rel.title) : rel.title

  const relatedTagline = (rel: ServiceItem) =>
    lang === 'tr' ? (servicesTR[rel.slug]?.tagline ?? rel.tagline) : rel.tagline

  return (
    <>
      <Navbar heroGlass />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <Image src={service.heroImage} alt={title} fill priority className="object-cover object-center" quality={85} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />

        <div className="relative z-10 w-full pb-14 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/45 text-sm mb-5">
            <Link href="/" className="hover:text-white transition-colors">{ui.breadcrumbHome}</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white transition-colors">{ui.breadcrumbServices}</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>

          <span className="inline-block text-brand text-xs font-bold tracking-widest uppercase mb-3">{ui.overlineTag}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-3 leading-[1.08]">{title}</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl">{tagline}</p>
        </div>
      </section>

      <div className="h-1 bg-brand" />

      <main>
        {/* ── Overview ─────────────────────────────────────────── */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-5 gap-14 items-start">
              <ScrollReveal from="left" className="lg:col-span-3">
                <div>
                  <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{ui.overlineOverview}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-6 leading-snug">{ui.overviewTitle}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{overview}</p>
                  <Link href={contactPath(lang)} className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200">
                    {ui.overviewCta}
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal from="right" className="lg:col-span-2">
                <div className="bg-slate-50 rounded-2xl p-7 border border-gray-100 h-full">
                  <h3 className="text-sm font-bold text-navy tracking-widest uppercase mb-5">{ui.highlightsTitle}</h3>
                  <ul className="flex flex-col gap-4">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">{ui.contactLabel}</p>
                    <a href="tel:+902163560664" className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-brand/10 group-hover:bg-brand/20 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-navy font-semibold text-sm group-hover:text-brand transition-colors">+90 216 356 06 64</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Image Slider ─────────────────────────────────────── */}
        <ServiceImageSlider images={service.images} />

        {/* ── What's Included ──────────────────────────────────── */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <ScrollReveal from="bottom">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{ui.includedOverline}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">{ui.includedTitle}</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map((item, i) => (
                <ScrollReveal key={i} from="bottom" delay={(i % 3) * 100} duration={600} className="h-full">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                      <span className="text-brand text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-bold text-navy text-[15px] mb-2">{item.label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Work ──────────────────────────────────────── */}
        <section className="py-20 bg-navy overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <ScrollReveal from="bottom">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{ui.processOverline}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{ui.processTitle}</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <ScrollReveal key={i} from="bottom" delay={(i % 4) * 100} duration={600} className="h-full">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-brand/15 border border-brand/25 flex items-center justify-center">
                      <span className="text-brand font-bold text-sm">{step.step}</span>
                    </div>
                    <h3 className="text-white font-bold text-[16px]">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ─────────────────────────────────── */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <ScrollReveal from="bottom">
              <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
                <div>
                  <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{ui.relatedOverline}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">{ui.relatedTitle}</h2>
                </div>
                <Link href="/#services" className="text-brand font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  {ui.relatedViewAll} <ArrowRightIcon />
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel, i) => (
                <ScrollReveal key={rel.slug} from="bottom" delay={(i % 3) * 100} duration={600} className="h-full">
                  <Link href={servicePath(rel.slug, lang)} className="group relative rounded-2xl overflow-hidden aspect-[4/3] block h-full">
                    <Image src={rel.heroImage} alt={relatedTitle(rel)} fill className="object-cover group-hover:scale-105 transition-transform duration-500" quality={75} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-xs text-brand font-semibold uppercase tracking-widest mb-1">{relatedTitle(rel)}</div>
                      <div className="text-white font-bold text-base leading-tight mb-2">{relatedTagline(rel)}</div>
                      <div className="inline-flex items-center gap-1.5 text-white/60 text-xs font-medium group-hover:text-brand transition-colors">
                        {ui.relatedLinkLabel} <ArrowRightIcon />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20 bg-slate-50 border-t border-gray-100 overflow-hidden">
          <ScrollReveal from="bottom">
            <div className="max-w-3xl mx-auto px-5 text-center">
              <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{ui.ctaOverline}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-5">
                {lang === 'tr'
                  ? `${title} ${ui.ctaReadyPrefix}`
                  : `${ui.ctaReadyPrefix} ${title.toLowerCase()}?`}
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">{ui.ctaSub}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={contactPath(lang)} className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 w-full sm:w-auto text-center">
                  {ui.ctaBtn}
                </Link>
                <a href="tel:+902163560664" className="border border-navy/20 hover:border-brand text-navy hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200 w-full sm:w-auto text-center">
                  +90 216 356 06 64
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  )
}
