'use client'

import { useState, type FormEvent } from 'react'
import { useLanguage } from '@/context/language'

const turkishPortsEN = ['Istanbul', 'Derince / Kocaeli', 'Izmit', 'Gemlik', 'Bandırma', 'Izmir', 'Aliağa', 'Mersin', 'Iskenderun', 'Antalya', 'Samsun', 'Trabzon', 'Zonguldak', 'Bodrum', 'Marmaris', 'Other']
const turkishPortsTR = ['İstanbul', 'Derince / Kocaeli', 'İzmit', 'Gemlik', 'Bandırma', 'İzmir', 'Aliağa', 'Mersin', 'İskenderun', 'Antalya', 'Samsun', 'Trabzon', 'Zonguldak', 'Bodrum', 'Marmaris', 'Diğer']
const serviceTypesEN = ['Ship Agency', 'Husbandry', 'Crew Services', 'Customs Clearance', 'Port Dues', 'Bunkering / Provisions', 'Emergency']
const serviceTypesTR = ['Gemi Acenteliği', 'Husbandry', 'Mürettebat Hizmetleri', 'Gümrük İşlemleri', 'Liman Harçları', 'Yakıt / Kumanya', 'Acil']

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactSection() {
  const { lang, tr } = useLanguage()
  const c = tr.contact
  const l = c.labels

  const ports = lang === 'tr' ? turkishPortsTR : turkishPortsEN
  const serviceTypes = lang === 'tr' ? serviceTypesTR : serviceTypesEN

  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', port: '', service: '', vessel: '', eta: '', message: '' })

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

  const inputClass = 'w-full bg-white/6 border border-white/12 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 transition-all'

  const contactItems = [
    {
      label: l.phone,
      value: '+90 216 356 06 64',
      href: 'tel:+902163560664',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    },
    {
      label: l.email,
      value: 'info@neosmaritime.com',
      href: 'mailto:info@neosmaritime.com',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" /></svg>,
    },
    {
      label: l.office,
      value: l.officeValue,
      href: '#',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>,
    },
  ]

  return (
    <section id="contact" className="section-pad bg-navy">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{c.overline}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1]">{c.title}</h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">{c.subtitle}</p>

            <div className="flex flex-col gap-5">
              {contactItems.map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/6 group-hover:bg-brand/20 flex items-center justify-center text-brand transition-colors duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/35 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-brand transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-2xl p-7 backdrop-blur-sm">
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{l.successTitle}</h3>
                <p className="text-white/45 text-sm">{l.successSub}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.fullName} *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder={l.namePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.company} *</label>
                    <input name="company" required value={form.company} onChange={handle} placeholder={l.companyPlaceholder} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.emailField} *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle} placeholder={l.emailPlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.phoneField}</label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder={l.phonePlaceholder} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.portOfCall}</label>
                    <select name="port" value={form.port} onChange={handle} className={inputClass}>
                      <option value="">{l.selectPort}</option>
                      {ports.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.serviceType}</label>
                    <select name="service" value={form.service} onChange={handle} className={inputClass}>
                      <option value="">{l.selectService}</option>
                      {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.vessel}</label>
                    <input name="vessel" value={form.vessel} onChange={handle} placeholder={l.vesselPlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.eta}</label>
                    <input name="eta" type="date" value={form.eta} onChange={handle} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5 block">{l.message}</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder={l.messagePlaceholder} className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors duration-200 text-sm tracking-wide mt-1">
                  {status === 'sending' ? l.sending : l.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
