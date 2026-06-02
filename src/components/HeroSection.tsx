'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { useLanguage } from '@/context/language'

export default function HeroSection() {
  const { tr } = useLanguage()
  const h = tr.hero

  const videoRefA = useRef<HTMLVideoElement>(null)
  const videoRefB = useRef<HTMLVideoElement>(null)
  const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A')
  const isTransitioningRef = useRef(false)

  const handleTimeUpdate = (id: 'A' | 'B') => {
    const videoA = videoRefA.current
    const videoB = videoRefB.current
    if (!videoA || !videoB) return

    const currentVideo = id === 'A' ? videoA : videoB
    const nextVideo = id === 'A' ? videoB : videoA

    // Sadece aktif olan video 19.0 saniyeye ulaştığında ve geçiş başlamadıysa
    if (activeVideo === id && currentVideo.currentTime >= 19.0 && !isTransitioningRef.current) {
      isTransitioningRef.current = true

      // Diğer videoyu 10. saniyeden başlat
      nextVideo.currentTime = 10
      nextVideo.play().then(() => {
        // Aktif videoyu değiştir (bu CSS ile cross-fade'i tetikler)
        setActiveVideo(id === 'A' ? 'B' : 'A')
      }).catch(() => {})

      // 1 saniyelik geçiş tamamlandığında eski videoyu durdur ve kilidi kaldır
      setTimeout(() => {
        if (currentVideo) {
          currentVideo.pause()
        }
        isTransitioningRef.current = false
      }, 1000)
    }
  }

  const handleLoadedMetadata = (id: 'A' | 'B') => {
    const video = id === 'A' ? videoRefA.current : videoRefB.current
    if (!video) return

    video.currentTime = 10
    
    // Sayfa ilk yüklendiğinde A videosunu otomatik başlat
    if (id === 'A' && activeVideo === 'A') {
      video.play().catch(() => {})
    }
  }

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      <Image
        src="/ggg.jpeg"
        alt="Aerial view of container ship at sea"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />
      
      {/* Video A */}
      <video
        ref={videoRefA}
        muted
        playsInline
        onTimeUpdate={() => handleTimeUpdate('A')}
        onLoadedMetadata={() => handleLoadedMetadata('A')}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          activeVideo === 'A' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
        aria-hidden="true"
      >
        <source src="/hero2.MP4" type="video/mp4" />
      </video>

      {/* Video B */}
      <video
        ref={videoRefB}
        muted
        playsInline
        onTimeUpdate={() => handleTimeUpdate('B')}
        onLoadedMetadata={() => handleLoadedMetadata('B')}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          activeVideo === 'B' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
        aria-hidden="true"
      >
        <source src="/hero2.MP4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-navy/62 z-20" />
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-navy/80 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-deep/70 to-transparent z-20" />

      {/* Content wrapper */}
      <div className="relative z-30 text-center text-white px-5 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2 text-sm font-medium mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse-dot" />
          {h.badge}
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.06] tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {h.title1}
          <br />
          <span className="text-brand">{h.titleAccent}</span> {h.title2}
        </h1>

        <p
          className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {h.subtitle}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="#contact"
            className="group bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-brand/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            {h.cta1}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#services"
            className="border border-white/25 hover:border-white/55 hover:bg-white/8 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 backdrop-blur-sm w-full sm:w-auto inline-flex items-center justify-center"
          >
            {h.cta2}
          </a>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-30">
        <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-medium">{h.scroll}</span>
        <div className="relative w-px h-10 bg-white/10 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-white/60 to-transparent rounded-full animate-scroll-drop" />
        </div>
      </div>
    </section>
  )
}

