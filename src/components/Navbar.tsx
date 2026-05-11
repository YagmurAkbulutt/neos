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
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
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
            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                className={`${linkClass} flex items-center gap-1.5 py-1`}
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                {tr.nav.services}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-58 bg-white rounded-2xl shadow-2xl shadow-gray-200/80 border border-gray-100 py-2 z-50">
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
              )}
            </div>

            <a href="/#ports" className={linkClass}>{tr.nav.ports}</a>
            <a href="/#about" className={linkClass}>{tr.nav.about}</a>
            <a href="/#contact" className={linkClass}>{tr.nav.contact}</a>
          </div>

          {/* Right: lang toggle + phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <div className="flex items-center gap-1 rounded-lg overflow-hidden border border-white/15">
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

            <a
              href={`tel:${tr.nav.phone.replace(/\s/g, '')}`}
              className={`text-sm font-semibold transition-colors ${
                scrolled ? 'text-navy/70 hover:text-brand' : 'text-white/60 hover:text-white'
              }`}
            >
              {tr.nav.phone}
            </a>
            <a
              href="/#contact"
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200 whitespace-nowrap"
            >
              {tr.nav.requestService}
            </a>
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

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">{tr.nav.services}</p>
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
            { label: tr.nav.ports, href: '/#ports' },
            { label: tr.nav.about, href: '/#about' },
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

          <a
            href="/#contact"
            className="mt-2 bg-brand hover:bg-brand-dark text-white font-semibold px-4 py-3 rounded-xl text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {tr.nav.requestService}
          </a>
        </div>
      </div>
    </nav>
  )
}
