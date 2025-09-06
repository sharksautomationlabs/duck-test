"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About US' },
  { href: '/books', label: 'Books' },
  { href: '/authors', label: 'Authors' },
  { href: '/services', label: 'Services' },
  { href: '/news', label: 'News & Event' },
  { href: '/careers', label: 'Careers' },
];

const Header = () => {
  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/contact-duckbookwriters/30min',
      });
    }
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          
          {/* Column 1: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image 
                src="/images/duck-logo-final.png" 
                alt="Duck Book Writers Logo" 
                width={159} 
                height={159} 
                className="object-contain"
              />
            </Link>
          </div>

          {/* Column 2: Info and Navigation */}
          <div className="flex-grow flex flex-col items-center mx-32">
            {/* Top Row: Contact Info */}
            <div className="flex items-center gap-24 mb-2">
              <a href="tel:+18009876543" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <Image src="/images/phone-icon.svg" alt="Phone" width={16} height={16} />
                <span>+1 (800) 987-6543</span>
              </a>
              <a href="mailto:Contact@duckbookwriters.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <Image src="/images/email-icon.svg" alt="Email" width={22} height={16} />
                <span>Contact@duckbookwriters.com</span>
              </a>
            </div>

            {/* Separator Line */}
            <div className="w-full max-w-lg border-t border-gray-200"></div>

            {/* Bottom Row: Navigation Links */}
            <nav className="mt-2">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Button */}
          <div className="flex-shrink-0">
            <button onClick={openCalendly} className="bg-[#FFBE02] text-black font-medium text-base py-1 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-md">
              Contact
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;