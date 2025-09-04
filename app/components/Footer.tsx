'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: "/images/phone-icon.svg", text: "+1 (800) 987-6543" },
    { icon: "/images/email-icon.svg", text: "Contact@duckbookwriters.com" },
    { icon: "/images/location-icon.svg", text: "2703 Montrose Blvd, Houston,\nTX 77006, United States" },
  ];

  const socialLinks = [
    { icon: "/images/facebook.png", alt: "Facebook" },
    { icon: "/images/instagram.svg", alt: "Instagram" },
    { icon: "/images/linkedin.png", alt: "LinkedIn" },
    { icon: "/images/x.png", alt: "X" },
  ];

  const navLinks = ["Home", "About US", "Books", "Authors", "Services", "News & Event", "Careers"];

  return (
    <>
      {/* Add this style block for the yellow icon filter */}
      {/* <style jsx global>{`
        .icon-yellow {
          filter: invert(84%) sepia(35%) saturate(1415%) hue-rotate(325deg) brightness(105%) contrast(101%);
        }
      `}</style> */}
      
      <footer className="relative mt-24 mb-4">
        <div className="relative max-w-screen-2xl mx-auto px-4">
          
          {/* DIV 1: Main Content (Logo, Details, Nav) */}
          <div className="relative bg-[#F8F9FA] rounded-[40px] z-10">
            {/* Central Logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center">
                <Image src="/images/footer-logo.png" alt="Duck Mascot" width={200} height={200} />
              </div>
            </div>

            <div className="pt-20 pb-6">
              <div className="grid grid-cols-3 items-start gap-8 px-24">
                {/* Left Column */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Image src={item.icon} alt="" width={16} height={16} className="mt-1 icon-yellow" />
                      <p className="font-['Poppins'] text-sm text-gray-600 whitespace-pre-line">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Middle Column Spacer */}
                <div></div>

                {/* Right Column */}
                <div className="flex flex-col items-end gap-3">
                  <Link href="#" className="flex items-center gap-2 font-['Poppins'] text-sm text-gray-600 hover:text-yellow-500">
                    Privacy Policy
                    <ChevronRight className="text-yellow-500 w-4 h-4" />
                  </Link>
                  <Link href="#" className="flex items-center gap-2 font-['Poppins'] text-sm text-gray-600 hover:text-yellow-500">
                    Terms of Use
                    <ChevronRight className="text-yellow-500 w-4 h-4" />
                  </Link>
                  <div className="flex items-center gap-4 mt-3">
                    {socialLinks.map((social, index) => (
                      <Link href="#" key={index}>
                        <Image
                          src={social.icon}
                          alt={social.alt}
                          width={social.alt === 'Facebook' ? 10 : 18}
                          height={social.alt === 'Facebook' ? 10 : 18}
                          className="icon-yellow object-contain"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              
              {/* Divider */}
              <hr className="border-gray-200 my-5 mx-12" />

              {/* Navigation */}
              <nav className="flex justify-center items-center gap-20 py-2">
                {navLinks.map((link) => (
                  <Link key={link} href="#" className="font-['Poppins'] text-base text-gray-700 hover:text-yellow-500 transition-colors">
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* DIV 2: Copyright Bar */}
          <div className="bg-[#ffbe02] rounded-[40px] mt-2 py-1 text-center">
            <p className="font-['Poppins'] text-xs text-gray-800 font-medium">
              © 2025 Duck Book Writers. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;