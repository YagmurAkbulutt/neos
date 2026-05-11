'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'

const servicesSlugs = [
  'ship-agency', 'husbandry', 'crew-services',
  'customs-clearance', 'port-dues', 'bunkering',
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
  const { tr } = useLanguage()
  const f = tr.footer

  return (
    <footer className="bg-navy-deep relative overflow-hidden">

      {/* ── Top orange gradient border ─── */}
      <div className="h-[2px] bg-gradient-to-r from-navy-deep via-brand to-navy-deep" />

      {/* ── Main grid ───────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column — wider */}
          <div className="lg:col-span-2">
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
                  <div className="text-brand text-2xl font-bold leading-none mb-0.5">17+</div>
                  <div className="text-white/30 text-xs">Years experience</div>
                </div>
                <div className="w-px bg-white/8" />
                <div>
                  <div className="text-brand text-2xl font-bold leading-none mb-0.5">30+</div>
                  <div className="text-white/30 text-xs">Turkish ports</div>
                </div>
              </div>
            </div>

            {/* Contact with icons */}
            <div className="flex flex-col gap-3">
              <a href="tel:+902163560664"
                className="flex items-center gap-2.5 text-white/40 hover:text-brand text-sm transition-colors group">
                <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-brand/15 flex items-center justify-center transition-colors flex-shrink-0">
                  <PhoneIcon />
                </span>
                +90 216 356 06 64
              </a>
              <a href="mailto:agency@neosmaritime.com"
                className="flex items-center gap-2.5 text-white/40 hover:text-brand text-sm transition-colors group">
                <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-brand/15 flex items-center justify-center transition-colors flex-shrink-0">
                  <MailIcon />
                </span>
                agency@neosmaritime.com
              </a>
              <div className="flex items-start gap-2.5 text-white/30 text-sm">
                <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-white/30">
                  <PinIcon />
                </span>
                <span>Bağdat Cad. No:277/7,<br />Kadıköy / İstanbul</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <SectionLabel>{f.servicesTitle}</SectionLabel>
            <ul className="flex flex-col gap-2.5">
              {f.services.map((s, i) => (
                <li key={i}>
                  <Link
                    href={`/services/${servicesSlugs[i]}`}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand transition-all duration-200 overflow-hidden" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ports */}
          <div>
            <SectionLabel>{f.portsTitle}</SectionLabel>
            <ul className="flex flex-col gap-2.5">
              {f.ports.map((port, i) => (
                <li key={i}>
                  <a
                    href="/#ports"
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand transition-all duration-200 overflow-hidden" />
                    {port}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <SectionLabel>{tr.nav.about}</SectionLabel>
            <ul className="flex flex-col gap-2.5 mb-8">
              {[
                { label: tr.nav.about, href: '/#about' },
                { label: tr.nav.services, href: '/#services' },
                { label: tr.nav.ports, href: '/#ports' },
                { label: tr.nav.contact, href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand transition-all duration-200 overflow-hidden" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/902163560664?text=Hello%20NEOS%20Maritime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#25D366]/15 border border-white/10 hover:border-[#25D366]/40 text-white/50 hover:text-[#25D366] text-xs font-medium px-4 py-2.5 rounded-xl transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.845L.057 23.617a.5.5 0 0 0 .614.682l5.975-1.566A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.993-1.36l-.358-.213-3.714.974.99-3.617-.233-.371A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </a>
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
        </div>
      </div>

      {/* ── Bottom orange micro-line ──────── */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

    </footer>
  )
}
