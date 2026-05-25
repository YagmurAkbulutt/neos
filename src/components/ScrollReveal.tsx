'use client'

import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  from?: 'left' | 'right' | 'top' | 'bottom' | 'none'
  delay?: number
  duration?: number
  distance?: string
  className?: string
}

export default function ScrollReveal({
  children,
  from = 'bottom',
  delay = 0,
  duration = 700,
  distance = '30px',
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)'
    
    switch (from) {
      case 'left':
        return `translateX(-${distance})`
      case 'right':
        return `translateX(${distance})`
      case 'bottom':
        return `translateY(${distance})`
      case 'top':
        return `translateY(-${distance})`
      default:
        return 'none'
    }
  }

  const styles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: 'transform, opacity',
  }

  return (
    <div ref={ref} style={styles} className={className}>
      {children}
    </div>
  )
}
