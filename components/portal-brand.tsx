import Link from "next/link"
import { ministryName, portalName } from "@/lib/portal-content"
import { cn } from "@/lib/utils"

export function PortalBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        compact && "gap-2"
      )}
      aria-label={`${portalName} home`}
    >
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-primary bg-background text-[0.65rem] font-bold leading-none text-primary"
        aria-hidden="true"
      >
        SL
      </span>
      <span className="min-w-0">
        <span className="block text-base font-bold leading-tight">{portalName}</span>
        {!compact && (
          <span className="hidden max-w-72 truncate text-xs font-medium leading-tight text-muted-foreground sm:block">
            {ministryName}
          </span>
        )}
      </span>
    </Link>
  )
}

