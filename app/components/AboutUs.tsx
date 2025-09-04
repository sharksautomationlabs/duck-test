'use client';

import Image from 'next/image';

const AboutUs = () => {
  const missionVision = [
    {
      icon: "/images/mission-icon.svg",
      title: "Our Mission",
      description: "To empower writers by providing exceptional publishing, design, and marketing services that bring their stories to the world. We are committed to producing books that leave a lasting mark on readers.",
    },
    {
      icon: "/images/vision-icon.svg",
      title: "Our Vision",
      description: "To become the most trusted global publishing partner, known for producing bestsellers and championing diverse voices.",
    }
  ];

  const values = [
    { title: "Quality Publishing", description: "Every book gets expert editing, design, and production.", bgColor: "bg-[#FFFBEB]" },
    { title: "Global Reach", description: "We distribute to readers in every corner of the world.", bgColor: "bg-[#F8F9FA]" },
    { title: "Author Support", description: "We distribute to readers in every corner of the world.", bgColor: "bg-[#FFFBEB]" },
    { title: "Innovation", description: "We use the latest tools and strategies to maximize your reach.", bgColor: "bg-[#F8F9FA]" },
    { title: "Diversity", description: "We welcome stories from all backgrounds and cultures.", bgColor: "bg-[#FFFBEB]" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Section: Image and Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Image */}
          <div className="relative">
            <div className="w-full h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-image.png"
                alt="Woman reading a book"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-16 w-50 h-50">
              <Image
                src="/images/duck-mascot-2.png"
                alt="Duck Mascot"
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h2 className="font-['Lora'] font-semibold text-5xl text-gray-800">
              About Us
            </h2>
            {missionVision.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16">
                  <Image src={item.icon} alt={`${item.title} icon`} width={64} height={64} />
                </div>
                <div>
                  <h3 className="font-['Lora'] font-semibold text-2xl text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins'] text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Our Values */}
        <div className="text-center">
          <h3 className="font-['Lora'] font-semibold text-4xl text-gray-800 mb-12">
            Our Values
          </h3>
          <div className="flex justify-center flex-wrap gap-6">
            {values.map((value, index) => (
              <div key={index} className={`${value.bgColor} rounded-xl p-6 w-56 h-auto flex flex-col items-center text-center`}>
                <h4 className="font-['Poppins'] font-bold text-base text-gray-800 mb-2">
                  {value.title}
                </h4>
                <p className="font-['Poppins'] text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;