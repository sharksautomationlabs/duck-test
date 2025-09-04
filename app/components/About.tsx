'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className="relative w-full h-[878px] overflow-hidden bg-white">
      {/* Background container for the left side */}
      <div className="absolute top-0 left-0 h-full w-[65%] rounded-br-[20px] rounded-tr-[20px] bg-[#efefef] overflow-hidden">
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
            background: 'radial-gradient(ellipse at bottom left, rgba(255,224,51,1) 0%, rgba(255,224,51,0) 100%)'
          }}
        ></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Content - Left side */}
          <div className="space-y-8 pl-[120px]">
            <h2 className="font-['Lora'] font-semibold text-[64px] leading-[1.2] tracking-[1.28px] text-[#1A1A1A]">
              Bringing Authors&apos;
              <br />
              Stories to Readers
              <br />
              Worldwide
            </h2>
            
            <div className="space-y-5 w-[550px]">
              <p className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]">
                Duck Book Writers is a full-service publishing house based in Houston, Texas, serving authors around the globe. We specialize in publishing, designing, and marketing books worldwide. We bring powerful stories to life and connect them with readers everywhere.
              </p>
              
              <p className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]">
                Whether you are an aspiring author or an established bestseller, we handle every stage of the journey from manuscript development to stunning cover design, from global distribution to strategic marketing campaigns that boost sales and visibility.
              </p>
              
              <p className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]">
                Our mission is simple: help great books find their audience and help authors achieve the success they deserve.
              </p>
            </div>
            
            <button className="bg-[#ffbe02] hover:bg-[#e6aa02] text-[#040404] font-['Poppins'] font-semibold px-8 py-3 rounded-[50px] text-[16px] transition-all duration-200 w-[166px] h-[42px] flex items-center justify-center">
              Learn More
            </button>
          </div>

          {/* Image - Right side */}
          <div className="relative">
            <div className="w-[647px] h-[653px] relative">
              <Image
                src="/images/about-section-image.png"
                alt="About Duck Book Writers"
                width={647}
                height={653}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Duck mascot positioned exactly as in Figma */}
            {/* <div className="absolute top-0 right-[240px] w-[236px] h-[236px]">
              <Image
                src="/images/duck-mascot-2.png"
                alt="Duck Mascot"
                width={236}
                height={236}
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="absolute top-90 right-[480px] w-[236px] h-[300px]">
              <Image
                src="/images/duck-mascot-3.png"
                alt="Duck Mascot"
                width={236}
                height={236}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;