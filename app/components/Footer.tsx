"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - get these from your EmailJS dashboard
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if credentials are properly set
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS credentials not configured. Please check your .env.local file.');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'Contact@duckbookwriters.com',
          from_name: formData.name,
          from_email: formData.email,
          contact_number: formData.contact,
          subject: formData.subject,
          message: formData.description || 'No description provided',
        },
        publicKey
      );

      console.log('Email sent successfully:', result);

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          contact: '',
          subject: '',
          description: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    { icon: "/images/phone-icon.svg", text: "+1 (469) 452-7618" },
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
                        <a href="tel:+14694527618" className="font-['Poppins'] text-xs sm:text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-200">
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

                {/* Middle Column - Contact Form */}
                <div className="bg-white rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 lg:p-8 shadow-lg sm:col-span-2 lg:col-span-1">
                  <h3 className="font-['Lora'] font-semibold text-xl sm:text-2xl text-[#1A1A1A] mb-4 sm:mb-6">
                    Let&apos;s Talk About Your Book
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block font-['Poppins'] font-medium text-xs sm:text-sm text-[#1A1A1A] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-[8px] font-['Poppins'] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block font-['Poppins'] font-medium text-xs sm:text-sm text-[#1A1A1A] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-[8px] font-['Poppins'] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Contact Field */}
                    <div>
                      <label htmlFor="contact" className="block font-['Poppins'] font-medium text-xs sm:text-sm text-[#1A1A1A] mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-[8px] font-['Poppins'] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your contact number"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block font-['Poppins'] font-medium text-xs sm:text-sm text-[#1A1A1A] mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-[8px] font-['Poppins'] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                        placeholder="What's this about?"
                      />
                    </div>

                    {/* Description Field */}
                    <div>
                      <label htmlFor="description" className="block font-['Poppins'] font-medium text-xs sm:text-sm text-[#1A1A1A] mb-1">
                        Brief Description (Optional)
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-[8px] font-['Poppins'] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your book idea..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ffbe02] hover:bg-[#e6aa02] disabled:bg-gray-400 text-[#040404] font-['Poppins'] font-semibold px-4 py-2 rounded-[40px] text-xs sm:text-sm transition-all duration-200 flex items-center justify-center hover-lift smooth-transition"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Started'}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-2 bg-green-100 border border-green-400 text-green-700 rounded-[8px] font-['Poppins'] text-xs">
                        Thank you! Your message has been sent. We&apos;ll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded-[8px] font-['Poppins'] text-xs">
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                  </form>
                </div>

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
