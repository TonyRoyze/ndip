"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CrisisSupportButton } from "@/components/crisis-support-modal"
import { SkipNavLink } from "@/components/skip-navigation"
import { useAccessibility } from "@/hooks/use-accessibility"
import { navigationItems } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import {
  Menu,
  Home,
  ChevronRight,
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
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
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

function NavLink({
  item,
  onClick,
}: {
  item: (typeof navigationItems)[0]
  onClick?: () => void
}) {
  const Icon = iconMap[item.id] ?? ChevronRight
  const { language } = useAccessibility()

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg",
        "transition-colors hover:bg-muted",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      )}
    >
      <Icon className="h-5 w-5 text-muted-foreground" />
      <span>{item.label[language]}</span>
      <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded uppercase">
        {item.shortcut}
      </span>
    </Link>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
      {navigationItems.slice(0, 8).map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md",
            "transition-colors hover:bg-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          {item.label.en}
        </Link>
      ))}
    </nav>
  )
}

function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { language } = useAccessibility()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>NDIP Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 space-y-1" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <NavLink key={item.id} item={item} onClick={() => setOpen(false)} />
          ))}
        </nav>
        <Separator className="my-6" />
        <div className="px-4 space-y-4">
          <CrisisSupportButton className="w-full" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">Emergency Hotline</p>
            <a href="tel:1926" className="hover:underline">
              1926 (24/7)
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link
              href="/"
              className={cn(
                "flex items-center gap-2 font-bold text-lg",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "rounded-sm"
              )}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                ND
              </div>
              <span className="hidden sm:inline">NDIP</span>
            </Link>
            <DesktopNav />
          </div>

          <div className="flex items-center gap-2">
            <CrisisSupportButton className="hidden sm:inline-flex" />
            <LanguageSwitcher />
            <AccessibilityToolbar />
          </div>
        </div>
      </div>
    </header>
  )
}

export function MobileFooterNav() {
  const { language } = useAccessibility()

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t bg-background"
      aria-label="Mobile navigation"
    >
      <div className="flex overflow-x-auto">
        {navigationItems.slice(0, 6).map((item) => {
          const Icon = iconMap[item.id] ?? ChevronRight
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 text-xs min-w-[60px]",
                "border-r border-muted last:border-r-0",
                "hover:bg-muted/50"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="truncate">{item.label[language]}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}