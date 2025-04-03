"use client";
import Link from 'next/link';
import Image from 'next/image';
import { SmoothLink } from './utils/SmoothScroll';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="bg-primary-dark pt-24 pb-12 relative">
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary-dark"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and About */}
          <div className="md:col-span-6 md:pr-12">
            <div className="mb-8">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="Tempara Solutions Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-xl">
              We build custom AI solutions that help businesses streamline operations, gain valuable insights, and create competitive advantages in their markets.
            </p>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-6 md:pl-6 md:border-l md:border-gray-800">
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="mr-4 p-2 bg-primary rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:hstreckenbach@temparasolutions.com" className="text-white hover:text-secondary transition-colors font-medium">
                    hstreckenbach@temparasolutions.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="mr-4 p-2 bg-primary rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a href="tel:+19204928350" className="text-white hover:text-secondary transition-colors font-medium">
                    +1 (920) 492-8350
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="mr-4 p-2 bg-primary rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <span className="text-white font-medium">
                    Green Bay, WI
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-6 md:mb-0">
            &copy; {year} Tempara Solutions. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 