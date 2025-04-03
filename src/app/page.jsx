"use client";

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyTempara from '../components/WhyTempara';
import UseCases from '../components/UseCases';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import VideoIntro from '../components/VideoIntro';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [hasSeenVideo, setHasSeenVideo] = useState(false);
  const videoSectionRef = useRef(null);
  // Track if video completion triggered the scroll
  const videoCompletedRef = useRef(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // For testing purposes - uncomment this line to reset the video state
    // localStorage.removeItem('hasWatchedVideo');
    
    // Check if video has been watched previously
    const hasWatchedVideo = localStorage.getItem('hasWatchedVideo');
    
    if (hasWatchedVideo === 'true') {
      setHasSeenVideo(true);
    }
  }, []);
  
  const handleVideoComplete = () => {
    // Only scroll if this is a genuine video completion, not a page load
    setHasSeenVideo(true);
    localStorage.setItem('hasWatchedVideo', 'true');
    
    // Mark that this is coming from a video completion
    videoCompletedRef.current = true;
    
    // Get the target element
    const element = document.getElementById('content-start');
    if (element) {
      // Scroll to the start of content
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Reset the flag after scrolling completes
        setTimeout(() => {
          videoCompletedRef.current = false;
        }, 1000);
      }, 200);
    }
  };

  // Force a client-side render by waiting for isClient to be true
  if (!isClient) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen"></div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Video section always shows and always autoplays */}
      <div ref={videoSectionRef} className="h-screen">
        <VideoIntro 
          onComplete={handleVideoComplete}
          autoPlay={true} /* Always autoplay the video */
        />
      </div>
      
      {/* Content start marker */}
      <div id="content-start" className="scroll-mt-24"></div>
      
      {/* Content sections */}
      <Hero />
      <HowItWorks />
      <WhyTempara />
      <UseCases />
      <CTASection />
      <Footer />
    </main>
  );
} 