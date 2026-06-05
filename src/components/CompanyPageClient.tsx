'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'
import { companyPages, companyPageSlugs, type CompanyPageSlug } from '@/lib/companyPages'
import { companyPath, contactPath } from '@/lib/routes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

type Props = {
  slug: CompanyPageSlug
}

export default function CompanyPageClient({ slug }: Props) {
  const { lang, tr } = useLanguage()
  const page = companyPages[lang][slug]
  const navPages = companyPageSlugs.map((item) => companyPages[lang][item])
  const isAboutPage = slug === 'about-us'
  const accentStats = {
    'about-us': [
      { value: '2018', label: lang === 'tr' ? 'Kuruluş' : 'Established' },
      { value: '23+', label: tr.stats[1].label },
      { value: '24/7', label: lang === 'tr' ? 'Operasyon' : 'Operations' },
    ],
    vision: [
      { value: '4', label: lang === 'tr' ? 'Bölgesel odak' : 'Regional focus' },
      { value: 'TR+', label: lang === 'tr' ? 'Global hedef' : 'Global ambition' },
      { value: '1', label: lang === 'tr' ? 'Kalite standardı' : 'Quality standard' },
    ],
    mission: [
      { value: '100%', label: lang === 'tr' ? 'Kalite odağı' : 'Quality focus' },
      { value: '24/7', label: lang === 'tr' ? 'Destek' : 'Support' },
      { value: '1st', label: lang === 'tr' ? 'Tercih hedefi' : 'Preferred choice' },
    ],
    values: [
      { value: '12', label: lang === 'tr' ? 'Kültür değeri' : 'Cultural values' },
      { value: '1', label: lang === 'tr' ? 'Ekip ruhu' : 'Team culture' },
      { value: '∞', label: lang === 'tr' ? 'Güven' : 'Trust' },
    ],
  }[slug]

  const navigationTabs = (
    <div className="flex flex-wrap gap-3 mb-6">
      {navPages.map((item) => (
        <Link
          key={item.slug}
          href={companyPath(item.slug, lang)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${
            item.slug === slug
              ? 'bg-brand text-white border-brand shadow-sm shadow-brand/10'
              : 'bg-white text-navy border-gray-200 hover:border-brand hover:text-brand'
          }`}
        >
          {item.navLabel}
        </Link>
      ))}
    </div>
  )

  return (
    <>
      <Navbar />

      <main>
        <section className="relative min-h-[52vh] flex items-end overflow-hidden">
          <Image src="/g.jpeg" alt={page.title} fill priority className="object-cover object-center" quality={85} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/25" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 pt-32">
            <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-4">
              {page.overline}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 leading-[1.08]">
              {page.title}
            </h1>
            <p className="text-white/65 text-lg md:text-xl max-w-3xl leading-relaxed">
              {page.heroLead || page.lead}
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {page.values ? (
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <ScrollReveal from="left" className="lg:col-span-4 lg:sticky lg:top-28">
                  <div className="bg-navy rounded-2xl p-7 text-white">
                    <div className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
                      {page.overline}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight mb-5">{page.title}</h2>
                    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                      {accentStats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-brand text-2xl font-bold leading-none">{stat.value}</div>
                          <div className="text-white/40 text-[11px] leading-tight mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal from="right" className="lg:col-span-8">
                  {navigationTabs}
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                    {page.lead}
                  </p>
                  <div className="divide-y divide-gray-100 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    {page.values.map((value, index) => (
                      <article key={value.title} className="grid md:grid-cols-12 gap-5 p-6 md:p-8">
                        <div className="md:col-span-4">
                          <div className="text-brand text-xs font-bold tracking-wider mb-2">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <h2 className="text-2xl font-bold text-navy tracking-tight">{value.title}</h2>
                        </div>
                        <p className="md:col-span-8 text-slate-600 text-base leading-relaxed">
                          {value.desc}
                        </p>
                      </article>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <ScrollReveal from="left" className="lg:col-span-4 lg:sticky lg:top-28">
                  <div className="bg-navy rounded-2xl p-7 text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-brand" />
                    <div className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
                      {page.overline}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight mb-5">{page.title}</h2>
                    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                      {accentStats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-brand text-2xl font-bold leading-none">{stat.value}</div>
                          <div className="text-white/40 text-[11px] leading-tight mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal from="right" className="lg:col-span-8">
                  {navigationTabs}
                  <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    {isAboutPage ? (
                      <div className="p-7 md:p-10">
                        <div className="flex flex-col gap-6">
                          {page.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-slate-600 text-lg leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 p-7 md:p-10">
                        {page.paragraphs.map((paragraph) => (
                          <div key={paragraph} className="flex gap-4">
                            <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                              {paragraph}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                </ScrollReveal>
              </div>
            )}

            <div className="mt-10 flex justify-end">
              <Link
                href={contactPath(lang)}
                className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                {tr.nav.contact}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
