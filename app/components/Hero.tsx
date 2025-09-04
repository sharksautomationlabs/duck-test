import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden py-0">
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
        {/* Gradient overlay: yellow (bottom left), white (middle), blue (top right) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/60 via-white/30 to-yellow-400/60 z-10"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
        {/* Hero Text Content - Left Side */}
        <div className="flex-1 max-w-2xl lg:max-w-none lg:pr-8 text-left">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-wide mb-6">
            Your Story Deserves to Make a Splash
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-8">
            At Duck Book Writers, we turn manuscripts into published works that waddle confidently
            into the world. From editing to distribution, we handle the heavy lifting
            so you can focus on writing.
          </p>
          
          {/* Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <button className="bg-yellow-400 text-black font-bold text-base py-1 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-md">
              Publish My Book
            </button>
          </div>
        </div>

        {/* Book Showcase Section - Right Side */}
        <div className="flex-1 flex justify-center lg:justify-end items-end gap-4 sm:gap-8 mt-16 lg:mt-0">
          {/* Book cover images */}
          <div className="w-32 h-48 sm:w-36 sm:h-52 bg-white rounded-lg shadow-lg p-2">
            <Image 
              src="/images/book-1.png"
              alt="Book Cover 1"
              width={144}
              height={208}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-42 h-64 bg-white rounded-lg shadow-lg p-2">
            <Image 
              src="/images/book-2.png"
              alt="Book Cover 2"
              width={160}
              height={224}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-56 h-80 bg-white rounded-lg shadow-lg p-2">
            <Image 
              src="/images/book-3.png"
              alt="Book Cover 3"
              width={192}
              height={288}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-42 h-64 bg-white rounded-lg shadow-lg p-2">
            <Image 
              src="/images/book-4.png"
              alt="Book Cover 4"
              width={160}
              height={224}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-32 h-48 sm:w-36 sm:h-52 bg-white rounded-lg shadow-lg p-2">
            <Image 
              src="/images/book-1.png"
              alt="Book Cover 5"
              width={144}
              height={208}
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;