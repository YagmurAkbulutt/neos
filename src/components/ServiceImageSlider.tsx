'use client'

import Image from 'next/image'
import type { SlideImage } from '@/lib/services'

export default function ServiceImageSlider({ images, dark = false }: { images: SlideImage[]; dark?: boolean }) {
  if (images.length === 0) return null

  const minimumSlides = 8
  const repeatCount = Math.max(1, Math.ceil(minimumSlides / images.length))
  const baseTrack = Array.from({ length: repeatCount }, () => images).flat()
  const track = [...baseTrack, ...baseTrack]
  const animationDuration = `${baseTrack.length * 6}s`

  return (
    <div className={`relative overflow-hidden border-y transition-all duration-300 ${
      dark
        ? 'bg-transparent py-6 border-white/10'
        : 'bg-white py-10 border-gray-100'
    }`}>
      {/* Keyframes scoped to this component — guaranteed regardless of CSS pipeline */}
      <style>{`
        @keyframes neos-slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Left fade */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-gradient-to-r to-transparent ${
        dark ? 'from-navy' : 'from-white'
      }`} />
      {/* Right fade */}
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-gradient-to-l to-transparent ${
        dark ? 'from-navy' : 'from-white'
      }`} />

      {/* Top orange accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5
                      bg-gradient-to-r from-transparent via-brand to-transparent" />

      {/* Scrolling track */}
      <div
        className="flex gap-5 w-max"
        style={{ animation: `neos-slide ${animationDuration} linear infinite` }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running'
        }}
      >
        {track.map((img, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md
                       hover:shadow-xl transition-shadow duration-300"
            style={{ width: '320px', height: '220px' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: img.objectPosition ?? 'center' }}
              quality={75}
              sizes="320px"
            />
            <div className="absolute inset-0 bg-navy/15 group-hover:bg-navy/0
                            transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5
                      bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
    </div>
  )
}
