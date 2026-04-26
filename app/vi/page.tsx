"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CrisisSupportButton } from "@/components/crisis-support-modal"
import { useAccessibility } from "@/hooks/use-accessibility"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"
import { navigationItems, type NavigationItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { Mic, MicOff, ArrowRight } from "lucide-react"

function filterItems(query: string, items: NavigationItem[]): NavigationItem[] {
  if (!query.trim()) return items
  const lower = query.toLowerCase()
  return items.filter(
    (item) =>
      item.label.en.toLowerCase().includes(lower) ||
      item.label.si.includes(lower) ||
      item.label.ta.includes(lower)
  )
}

export default function VIHomePage() {
  const [query, setQuery] = React.useState("")
  const [focusedIndex, setFocusedIndex] = React.useState(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const { language } = useAccessibility()
  const {
    transcript,
    interimTranscript,
    isListening,
    isSupported: isSpeechSupported,
    startListening,
    stopListening,
  } = useSpeechRecognition({
    lang: language === "si" ? "si-LK" : language === "ta" ? "ta-LK" : "en-US",
  })

  const filteredItems = React.useMemo(
    () => filterItems(query || transcript, navigationItems),
    [query, transcript]
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setFocusedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev
        )
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0))
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        e.preventDefault()
        window.location.href = filteredItems[focusedIndex].href
      }
    },
    [focusedIndex, filteredItems]
  )

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const welcomeText = {
    en: {
      heading: "Welcome to NDIP",
      subheading: "Type what you need below, then press Enter",
      resultsHeading: "RESULTS",
      noResults: "No results found",
      shortcutHint:
        "Press the letter in brackets to jump to that section",
      navigateHint: "Use arrow keys to navigate results",
    },
    si: {
      heading: "NDIP වෙත මාත පිට",
      subheading: "ඔබට අවශ ය න ම ඔබ යට යට ල බ න ත ව ත ල බ න ත ය",
      resultsHeading: "ප ල ප",
      noResults: "ප ල ප ස ම න",
      shortcutHint: "වක ෂ ය ප ර ම ග ත ල ද බ ල න ල බ න ත ය",
      navigateHint: "ඊ ත ල ක ය ප ර ම ග ත ක ර න ත ය",
    },
    ta: {
      heading: "NDIP க்கு வரவேற்பு",
      subheading: "நீங்கள் தேவையானதை கீழே தட்டச்சு செய்யவும்",
      resultsHeading: "முடிவுகள்",
      noResults: "முடிவுகள் எதுவும் இல்லை",
      shortcutHint: "துணுக்குக்கான எழுத்தை அழுத்தவும்",
      navigateHint: "முடிவுகளை ஃப okey கொண்டு வழிசெலுத்தவும்",
    },
  }

  const text = welcomeText[language]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="border-b-2 border-black bg-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/vi" className="font-bold text-xl">
                NDIP-VI
              </Link>
              <span className="text-sm text-muted-foreground">
                Visual Impairment Mode
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CrisisSupportButton />
              <LanguageSwitcher />
            </div>
          </div>

          <nav aria-label="Main navigation" className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-base font-medium border-2 border-black hover:bg-black hover:text-white"
                  >
                    [{item.shortcut}] {item.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 border-b-2 border-black pb-4">
            {text.heading}
          </h1>
          <p className="text-xl mb-8">{text.subheading}</p>

          <div className="mb-8">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                type="text"
                value={query || interimTranscript}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setFocusedIndex(-1)
                }}
                onKeyDown={handleKeyDown}
                className="h-14 text-xl border-2 border-black"
                placeholder="..."
                aria-label="Search"
              />
              {isSpeechSupported && (
                <Button
                  variant={isListening ? "default" : "outline"}
                  className="h-14 px-4 border-2 border-black"
                  onClick={isListening ? stopListening : startListening}
                >
                  {isListening ? (
                    <Mic className="h-6 w-6 animate-pulse" />
                  ) : (
                    <MicOff className="h-6 w-6" />
                  )}
                </Button>
              )}
            </div>
            <p className="mt-2 text-sm">
              {text.shortcutHint}. {text.navigateHint}.
            </p>
          </div>

          <section aria-labelledby="results-heading">
            <h2 id="results-heading" className="text-xl font-bold mb-4 border-b border-black pb-2">
              {text.resultsHeading}
            </h2>

            <div role="listbox" aria-label="Results">
              {filteredItems.length === 0 ? (
                <p className="text-xl py-8 text-center border-2 border-black">
                  {text.noResults}: {query || interimTranscript}
                </p>
              ) : (
                filteredItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "block border-2 border-black p-4 mb-2 text-xl",
                      "hover:bg-black hover:text-white",
                      focusedIndex === index && "bg-black text-white",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    )}
                    onMouseEnter={() => setFocusedIndex(index)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">[{item.shortcut}]</span>
                      <span className="flex-1 px-4">{item.label[language]}</span>
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground">
                      {item.description[language]}
                    </p>
                  </Link>
                ))
              )}
            </div>
          </section>
        </section>
      </main>

      <footer className="border-t-2 border-black bg-white">
        <div className="container mx-auto px-4 py-8 text-center">
          <Separator className="bg-black mb-4" />
          <p className="text-base font-bold mb-2">
            National Disability Information Portal
          </p>
          <p className="text-sm">
            Ministry of Rural Development, Social Security and Community Empowerment
          </p>
          <div className="mt-4 p-4 bg-black text-white inline-block">
            <p className="text-sm font-medium">Emergency Hotline</p>
            <a href="tel:1926" className="text-2xl font-bold hover:underline">
              1926
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}