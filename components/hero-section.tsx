import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2F3B2F] leading-tight">
            "Holistic Healing for Mind, Body, and Spirit"
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#331A11]/80 text-white backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-[#E4B04A] text-sm mb-2">आयुर्वेद</div>
                <p>Ancient wisdom for modern wellness.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#331A11]/80 text-white backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-[#E4B04A] text-sm mb-2">प्राकृतिक चिकित्सा</div>
                <p>Natural healing for lasting health.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#331A11]/80 text-white backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-[#E4B04A] text-sm mb-2">समग्र स्वास्थ्य</div>
                <p>Balancing life's energies.</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button className="bg-[#E4B04A] hover:bg-[#c99b3f] text-white px-8">
              LEARN MORE
            </Button>
            <Button variant="outline" className="border-[#E4B04A] text-[#2F3B2F] hover:bg-[#E4B04A] hover:text-white px-8">
              CONTACT US
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E4B04A] opacity-10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#2F3B2F] opacity-10 rounded-full" />
            <img
              src={`/placeholder.svg?height=600&width=600`}
              alt="Ayurvedic Treatment"
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

