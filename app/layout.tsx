import type { ReactNode } from "react"
import "./globals.css"
import site from "../data/site.json"

export const metadata = {
  title: `${site.name} - ${site.heroSubtitle}`.trim(),
  description: site.bio,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
