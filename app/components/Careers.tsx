'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const Careers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

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
      // EmailJS configuration - you'll get these from EmailJS dashboard
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'zaidrehan545@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          contact_number: formData.contact,
          subject: formData.subject,
          message: formData.description || 'No description provided',
        },
        publicKey
      );

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

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-white">
      {/* Background container */}
      <div className="absolute top-0 left-0 h-full w-full bg-[#efefef] overflow-hidden">
        {/* Blue gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,27,134,1) 0%, rgba(0,27,134,0) 100%)'
          }}
        ></div>

        {/* Yellow gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(255,224,51,1) 0%, rgb(255, 255, 255) 100%)'
          }}
        ></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-16 lg:px-24 xl:px-32 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-8 pr-[120px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="font-['Lora'] font-semibold text-[64px] leading-[1.2] tracking-[1.28px] text-[#1A1A1A]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join Our
              <br />
              Publishing
              <br />
              Team
            </motion.h1>
            
            <motion.div 
              className="space-y-5 w-[550px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.p 
                className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                At Duck Book Writers, we&apos;re always looking for talented individuals who share our passion for bringing great stories to life. Whether you&apos;re an experienced editor, a creative designer, or a marketing professional, we&apos;d love to hear from you.
              </motion.p>
              
              <motion.p 
                className="font-['Poppins'] font-normal text-[16px] leading-[1.7] text-[#6b6b6b]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                We offer competitive benefits, flexible working arrangements, and the opportunity to work with authors from around the world. Join us in our mission to help great books find their audience.
              </motion.p>
            </motion.div>

            {/* Duck mascot with animation */}
            <motion.div 
              className="relative w-[200px] h-[250px] mt-8"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: isInView ? [0, -10, 0, -8, 0, -12, 0] : 0,
                rotate: [0, 0.5, -0.5, 0.5, -0.5, 0]
              }}
              transition={{ 
                duration: 2.5, 
                delay: 0.3,
                ease: "easeInOut",
                y: {
                  duration: 2.0,
                  repeat: 0,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }
              }}
            >
              <Image
                src="/images/duck-mascot-2.png"
                alt="Duck Mascot"
                width={200}
                height={250}
                className="w-full h-full object-contain"
              />
              
              {/* Sparkles animation */}
              <motion.div
                className="absolute top-[60px] left-[100px] w-[6px] h-[6px] bg-yellow-400 rounded-full opacity-0"
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  y: isInView ? [0, -80, -100] : 0,
                  x: isInView ? [0, 8, -5] : 0,
                  scale: isInView ? [0.5, 1.5, 1, 0] : 0
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                  delay: 1.8
                }}
                style={{
                  boxShadow: isInView ? '0 0 25px #fbbf24, 0 0 50px #fbbf24, 0 0 75px #fbbf24' : 'none'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div 
            className="bg-white rounded-[20px] p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h2 
              className="font-['Lora'] font-semibold text-[32px] text-[#1A1A1A] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Get in Touch
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="name" className="block font-['Poppins'] font-medium text-[14px] text-[#1A1A1A] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] font-['Poppins'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label htmlFor="email" className="block font-['Poppins'] font-medium text-[14px] text-[#1A1A1A] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] font-['Poppins'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </motion.div>

              {/* Contact Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <label htmlFor="contact" className="block font-['Poppins'] font-medium text-[14px] text-[#1A1A1A] mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] font-['Poppins'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your contact number"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label htmlFor="subject" className="block font-['Poppins'] font-medium text-[14px] text-[#1A1A1A] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] font-['Poppins'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </motion.div>

              {/* Description Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <label htmlFor="description" className="block font-['Poppins'] font-medium text-[14px] text-[#1A1A1A] mb-2">
                  Brief Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] font-['Poppins'] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ffbe02] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about yourself and why you're interested in joining our team..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ffbe02] hover:bg-[#e6aa02] disabled:bg-gray-400 text-[#040404] font-['Poppins'] font-semibold px-8 py-4 rounded-[50px] text-[16px] transition-all duration-200 flex items-center justify-center hover-lift smooth-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Application'}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-[10px] font-['Poppins'] text-[14px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you! Your application has been submitted. We&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-[10px] font-['Poppins'] text-[14px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  There was an error submitting your application. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
