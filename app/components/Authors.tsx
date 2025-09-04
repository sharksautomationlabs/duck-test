'use client';

import Image from 'next/image';

const Authors = () => {
  const authors = [
    { name: "Mia Klassen", position: "Chief Talent Officer", image: "/images/author-1.png" },
    { name: "Jonathan Leon", position: "Chief Talent Officer", image: "/images/author-2.png" },
    { name: "Steffi Allysa", position: "Chief Creative Officer", image: "/images/author-3.png" },
  ];

  return (
    <section className="relative py-20">
      {/* Floating Mascots */}
      <div className="absolute top-16 left-16 z-20 w-32 h-40">
        <Image src="/images/duck-mascot-3.png" alt="Duck Mascot" width={128} height={160} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-16 z-20 w-32 h-40">
        <Image src="/images/duck-mascot-3.png" alt="Duck Mascot" width={128} height={160} />
      </div>

      {/* Main Content Card */}
      <div 
        className="relative max-w-screen-xl mx-auto px-4 pt-20 pb-32 rounded-[40px] border border-gray-200/80 shadow-lg"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(255, 224, 51, 0.25) 0%, rgba(255, 224, 51, 0) 70%), linear-gradient(to bottom, #FDFDFD, #F5F6FF)'
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Lora'] font-semibold text-5xl text-gray-800 mb-4">
            Meet Our Authors
          </h2>
          <p className="font-['Poppins'] text-base text-gray-500 max-w-3xl mx-auto">
            From first-time storytellers to established literary icons, our authors are the heart of Duck Book Writers. Explore their biographies, dive into their latest releases, watch interviews, and learn about upcoming events.
          </p>
        </div>
        
        {/* Authors Grid */}
        <div className="flex justify-center gap-12">
          {authors.map((author, index) => (
            <div key={index} className="relative w-72 h-96">
              {/* Transparent Card with White Border */}
              <div className="w-full h-full bg-transparent border-2 border-white rounded-2xl flex items-center justify-center">
                <div className="w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] rounded-xl overflow-hidden">
                  <Image
                    src={author.image}
                    alt={`Portrait of ${author.name}`}
                    width={288}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Card Overlay */}
              <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 bg-white rounded-lg text-center py-3 px-6 shadow-md w-[85%]">
                <h3 className="font-['Poppins'] font-bold text-base text-gray-800">
                  {author.name}
                </h3>
                <p className="font-['Poppins'] text-xs text-gray-500">
                  {author.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;