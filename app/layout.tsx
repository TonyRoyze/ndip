import type { Metadata } from "next"
import {
  Geist_Mono,
  Noto_Sans,
  Noto_Sans_Sinhala,
  Noto_Sans_Tamil,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { AccessibilityProvider } from "@/hooks/use-accessibility"
import { cn } from "@/lib/utils"
import { portalName } from "@/lib/portal-content"
import { Footer } from "@/components/footer"
import { Header, MobileFooterNav } from "@/components/header"

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" })
const notoSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
})
const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: `${portalName} - National Inclusive Information Access Portal`,
  description:
    "Accessible, trilingual disability information, services, rights, and support portal for Sri Lanka.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased font-sans",
          fontMono.variable,
          notoSans.variable,
          notoSinhala.variable,
          notoTamil.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <AccessibilityProvider>
              <Header />
              {children}
              <Footer />
              <MobileFooterNav />
              <Toaster />
            </AccessibilityProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
