'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const NewReleases = () => {
  const releases = [
    {
      titleLine1: "DELIVERING THE",
      titleLine2: "BEST INNOVATION",
      imageSrc: "/images/book-1.png",
      altText: "Delivering The Best Innovation",
    },
    {
      titleLine1: "LOT LIGHT",
      titleLine2: "EBOOK",
      imageSrc: "/images/book-2.png",
      altText: "Lot Light Ebook",
    }
  ];

  return (
    <section className="py-2 bg-white">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Lora'] font-medium text-5xl text-gray-800 mb-4">
            New Releases
          </h2>
          <p className="font-['Poppins'] text-base text-gray-500 max-w-3xl mx-auto">
            Discover fresh voices and must-read titles now available.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {releases.map((book, index) => (
            <motion.div 
              key={index} 
              className="bg-[#F8F9FA] rounded-2xl p-6 max-w-[680px] flex items-start gap-6 hover-lift smooth-transition"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Book Image */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-50 h-68 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={book.imageSrc}
                    alt={book.altText}
                    width={224}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Content */}
              <div className="space-y-4">
                {/* New badge */}
                <motion.div 
                  className="inline-block bg-[#ffbe02] text-white font-['Poppins'] font-semibold px-3 py-1 rounded-md text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  New
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  className="font-['Lora'] font-medium text-2xl leading-tight text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  {book.titleLine1} <br />
                  {book.titleLine2}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="font-['Poppins'] font-normal text-base text-gray-500"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  A lectus ac pulvinar tincidunt accumsan<br />
                  Ullamcor dolor at lectus facilisis hac.
                </motion.p>
                
                {/* Read Now button */}
                <motion.div 
                  className="flex items-center space-x-2 group cursor-pointer pt-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="font-['Poppins'] font-semibold text-[#ffbe02] text-base">
                    Read Now
                  </span>
                  <motion.div 
                    className="w-5 h-5"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/images/arrow-right.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewReleases;