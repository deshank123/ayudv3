import Link from "next/link"
import { Phone, Mail, Home } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"

export function SiteHeader() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#2F3B2F] text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>Holistic Healing Center, Wellness City, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gold">Facebook</Link>
            <Link href="#" className="hover:text-gold">Twitter</Link>
            <Link href="#" className="hover:text-gold">LinkedIn</Link>
            <Link href="#" className="hover:text-gold">Blog</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#2F3B2F]">Holistic Healing Center</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[#2F3B2F] hover:text-[#E4B04A]">
                    <Home className="inline-block mr-1" size={18} />
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/aboutus" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[#2F3B2F] hover:text-[#E4B04A]">
                    ABOUT US
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/treatment" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[#2F3B2F] hover:text-[#E4B04A]">
                    TREATMENT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/ayurveda" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[#2F3B2F] hover:text-[#E4B04A]">
                    AYURVEDA
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="text-[#2F3B2F] hover:text-[#E4B04A]">
                    CONTACT US
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-[#E4B04A] hover:bg-[#c99b3f] text-white">
            ONLINE CONSULTATION
          </Button>
        </div>
      </div>
    </header>
  )
}

