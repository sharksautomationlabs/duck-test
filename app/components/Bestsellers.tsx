'use client';

import Image from 'next/image';

const Bestsellers = () => {
  const books = [
    {
      title: "Business\nPlan",
      price: "$10",
      image: "/images/book-3.png",
      imageWidth: 200,
      imageHeight: 300,
    },
    {
      title: "Palvery\nEbook", 
      price: "$10",
      image: "/images/book-4.png",
      imageWidth: 200,
      imageHeight: 300,
    },
    {
      title: "Delivering The\nBest Innovation",
      price: "$10",
      image: "/images/book-1.png",
      imageWidth: 200,
      imageHeight: 300,
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      {/* Background Wavy Lines */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section-background.png"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Duck Mascot - Moved to the front with z-20 */}
      <div className="absolute bottom-0 left-10 z-20 w-48 h-56">
        <Image
          src="/images/duck-mascot-3.png"
          alt="Duck mascot reading a book"
          width={192}
          height={224}
          className="transform -scale-x-100"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-24">
          <div>
            <h2 className="font-['Lora'] font-semibold text-5xl text-gray-800 mb-3">
              Bestsellers
            </h2>
            <p className="font-['Poppins'] text-base text-gray-500">
              Explore books topping charts and winning hearts worldwide.
            </p>
          </div>
          <button className="bg-gray-800 hover:bg-black text-white font-['Poppins'] font-semibold px-6 py-1 rounded-full text-base">
            View All
          </button>
        </div>
        
        <div className="flex justify-center gap-12">
          {books.map((book, index) => (
            <div key={index} className="relative bg-[#FFFBEB] rounded-2xl p-6 pb-24 w-full max-w-[360px]">
              {/* Book Image - Absolutely Positioned */}
              <div 
                className="absolute left-6 -top-6 w-[150px] h-[210px] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={book.image}
                  alt={book.title.replace("\n", " ")}
                  width={book.imageWidth}
                  height={book.imageHeight}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="ml-[170px]" style={{ minHeight: '150px' }}>
                {/* Title */}
                <h3 className="font-['Lora'] font-semibold text-xl leading-tight text-gray-800 whitespace-pre-line mb-4">
                  {book.title}
                </h3>
                
                {/* Price */}
                <span className="font-['Lora'] font-bold text-4xl text-gray-800">
                  {book.price}
                </span>
              </div>
              
              {/* Buy Now button - Repositioned and elongated */}
              <button className="absolute bottom-6 left-6 right-6 bg-[#ffbe02] hover:bg-yellow-500 text-black font-['Poppins'] font-semibold py-1 rounded-2xl text-base shadow-lg shadow-yellow-300/50">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;