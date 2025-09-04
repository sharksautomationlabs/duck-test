'use client';

import Image from 'next/image';

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
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Lora'] font-medium text-5xl text-gray-800 mb-4">
            New Releases
          </h2>
          <p className="font-['Poppins'] text-base text-gray-500 max-w-3xl mx-auto">
            Discover fresh voices and must-read titles now available.
          </p>
        </div>
        
        <div className="flex justify-center gap-8 flex-wrap">
          {releases.map((book, index) => (
            <div key={index} className="bg-[#F8F9FA] rounded-2xl p-6 max-w-[680px] flex items-start gap-6">
              {/* Book Image */}
              <div className="flex-shrink-0">
                <div className="w-50 h-68 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={book.imageSrc}
                    alt={book.altText}
                    width={224}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                {/* New badge */}
                <div className="inline-block bg-[#ffbe02] text-white font-['Poppins'] font-semibold px-3 py-1 rounded-md text-sm">
                  New
                </div>
                
                {/* Title */}
                <h3 className="font-['Lora'] font-medium text-2xl leading-tight text-gray-800">
                  {book.titleLine1} <br />
                  {book.titleLine2}
                </h3>
                
                {/* Description */}
                <p className="font-['Poppins'] font-normal text-base text-gray-500">
                  A lectus ac pulvinar tincidunt accumsan<br />
                  Ullamcor dolor at lectus facilisis hac.
                </p>
                
                {/* Read Now button */}
                <div className="flex items-center space-x-2 group cursor-pointer pt-8">
                  <span className="font-['Poppins'] font-semibold text-[#ffbe02] text-base">
                    Read Now
                  </span>
                  <div className="w-5 h-5">
                    <Image
                      src="/images/arrow-right.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;