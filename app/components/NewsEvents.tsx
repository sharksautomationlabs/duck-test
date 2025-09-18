'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NewsEvents = () => {
  const pathname = usePathname();
  const isNewsPage = pathname === '/news';
  
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section-background.png"
          alt="News Events Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left lg:pl-0 xl:pl-[120px] 2xl:pl-[240px]">
            <h2 className="font-['Lora'] font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] leading-[1.2] tracking-[0.64px] sm:tracking-[0.8px] lg:tracking-[1px] xl:tracking-[1.28px] text-black">
              News & Events
            </h2>
            
            <p className="font-['Poppins'] font-normal text-base sm:text-lg lg:text-[18px] leading-[1.4] text-[#6b6b6b] w-full max-w-[369px] mx-auto lg:mx-0">
              Stay updated with everything happening at Duck Book Writers.
            </p>
            
            {!isNewsPage && (
              <Link href="/news">
                <button className="bg-black hover:bg-gray-800 text-white font-['Poppins'] font-semibold px-6 sm:px-8 py-1 rounded-[50px] text-sm sm:text-base lg:text-[18px] w-[120px] sm:w-[130px] lg:w-[146px] h-[36px] sm:h-[40px] lg:h-[43px] flex items-center justify-center mx-auto lg:mx-0">
                  View All
                </button>
              </Link>
            )}
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="w-full max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1239px] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[461px] relative mx-auto">
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
