"use client"

import * as React from "react"
import type { Language } from "@/lib/portal-content"

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
  resetPreferences: () => void
}

export type AccessibilityContextValue = AccessibilityState & AccessibilityActions

const AccessibilityContext = React.createContext<AccessibilityContextValue | null>(null)

const STORAGE_KEY = "ndip-accessibility"

const defaultState: AccessibilityState = {
  fontSize: "default",
  contrastMode: "normal",
  lowStressMode: false,
  viMode: false,
  ttsEnabled: false,
  language: "en",
}

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

function getReadablePageText() {
  const main = document.querySelector("main")
  const source = main ?? document.body
  return source.textContent?.replace(/\s+/g, " ").trim() ?? ""
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AccessibilityState>(() => {
    const stored = getStoredState()
    return {
      ...defaultState,
      ...stored,
    }
  })

  React.useEffect(() => {
    storeState(state)
  }, [state])

  React.useEffect(() => {
    const root = document.documentElement
    root.lang = state.language
    root.dataset.fontSize = state.fontSize
    root.dataset.contrast = state.contrastMode
    root.dataset.lowStress = String(state.lowStressMode)
    root.dataset.viMode = String(state.viMode)
  }, [state.fontSize, state.contrastMode, state.lowStressMode, state.viMode, state.language])

  React.useEffect(() => {
    if (!("speechSynthesis" in window)) return

    window.speechSynthesis.cancel()

    if (!state.ttsEnabled) return

    const text = getReadablePageText()
    if (!text) return

    const utterance = new SpeechSynthesisUtterance(text.slice(0, 4500))
    utterance.lang =
      state.language === "si" ? "si-LK" : state.language === "ta" ? "ta-LK" : "en-US"
    utterance.rate = state.lowStressMode ? 0.85 : 0.95
    window.speechSynthesis.speak(utterance)

    return () => {
      window.speechSynthesis.cancel()
    }
  }, [state.ttsEnabled, state.language, state.lowStressMode])

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

  const resetPreferences = React.useCallback(() => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY)
      window.speechSynthesis?.cancel()
    }
    setState(defaultState)
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
        resetPreferences,
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
