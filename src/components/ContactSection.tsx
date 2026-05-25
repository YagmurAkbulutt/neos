'use client'

import { useState, useEffect, useRef, type FormEvent } from 'react'
import { useLanguage } from '@/context/language'
import ScrollReveal from '@/components/ScrollReveal'

const serviceTypesEN = ['Port Agency Service', 'Straits Agency Service', 'Shipyard Agency Service', 'Husbandry Agency Service', 'Protecting Agency Service', 'LSD Work & Materials Supply', 'Emergency']
const serviceTypesTR = ['Liman Acenteliği Hizmeti', 'Boğaz Acenteliği Hizmeti', 'Tersane Acenteliği Hizmeti', 'Husbandry Acenteliği Hizmeti', 'Koruyucu Acentelik Hizmeti', 'LSD İşleri ve Malzeme Tedariki', 'Acil']

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactSection({ isPage = false }: { isPage?: boolean }) {
  const { lang, tr } = useLanguage()
  const c = tr.contact
  const l = c.labels

  const serviceTypes = lang === 'tr' ? serviceTypesTR : serviceTypesEN

  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
  }

  const inputClass = 'w-full bg-slate-50/50 border border-slate-200 text-navy placeholder:text-slate-400 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all'

  const contactItems = [
    {
      label: l.phone,
      value: '+90 216 356 06 64',
      href: 'tel:+902163560664',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    },
    {
      label: l.email,
      value: 'agency@neosmaritime.com',
      href: 'mailto:agency@neosmaritime.com',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" /></svg>,
    },
    {
      label: l.office,
      hasIndividualHover: true,
      value: (
        <span className="flex flex-col gap-1.5">
          <span className="leading-relaxed hover:text-brand text-slate-700 transition-colors duration-200">
            <strong className="text-navy/60 font-semibold">{l.offices[0].label}:</strong> {l.offices[0].address}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Caddebostan Mah. Ömerpaşa Sok. No 4 Daire 7 Kadıköy İstanbul')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-5 h-5 ml-1.5 rounded bg-slate-100 hover:bg-brand/10 border border-slate-200 hover:border-brand/30 text-brand transition-all duration-200 align-middle"
              title={lang === 'tr' ? 'Haritada Göster' : 'Show on Map'}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </span>
          <span className="leading-relaxed hover:text-brand text-slate-700 transition-colors duration-200">
            <strong className="text-navy/60 font-semibold">{l.offices[1].label}:</strong> {l.offices[1].address}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Mimar Sinan Mah. Eşref Bitlis Cd. No:273, Körfez, Kocaeli')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-5 h-5 ml-1.5 rounded bg-slate-100 hover:bg-brand/10 border border-slate-200 hover:border-brand/30 text-brand transition-all duration-200 align-middle"
              title={lang === 'tr' ? 'Haritada Göster' : 'Show on Map'}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </span>
        </span>
      ),
      href: '#',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>,
    },
  ]

  return (
    <section id="contact" className="section-pad bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <ScrollReveal from="left">
            <div>
              {!isPage && (
                <>
                  <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{c.overline}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5 leading-[1.1]">{c.title}</h2>
                </>
              )}
              {isPage && (
                <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-5 leading-[1.1]">{c.title}</h2>
              )}
              <p className="text-slate-500 text-lg leading-relaxed mb-10">{c.subtitle}</p>

              <div className="flex flex-col gap-5">
                {contactItems.map((item) => {
                  const isLink = item.href && item.href !== '#';
                  const content = (
                    <>
                      <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-brand/10 flex items-center justify-center text-brand transition-colors duration-200 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="pt-0.5">
                        <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                        <div className={`text-slate-700 text-sm font-medium transition-colors ${item.hasIndividualHover ? '' : 'group-hover:text-brand'}`}>{item.value}</div>
                      </div>
                    </>
                  );

                  if (isLink) {
                     return (
                      <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={item.label} className="flex items-start gap-4 group">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal from="right">
            <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm">
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-navy font-bold text-xl mb-2">{l.successTitle}</h3>
                  <p className="text-slate-500 text-sm">{l.successSub}</p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.fullName} *</label>
                      <input name="name" required value={form.name} onChange={handle} placeholder={l.namePlaceholder} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.company} *</label>
                      <input name="company" required value={form.company} onChange={handle} placeholder={l.companyPlaceholder} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.emailField} *</label>
                      <input name="email" type="email" required value={form.email} onChange={handle} placeholder={l.emailPlaceholder} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.phoneField}</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder={l.phonePlaceholder} className={inputClass} />
                    </div>
                  </div>
                  <div className="relative" ref={dropdownRef}>
                    <label className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.serviceType}</label>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className="w-full bg-slate-50/50 border border-slate-200 text-navy rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all flex items-center justify-between cursor-pointer text-left h-11"
                    >
                      <span className={form.service ? 'text-navy font-medium' : 'text-slate-400'}>
                        {form.service || l.selectService}
                      </span>
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-brand' : ''}`}
                        fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-30 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 flex flex-col gap-0.5 max-h-64 overflow-y-auto overflow-x-hidden custom-scrollbar animate-menu-entry">
                        <button
                          type="button"
                          onClick={() => {
                            setForm((prev) => ({ ...prev, service: '' }))
                            setDropdownOpen(false)
                          }}
                          className={`w-full text-left px-3.5 py-2.5 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 cursor-pointer flex items-center group ${
                            form.service === ''
                              ? 'text-brand bg-brand/5'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-brand'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-brand mr-2 transition-all duration-300 flex-shrink-0 ${
                            form.service === ''
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                          }`} />
                          <span className="transition-transform duration-300 group-hover:translate-x-0.5 whitespace-nowrap truncate">
                            {l.selectService}
                          </span>
                        </button>
                        {serviceTypes.map((s) => {
                          const isSelected = form.service === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => {
                                setForm((prev) => ({ ...prev, service: s }))
                                setDropdownOpen(false)
                              }}
                              className={`w-full text-left px-3.5 py-2.5 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 cursor-pointer flex items-center group ${
                                isSelected
                                  ? 'text-brand bg-brand/5'
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-brand'
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full bg-brand mr-2 transition-all duration-300 flex-shrink-0 ${
                                isSelected
                                  ? 'opacity-100 scale-100'
                                  : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                              }`} />
                              <span className="transition-transform duration-300 group-hover:translate-x-0.5 whitespace-nowrap truncate">
                                {s}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.message}</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder={l.messagePlaceholder} className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" disabled={status === 'sending'} className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors duration-200 text-sm tracking-wide mt-1">
                    {status === 'sending' ? l.sending : l.submit}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
