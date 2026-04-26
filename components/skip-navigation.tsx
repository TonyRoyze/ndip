"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface SkipNavigationProps {
  targetId?: string
  children?: React.ReactNode
}

export function SkipNavigation({
  targetId = "main-content",
  children,
}: SkipNavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.tabIndex = -1
      target.focus()
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button
      asChild
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-medium"
      variant="outline"
      onClick={handleClick}
    >
      <a href={`#${targetId}`}>
        {children ?? "Skip to main content"}
      </a>
    </Button>
  )
}

export function SkipNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target instanceof HTMLElement) {
      target.tabIndex = -1
      target.focus()
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {children}
    </a>
  )
}