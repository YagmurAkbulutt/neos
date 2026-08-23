'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language'
import { contactPath } from '@/lib/routes'

export default function HeroSection() {
  const { lang, tr } = useLanguage()
  const h = tr.hero
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Safety timeout: fade out loader after 3 seconds anyway,
    // to ensure user doesn't get stuck with a spinner if anything fails.
    const timer = setTimeout(() => {
      setVideoLoaded(true)
    }, 3000)

    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setVideoLoaded(true)
        })
        .catch((error) => {
          console.log("Autoplay failed or blocked:", error)
          // Autoplay failed (e.g. low power mode), but we still hide loader
          // so they can see the first frame / fallback image
          setVideoLoaded(true)
        })
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[620px] flex items-center justify-center overflow-hidden">
      {/* Background Fallback Image */}

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlay={() => setVideoLoaded(true)}
        onLoadedData={() => setVideoLoaded(true)}
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        aria-hidden="true"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Premium Loader */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-[15] bg-navy-deep transition-all duration-700 ${videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-white/5" />
            <div className="absolute inset-0 rounded-full border-4 border-brand border-t-transparent animate-spin" />
            <div className="absolute inset-3 rounded-full bg-brand/10 animate-pulse" />
          </div>
          <span className="text-[10px] text-white/45 tracking-[0.25em] uppercase font-bold animate-pulse">
            NEOS
          </span>
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-navy/40 z-20" />
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-navy/50 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-deep/45 to-transparent z-20" />

      {/* Content wrapper */}
      <div className="relative z-30 text-center text-white px-5 max-w-5xl mx-auto">
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
          <Link
            href={contactPath(lang)}
            className="group border border-white/25 hover:border-white/55 hover:bg-white/8 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            {h.cta1}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href="#services"
            className="border border-white/25 hover:border-white/55 hover:bg-white/8 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 w-full sm:w-auto inline-flex items-center justify-center"
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
