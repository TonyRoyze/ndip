"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useAccessibility } from "@/hooks/use-accessibility"
import { SearchPrompt } from "@/components/search-prompt"
import { announcements, featuredPrograms, quickAccessItems, sections, uiText } from "@/lib/portal-content"
import { AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react"

import { SkipNavLink } from "@/components/skip-navigation"

function QuickAccessCard({
  item,
}: {
  item: (typeof quickAccessItems)[0]
}) {
  const { language } = useAccessibility()
  const Icon = item.icon

  return (
    <Link href={item.href}>
      <Card className="h-full cursor-pointer transition-all hover:shadow-md hover:border-primary/50 group">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="p-2 rounded-lg bg-muted">
              <Icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <Badge variant="outline" className="uppercase text-xs">
              {item.shortcut}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-base mb-1 group-hover:text-primary transition-colors">
            {item.label[language]}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {item.description[language]}
          </CardDescription>
          <div className="mt-3 flex items-center text-xs text-primary font-medium">
            {uiText.learnMore[language]} <ChevronRight className="h-3 w-3 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function AnnouncementCard({
  title,
  date,
  summary,
}: {
  title: string
  date: string
  summary: string
}) {
  return (
    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium line-clamp-2">{title}</CardTitle>
        <p className="text-xs text-muted-foreground">{date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {summary}
        </p>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  const { language } = useAccessibility()
  const home = sections.home

  return (
    <div className="min-h-screen">
      <SkipNavLink href="#main-content">{uiText.skipToMain[language]}</SkipNavLink>

      <section className="bg-primary/5 py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{home.title[language]}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {home.summary[language]}
          </p>

          <SearchPrompt className="max-w-2xl mx-auto" />
        </div>
      </section>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <section aria-labelledby="quick-access-heading" className="mb-12">
          <h2 id="quick-access-heading" className="text-2xl font-semibold mb-6">
            {uiText.quickAccessTitle[language]}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickAccessItems.map((item) => (
              <QuickAccessCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          <section
            aria-labelledby="announcements-heading"
            className="lg:col-span-2"
          >
            <h2 id="announcements-heading" className="text-2xl font-semibold mb-6">
              {uiText.announcementsTitle[language]}
            </h2>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <AnnouncementCard key={index} {...announcement} />
              ))}
            </div>
          </section>

          <aside aria-labelledby="emergency-heading" className="lg:col-span-1">
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  {uiText.emergencyTitle[language]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">National Helpline</p>
                  <a
                    href="tel:1926"
                    className="text-2xl font-bold text-destructive hover:underline"
                  >
                    1926
                  </a>
                  <p className="text-sm text-muted-foreground">24/7</p>
                </div>
                <div>
                  <p className="font-medium">Emergency Services</p>
                  <a
                    href="tel:119"
                    className="text-2xl font-bold text-destructive hover:underline"
                  >
                    119
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Police / Ambulance
                  </p>
                </div>
                <Button variant="destructive" className="w-full" asChild>
                  <a href="tel:1926">{uiText.callNow[language]}</a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>

        <section aria-labelledby="featured-heading" className="mt-12">
          <h2 id="featured-heading" className="text-2xl font-semibold mb-6">
            {uiText.featuredTitle[language]}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {featuredPrograms.map((program) => (
              <div key={program} className="flex items-start gap-3 rounded-md border p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium">{program}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
