import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sakthi Dental Clinic - Expert Dental Care for Women & Children in Hosur",
  description:
    "Specialized dental care in Hosur with modern treatment practices. From general consultations to implants and orthodontics. Trusted by families since 2004.",
  keywords:
    "dental clinic, dental care, teeth cleaning, braces, implants, dentist, Hosur, Tamil Nadu, orthodontics, dental implants, women dentistry, pediatric dentistry",
  authors: [{ name: "Sakthi Dental Clinic" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sakthidentalclinic.com",
    siteName: "Sakthi Dental Clinic",
    title: "Sakthi Dental Clinic - Expert Dental Care for Women & Children",
    description: "Specialized dental care with modern treatment practices in Hosur",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230284c7' width='100' height='100' rx='20'/><text x='50' y='75' fontSize='60' fontWeight='bold' textAnchor='middle' fill='white'>S</text></svg>",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
