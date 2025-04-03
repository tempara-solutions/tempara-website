"use client";
import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ 
  children, 
  threshold = 0.2,
  delay = 0,
  direction = 'up',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      default:
        return 'translate-y-8';
    }
  };

  const getDelayClass = () => {
    switch (delay) {
      case 1:
        return 'reveal-delay-100';
      case 2:
        return 'reveal-delay-200';
      case 3:
        return 'reveal-delay-300';
      case 4:
        return 'reveal-delay-400';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`opacity-0 ${getDirectionClass()} transition-all duration-500 ease-out ${getDelayClass()} ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : ''
      }`}
    >
      {children}
    </div>
  );
} 