"use client"

import * as React from "react"

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
  resultIndex: number
}

interface SpeechRecognitionResultList extends Iterable<SpeechRecognitionResult> {
  length: number
  item(index: number): SpeechRecognitionResult
  [index: number]: SpeechRecognitionResult
}

interface SpeechRecognitionResult extends Iterable<SpeechRecognitionAlternative> {
  length: number
  item(index: number): SpeechRecognitionAlternative
  [index: number]: SpeechRecognitionAlternative
  isFinal: boolean
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
  message: string
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition
    webkitSpeechRecognition: new () => SpeechRecognition
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  maxAlternatives: number
  onaudioend: ((event: Event) => void) | null
  onend: ((event: Event) => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
  onnomatch: ((event: Event) => void) | null
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onsoundend: ((event: Event) => void) | null
  onspeechend: ((event: Event) => void) | null
  onstart: ((event: Event) => void) | null
  abort(): void
  start(): void
  stop(): void
}

interface UseSpeechRecognitionOptions {
  lang?: string
}

interface UseSpeechRecognitionReturn {
  transcript: string
  interimTranscript: string
  isListening: boolean
  isSupported: boolean
  error: string | null
  startListening: () => void
  stopListening: () => void
  resetTranscript: () => void
}

const SpeechRecognitionAPI =
  typeof window !== "undefined" &&
  (window.SpeechRecognition || window.webkitSpeechRecognition)

type webkitSpeechRecognition = {
  new (): SpeechRecognition
}

type SpeechRecognitionType =
  | (new () => SpeechRecognition)
  | webkitSpeechRecognition

function createRecognition(
  Ctor: SpeechRecognitionType
): SpeechRecognition {
  return new Ctor()
}

export function useSpeechRecognition(
  options: UseSpeechRecognitionOptions = {}
): UseSpeechRecognitionReturn {
  const { lang = "en-US" } = options

  const [transcript, setTranscript] = React.useState("")
  const [interimTranscript, setInterimTranscript] = React.useState("")
  const [isListening, setIsListening] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const recognitionRef = React.useRef<SpeechRecognition | null>(null)

  const isSupported = React.useMemo(
    () => typeof SpeechRecognitionAPI !== "undefined",
    []
  )

  const startListening = React.useCallback(() => {
    if (!isSupported || !recognitionRef.current) {
      setError("Speech recognition is not supported in this browser.")
      return
    }

    setError(null)
    setTranscript("")
    setInterimTranscript("")
    setIsListening(true)

    try {
      recognitionRef.current.start()
    } catch (err) {
      setIsListening(false)
      setError("Failed to start speech recognition.")
      console.error(err)
    }
  }, [isSupported])

  const stopListening = React.useCallback(() => {
    if (!recognitionRef.current) return

    setIsListening(false)
    try {
      recognitionRef.current.stop()
    } catch (err) {
      console.error(err)
    }
  }, [])

  const resetTranscript = React.useCallback(() => {
    setTranscript("")
    setInterimTranscript("")
  }, [])

  React.useEffect(() => {
    if (!isSupported) return

    const RecognitionCtor = SpeechRecognitionAPI as unknown as SpeechRecognitionType
    const recognition = createRecognition(RecognitionCtor)
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = lang
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsListening(false)
      if (event.error !== "no-speech" && event.error !== "aborted") {
        setError(`Speech recognition error: ${event.error}`)
      }
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = ""
      let interim = ""

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalTranscript += result[0].transcript
        } else {
          interim += result[0].transcript
        }
      }

      if (finalTranscript) {
        setTranscript((prev) => prev + finalTranscript)
        setInterimTranscript("")
      } else {
        setInterimTranscript(interim)
      }
    }

    recognitionRef.current = recognition

    return () => {
      try {
        recognition.abort()
      } catch {
        // ignore
      }
    }
  }, [isSupported, lang])

  return {
    transcript,
    interimTranscript,
    isListening,
    isSupported,
    error,
    startListening,
    stopListening,
    resetTranscript,
  }
}

export function useTextToSpeech() {
  const isSupported = React.useMemo(
    () => typeof window !== "undefined" && "speechSynthesis" in window,
    []
  )

  const speak = React.useCallback((text: string, lang: string = "en-US") => {
    if (!isSupported) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance.rate = 0.9
    window.speechSynthesis.speak(utterance)
  }, [isSupported])

  const stop = React.useCallback(() => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
  }, [isSupported])

  return {
    speak,
    stop,
    isSpeaking: false,
    isSupported,
  }
}