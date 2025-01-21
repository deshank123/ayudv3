import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Ayurveda | Holistic Healing Center",
  description: "Learn about the principles and practices of Ayurveda, ancient science life",
}

const principles = [
  {
    title: "Doshas",
    description: "The three energies that define a person's makeup: Vata, Pitta, and Kapha.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Prakriti",
    description: "One's unique physical and mental constitution, which influences individuality.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Agni",
    description: "The digestive fire responsible for all transformations in the mind and body.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Ama",
    description: "Toxins that result from poorly digested food, thoughts, and experiences.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80"
  }
]

export default function AyurvedaPage() {
  return (
    <main className="bg-[url('https://images.unsplash.com/photo-1611072965169-e1e9d0f8f469?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center min-h-screen">
      <div className="bg-[#F5F0E6]/90 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-[#2F3B2F]/80 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Ayurveda</h1>
            <p className="text-lg text-[#E4B04A]">The ancient science of life and longevity</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F5F0E6]/90 clip-path-slant" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F3B2F] mb-4">The Wisdom of Ayurveda</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Ayurveda, which translates to "The Science of Life," is an ancient holistic healing system that originated in India over 5,000 years ago. It emphasizes the interconnectedness of the mind, body, and spirit in maintaining optimal health and preventing disease.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <Card key={index} className="overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className="relative h-48">
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#2F3B2F]">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#2F3B2F]/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Ayurvedic Journey</h2>
            <p className="mb-8">Discover how Ayurveda can transform your health and well-being.</p>
            <a
              href="/contact"
              className="bg-[#E4B04A] hover:bg-[#c99b3f] text-white font-bold py-2 px-4 rounded inline-block transition duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

