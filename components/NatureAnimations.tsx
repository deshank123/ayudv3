'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function NatureAnimations() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Falling Leaves */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute"
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`,
            rotate: 0,
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{
            top: '100vh',
            rotate: 360,
            x: Math.sin(i) * 100
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
        >
          <svg 
            className="w-6 h-6 text-[#2F3B2F]/20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.75 21.16a1 1 0 0 1-1.12-.87L15.88 16l-3.29 3.28a1 1 0 0 1-1.42 0L8 16l-.75 4.29a1 1 0 0 1-1.12.87 1 1 0 0 1-.87-1.12l1-5.68a1 1 0 0 1 .27-.54l4-4a1 1 0 0 1 1.42 0l3 3 3-3a1 1 0 0 1 1.42 0l4 4a1 1 0 0 1 .27.54l1 5.68a1 1 0 0 1-.87 1.12Z"/>
          </svg>
        </motion.div>
      ))}

      {/* Growing Plants */}
      <div className="absolute bottom-0 left-0 w-full flex justify-around">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`plant-${i}`}
            className="w-16 h-32 origin-bottom"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.2 }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          >
            <svg 
              className="w-full h-full text-[#2F3B2F]" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C7.03 2 3 6.03 3 11c0 2.77 1.23 5.25 3.17 6.94C7.5 19.31 9.63 20 12 20s4.5-.69 5.83-2.06C19.77 16.25 21 13.77 21 11c0-4.97-4.03-9-9-9zm0 16c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
