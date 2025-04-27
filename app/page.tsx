'use client';

import Image from "next/image";
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { NatureAnimations } from '@/components/NatureAnimations';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AyurvedicClock } from '@/components/AyurvedicClock';
import { shlokas } from "@/app/data/shlokas";
import { testimonials } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlideshow />
      <NatureAnimations />
      
      {/* Hero Section */}
      {/* <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597"
          alt="Ayurvedic herbs and treatments"
          fill
          className="object-cover brightness-50"
          priority
        />
        <ScrollReveal className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ancient Wisdom for Modern Wellness
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the transformative power of authentic Ayurvedic healing
          </p>
          <Link href="/treatment">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Treatments
            </Button>
          </Link>
        </ScrollReveal>
      </section> */}
  
{/* Doctor's Specialities Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* Doctor Image */}
      <div className="flex justify-center">
        <div className="w-96 h-[500px] relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/self_photo.jpeg" // your actual image
            alt="Dr. Tejinder Rishi"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Doctor Information */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F3B2F]">Meet Our Expert</h2>
        <p className="text-[#E4B04A] text-lg md:text-xl font-semibold">Dr. Tejinder Rishi (B.A.M.S.)</p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          With over 20 years of experience in Ayurveda, Dr. Tejinder Rishi blends ancient wisdom
          with modern healing for holistic health solutions. Below are his areas of specialization:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
          <li>Ayurvedic OPD</li>
          <li>Female Infertility</li>
          <li>Male Infertility</li>
          <li>Arthritis</li>
          <li>Skin Diseases</li>
          <li>Diabetes</li> {/* Fixed spelling here */}
          <li>Hypertension</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* Shlokas Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2F3B2F]">
              Ancient Wisdom
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {shlokas.map((shloka, index) => (
              <ScrollReveal key={index} className="h-full">
                <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full backdrop-blur-sm border border-[#2F3B2F]/10">
                  <p className="text-xl font-semibold text-[#2F3B2F] mb-3">
                    {shloka.sanskrit}
                  </p>
                  <p className="text-gray-600 mb-2">{shloka.translation}</p>
                  <p className="text-sm text-gray-500 italic">{shloka.meaning}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      

      {/* Ayurvedic Clock Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F3B2F] mb-8">


              Daily Wellness Guide
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Align your daily routine with nature's rhythm for optimal health and well-being
            </p>
          </ScrollReveal>
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="bg-[#F5F0E6]/80 rounded-lg shadow-lg p-8 backdrop-blur-sm">
              <AyurvedicClock />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Treatments</h3>
              <p className="text-gray-600">
                Traditional therapies performed by experienced practitioners
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book your sessions at your convenience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
              <p className="text-gray-600">
                Personalized care from certified Ayurvedic doctors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#F5F0E6]/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F3B2F] mb-12">
              Patient Stories
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index}>
                <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-[#2F3B2F]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.condition}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

