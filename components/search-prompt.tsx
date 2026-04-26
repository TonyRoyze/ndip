"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAccessibility } from "@/hooks/use-accessibility"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"
import { navigationItems, type NavigationItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { Search, Mic, MicOff, X } from "lucide-react"

interface SearchPromptProps {
  className?: string
}

function filterItems(query: string, items: NavigationItem[]): NavigationItem[] {
  if (!query.trim()) return items
  const lower = query.toLowerCase()
  return items.filter(
    (item) =>
      item.label.en.toLowerCase().includes(lower) ||
      item.label.si.includes(lower) ||
      item.label.ta.includes(lower) ||
      item.description.en.toLowerCase().includes(lower)
  )
}

export function SearchPrompt({ className }: SearchPromptProps) {
  const [query, setQuery] = React.useState("")
  const [focusedIndex, setFocusedIndex] = React.useState(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listRef = React.useRef<HTMLDivElement>(null)

  const { language } = useAccessibility()
  const {
    transcript,
    interimTranscript,
    isListening,
    isSupported: isSpeechSupported,
    startListening,
    stopListening,
  } = useSpeechRecognition({ lang: language === "si" ? "si-LK" : language === "ta" ? "ta-LK" : "en-US" })

  const displayQuery = query || interimTranscript || transcript
  const filteredItems = React.useMemo(
    () => filterItems(displayQuery, navigationItems),
    [displayQuery]
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
      } else if (e.key === "Escape") {
        setQuery("")
        setFocusedIndex(-1)
        inputRef.current?.blur()
      }
    },
    [focusedIndex, filteredItems]
  )

  React.useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[focusedIndex] as HTMLElement
      item?.scrollIntoView({ block: "nearest" })
    }
  }, [focusedIndex])

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Type here to search or press the microphone button..."
          value={displayQuery}
          onChange={(e) => {
            setQuery(e.target.value)
            setFocusedIndex(-1)
          }}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-24 h-12 text-base"
          aria-label="Search services"
          aria-controls="search-results"
          aria-autocomplete="list"
          aria-activedescendant={
            focusedIndex >= 0
              ? `result-${filteredItems[focusedIndex].id}`
              : undefined
          }
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
          {displayQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => {
                setQuery("")
                setFocusedIndex(-1)
              }}
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          {isSpeechSupported && (
            <Button
              variant={isListening ? "default" : "outline"}
              size="icon"
              className="h-8 w-8"
              onClick={isListening ? stopListening : startListening}
              aria-label={isListening ? "Stop listening" : "Start voice search"}
              aria-pressed={isListening}
            >
              {isListening ? (
                <Mic className="h-4 w-4 animate-pulse" />
              ) : (
                <MicOff className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>

      {displayQuery && (
        <div
          ref={listRef}
          id="search-results"
          role="listbox"
          aria-label="Search results"
          className="mt-2 border rounded-lg bg-background overflow-hidden"
        >
          {filteredItems.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No results found for &ldquo;{displayQuery}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={item.id}
                id={`result-${item.id}`}
                role="option"
                aria-selected={focusedIndex === index}
                className={cn(
                  "px-4 py-3 cursor-pointer transition-colors",
                  "flex items-center justify-between gap-4",
                  focusedIndex === index
                    ? "bg-muted"
                    : "hover:bg-muted/50"
                )}
                onClick={() => {
                  window.location.href = item.href
                }}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{item.label[language]}</div>
                  <div className="text-sm text-muted-foreground truncate">
                    {item.description[language]}
                  </div>
                </div>
                <Badge variant="outline" className="shrink-0 uppercase">
                  {item.shortcut}
                </Badge>
              </div>
            ))
          )}
        </div>
      )}

      <p className="mt-2 text-xs text-muted-foreground text-center">
        Use arrow keys to navigate, Enter to select, Esc to clear
      </p>
    </div>
  )
}