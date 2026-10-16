'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function WhoWeArePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/who-we-are/about-us')
  }, [router])

  return null
}
