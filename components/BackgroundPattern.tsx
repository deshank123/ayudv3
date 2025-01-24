'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function BackgroundPattern() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    setMounted(true);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E6D3] via-[#E2D1C3] to-[#F5E6D3]" />

      {/* Animated patterns */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 80c-16.6 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z' fill='%232F3B2F'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: 0.5,
            opacity: 0.1
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [0.5, 0.8, 0.5],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-[#2F3B2F]"
            fill="currentColor"
          >
            <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 80c-16.6 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z" />
          </svg>
        </motion.div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5E6D3]/30 to-[#F5E6D3]/80" />
    </div>
  );
} 