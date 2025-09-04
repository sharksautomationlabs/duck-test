'use client';

import Image from 'next/image';

const NewsEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 pl-[240px]">
            <h2 className="font-['Lora'] font-medium text-[64px] leading-[1.2] tracking-[1.28px] text-black">
              News & Events
            </h2>
            
            <p className="font-['Poppins'] font-normal text-[18px] leading-[1.4] text-[#6b6b6b] w-[369px]">
              Stay updated with everything happening at Duck Book Writers.
            </p>
            
            <button className="bg-black hover:bg-gray-800 text-white font-['Poppins'] font-semibold px-8 py-1 rounded-[50px] text-[18px] w-[146px] h-[43px] flex items-center justify-center">
              View All
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="w-[1239px] h-[461px] relative">
              <Image
                src="/images/news-image.png"
                alt="News & Events"
                width={1239}
                height={461}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
