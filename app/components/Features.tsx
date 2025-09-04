'use client';

import Image from 'next/image';

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
    <section className="py-10 pt-24 pb-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`w-[434px] h-[84px] ${feature.bgColor} rounded-[15px] flex items-center justify-center`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-[38px] h-[41px] flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={38}
                    height={41}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[18px] leading-[1.2] tracking-[0.36px] text-black">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
