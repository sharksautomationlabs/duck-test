'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Authors = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  const authors = [
    { name: "Mia Klassen", position: "Chief Talent Officer", image: "/images/author-1.png" },
    { name: "Jonathan Leon", position: "Chief Talent Officer", image: "/images/author-2.png" },
    { name: "Steffi Allysa", position: "Chief Creative Officer", image: "/images/author-3.png" },
  ];

  return (
    <section ref={sectionRef} className="relative py-20">
      {/* Floating Mascots with quiver and sparkles */}
      <motion.div 
        className="absolute top-8 left-16 z-20 w-32 h-40"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
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
        whileHover={{ scale: 1.05, rotate: 5 }}
      >
        <Image src="/images/duck-mascot-3.png" alt="Duck Mascot" width={140} height={172} />
        
        {/* Yellow sparkles coming out of the book - only visible when section is in focus */}
        <motion.div
          className="absolute top-[60px] left-[70px] w-[6px] h-[6px] bg-yellow-400 rounded-full opacity-0"
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
            delay: 1.8  // Wait for mascot to reach final position
          }}
          style={{
            boxShadow: isInView ? '0 0 25px #fbbf24, 0 0 50px #fbbf24, 0 0 75px #fbbf24' : 'none'
          }}
        />
        
        <motion.div
          className="absolute top-[55px] left-[65px] w-[5px] h-[5px] bg-yellow-300 rounded-full opacity-0"
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
          className="absolute top-[65px] left-[75px] w-[7px] h-[7px] bg-yellow-500 rounded-full opacity-0"
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
          className="absolute top-[50px] left-[60px] w-[4px] h-[4px] bg-yellow-400 rounded-full opacity-0"
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
          className="absolute top-[70px] left-[80px] w-[5px] h-[5px] bg-yellow-300 rounded-full opacity-0"
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
          className="absolute top-[45px] left-[55px] w-[3px] h-[3px] bg-yellow-500 rounded-full opacity-0"
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
      </motion.div>
      {/* <div className="absolute top-1/2 -translate-y-1/2 right-16 z-20 w-32 h-40">
        <Image src="/images/duck-mascot-3.png" alt="Duck Mascot" width={128} height={160} />
      </div> */}

      {/* Main Content Card */}
      <div 
        className="relative max-w-screen-xl mx-auto px-4 pt-20 pb-32 rounded-[40px] border border-gray-200/80 shadow-lg"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(255, 224, 51, 0.25) 0%, rgba(255, 224, 51, 0) 70%), linear-gradient(to bottom, #FDFDFD, #F5F6FF)'
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Lora'] font-semibold text-5xl text-gray-800 mb-4">
            Meet Our Authors
          </h2>
          <p className="font-['Poppins'] text-base text-gray-500 max-w-3xl mx-auto">
            From first-time storytellers to established literary icons, our authors are the heart of Duck Book Writers. Explore their biographies, dive into their latest releases, watch interviews, and learn about upcoming events.
          </p>
        </div>
        
        {/* Authors Grid */}
        <div className="flex justify-center gap-12">
          {authors.map((author, index) => (
            <div key={index} className="relative w-72 h-96">
              {/* Transparent Card with White Border */}
              <div className="w-full h-full bg-transparent border-2 border-white rounded-2xl flex items-center justify-center">
                <div className="w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] rounded-xl overflow-hidden">
                  <Image
                    src={author.image}
                    alt={`Portrait of ${author.name}`}
                    width={288}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Card Overlay */}
              <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 bg-white rounded-lg text-center py-3 px-6 shadow-md w-[85%]">
                <h3 className="font-['Poppins'] font-bold text-base text-gray-800">
                  {author.name}
                </h3>
                <p className="font-['Poppins'] text-xs text-gray-500">
                  {author.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;