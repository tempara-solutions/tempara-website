"use client";
import { useEffect, useRef, useState } from 'react';

const VideoIntro = ({ onComplete, autoPlay = true }) => {
  const videoRef = useRef(null);
  const [hasAttemptedPlay, setHasAttemptedPlay] = useState(false);
  const hasTriggeredComplete = useRef(false);
  
  useEffect(() => {
    // Add event listener for when video ends
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleVideoEnded = () => {
        if (onComplete && !hasTriggeredComplete.current) {
          hasTriggeredComplete.current = true;
          onComplete();
        }
      };
      
      videoElement.addEventListener('ended', handleVideoEnded);
      
      // Force the video to load
      videoElement.load();
      
      // Make multiple aggressive attempts to autoplay to overcome browser restrictions
      const attemptAutoplay = () => {
        if (!videoElement.playing) {
          console.log("Attempting to play video...");
          
          // Ensure video is muted (browsers only allow autoplay if muted)
          videoElement.muted = true;
          
          const playPromise = videoElement.play();
          
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Video autoplay failed:", error);
              
              // Try again with different strategy
              setTimeout(() => {
                videoElement.play().catch(e => console.error("Retry play failed:", e));
              }, 500);
              
              // Setup a click listener for user interaction
              document.addEventListener('click', () => {
                videoElement.play().catch(e => console.error("Play after click failed:", e));
              }, { once: true });
            });
          }
        }
      };
      
      // Multiple autoplay attempts with different timing
      attemptAutoplay();
      
      // Setup multiple retry attempts with increasing delays
      const timers = [
        setTimeout(attemptAutoplay, 300),
        setTimeout(attemptAutoplay, 1000),
        setTimeout(attemptAutoplay, 2000)
      ];
      
      // Add visibility change detection to replay when tab becomes visible
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          attemptAutoplay();
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnded);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [onComplete]);
  
  // Handle click on video to ensure it plays
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (video.paused) {
      video.play().catch(err => console.error("Play failed on click:", err));
    }
  };
  
  // Handle smooth scrolling with improved timing
  const handleScrollDown = () => {
    // Only trigger onComplete once
    if (onComplete && !hasTriggeredComplete.current) {
      hasTriggeredComplete.current = true;
      onComplete();
    }
  };
  
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-primary overflow-hidden">
      {/* Video element that will take up the full hero section */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        muted
        playsInline
        autoPlay
        controls={false}
        preload="auto"
        onClick={handleVideoClick}
        loop={false}
      >
        <source src="/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Skip/scroll button with improved transition */}
      <button 
        className="absolute bottom-8 right-8 z-10 text-gray-400 hover:text-white bg-primary/50 px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-secondary/30 hover:scale-105"
        onClick={handleScrollDown}
      >
        Skip Video
      </button>
      
      {/* Scroll indicator with improved transitions */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transition-all duration-300 hover:scale-110"
        onClick={handleScrollDown}
      >
        <svg className="w-6 h-6 text-gray-400 hover:text-secondary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default VideoIntro; 