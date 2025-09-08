'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Bestsellers = () => {
  const books = [
    {
      title: "Business\nPlan",
      price: "$10",
      image: "/images/book-3.png",
      imageWidth: 200,
      imageHeight: 300,
    },
    {
      title: "Palvery\nEbook", 
      price: "$10",
      image: "/images/book-4.png",
      imageWidth: 200,
      imageHeight: 300,
    },
    {
      title: "Delivering The\nBest Innovation",
      price: "$10",
      image: "/images/book-1.png",
      imageWidth: 200,
      imageHeight: 300,
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      {/* Background Wavy Lines */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section-background.png"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Duck Mascot - Moved to the front with z-20 */}
      <motion.div 
        className="absolute bottom-0 left-10 z-20 w-48 h-56"
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
      >
        <Image
          src="/images/duck-mascot-3.png"
          alt="Duck mascot reading a book"
          width={192}
          height={224}
          className="transform -scale-x-100"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="flex justify-between items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h2 
              className="font-['Lora'] font-semibold text-5xl text-gray-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bestsellers
            </motion.h2>
            <motion.p 
              className="font-['Poppins'] text-base text-gray-500"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore books topping charts and winning hearts worldwide.
            </motion.p>
          </div>
          <motion.button 
            className="bg-gray-800 hover:bg-black text-white font-['Poppins'] font-semibold px-6 py-1 rounded-full text-base hover-lift smooth-transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {books.map((book, index) => (
            <motion.div 
              key={index} 
              className="relative bg-[#FFFBEB] rounded-2xl p-6 pb-24 w-full max-w-[360px] hover-lift smooth-transition"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Book Image - Absolutely Positioned */}
              <motion.div 
                className="absolute left-6 -top-6 w-[150px] h-[210px] rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: -20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Image
                  src={book.image}
                  alt={book.title.replace("\n", " ")}
                  width={book.imageWidth}
                  height={book.imageHeight}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Content Container */}
              <motion.div 
                className="ml-[170px]" 
                style={{ minHeight: '150px' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                {/* Title */}
                <motion.h3 
                  className="font-['Lora'] font-semibold text-xl leading-tight text-gray-800 whitespace-pre-line mb-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                >
                  {book.title}
                </motion.h3>
                
                {/* Price */}
                <motion.span 
                  className="font-['Lora'] font-bold text-4xl text-gray-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {book.price}
                </motion.span>
              </motion.div>
              
              {/* Buy Now button - Repositioned and elongated */}
              <motion.button 
                className="absolute bottom-6 left-6 right-6 bg-[#ffbe02] hover:bg-yellow-500 text-black font-['Poppins'] font-semibold py-1 rounded-2xl text-base shadow-lg shadow-yellow-300/50 hover-lift smooth-transition"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Bestsellers;