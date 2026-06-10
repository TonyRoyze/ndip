"use client"

import * as React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useAccessibility } from "@/hooks/use-accessibility"
import { navigationItems } from "@/lib/navigation"
import { ministryName, portalName } from "@/lib/portal-content"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"

const footerLinks = {
  services: navigationItems.slice(0, 6),
  resources: navigationItems.slice(6, 12),
}

export function Footer() {
  const { language } = useAccessibility()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-primary bg-background text-xs text-primary">
                SL
              </div>
              <span>{portalName}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              National Inclusive Information Access Portal for Persons with Disabilities
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:1926" className="hover:underline">
                  1926 (24/7 Helpline)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:info@ndip.gov.lk" className="hover:underline">
                  info@ndip.gov.lk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Services</h3>
            <nav aria-label="Services links">
              <ul className="space-y-2 text-sm">
                {footerLinks.services.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {item.label[language]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <nav aria-label="Resources links">
              <ul className="space-y-2 text-sm">
                {footerLinks.resources.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {item.label[language]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/accessibility"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Accessibility Statement
              </Link>
              <Link
                href="/privacy"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Terms of Use
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Ministry of Rural Development, Social Security and
            Community Empowerment
          </p>
          <p>
            {ministryName}
          </p>
        </div>
      </div>
    </footer>
  )
}
