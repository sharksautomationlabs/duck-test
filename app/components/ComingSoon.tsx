'use client';

import Image from 'next/image';
import Countdown from 'react-countdown';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animated Countdown Component
const AnimatedCountdown = ({ value, label }: { value: number; label: string }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (displayValue !== value) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [value, displayValue]);

  return (
    <div className="text-center">
      <motion.div 
        className="bg-white rounded-lg p-3 shadow w-16 h-16 flex items-center justify-center relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={displayValue}
            className="font-['Poppins'] font-semibold text-3xl text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {String(displayValue).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
        {isAnimating && (
          <motion.div
            className="absolute inset-0 bg-yellow-200 opacity-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      <span className="font-['Poppins'] text-xs text-gray-500 mt-2 block">{label}</span>
    </div>
  );
};

// Custom countdown renderer
const CountdownRenderer = ({ hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return (
      <div className="flex gap-3">
        <AnimatedCountdown value={0} label="Hr" />
        <AnimatedCountdown value={0} label="Min" />
        <AnimatedCountdown value={0} label="Sec" />
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <AnimatedCountdown value={hours} label="Hr" />
      <AnimatedCountdown value={minutes} label="Min" />
      <AnimatedCountdown value={seconds} label="Sec" />
    </div>
  );
};

const ComingSoon = () => {
  // Set target date (24 hours from now for demo)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 8);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section 
        className="relative rounded-[40px] my-20 p-8"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(255, 224, 51, 0.15) 0%, rgba(255, 224, 51, 0) 70%), linear-gradient(to right, #F8F9FA, #F3F4FF)'
        }}
      >
        <div className="grid grid-cols-5 items-center gap-4">
          {/* Left Column: Text Content - Shifted right with padding */}
          <div className="text-left space-y-3 col-span-1 pl-8">
            <h2 className="font-['Lora'] font-medium text-5xl leading-tight text-gray-800">
              Coming
              <br />
              <span className="font-bold text-red-500">Soon</span>
            </h2>
            <p className="font-['Poppins'] text-lg text-gray-500">
              Be the first to meet tomorrow&apos;s literary sensations.
            </p>
          </div>

          {/* Center Column: Book and Mascot */}
          <div className="relative flex justify-center items-center col-span-3">
            {/* Main Book Image Placeholder */}
            <div className="w-[450px] h-[450px]">
              <Image
                src="/images/coming-soon-book.png" // << REPLACE THIS IMAGE PATH
                alt="Flight Path book cover"
                width={450}
                height={450}
                className="object-contain"
              />
            </div>
            {/* Duck Mascot - Repositioned */}
            <div className="absolute -bottom-5 left-60 z-10 w-32 h-40">
              <Image
                src="/images/duck-mascot-3.png" // << Placeholder for your duck mascot
                alt="Duck mascot"
                width={128}
                height={160}
              />
            </div>
          </div>

          {/* Right Column: Countdown and Button */}
          <div className="flex flex-col items-center justify-center space-y-6 col-span-1">
            {/* Animated Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Countdown
                date={targetDate}
                renderer={CountdownRenderer}
                intervalDelay={1000}
                precision={1}
              />
            </motion.div>
            
            {/* Pre Order Button */}
            <motion.button 
              className="bg-[#ffbe02] hover:bg-yellow-500 text-black font-['Poppins'] font-semibold px-6 py-2 rounded-full text-sm w-[160px] hover-lift smooth-transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pre Order Now
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;