'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/context/language'
import { companyPath, contactPath, localizePath, servicePath } from '@/lib/routes'

type NavbarProps = {
  heroGlass?: boolean
}

export default function Navbar({ heroGlass = false }: NavbarProps) {
  const { lang, setLang, tr } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const linkClass = `text-sm font-medium tracking-wide transition-colors duration-200 ${
    scrolled ? 'text-navy hover:text-brand' : 'text-white/80 hover:text-white'
  }`

  const heroGlassSurfaceClass = 'bg-[#263241]/95 backdrop-blur-xl border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.20)]'

  const dropdownPanelClass = scrolled
    ? 'bg-white/96 backdrop-blur-md border-gray-100/90 border-t-0 shadow-md shadow-gray-200/30 rounded-b-2xl rounded-t-none'
    : heroGlass
    ? `${heroGlassSurfaceClass} rounded-2xl`
    : 'bg-navy-deep/60 backdrop-blur-lg border-white/10 shadow-xl shadow-black/40 rounded-2xl'

  const serviceLinks = tr.services.items.map((s) => ({
    label: s.title,
    href: servicePath(s.slug, lang),
  }))

  const aboutLinks = [
    { label: tr.nav.about, href: companyPath('about-us', lang) },
    { label: tr.nav.vision, href: companyPath('vision', lang) },
    { label: tr.nav.mission, href: companyPath('mission', lang) },
    { label: tr.nav.values, href: companyPath('values', lang) },
  ]

  const handleLanguageChange = (nextLang: typeof lang) => {
    setLang(nextLang)
    router.push(localizePath(pathname, nextLang))
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100'
          : menuOpen
          ? 'bg-navy-deep/95 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : heroGlass
          ? `${heroGlassSurfaceClass} border-b`
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="NEOS Maritime"
              width={160}
              height={52}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {/* Who we are dropdown */}
            <div
              ref={aboutDropdownRef}
              className="relative h-20 flex items-center"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className={`${linkClass} flex items-center gap-1.5 py-1`}
                onClick={() => setAboutOpen((v) => !v)}
                aria-expanded={aboutOpen}
              >
                {tr.nav.whoWeAre}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-50">
                  <div className={`w-48 py-2 relative border transition-all duration-300 animate-menu-entry ${dropdownPanelClass}`}>
                    <div className="relative z-10 flex flex-col gap-0.5 px-1.5">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`flex items-center px-3.5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl group ${
                            scrolled
                              ? 'text-navy hover:bg-navy/5 hover:text-brand'
                              : 'text-white/90 hover:bg-white/5 hover:text-brand'
                          }`}
                          onClick={() => setAboutOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 mr-2 transition-all duration-300" />
                          <span className="transition-transform duration-300 group-hover:translate-x-0.5 whitespace-nowrap">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div
              ref={servicesDropdownRef}
              className="relative h-20 flex items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`${linkClass} flex items-center gap-1.5 py-1`}
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                {tr.nav.ourService}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-50">
                  <div className={`w-72 py-2 relative border transition-all duration-300 animate-menu-entry ${dropdownPanelClass}`}>
                    <div className="relative z-10 flex flex-col gap-0.5 px-1.5">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`flex items-center px-3.5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl group ${
                            scrolled
                              ? 'text-navy hover:bg-navy/5 hover:text-brand'
                              : 'text-white/90 hover:bg-white/5 hover:text-brand'
                          }`}
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 mr-2 transition-all duration-300" />
                          <span className="transition-transform duration-300 group-hover:translate-x-0.5 whitespace-nowrap">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href={contactPath(lang)} className={linkClass}>{tr.nav.contact}</Link>
          </div>

          {/* Right: lang toggle + mail info */}
          <div className="hidden md:flex items-center gap-6">
            {/* Email info with icon */}
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg className={`w-4 h-4 ${scrolled ? 'text-brand' : 'text-white/60'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className={`transition-colors duration-200 ${scrolled ? 'text-navy/80' : 'text-white/85'}`}>
                {tr.nav.requestService}
              </span>
            </div>

            {/* Vertical divider */}
            <div className={`w-px h-5 ${scrolled ? 'bg-slate-200' : 'bg-white/20'}`} />

            {/* Language toggle */}
            <div className={`flex items-center gap-1 rounded-lg overflow-hidden border ${scrolled ? 'border-slate-200' : 'border-white/15'}`}>
              {(['en', 'tr'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={`px-2.5 py-1 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                    lang === l
                      ? 'bg-brand text-white'
                      : scrolled
                      ? 'text-navy/50 hover:text-navy'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block w-6 h-0.5 mb-1.5 rounded-full transition-all duration-300 origin-center ${scrolled ? 'bg-navy' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 mb-1.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'} ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${scrolled ? 'bg-navy' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'} bg-transparent`}>
        <div className="px-5 py-5 flex flex-col gap-1">

          {/* Mobile lang toggle */}
          <div className="flex items-center gap-2 px-2 mb-3">
            <span className={`text-xs font-medium ${scrolled ? 'text-slate-400' : 'text-white/50'}`}>{tr.nav.language}:</span>
            <div className={`flex rounded-lg overflow-hidden border ${scrolled ? 'border-gray-200' : 'border-white/15'}`}>
              {(['en', 'tr'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={`px-3 py-1 text-xs font-bold tracking-widest uppercase transition-colors ${
                    lang === l
                      ? 'bg-brand text-white'
                      : scrolled
                      ? 'text-slate-500 hover:text-navy'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <p className={`text-xs font-bold uppercase tracking-widest px-2 mb-1 ${scrolled ? 'text-slate-400' : 'text-white/40'}`}>{tr.nav.whoWeAre}</p>
          {aboutLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium py-2 px-2 rounded-lg transition-colors text-sm ${
                scrolled
                  ? 'text-navy hover:bg-gray-50 hover:text-brand'
                  : 'text-white hover:bg-white/10 hover:text-brand'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className={`border-t my-2 ${scrolled ? 'border-gray-100' : 'border-white/10'}`} />

          <p className={`text-xs font-bold uppercase tracking-widest px-2 mb-1 ${scrolled ? 'text-slate-400' : 'text-white/40'}`}>{tr.nav.ourService}</p>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium py-2 px-2 rounded-lg transition-colors text-sm ${
                scrolled
                  ? 'text-navy hover:bg-gray-50 hover:text-brand'
                  : 'text-white hover:bg-white/10 hover:text-brand'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className={`border-t my-2 ${scrolled ? 'border-gray-100' : 'border-white/10'}`} />

          {[
            { label: tr.nav.contact, href: contactPath(lang) },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-medium py-2.5 px-2 rounded-lg transition-colors text-base ${
                scrolled
                  ? 'text-navy hover:bg-gray-50 hover:text-brand'
                  : 'text-white hover:bg-white/10 hover:text-brand'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:+902163560664"
            className={`flex items-center gap-2 px-2 py-2 text-sm font-medium transition-colors ${
              scrolled
                ? 'text-slate-500 hover:text-navy'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {tr.nav.phone}
          </a>

          <div
            className="mt-2 bg-brand text-white font-semibold px-4 py-3 rounded-xl text-center cursor-default"
          >
            {tr.nav.requestService}
          </div>
        </div>
      </div>
    </nav>
  )
}
