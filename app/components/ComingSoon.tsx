'use client';

import Image from 'next/image';

const ComingSoon = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section 
        className="relative rounded-[40px] my-20 p-8"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(255, 224, 51, 0.15) 0%, rgba(255, 224, 51, 0) 70%), linear-gradient(to right, #F8F9FA, #F3F4FF)'
        }}
      >
        <div className="grid grid-cols-5 items-center gap-4">
          {/* Left Column: Text Content - Shifted right with padding */}
          <div className="text-left space-y-3 col-span-1 pl-8">
            <h2 className="font-['Lora'] font-medium text-5xl leading-tight text-gray-800">
              Coming
              <br />
              <span className="font-bold text-red-500">Soon</span>
            </h2>
            <p className="font-['Poppins'] text-lg text-gray-500">
              Be the first to meet tomorrow's literary sensations.
            </p>
          </div>

          {/* Center Column: Book and Mascot */}
          <div className="relative flex justify-center items-center col-span-3">
            {/* Main Book Image Placeholder */}
            <div className="w-[450px] h-[450px]">
              <Image
                src="/images/coming-soon-book.png" // << REPLACE THIS IMAGE PATH
                alt="Flight Path book cover"
                width={450}
                height={450}
                className="object-contain"
              />
            </div>
            {/* Duck Mascot - Repositioned */}
            <div className="absolute -bottom-5 left-60 z-10 w-32 h-40">
              <Image
                src="/images/duck-mascot-3.png" // << Placeholder for your duck mascot
                alt="Duck mascot"
                width={128}
                height={160}
              />
            </div>
          </div>

          {/* Right Column: Countdown and Button */}
          <div className="flex flex-col items-center justify-center space-y-6 col-span-1">
            {/* Countdown Timer */}
            <div className="flex gap-3">
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 shadow w-16 h-16 flex items-center justify-center">
                  <span className="font-['Poppins'] font-semibold text-3xl text-gray-700">09</span>
                </div>
                <span className="font-['Poppins'] text-xs text-gray-500 mt-2 block">Hr</span>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 shadow w-16 h-16 flex items-center justify-center">
                  <span className="font-['Poppins'] font-semibold text-3xl text-gray-700">23</span>
                </div>
                <span className="font-['Poppins'] text-xs text-gray-500 mt-2 block">Min</span>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 shadow w-16 h-16 flex items-center justify-center">
                  <span className="font-['Poppins'] font-semibold text-3xl text-gray-700">56</span>
                </div>
                <span className="font-['Poppins'] text-xs text-gray-500 mt-2 block">Sec</span>
              </div>
            </div>
            
            {/* Pre Order Button */}
            <button className="bg-[#ffbe02] hover:bg-yellow-500 text-black font-['Poppins'] font-semibold px-6 py-2 rounded-full text-sm w-[160px]">
              Pre Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;