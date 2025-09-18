'use client';

import Image from 'next/image';

const Partners = () => {
  const partners = [
    { name: "Apple Books", logo: "/images/amazon-logo.png", width: 145, height: 35 },
    { name: "Amazon Kindle", logo: "/images/amazon-kindle-logo.png", width: 180, height: 40 },
    { name: "Barnes & Noble", logo: "/images/barnes-noble-logo.png", width: 230, height: 35 },
    { name: "Kobo", logo: "/images/kobo-logo.png", width: 120, height: 45 },
    { name: "Google Play Books", logo: "/images/apple-books-logo.png", width: 170, height: 40 }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div key={`set1-${index}`} className="marquee-item">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain w-32 h-12 sm:w-24 sm:h-10 lg:w-auto lg:h-auto"
              />
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {partners.map((partner, index) => (
            <div key={`set2-${index}`} className="marquee-item">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain w-32 h-12 sm:w-24 sm:h-10 lg:w-auto lg:h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-track {
          display: flex;
          animation: marquee-scroll 40s linear infinite;
          width: max-content;
          will-change: transform;
        }
        
        .marquee-item {
          flex-shrink: 0;
          margin: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (min-width: 640px) {
          .marquee-item {
            margin: 0 3rem;
          }
        }
        
        @media (min-width: 1024px) {
          .marquee-item {
            margin: 0 5rem;
          }
        }
        
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        
        /* Ensure smooth animation on all devices */
        .marquee-track {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Partners;