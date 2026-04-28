"use client"

import * as React from "react"

export type Language = "en" | "si" | "ta"

export type FontSize = "default" | "large" | "extra-large"

export type ContrastMode = "normal" | "high-contrast-light" | "high-contrast-dark"

export interface AccessibilityState {
  fontSize: FontSize
  contrastMode: ContrastMode
  lowStressMode: boolean
  viMode: boolean
  ttsEnabled: boolean
  language: Language
}

export interface AccessibilityActions {
  setFontSize: (size: FontSize) => void
  setContrastMode: (mode: ContrastMode) => void
  toggleLowStressMode: () => void
  toggleViMode: () => void
  toggleTts: () => void
  setLanguage: (lang: Language) => void
}

export type AccessibilityContextValue = AccessibilityState & AccessibilityActions

const AccessibilityContext = React.createContext<AccessibilityContextValue | null>(null)

const STORAGE_KEY = "ndip-accessibility"

function getStoredState(): Partial<AccessibilityState> {
  if (typeof window === "undefined") return {}
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function storeState(state: AccessibilityState) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AccessibilityState>(() => {
    const stored = getStoredState()
    return {
      fontSize: stored.fontSize ?? "default",
      contrastMode: stored.contrastMode ?? "normal",
      lowStressMode: stored.lowStressMode ?? false,
      viMode: stored.viMode ?? false,
      ttsEnabled: stored.ttsEnabled ?? false,
      language: stored.language ?? "en",
    }
  })

  React.useEffect(() => {
    storeState(state)
  }, [state])

  const setFontSize = React.useCallback((size: FontSize) => {
    setState((prev) => ({ ...prev, fontSize: size }))
  }, [])

  const setContrastMode = React.useCallback((mode: ContrastMode) => {
    setState((prev) => ({ ...prev, contrastMode: mode }))
  }, [])

  const toggleLowStressMode = React.useCallback(() => {
    setState((prev) => ({ ...prev, lowStressMode: !prev.lowStressMode }))
  }, [])

  const toggleViMode = React.useCallback(() => {
    setState((prev) => ({ ...prev, viMode: !prev.viMode }))
  }, [])

  const toggleTts = React.useCallback(() => {
    setState((prev) => ({ ...prev, ttsEnabled: !prev.ttsEnabled }))
  }, [])

  const setLanguage = React.useCallback((lang: Language) => {
    setState((prev) => ({ ...prev, language: lang }))
  }, [])

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        setFontSize,
        setContrastMode,
        toggleLowStressMode,
        toggleViMode,
        toggleTts,
        setLanguage,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = React.useContext(AccessibilityContext)
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider")
  }
  return context
}

export function useFontSizeClass() {
  const { fontSize } = useAccessibility()
  return fontSize === "default"
    ? "text-base"
    : fontSize === "large"
    ? "text-lg"
    : "text-xl"
}