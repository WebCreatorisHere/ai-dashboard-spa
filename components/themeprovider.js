"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Avoid rendering anything theme-dependent before mount
  if (!isMounted) return null

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}