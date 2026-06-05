'use client'

import { useLanguage } from '@/context/language'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactSection({ isPage = false }: { isPage?: boolean }) {
  const { lang, tr } = useLanguage()
  const c = tr.contact
  const l = c.labels

  const contactItems = [
    {
      label: l.phone,
      value: '+90 216 356 06 64',
      href: 'tel:+902163560664',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: l.email,
      value: 'agency@neosmaritime.com',
      href: 'mailto:agency@neosmaritime.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="section-pad bg-slate-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal from="bottom">
          <div className="flex flex-col text-center max-w-2xl mx-auto mb-10">
            {!isPage && (
              <>
                <span className="inline-block text-brand text-sm font-semibold tracking-widest uppercase mb-3">{c.overline}</span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5 leading-[1.1]">{c.title}</h2>
              </>
            )}
            {isPage && (
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-5 leading-[1.1]">{c.title}</h2>
            )}
            <p className="text-slate-500 text-lg leading-relaxed">{c.subtitle}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal from="bottom" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white border border-slate-100 rounded-2xl mb-12 shadow-sm max-w-2xl mx-auto">
            {contactItems.map((item) => {
              const isLink = item.href && item.href !== '#';
              const content = (
                <>
                  <div className="w-10 h-10 rounded-xl bg-brand/5 group-hover:bg-brand/10 flex items-center justify-center text-brand transition-colors duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="pt-0.5 min-w-0">
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-slate-700 text-xs sm:text-sm font-semibold truncate group-hover:text-brand transition-colors duration-200">{item.value}</div>
                  </div>
                </>
              );

              if (isLink) {
                return (
                  <a key={item.label} href={item.href} className="flex items-center gap-3 group">
                    {content}
                  </a>
                );
              }

              return (
                <div key={item.label} className="flex items-center gap-3 group">
                  {content}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal from="bottom" delay={200}>
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">
              {lang === 'tr' ? 'Ofislerimiz' : 'Our Offices'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {l.offices.map((office: any, index: number) => {
                const isHQ = index === 0;
                const mapQuery = index === 0 
                  ? 'Caddebostan Mah. Ömerpaşa Sok. No 4 Daire 7 Kadıköy İstanbul' 
                  : 'CG İş Merkezi Mimar Sinan Mah. Eşref Bitlis Caddesi No 273 Daire 10 Yarımca Kocaeli';
                
                return (
                  <div 
                    key={office.label} 
                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-[3px] ${isHQ ? 'bg-brand' : 'bg-slate-300 group-hover:bg-brand/70'} transition-colors duration-300`} />
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isHQ 
                            ? 'bg-brand/10 text-brand' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-brand/5 group-hover:text-brand'
                        } transition-colors duration-300`}>
                          {isHQ ? (lang === 'tr' ? 'Merkez' : 'HQ') : (lang === 'tr' ? 'Şube' : 'Branch')}
                        </span>
                        <div className="text-slate-300 group-hover:text-brand/20 transition-colors duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
                          </svg>
                        </div>
                      </div>

                      <h4 className="text-navy font-bold text-sm mb-3 group-hover:text-brand transition-colors duration-300">
                        {office.label}
                      </h4>

                      <div className="space-y-2 text-slate-500 text-xs leading-relaxed">
                        <div className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-brand/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          </svg>
                          <span>{office.address}</span>
                        </div>
                        
                        <a 
                          href={`tel:${office.phone.replace(/\s+/g, '')}`} 
                          className="flex items-center gap-2 hover:text-brand transition-colors duration-200"
                        >
                          <svg className="w-3.5 h-3.5 text-brand/70 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="font-semibold">{office.phone}</span>
                        </a>

                        <a 
                          href={`mailto:${office.email}`} 
                          className="flex items-center gap-2 hover:text-brand transition-colors duration-200"
                        >
                          <svg className="w-3.5 h-3.5 text-brand/70 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                          </svg>
                          <span className="truncate">{office.email}</span>
                        </a>
                      </div>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-xl border text-center text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 bg-slate-50 border-slate-200/60 text-slate-600 hover:bg-brand hover:text-white hover:border-brand shadow-sm hover:shadow-md"
                    >
                      <span>{lang === 'tr' ? 'Haritada Göster' : 'Show on Map'}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

