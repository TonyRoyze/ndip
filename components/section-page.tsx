"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CrisisSupportButton } from "@/components/crisis-support-modal"
import { useAccessibility } from "@/hooks/use-accessibility"
import { navigationItems } from "@/lib/navigation"
import { sections, type PortalSection, uiText } from "@/lib/portal-content"
import { ArrowRight, CheckCircle2, ChevronRight, FileText } from "lucide-react"

export function SectionPage({ section }: { section: PortalSection }) {
  const { language } = useAccessibility()

  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-foreground hover:underline">
              {sections.home.title[language]}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li aria-current="page" className="font-medium text-foreground">
            {section.title[language]}
          </li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article>
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {section.requirementIds.map((id) => (
                <Badge key={id} variant="outline">
                  {id}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">
              {section.title[language]}
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {section.summary[language]}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {section.id === "mental" || section.id === "help" ? (
                <CrisisSupportButton />
              ) : (
                <Button asChild>
                  <Link href="/apply-for-services">
                    Start guided support
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              )}
              <Button variant="outline" asChild>
                <Link href="/accessibility">Accessibility tools</Link>
              </Button>
            </div>
          </div>

          <section aria-labelledby="actions-heading" className="mb-10">
            <h2 id="actions-heading" className="mb-4 text-2xl font-semibold">
              Required User Actions
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {section.primaryActions.map((action) => (
                <div key={action} className="flex min-h-24 items-start gap-3 rounded-md border p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium">{action}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="content-heading">
            <h2 id="content-heading" className="mb-4 text-2xl font-semibold">
              Content to Build
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {section.cards.map((card) => (
                <Card key={card.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-2 text-base">
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </article>

        <aside aria-labelledby="section-nav-heading" className="lg:sticky lg:top-24 lg:self-start">
          <h2 id="section-nav-heading" className="mb-3 text-sm font-semibold uppercase tracking-wide">
            Portal Sections
          </h2>
          <nav className="rounded-md border p-2" aria-label="Portal sections">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const active = item.href === section.href

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium hover:bg-muted aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label[language]}</span>
                </Link>
              )
            })}
          </nav>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            {uiText.searchHint[language]}
          </p>
        </aside>
      </div>
    </main>
  )
}

