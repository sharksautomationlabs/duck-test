"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import React from 'react';

// Define interfaces for the data structures
interface ContactInfo {
  icon: string;
  text: string;
}

interface SocialLink {
  icon: string;
  alt: string;
  href: string;
}

const Footer: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    { icon: "/images/phone-icon.svg", text: "+1 (800) 987-6543" },
    { icon: "/images/email-icon.svg", text: "Contact@duckbookwriters.com" },
    { icon: "/images/location-icon.svg", text: "2703 Montrose Blvd, Houston,\nTX 77006, United States" },
  ];

  const socialLinks: SocialLink[] = [
    { icon: "/images/facebook.png", alt: "Facebook", href: "https://www.facebook.com/share/1C6vAB9LkC/" },
    { icon: "/images/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/duckbookwriters?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { icon: "/images/linkedin.png", alt: "LinkedIn", href: "https://www.linkedin.com/posts/duckbookwriters_bookwriter-bookwriters-book-activity-7369508314637914113-K3AA?utm_source=share&utm_medium=member_android&rcm=ACoAAES1QwQBkN7cj2uiSK3N8zIARlbIo_Z4iiU" },
    // { icon: "/images/x.png", alt: "X", href: "#" },
  ];

  return (
    <>
      <footer className="relative mt-16 sm:mt-20 lg:mt-24 mb-4">
        <div className="relative max-w-screen-2xl mx-auto px-4">
          
          {/* DIV 1: Main Content (Logo, Details, Nav) */}
          <div className="relative bg-[#F8F9FA] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] z-10">
            {/* Central Logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center">
                <Image src="/images/footer-logo.png" alt="Duck Mascot" width={200} height={200} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-[200px] xl:h-[200px] object-contain" />
              </div>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6 sm:gap-8 px-4 sm:px-8 lg:px-24">
                {/* Left Column */}
                <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 justify-center sm:justify-start">
                      <Image src={item.icon} alt="" width={16} height={16} className="mt-1 icon-yellow flex-shrink-0" />
                      {index === 0 ? (
                        <a href="tel:+18009876543" className="font-['Poppins'] text-xs sm:text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-200">
                          {item.text}
                        </a>
                      ) : index === 1 ? (
                        <a href="mailto:Contact@duckbookwriters.com" className="font-['Poppins'] text-xs sm:text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-200">
                          {item.text}
                        </a>
                      ) : (
                        <p className="font-['Poppins'] text-xs sm:text-sm text-gray-600 whitespace-pre-line">{item.text}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Middle Column Spacer - Hidden on mobile */}
                <div className="hidden lg:block"></div>

                {/* Right Column */}
                <div className="flex flex-col items-center sm:items-end gap-3 sm:col-span-2 lg:col-span-1">
                  <Link href="#" className="flex items-center gap-2 font-['Poppins'] text-xs sm:text-sm text-gray-600 hover:text-yellow-500">
                    Privacy Policy
                    <ChevronRight className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                  <Link href="#" className="flex items-center gap-2 font-['Poppins'] text-xs sm:text-sm text-gray-600 hover:text-yellow-500">
                    Terms of Use
                    <ChevronRight className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                  <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3">
                    {socialLinks.map((social, index) => (
                      <Link href={social.href} key={index}>
                        <Image
                          src={social.icon}
                          alt={social.alt}
                          width={social.alt === 'Facebook' ? 10 : 18}
                          height={social.alt === 'Facebook' ? 10 : 18}
                          className="icon-yellow object-contain w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* DIV 2: Copyright Bar */}
          <div className="bg-[#ffbe02] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] mt-2 py-1 text-center">
            <p className="font-['Poppins'] text-[10px] sm:text-xs text-gray-800 font-medium">
              © 2025 Duck Book Writers. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
