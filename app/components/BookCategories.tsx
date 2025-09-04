'use client';

import Image from 'next/image';

const BookCategories = () => {
  const categories = [
    { name: "Fiction", image: "/images/category-fiction.png", staggered: false },
    { name: "Science Fiction\n& Fantasy", image: "/images/category-scifi.png", staggered: true },
    { name: "Mystery &\nThriller", image: "/images/category-mystery.png", staggered: false },
    { name: "Non-Fiction", image: "/images/category-nonfiction.png", staggered: true },
    { name: "Children&apos;s\nBooks", image: "/images/category-childrens.png", staggered: false },
    { name: "Business &\nSelf-Help", image: "/images/category-business.png", staggered: true },
    { name: "Romance", image: "/images/category-romance.png", staggered: false },
  ];

  return (
    <>
      {/* This style block hides the scrollbar on the element it's applied to */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <section className="relative bg-[#F8F9FA] rounded-[40px] my-20 py-16">
        {/* Decorative Duck Icons */}


        {/* Centered Header Container */}
        <div className="max-w-7xl mx-auto text-center mb-12 px-4">
          <h2 className="font-['Lora'] font-medium text-5xl text-gray-800">
            Book Category
          </h2>
        </div>
        
        {/* Full-Width Scrollable Wrapper with hidden scrollbar */}
        <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-start gap-6 flex-nowrap w-max mx-auto px-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative w-[200px] h-[250px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 ${category.staggered ? 'mt-12' : ''}`}
              >
                <Image
                  src={category.image}
                  alt={category.name.replace("\n", " ")}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category label overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2">
                  <h3 className="font-['Lora'] font-semibold text-xl text-white text-center whitespace-pre-line leading-tight">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCategories;