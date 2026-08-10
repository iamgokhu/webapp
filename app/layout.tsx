import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mathi PI OS | AI-Operated Distribution Platform",
  description: "Mathi PI OS — billing, inventory, AI agents, field ops. 8-second invoices, fraud-proof collections.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FCFCF9]">
        {children}
      </body>
    </html>
  )
}
