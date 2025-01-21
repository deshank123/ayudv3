import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | Sanjivani Ayurvedshala",
  description: "Learn about our Ayurvedic clinic's history, mission, and experienced practitioners",
}

export default function AboutUs() {
  return (
    <main className="bg-[#F5F0E6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#2F3B2F] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sanjivani Ayurvedshala</h1>
          <p className="text-lg text-[#E4B04A]">Healing through ancient wisdom and modern expertise</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F5F0E6] clip-path-slant" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#2F3B2F]">Our Journey</h2>
            <p className="text-gray-700">
              Founded in 1977, Sanjivani Ayurvedshala has been at the forefront of Ayurvedic
              treatment for over four decades. What started as a small clinic has grown into
              one of the most respected Ayurvedic institutions in the region.
            </p>
            <p className="text-gray-700">
              Our commitment to authentic Ayurvedic principles, combined with modern medical
              understanding, has helped thousands of patients find relief from chronic
              conditions and achieve optimal health.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg"
              alt="Clinic exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#2F3B2F]">Our Mission</h3>
              <p className="text-gray-700">
                To provide authentic Ayurvedic treatments while adapting to modern healthcare
                needs, ensuring holistic wellness for our patients.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#2F3B2F]">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading institution in integrating traditional Ayurvedic wisdom
                with contemporary healthcare practices.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#2F3B2F]">Our Values</h3>
              <p className="text-gray-700">
                Authenticity in treatment, compassion in care, and continuous advancement
                in Ayurvedic practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Doctor's Profile */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Dr. Vatsyayan"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2F3B2F]">Dr. Vatsyayan</h2>
              <p className="text-[#E4B04A] text-lg">Chief Ayurvedic Physician</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 46 years of clinical experience, Dr. Vatsyayan has dedicated
                  his life to the practice and advancement of Ayurvedic medicine.
                </p>
                <p>
                  He completed his formal education in Ayurveda from prestigious
                  institutions and has since treated thousands of patients with various
                  chronic conditions.
                </p>
                <p>
                  His expertise spans across traditional Panchakarma therapies,
                  modern Ayurvedic pharmaceuticals, and innovative treatment protocols
                  for chronic diseases.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Former consultant to leading Ayurvedic institutions</li>
                  <li>Published researcher in Ayurvedic medicine</li>
                  <li>Specialist in chronic disease management</li>
                  <li>Expert in traditional Panchakarma therapies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E4B04A]">46+</div>
            <div className="text-[#2F3B2F]">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E4B04A]">15000+</div>
            <div className="text-[#2F3B2F]">Patients Treated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E4B04A]">50+</div>
            <div className="text-[#2F3B2F]">Treatment Types</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E4B04A]">98%</div>
            <div className="text-[#2F3B2F]">Patient Satisfaction</div>
          </div>
        </div>
      </div>
    </main>
  )
}

