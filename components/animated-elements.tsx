'use client';

import { motion } from 'framer-motion';

export function LeafAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`,
            rotate: 0 
          }}
          animate={{
            top: '100vh',
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            className="w-6 h-6 text-[#2F3B2F] opacity-20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L8 6H16L12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
