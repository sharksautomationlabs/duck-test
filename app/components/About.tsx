'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/contact-duckbookwriters/30min',
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full h-[878px] overflow-hidden bg-white">
      {/* Background container for the right side */}
      <div className="absolute top-0 right-0 h-full w-[65%] rounded-bl-[20px] rounded-tl-[20px] bg-[#efefef] overflow-hidden">
        {/* Blue gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,27,134,1) 0%, rgba(0,27,134,0) 100%)'
          }}
        ></div>

        {/* Yellow gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(255,224,51,1) 0%, rgb(255, 255, 255) 100%)'
          }}
        ></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Image - Left side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-[647px] h-[653px] relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/about-section-image.png"
                alt="About Duck Book Writers"
                width={647}
                height={653}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Duck mascot with scroll-based animation and gentle quiver */}
            {/* <motion.div 
              className="absolute top-90 w-[236px] h-[300px]"
              initial={{ opacity: 0, scale: 0.8, rotate: -10, x: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: isInView ? 800 : 0,  // Move 800px to the right when in view
                // Gentle continuous quiver
                y: [0, -1, 1, -1, 1, 0],
                rotate: [0, 0.5, -0.5, 0.5, -0.5, 0]
              }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3,
                ease: "easeInOut",
                // Quiver animation settings
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }
              }}
              // whileHover={{ rotate: 5 }}
              style={{ left: '480px' }}
            >
              <Image
                src="/images/duck-mascot-3.png"
                alt="Duck Mascot"
                width={236}
                height={236}
                className="w-full h-full object-cover transform scale-x-[-1]"
              />
               */}
              {/* Yellow sparkles coming out of the book - only visible when mascot reaches final position */}
              {/* <motion.div
                className="absolute top-[60px] left-[120px] w-[6px] h-[6px] bg-yellow-400 rounded-full opacity-0"
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  y: isInView ? [0, -80, -100] : 0,
                  x: isInView ? [0, 8, -5] : 0,
                  scale: isInView ? [0.5, 1.5, 1, 0] : 0
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                  delay: 1.8  // Wait for mascot to reach final position (0.3s initial + 1.5s movement)
                }}
                style={{
                  boxShadow: isInView ? '0 0 25px #fbbf24, 0 0 50px #fbbf24, 0 0 75px #fbbf24' : 'none'
                }}
              />
               */}
              {/* <motion.div
                className="absolute top-[55px] left-[115px] w-[5px] h-[5px] bg-yellow-300 rounded-full opacity-0"
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  y: isInView ? [0, -70, -90] : 0,
                  x: isInView ? [0, -6, 4] : 0,
                  scale: isInView ? [0.3, 1.3, 0.8, 0] : 0
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                  delay: 2.1  // Wait for mascot + 0.3s stagger
                }}
                style={{
                  boxShadow: isInView ? '0 0 20px #f59e0b, 0 0 40px #f59e0b, 0 0 60px #f59e0b' : 'none'
                }}
              />
              
              <motion.div
                className="absolute top-[65px] left-[125px] w-[7px] h-[7px] bg-yellow-500 rounded-full opacity-0"
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  y: isInView ? [0, -75, -95] : 0,
                  x: isInView ? [0, 5, -7] : 0,
                  scale: isInView ? [0.4, 1.4, 0.9, 0] : 0
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                  delay: 2.4  // Wait for mascot + 0.6s stagger
                }}
                style={{
                  boxShadow: isInView ? '0 0 30px #eab308, 0 0 60px #eab308, 0 0 90px #eab308' : 'none'
                }}
              />
              
              <motion.div
                className="absolute top-[50px] left-[110px] w-[4px] h-[4px] bg-yellow-400 rounded-full opacity-0"
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  y: isInView ? [0, -60, -80] : 0,
                  x: isInView ? [0, -3, 6] : 0,
                  scale: isInView ? [0.2, 1.2, 0.7, 0] : 0
                }}
                transition={{
                  duration: 2.0,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                  delay: 2.7  // Wait for mascot + 0.9s stagger
                }}
                style={{
                  boxShadow: isInView ? '0 0 18px #fbbf24, 0 0 36px #fbbf24, 0 0 54px #fbbf24' : 'none'
                }}
              />
              
              <motion.div
                className="absolute top-[70px] left-[130px] w-[5px] h-[5px] bg-yellow-300 rounded-full opacity-0"
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  y: isInView ? [0, -65, -85] : 0,
                  x: isInView ? [0, 7, -4] : 0,
                  scale: isInView ? [0.3, 1.3, 0.8, 0] : 0
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                  delay: 3.0  // Wait for mascot + 1.2s stagger
                }}
                style={{
                  boxShadow: isInView ? '0 0 22px #f59e0b, 0 0 44px #f59e0b, 0 0 66px #f59e0b' : 'none'
                }}
              />
              
              <motion.div
                className="absolute top-[45px] left-[105px] w-[3px] h-[3px] bg-yellow-500 rounded-full opacity-0"
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  y: isInView ? [0, -55, -75] : 0,
                  x: isInView ? [0, -2, 3] : 0,
                  scale: isInView ? [0.1, 1.1, 0.6, 0] : 0
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                  delay: 3.3  // Wait for mascot + 1.5s stagger
                }}
                style={{
                  boxShadow: isInView ? '0 0 15px #eab308, 0 0 30px #eab308, 0 0 45px #eab308' : 'none'
                }}
              />
            </motion.div> */}
          </motion.div>

          {/* Content - Right side */}
          <motion.div 
            className="space-y-8 pr-[120px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2 
              className="font-['Lora'] font-semibold text-[64px] leading-[1.2] tracking-[1.28px] text-[#1A1A1A]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bringing Authors&apos;
              <br />
              Stories to Readers
              <br />
              Worldwide
            </motion.h2>
            
            <motion.div 
              className="space-y-5 w-[550px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.p 
                className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Duck Book Writers is a full-service publishing house based in Houston, Texas, serving authors around the globe. We specialize in publishing, designing, and marketing books worldwide. We bring powerful stories to life and connect them with readers everywhere.
              </motion.p>
              
              <motion.p 
                className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Whether you are an aspiring author or an established bestseller, we handle every stage of the journey from manuscript development to stunning cover design, from global distribution to strategic marketing campaigns that boost sales and visibility.
              </motion.p>
              
              <motion.p 
                className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Our mission is simple: help great books find their audience and help authors achieve the success they deserve.
              </motion.p>
            </motion.div>
            
            <motion.button 
              onClick={openCalendly}
              className="bg-[#ffbe02] hover:bg-[#e6aa02] text-[#040404] font-['Poppins'] font-semibold px-8 py-3 rounded-[50px] text-[16px] transition-all duration-200 w-[166px] h-[42px] flex items-center justify-center hover-lift smooth-transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;