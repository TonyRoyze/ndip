"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAccessibility } from "@/hooks/use-accessibility"
import { uiText } from "@/lib/portal-content"
import { cn } from "@/lib/utils"
import { Phone, MessageCircle, Heart, AlertTriangle } from "lucide-react"

interface CrisisContact {
  id: string
  name: string
  nameSi: string
  nameTa: string
  phone: string
  available: string
  type: "hotline" | "chat" | "emergency"
}

const crisisContacts: CrisisContact[] = [
  {
    id: "national-helpline",
    name: "National Mental Health Helpline",
    nameSi: "ජාතික මානසික සෞඛ්‍ය උපකාරක දුරකථනය",
    nameTa: "தேசிய மனநல உதவி அழைப்பு",
    phone: "1926",
    available: "24/7",
    type: "hotline",
  },
  {
    id: "sahana",
    name: "Sahana Foundation",
    nameSi: "සහන පදනම",
    nameTa: "சஹானா அறக்கட்டளை",
    phone: "1333",
    available: "24/7",
    type: "hotline",
  },
  {
    id: "sumithrayo",
    name: "Sumithrayo Crisis Hotline",
    nameSi: "සුමිත්‍රයෝ අර්බුද උපකාරක දුරකථනය",
    nameTa: "சுமித்ரயோ நெருக்கடி உதவி அழைப்பு",
    phone: "011 057 057 0",
    available: "24/7",
    type: "hotline",
  },
  {
    id: "emergency",
    name: "Emergency Services",
    nameSi: "හදිසි සේවා",
    nameTa: "அவசர சேவைகள்",
    phone: "119",
    available: "24/7",
    type: "emergency",
  },
]

function getContactName(contact: CrisisContact, lang: "en" | "si" | "ta") {
  if (lang === "si") return contact.nameSi
  if (lang === "ta") return contact.nameTa
  return contact.name
}

export function CrisisSupportModal({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const { language } = useAccessibility()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button
            variant="destructive"
            size="sm"
            className={cn(
              "bg-red-600 hover:bg-red-700 text-white font-semibold",
              className
            )}
          >
            <Heart className="mr-2 h-4 w-4" />
            {uiText.getHelpNow[language]}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Crisis Support
          </DialogTitle>
          <DialogDescription>
            If you or someone you know is in immediate danger, please call
            emergency services immediately.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {crisisContacts.map((contact) => (
            <Card
              key={contact.id}
              className="cursor-pointer transition-colors hover:bg-muted/50"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    {contact.type === "emergency" ? (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    ) : contact.type === "chat" ? (
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Phone className="h-4 w-4 text-green-500" />
                    )}
                    {getContactName(contact, language)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {contact.available}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-lg font-bold text-primary hover:underline"
                >
                  {contact.phone}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-2">
            Remember: You are not alone
          </p>
          <p>
            Reaching out for help is a sign of strength. These services are
            free, confidential, and available 24/7.
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export function CrisisSupportButton({ className }: { className?: string }) {
  const { language, lowStressMode } = useAccessibility()

  return (
    <CrisisSupportModal className={className}>
      <Button
        variant="destructive"
        size="sm"
        className={cn(
          "bg-red-600 hover:bg-red-700 text-white font-semibold",
          !lowStressMode && "motion-safe:animate-pulse",
          className
        )}
      >
        <Heart className="mr-2 h-4 w-4" />
        {uiText.getHelpNow[language]}
      </Button>
    </CrisisSupportModal>
  )
}
