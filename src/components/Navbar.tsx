'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'

export default function Navbar() {
  const { lang, setLang, tr } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)

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

  const serviceLinks = tr.services.items.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  }))

  const aboutLinks = [
    { label: tr.nav.about, href: '/who-we-are/about-us' },
    { label: tr.nav.vision, href: '/who-we-are/vision' },
    { label: tr.nav.mission, href: '/who-we-are/mission' },
    { label: tr.nav.values, href: '/who-we-are/values' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
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
              className="relative"
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="w-48 bg-white rounded-2xl shadow-2xl shadow-gray-200/80 border border-gray-100 py-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-navy hover:bg-slate-50 hover:text-brand transition-colors"
                        onClick={() => setAboutOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div
              ref={servicesDropdownRef}
              className="relative"
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="w-58 bg-white rounded-2xl shadow-2xl shadow-gray-200/80 border border-gray-100 py-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-navy hover:bg-slate-50 hover:text-brand transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#contact" className={linkClass}>{tr.nav.contact}</Link>
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
                  onClick={() => setLang(l)}
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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'} bg-white`}>
        <div className="px-5 py-5 flex flex-col gap-1">

          {/* Mobile lang toggle */}
          <div className="flex items-center gap-2 px-2 mb-3">
            <span className="text-xs text-slate-400 font-medium">{tr.nav.language}:</span>
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              {(['en', 'tr'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-bold tracking-widest uppercase transition-colors ${
                    lang === l ? 'bg-brand text-white' : 'text-slate-500 hover:text-navy'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">{tr.nav.whoWeAre}</p>
          {aboutLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy font-medium py-2 px-2 rounded-lg hover:bg-gray-50 hover:text-brand transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-gray-100 my-2" />

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">{tr.nav.ourService}</p>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy font-medium py-2 px-2 rounded-lg hover:bg-gray-50 hover:text-brand transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-gray-100 my-2" />

          {[
            { label: tr.nav.contact, href: '/#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-navy font-medium py-2.5 px-2 rounded-lg hover:bg-gray-50 hover:text-brand transition-colors text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="tel:+902163560664"
            className="flex items-center gap-2 px-2 py-2 text-slate-500 text-sm font-medium"
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
