"use client";
import { useState, useEffect } from 'react';
import { SmoothLink } from './utils/SmoothScroll';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between h-28 py-2">
        <a href="/" className="flex items-center">
          <div className="h-20 flex items-center justify-start overflow-hidden">
            {/* Logo image */}
            <Image 
              src="/logo.png"
              alt="Tempara AI Solutions"
              width={200}
              height={80}
              className="object-contain max-h-full"
              priority
            />
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <SmoothLink href="#how-it-works" className="text-gray-300 hover:text-secondary transition-colors">How It Works</SmoothLink>
          <SmoothLink href="#use-cases" className="text-gray-300 hover:text-secondary transition-colors">Use Cases</SmoothLink>
          <SmoothLink href="#contact" className="btn btn-secondary">Schedule Consultation</SmoothLink>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-light shadow-lg py-4">
          <div className="container flex flex-col space-y-4">
            <SmoothLink href="#how-it-works" className="text-gray-300 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>How It Works</SmoothLink>
            <SmoothLink href="#use-cases" className="text-gray-300 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Use Cases</SmoothLink>
            <SmoothLink href="#contact" className="btn btn-secondary text-center" onClick={() => setIsOpen(false)}>Schedule Consultation</SmoothLink>
          </div>
        </div>
      )}
    </nav>
  );
} 