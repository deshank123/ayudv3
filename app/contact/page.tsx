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
                {/* <form className="space-y-4"> */}
                <form 
  className="space-y-4"
  action="https://formspree.io/f/mwpoqpgr" 
  method="POST"
>
                  {/* <div>
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
                  </div> */}
                  <div>
    <Input type="text" name="name" placeholder="Your Name" required />
  </div>
  <div>
    <Input type="email" name="email" placeholder="Your Email" required />
  </div>
  <div>
    <Input type="tel" name="phone" placeholder="Your Phone" />
  </div>
  <div>
    <Textarea name="message" placeholder="Your Message" rows={4} required />
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
                    <span>+91 99887 72355</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-[#E4B04A]" />
                    <span>info@holistichealingcenter.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-[#E4B04A]" />
                    <span>Rishi Ayurveda Centre, Opposite Dhindsa Petrol Pump, Bhadson Road Patiala(Punjab)</span>
                  </div>
                  {/* ➡️ New Facebook Button */}
                  <div className="pt-4">
                    <a
                      href="https://www.facebook.com/rishiayurvedapatiala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#1877F2] text-white rounded hover:bg-[#145db2] transition"
                    >
                      Visit us on Facebook

                    
                    </a>
                  </div>
                  {/* ➡️ Instagram Button */}
                  <div>
                    <a
                      href="https://www.instagram.com/rishiayurvedacentre?igsh=YWZ3Z2VndWFkYm1k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded hover:opacity-90 transition"
                    >
                      Visit us on Instagram
                    </a>
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
        {/* Google Maps Location Embed */}
<div className="w-full mt-12">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4570465224065!2d76.36513377486327!3d30.366377103247263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391027268c8ed241%3A0x747506de03b8145f!2sRishi%20Ayurveda%20Centre!5e0!3m2!1sen!2sin!4v1745746240042!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

      </div>
    </main>
  )
}


