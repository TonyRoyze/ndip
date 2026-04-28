"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useAccessibility } from "@/hooks/use-accessibility"
import { SearchPrompt } from "@/components/search-prompt"
import { quickAccessItems } from "@/lib/navigation"
import {
  FileText,
  Building2,
  HeartPulse,
  Brain,
  GraduationCap,
  Briefcase,
  Accessibility,
  Scale,
  Users,
  MessageSquare,
  HelpCircle,
  ChevronRight,
  AlertTriangle,
} from "lucide-react"

import { CrisisSupportButton } from "@/components/crisis-support-modal"
import { SkipNavLink } from "@/components/skip-navigation"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  benefits: FileText,
  services: Building2,
  healthcare: HeartPulse,
  mental: Brain,
  education: GraduationCap,
  employment: Briefcase,
  assistive: Accessibility,
  rights: Scale,
  community: Users,
  complaints: MessageSquare,
  help: HelpCircle,
}

function QuickAccessCard({
  item,
}: {
  item: (typeof quickAccessItems)[0]
}) {
  const { language } = useAccessibility()
  const Icon = iconMap[item.id] ?? ChevronRight

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
            Learn more <ChevronRight className="h-3 w-3 ml-1" />
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

const announcements = [
  {
    title: "New Disability Allowance Applications Now Open",
    date: "2026-04-01",
    summary:
      "Applications for the disability allowance program are now being accepted. Eligible persons with disabilities can apply online or at their nearest Divisional Secretariat.",
  },
  {
    title: "Assistive Devices Distribution Program",
    date: "2026-03-15",
    summary:
      "The Ministry will distribute wheelchairs, hearing aids, and mobility aids to eligible persons with disabilities across all provinces.",
  },
  {
    title: "Mental Health Awareness Month",
    date: "2026-03-01",
    summary:
      "March is Mental Health Awareness Month. Access our dedicated section for mental health resources, peer support, and crisis hotlines.",
  },
]

export default function HomePage() {
  const { language } = useAccessibility()

  const welcomeText = {
    en: {
      title: "National Disability Information Portal",
      subtitle:
        "Your trusted source for disability information, services, and support in Sri Lanka",
      quickAccessTitle: "Quick Access Services",
      announcementsTitle: "Latest Announcements",
      emergencyTitle: "Emergency Contacts",
    },
    si: {
      title: "ජාතික වක්ෂේධ තොරතුරු පොරේලය",
      subtitle:
        "ශ්‍රී ලංකාවේ වක්ෂේධ තොරතුරු, සේවා සහ සහය සඳහා ඔබගේ විශ්වසනීය මුලාව",
      quickAccessTitle: "වේගවත් ප්‍රවේශ සේවා",
      announcementsTitle: "නවතම නිවේදන",
      emergencyTitle: "අර්බුද අකුමාපන",
    },
    ta: {
      title: "தேசிய மாற்றுத்திறன் தகவல் போர்டல்",
      subtitle:
        "இலங்கையில் மாற்றுத்திறன் தகவல்கள், சேவைகள் மற்றும் ஆதரவுக்கான உங்கள் நம்பகமான மூலம்",
      quickAccessTitle: "விரைவான அணுகல் சேவைகள்",
      announcementsTitle: "சமீபத்திய அறிவிப்புகள்",
      emergencyTitle: "அவசர தொடர்புகள்",
    },
  }

  const text = welcomeText[language]

  return (
    <div className="min-h-screen">
      <SkipNavLink href="#main-content">Skip to main content</SkipNavLink>

      <section className="bg-primary/5 py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{text.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {text.subtitle}
          </p>

          <SearchPrompt className="max-w-2xl mx-auto" />
        </div>
      </section>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <section aria-labelledby="quick-access-heading" className="mb-12">
          <h2 id="quick-access-heading" className="text-2xl font-semibold mb-6">
            {text.quickAccessTitle}
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
              {text.announcementsTitle}
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
                  {text.emergencyTitle}
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
                  <a href="tel:1926">Call Now</a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}