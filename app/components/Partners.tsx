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
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center gap-x-20 flex-wrap">
        {partners.map((partner, index) => (
          <div key={index}>
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={partner.width}
              height={partner.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;