import '@/app/globals.css'
import { Cormorant_Garamond } from 'next/font/google'
import { SiteHeader } from "@/components/site-header"
import { BackgroundPattern } from '@/components/BackgroundPattern'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: "Sanjivani Ayurvedshala - Ayurvedic Healing Center",
  description: "Experience authentic Ayurvedic treatments and holistic healing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.className} antialiased min-h-screen`}>
        <BackgroundPattern />
        <SiteHeader />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}

