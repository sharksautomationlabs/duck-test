'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const BookCategories = () => {
  const categories = [
    { name: "Fiction", image: "/images/category-fiction.png", staggered: false },
    { name: "Science Fiction\n& Fantasy", image: "/images/category-scifi.png", staggered: true },
    { name: "Mystery &\nThriller", image: "/images/category-mystery.png", staggered: false },
    { name: "Non-Fiction", image: "/images/category-nonfiction.png", staggered: true },
    { name: "Children&apos;s\nBooks", image: "/images/category-childrens.png", staggered: false },
    { name: "Business &\nSelf-Help", image: "/images/category-business.png", staggered: true },
    { name: "Romance", image: "/images/category-romance.png", staggered: false },
  ];

  return (
    <>
      {/* This style block hides the scrollbar on the element it's applied to */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <section className="relative bg-[#F8F9FA] rounded-[40px] my-20 py-16">
        {/* Decorative Duck Icons */}


        {/* Centered Header Container */}
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Lora'] font-medium text-5xl text-gray-800">
            Book Category
          </h2>
        </motion.div>
        
        {/* Full-Width Scrollable Wrapper with hidden scrollbar */}
        <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
          <motion.div 
            className="flex items-start gap-6 flex-nowrap w-max mx-auto px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={`relative w-[200px] h-[250px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 hover-lift smooth-transition ${category.staggered ? 'mt-12' : ''}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={category.image}
                    alt={category.name.replace("\n", " ")}
                    width={200}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Category label overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center p-2"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-['Lora'] font-semibold text-xl text-white text-center whitespace-pre-line leading-tight">
                    {category.name}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BookCategories;