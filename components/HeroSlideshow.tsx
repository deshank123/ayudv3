'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
    title: "Ancient Wisdom for Modern Wellness",
    description: "Experience authentic Ayurvedic treatments for holistic healing",
    service: "Panchakarma Therapy",
    serviceDescription: "Traditional detoxification and rejuvenation treatments"
  },
  {
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
    title: "Personalized Ayurvedic Care",
    description: "Customized treatment plans based on your unique constitution",
    service: "Pulse Diagnosis",
    serviceDescription: "Ancient diagnostic method to understand your body's needs"
  },
  {
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
    title: "Natural Healing Solutions",
    description: "Herbal remedies and therapeutic treatments",
    service: "Herbal Medicine",
    serviceDescription: "Custom-formulated herbs for your specific condition"
  },
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    title: "Mind-Body Balance",
    description: "Harmonize your physical and mental well-being",
    service: "Yoga Therapy",
    serviceDescription: "Therapeutic yoga sessions for healing and wellness"
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};

export function HeroSlideshow() {
  const [page, setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback((newDirection: number) => {
    const newIndex = page[0] + newDirection;
    if (newIndex < 0) {
      setPage([slides.length - 1, newDirection]);
    } else if (newIndex >= slides.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newIndex, newDirection]);
    }
  }, [page]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  const slideIndex = Math.abs(page[0] % slides.length);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={page[0]}
          custom={page[1]}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[slideIndex].image}
            alt={slides[slideIndex].title}
            fill
            className="object-cover brightness-50"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative h-full container mx-auto px-4 flex items-center"
          >
            <div className="max-w-2xl text-white">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                {slides[slideIndex].title}
              </motion.h1>
              
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8"
              >
                {slides[slideIndex].description}
              </motion.p>
              
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20"
              >
                <h3 className="text-[#E4B04A] text-xl font-semibold mb-2">
                  Featured Service: {slides[slideIndex].service}
                </h3>
                <p className="text-gray-200">
                  {slides[slideIndex].serviceDescription}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/treatment" className="group">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-[#E4B04A] hover:bg-[#E4B04A]/90 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Book Consultation
                  </Button>
                </Link>
                <Link href="/treatment" className="group">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-2 border-white text-black hover:bg-white hover:text-[#2F3B2F] px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                  >
                    View Treatments
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows with improved styling */}
      <button
        className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
        onClick={() => {
          setIsAutoPlaying(false);
          paginate(-1);
        }}
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
        onClick={() => {
          setIsAutoPlaying(false);
          paginate(1);
        }}
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators with improved styling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setPage([index, index > slideIndex ? 1 : -1]);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              slideIndex === index 
                ? 'w-8 bg-[#E4B04A]' 
                : 'w-4 bg-white/50 hover:bg-white/70 hover:w-6'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 