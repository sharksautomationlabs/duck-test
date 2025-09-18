'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: "/images/shipping-icon.svg",
      title: "Free Worldwide Shipping",
      bgColor: "bg-[#fff9d9]"
    },
    {
      icon: "/images/guarantee-icon.svg", 
      title: "Refund Guarantee",
      bgColor: "bg-[#efefef]"
    },
    {
      icon: "/images/quality-icon.svg",
      title: "Quality Assurance", 
      bgColor: "bg-[#fff9d9]"
    }
  ];

  return (
    <section className="py-10 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-4">
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`w-full sm:w-[300px] lg:w-[434px] h-[60px] sm:h-[70px] lg:h-[84px] ${feature.bgColor} rounded-[15px] flex items-center justify-center hover-lift smooth-transition`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 px-4">
                <motion.div 
                  className="w-[30px] h-[32px] sm:w-[34px] sm:h-[36px] lg:w-[38px] lg:h-[41px] flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={38}
                    height={41}
                    className="w-full h-full"
                  />
                </motion.div>
                <h3 className="font-['Poppins'] font-bold text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.2] tracking-[0.28px] sm:tracking-[0.32px] lg:tracking-[0.36px] text-black">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
