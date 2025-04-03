"use client";
import { useState } from 'react';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Their AI solutions helped us identify market trends and optimize our operations, giving us a significant competitive advantage in our industry.",
      author: "Michael Chen",
      position: "CEO, Horizon Innovations",
      image: "/images/testimonials/chen.png"
    },
    {
      quote: "We integrated Tempara's AI solutions into our platform and saw a 28% increase in customer engagement and 45% faster decision-making across our entire operation.",
      author: "Emma Rodriguez",
      position: "CTO, NexGen Technologies",
      image: "/images/testimonials/Rodriguez.png"
    },
    {
      quote: "Tempara delivered an AI implementation that exceeded our expectations. Their deep expertise and tailored approach helped us solve complex business challenges we'd been facing for years.",
      author: "Sarah Johnson",
      position: "COO, Apex Solutions",
      image: "/images/testimonials/Johnson.png"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-primary">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations achieving success with our custom AI solutions.
            </p>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll threshold={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-light rounded-xl p-8 md:p-12 shadow-lg relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-20 h-20 text-secondary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl mb-8">"{testimonials[activeIndex].quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 mr-4">
                    <img 
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonials[activeIndex].author}</h4>
                    <p className="text-gray-400">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-10">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-primary hover:bg-primary-light border border-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-secondary' : 'bg-gray-700'}`}
                    ></button>
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-primary hover:bg-primary-light border border-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 