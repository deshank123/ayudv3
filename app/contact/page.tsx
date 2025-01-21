import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: "Contact Us | Holistic Healing Center",
  description: "Get in touch with our Ayurvedic experts for consultations and inquiries",
}

export default function ContactPage() {
  return (
    <main className="bg-[url('https://images.unsplash.com/photo-1611072965169-e1e9d0f8f469?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center min-h-screen">
      <div className="bg-[#F5F0E6]/90 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-[#2F3B2F]/80 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-[#E4B04A]">Reach out for personalized Ayurvedic care</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F5F0E6]/90 clip-path-slant" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#2F3B2F]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Your Phone" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={4} />
                  </div>
                  <Button type="submit" className="bg-[#E4B04A] hover:bg-[#c99b3f] text-white w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#2F3B2F]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-[#E4B04A]" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-[#E4B04A]" />
                    <span>info@holistichealingcenter.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-[#E4B04A]" />
                    <span>123 Ayurveda Street, Wellness City, India 110001</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#2F3B2F]">Consultation Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

