'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AwardWinners = () => {
  return (
    <section className="relative w-full h-[650px] bg-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section-background.png"
          alt="Award Winners Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative max-w-screen-2xl mx-auto h-full z-10">
        {/* Left Column: Title */}
        <div className="absolute top-1/2 left-24 -translate-y-1/2">
          <h2 className="font-['Lora'] font-semibold text-8xl leading-tight text-gray-800">
            Award
            <br />
            Winners
          </h2>
        </div>

        {/* Center: Award Decoration and Image Cluster */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]">
          {/* Base Image: Podium and Stars */}
          <Image
            src="/images/award-decoration.png"
            alt="Award Decoration Podium and Stars"
            layout="fill"
            objectFit="contain"
          />
          
          {/* Overlay Image: Book */}
          <div className="absolute top-[118px] left-1/2 -translate-x-1/2 w-[200px] h-[300px]">
            <Image
              src="/images/award-image.png"
              alt="Award Winning Book"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Overlay Image: Duck Mascot */}
          <div className="absolute bottom-[65px] right-[180px] w-[140px] h-[180px]">
            <Image
              src="/images/duck-mascot-2.png"
              alt="Duck Mascot"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Right Column: Sub-text and Link */}
        <div className="absolute top-1/2 right-34 -translate-y-1/2 space-y-4">
          <p className="font-['Poppins'] text-xl text-gray-600">
            Recognized for excellence
            <br />
            and impact.
          </p>
          <Link href="#" className="flex items-center gap-2 group">
            <span className="font-['Poppins'] font-semibold text-blue-800 group-hover:underline">
              Read Now
            </span>
            <ArrowRight className="w-5 h-5 text-blue-800 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AwardWinners;