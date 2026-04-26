"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAccessibility, type Language } from "@/hooks/use-accessibility"

const languages: { value: Language; label: string; nativeLabel: string }[] = [
  { value: "en", label: "English", nativeLabel: "English" },
  { value: "si", label: "Sinhala", nativeLabel: "සිංහල" },
  { value: "ta", label: "Tamil", nativeLabel: "தமிழ்" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useAccessibility()
  const currentLang = languages.find((l) => l.value === language) ?? languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          <span className="mr-1">{currentLang.nativeLabel}</span>
          <span className="text-muted-foreground">({currentLang.label})</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => setLanguage(lang.value)}
            className="cursor-pointer"
            aria-current={language === lang.value ? "true" : undefined}
          >
            <span className="font-medium">{lang.nativeLabel}</span>
            <span className="ml-2 text-muted-foreground text-xs">
              {lang.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function useLanguage() {
  const { language } = useAccessibility()
  return language
}

export function useLocalizedString(
  strings: Record<Language, string>
): string {
  const { language } = useAccessibility()
  return strings[language] ?? strings.en
}