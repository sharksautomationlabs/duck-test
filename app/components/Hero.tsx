"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CalendlyWidget from './CalendlyWidget';

// Book data structure
interface BookCover {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  containerClassName: string;
}

// BookCarousel component for animating book covers
const BookCarousel = ({ books, animationDuration = 5000 }: { books: BookCover[], animationDuration?: number }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const bookVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.9
    })
  };

  useEffect(() => {
    // Function to move books to the left
    const moveLeft = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => (prev === 0 ? books.length - 1 : prev - 1));
        // Reset animation flag after animation completes
        setTimeout(() => setIsAnimating(false), 600);
      }
    };
    
    // Start the animation loop
    animationRef.current = setInterval(moveLeft, animationDuration);

    // Trigger initial animation after component mount
    const initialDelay = setTimeout(moveLeft, 500);

    // Clean up the interval on component unmount
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      clearTimeout(initialDelay);
    };
  }, [books.length, animationDuration, isAnimating]);

  // Function to get the book index with offset, handling circular rotation
  const getBookIndex = (position: number) => {
    return (currentIndex + position) % books.length;
  };

  return (
    <motion.div 
      ref={containerRef}
      className="flex justify-center lg:justify-end items-end gap-2 sm:gap-4 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {books.map((_, placeholderIndex) => {
        // Calculate which book should be in this placeholder
        const bookIndex = getBookIndex(placeholderIndex);
        const book = books[bookIndex];
        
        return (
          <motion.div 
            key={`placeholder-${placeholderIndex}`} 
            className={`${books[placeholderIndex].containerClassName} bg-white rounded-lg shadow-lg p-1 sm:p-2 overflow-hidden ${placeholderIndex >= 3 ? 'hidden lg:block' : ''}`}
            custom={-1} // Direction: -1 means moving left
            variants={bookVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="w-full h-full relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image 
                src={book.src}
                alt={book.alt}
                width={book.width}
                height={book.height}
                className={book.className}
                priority={placeholderIndex < 2} // Prioritize loading for first two books
              />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const Hero = () => {
  // Book covers data
  const bookCovers: BookCover[] = [
    {
      src: "/images/book-1.png",
      alt: "Book Cover 1",
      width: 144,
      height: 208,
      className: "w-full h-full object-cover rounded",
      containerClassName: "w-20 h-32 sm:w-28 sm:h-40 lg:w-20 lg:h-32 xl:w-24 xl:h-36"
    },
    {
      src: "/images/book-2.png",
      alt: "Book Cover 2",
      width: 160,
      height: 224,
      className: "w-full h-full object-cover rounded",
      containerClassName: "w-36 h-52 sm:w-40 sm:h-56 lg:w-36 lg:h-48 xl:w-40 xl:h-52"
    },
    {
      src: "/images/book-3.png",
      alt: "Book Cover 3",
      width: 192,
      height: 288,
      className: "w-full h-full object-cover rounded",
      containerClassName: "w-20 h-32 sm:w-28 sm:h-40 lg:w-56 lg:h-72 xl:w-64 xl:h-88"
    },
    {
      src: "/images/book-4.png",
      alt: "Book Cover 4",
      width: 160,
      height: 224,
      className: "w-full h-full object-cover rounded",
      containerClassName: "w-24 h-36 sm:w-32 sm:h-44 lg:w-36 lg:h-48 xl:w-40 xl:h-52"
    },
    {
      src: "/images/book-1.png",
      alt: "Book Cover 5",
      width: 144,
      height: 208,
      className: "w-full h-full object-cover rounded",
      containerClassName: "w-20 h-32 sm:w-28 sm:h-40 lg:w-20 lg:h-32 xl:w-24 xl:h-36"
    }
  ];


  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen flex items-center justify-center text-white overflow-hidden py-0">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/ducks-poster.jpg"
        >
          <source src="/images/ducks.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-20 container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between min-h-[80vh] lg:min-h-screen pt-16 sm:pt-32 lg:pt-40 pb-16 sm:pb-20">
        {/* Hero Text Content - Left Side */}
        <motion.div 
          className="flex-1 max-w-2xl lg:max-w-none lg:pr-8 text-center lg:text-left pt-8 sm:pt-0 pb-4 sm:pb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-wide mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Your Story Deserves to Make a Splash
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            At Duck Book Writers, we turn manuscripts into published works that waddle confidently
            into the world. From editing to distribution, we handle the heavy lifting
            so you can focus on writing.
          </motion.p>
        </motion.div>

        {/* Book Showcase Section - Right Side */}
        <div className="flex-1 mt-8 sm:mt-12 lg:mt-0 w-full lg:w-auto">
          {/* Animated Book Carousel */}
          <BookCarousel books={bookCovers} animationDuration={3000} />
        </div>
      </div>

      {/* Centered Button */}
      <motion.div 
        className="absolute bottom-8 sm:bottom-12 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CalendlyWidget 
            url="https://calendly.com/contact-duckbookwriters/30min"
            text="Publish My Book"
            size="md"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;