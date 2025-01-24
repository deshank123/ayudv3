'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeBlock {
  time: string;
  dosha: string;
  activities: string[];
  color: string;
}

const timeBlocks: TimeBlock[] = [
  {
    time: "6:00-10:00",
    dosha: "Kapha",
    activities: ["Wake up early", "Morning exercise", "Light breakfast"],
    color: "#2F3B2F"
  },
  {
    time: "10:00-14:00",
    dosha: "Pitta",
    activities: ["Main meal", "Productive work", "Important decisions"],
    color: "#E4B04A"
  },
  {
    time: "14:00-18:00",
    dosha: "Vata",
    activities: ["Creative work", "Light exercise", "Meditation"],
    color: "#8B4513"
  },
  {
    time: "18:00-22:00",
    dosha: "Kapha",
    activities: ["Light dinner", "Relaxation", "Early bedtime"],
    color: "#2F3B2F"
  },
  {
    time: "22:00-2:00",
    dosha: "Pitta",
    activities: ["Deep sleep", "Body repair", "Detoxification"],
    color: "#E4B04A"
  },
  {
    time: "2:00-6:00",
    dosha: "Vata",
    activities: ["REM sleep", "Dream state", "Mental processing"],
    color: "#8B4513"
  }
];

export function AyurvedicClock() {
  const [currentBlock, setCurrentBlock] = useState<TimeBlock | null>(null);

  useEffect(() => {
    const updateCurrentBlock = () => {
      const now = new Date();
      const hours = now.getHours();
      const block = timeBlocks.find(block => {
        const [start, end] = block.time.split('-').map(t => parseInt(t.split(':')[0]));
        return hours >= start && hours < end;
      });
      setCurrentBlock(block || timeBlocks[0]);
    };

    updateCurrentBlock();
    const interval = setInterval(updateCurrentBlock, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!currentBlock) return null;

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {/* Clock Visual */}
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-full border-4 border-[#2F3B2F]/20"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 h-1 w-24 bg-[#2F3B2F] origin-left"
          style={{ rotate: new Date().getHours() * 30 + new Date().getMinutes() * 0.5 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2F3B2F]">{currentBlock.time}</div>
            <div 
              className="text-lg font-semibold mt-2"
              style={{ color: currentBlock.color }}
            >
              {currentBlock.dosha}
            </div>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="flex-1 space-y-6">
        <h3 className="text-xl font-bold text-[#2F3B2F] mb-4">
          Recommended Activities
        </h3>
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {currentBlock.activities.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentBlock.color }}
                />
                <span className="text-gray-700">{activity}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
