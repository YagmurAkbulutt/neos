'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'
import { companyPath, contactPath, servicePath, type ServiceSlug } from '@/lib/routes'

const servicesSlugs: ServiceSlug[] = [
  'port-agency', 'straits-agency', 'shipyard-agency',
  'husbandry-agency', 'protecting-agency', 'lsd-work-materials-supply',
]

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-5 h-[2px] rounded-full bg-brand flex-shrink-0" />
      <h4 className="text-white/90 text-xs font-bold tracking-[0.14em] uppercase">{children}</h4>
    </div>
  )
}

export default function Footer() {
  const { lang, tr } = useLanguage()
  const f = tr.footer

  return (
    <footer className="bg-navy-deep relative overflow-hidden">

      {/* ── Top orange gradient border ─── */}
      <div className="h-[2px] bg-gradient-to-r from-navy-deep via-brand to-navy-deep" />

      {/* ── Main grid ───────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column — wider */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="NEOS Maritime"
                width={150}
                height={48}
                className="h-11 w-auto object-contain mb-5 brightness-90"
              />
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-7 max-w-xs">
              {f.tagline}
            </p>

            {/* Orange accent stat */}
            <div className="flex items-stretch gap-5 mb-7">
              <div className="w-[3px] rounded-full bg-gradient-to-b from-brand via-brand/60 to-transparent flex-shrink-0" />
              <div className="flex gap-6">
                <div>
                  <div className="text-brand text-2xl font-bold leading-none mb-0.5">23+</div>
                  <div className="text-white/30 text-xs">{tr.stats[1].label}</div>
                </div>
                <div className="w-px bg-white/8" />
                <div>
                  <div className="text-brand text-2xl font-bold leading-none mb-0.5">30+</div>
                  <div className="text-white/30 text-xs">{tr.stats[2].label}</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/neos-maritime/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NEOS Maritime on LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/40 text-white/40 hover:text-[#0A66C2] flex items-center justify-center transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
            <SectionLabel>{f.servicesTitle}</SectionLabel>
            <ul className="flex flex-col gap-2.5">
              {f.services.map((s, i) => (
                <li key={i}>
                  <Link
                    href={servicePath(servicesSlugs[i], lang)}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand transition-all duration-200 overflow-hidden" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
            <SectionLabel>{tr.nav.about}</SectionLabel>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: tr.nav.whoWeAre, href: companyPath('about-us', lang) },
                { label: tr.nav.ourService, href: '/#services' },
                { label: tr.testimonials.overline, href: '/#testimonials' },
                { label: tr.nav.contact, href: contactPath(lang) },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand transition-all duration-200 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Offices */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <SectionLabel>{tr.footer.contactTitle}</SectionLabel>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-4 text-white/40 text-xs">
              {tr.contact.labels.offices.map((office: any, index: number) => {
                const isHQ = index === 0;
                const mapQuery = index === 0 
                  ? 'Caddebostan Mah. Ömerpaşa Sok. No 4 Daire 7 Kadıköy İstanbul' 
                  : 'CG İş Merkezi Mimar Sinan Mah. Eşref Bitlis Caddesi No 273 Daire 10 Yarımca Kocaeli';
                
                return (
                  <div key={office.label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                        isHQ 
                          ? 'bg-brand/10 text-brand border border-brand/20' 
                          : 'bg-white/5 text-white/50 border border-white/10'
                      }`}>
                        {isHQ ? (lang === 'tr' ? 'Merkez' : 'HQ') : (lang === 'tr' ? 'Şube' : 'Branch')}
                      </span>
                      <h5 className="text-white/70 font-semibold truncate">
                        {isHQ ? (lang === 'tr' ? 'İstanbul' : 'Istanbul') : 'Derince'}
                      </h5>
                    </div>
                    <p className="leading-relaxed text-white/35 pr-2">
                      {office.address}
                    </p>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <a 
                        href={`tel:${office.phone.replace(/\s+/g, '')}`} 
                        className="hover:text-brand transition-colors flex items-center gap-1.5"
                      >
                        <PhoneIcon />
                        <span className="font-medium text-white/50 hover:text-brand">{office.phone}</span>
                      </a>
                      <a 
                        href={`mailto:${office.email}`} 
                        className="hover:text-brand transition-colors flex items-center gap-1.5"
                      >
                        <MailIcon />
                        <span className="truncate text-white/50 hover:text-brand">{office.email}</span>
                      </a>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand hover:underline mt-1 font-semibold text-[11px]"
                      >
                        <span>{lang === 'tr' ? 'Haritada Göster' : 'Show on Map'}</span>
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider with orange center dot ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="relative h-px bg-white/8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                          w-6 h-6 rounded-full bg-navy-deep border border-white/10
                          flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-brand" />
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <span className="text-white/50 text-xs tracking-wide">
            © {new Date().getFullYear()} NEOS Maritime — {f.copyright}
          </span>
          <span className="text-white/40 text-xs tracking-wide">
            Crafted by{' '}
            <a 
              href="https://www.inoviqlab.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand hover:text-brand-light hover:underline font-semibold transition-colors"
            >
              InoviqLab
            </a>
          </span>
        </div>
      </div>

      {/* ── Bottom orange micro-line ──────── */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand/55 to-transparent" />

    </footer>
  )
}
