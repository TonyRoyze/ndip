import { notFound } from "next/navigation"
import { SectionPage } from "@/components/section-page"
import { getSectionByHref, sections } from "@/lib/portal-content"

export function generateStaticParams() {
  return Object.values(sections)
    .filter((section) => section.href !== "/")
    .map((section) => ({ slug: section.href.replace("/", "") }))
}

export default async function PortalSectionRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const section = getSectionByHref(`/${slug}`)

  if (!section) {
    notFound()
  }

  return <SectionPage section={section} />
}

