"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useAccessibility, type FontSize, type ContrastMode } from "@/hooks/use-accessibility"
import { cn } from "@/lib/utils"
import {
  Contrast,
  Volume2,
  VolumeX,
  ZapOff,
  Eye,
} from "lucide-react"

function FontSizeControl() {
  const { fontSize, setFontSize } = useAccessibility()

  const sizes: { value: FontSize; label: string; className: string }[] = [
    { value: "default", label: "A", className: "text-sm" },
    { value: "large", label: "A", className: "text-base" },
    { value: "extra-large", label: "A", className: "text-lg" },
  ]

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground w-16">Font Size</span>
      <div className="flex gap-1">
        {sizes.map((size) => (
          <Button
            key={size.value}
            variant={fontSize === size.value ? "default" : "outline"}
            size="sm"
            className={cn("w-8 h-8 p-0", size.className)}
            onClick={() => setFontSize(size.value)}
            aria-label={`Set font size to ${size.label}`}
            aria-pressed={fontSize === size.value}
          >
            {size.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

function ContrastControl() {
  const { contrastMode, setContrastMode } = useAccessibility()

  const modes: { value: ContrastMode; label: string; className: string }[] = [
    { value: "normal", label: "Normal", className: "bg-white border-2 border-black" },
    {
      value: "high-contrast-light",
      label: "High",
      className: "bg-black text-white",
    },
  ]

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground w-16">Contrast</span>
      <div className="flex gap-1">
        {modes.map((mode) => (
          <Button
            key={mode.value}
            variant={contrastMode === mode.value ? "default" : "outline"}
            size="sm"
            className={cn(
              "w-8 h-8 p-0 text-xs font-medium",
              mode.className,
              contrastMode !== mode.value && "border-2 border-black"
            )}
            onClick={() => setContrastMode(mode.value)}
            aria-label={`Set ${mode.label} contrast`}
            aria-pressed={contrastMode === mode.value}
          >
            {mode.label.slice(0, 2)}
          </Button>
        ))}
      </div>
    </div>
  )
}

function TTSControl() {
  const { ttsEnabled, toggleTts } = useAccessibility()

  return (
    <Button
      variant={ttsEnabled ? "default" : "outline"}
      size="sm"
      className="w-full justify-start"
      onClick={toggleTts}
      aria-pressed={ttsEnabled}
    >
      {ttsEnabled ? (
        <Volume2 className="mr-2 h-4 w-4" />
      ) : (
        <VolumeX className="mr-2 h-4 w-4" />
      )}
      Text to Speech
    </Button>
  )
}

function LowStressControl() {
  const { lowStressMode, toggleLowStressMode } = useAccessibility()

  return (
    <Button
      variant={lowStressMode ? "default" : "outline"}
      size="sm"
      className="w-full justify-start"
      onClick={toggleLowStressMode}
      aria-pressed={lowStressMode}
    >
      {lowStressMode ? (
        <ZapOff className="mr-2 h-4 w-4" />
      ) : (
        <ZapOff className="mr-2 h-4 w-4 opacity-50" />
      )}
      Low Stress Mode
    </Button>
  )
}

function VIModeControl() {
  const { viMode, toggleViMode } = useAccessibility()

  return (
    <Button
      variant={viMode ? "default" : "outline"}
      size="sm"
      className="w-full justify-start"
      onClick={toggleViMode}
      aria-pressed={viMode}
    >
      {viMode ? (
        <Eye className="mr-2 h-4 w-4" />
      ) : (
        <Eye className="mr-2 h-4 w-4 opacity-50" />
      )}
      Visual Impairment Mode
    </Button>
  )
}

export function AccessibilityToolbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-xs"
          aria-label="Accessibility settings"
          aria-expanded={open}
        >
          <Contrast className="mr-1 h-3 w-3" />
          A
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm">Accessibility Settings</h3>
            <p className="text-xs text-muted-foreground">
              Customize your viewing experience
            </p>
          </div>

          <Separator />

          <FontSizeControl />
          <ContrastControl />

          <Separator />

          <TTSControl />
          <LowStressControl />
          <VIModeControl />
        </div>
      </PopoverContent>
    </Popover>
  )
}