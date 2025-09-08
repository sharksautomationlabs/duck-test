'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative w-full h-[878px] overflow-hidden bg-white">
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
            
            {/* Duck mascot positioned exactly as in Figma */}
            <motion.div 
              className="absolute top-90 left-[480px] w-[236px] h-[300px]"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <Image
                src="/images/duck-mascot-3.png"
                alt="Duck Mascot"
                width={236}
                height={236}
                className="w-full h-full object-cover transform scale-x-[-1]"
              />
            </motion.div>
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