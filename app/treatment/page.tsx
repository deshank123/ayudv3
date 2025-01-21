import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Our Treatments | Sanjivani Ayurvedshala",
  description: "Explore our range of authentic Ayurvedic treatments for holistic healing and wellness",
}

const treatments = [
  {
    name: "Panchakarma",
    description: "A five-step detoxification process to cleanse the body of toxins and restore balance.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
    credit: "Dane Wetton"
  },
  {
    name: "Abhyanga",
    description: "A full-body massage with herb-infused oils to improve circulation and relax the body.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80",
    credit: "Toa Heftiba"
  },
  {
    name: "Shirodhara",
    description: "A continuous stream of warm oil poured over the forehead to calm mind and nervous system.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
    credit: "Antonika Chanel"
  },
  {
    name: "Nasya",
    description: "Nasal administration of herbal oils to clear the sinuses and improve mental clarity.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
    credit: "Antonika Chanel"
  },
  {
    name: "Basti",
    description: "A gentle colon cleanse using herbal decoctions to remove toxins and improve digestion.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
    credit: "Monika Grabkowska"
  },
  {
    name: "Pizhichil",
    description: "A rejuvenating treatment where warm herbal oils are poured over the body in a rhythmic manner.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
    credit: "Jared Rice"
  },
]

export default function TreatmentPage() {
  return (
    <main className="bg-[#F5F0E6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#2F3B2F] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ayurvedic Treatments</h1>
          <p className="text-lg text-[#E4B04A]">Discover holistic healing through ancient wisdom</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F5F0E6] clip-path-slant" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                  Photo by {treatment.credit} on Unsplash
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#2F3B2F]">{treatment.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{treatment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2F3B2F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Power of Ayurveda</h2>
          <p className="mb-8">Book a consultation with our expert practitioners to start your healing journey.</p>
          <a
            href="/contact"
            className="bg-[#E4B04A] hover:bg-[#c99b3f] text-white font-bold py-2 px-4 rounded inline-block transition duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  )
}

