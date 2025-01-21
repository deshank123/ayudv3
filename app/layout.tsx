import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sanjivani Ayurvedshala - Ayurvedic Clinic",
  description: "Speciality clinic for chronic diseases using traditional Ayurvedic treatments",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

