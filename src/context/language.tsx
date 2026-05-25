'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import { usePathname } from 'next/navigation'
import t, { type Lang, type Translations } from '@/i18n/translations'
import { getLanguageFromPath } from '@/lib/routes'

type LanguageCtx = {
  lang: Lang
  setLang: (l: Lang) => void
  tr: Translations
}

const LanguageContext = createContext<LanguageCtx>({
  lang: 'en',
  setLang: () => {},
  tr: t.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const pathname = usePathname()

  useEffect(() => {
    const pathLang = getLanguageFromPath(pathname)
    const timer = window.setTimeout(() => {
      try {
        if (pathLang) {
          setLangState(pathLang)
          localStorage.setItem('neos-lang', pathLang)
          return
        }

        const saved = localStorage.getItem('neos-lang') as Lang | null
        if (saved === 'en' || saved === 'tr') setLangState(saved)
      } catch {}
    }, 0)

    return () => window.clearTimeout(timer)
  }, [pathname])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('neos-lang', l) } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
