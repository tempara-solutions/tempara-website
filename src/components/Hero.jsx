"use client";
import RevealOnScroll from './RevealOnScroll';
import { SmoothLink } from './utils/SmoothScroll';

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 py-6 lg:py-12 flex flex-col justify-center">
            <RevealOnScroll threshold={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                <span className="text-secondary">Custom AI Solutions</span> for Your Business
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3} threshold={0.3}>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Automate operations, improve efficiency, and unlock new growth with our done-for-you AI implementation team.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.6} threshold={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <SmoothLink href="#contact" className="btn btn-secondary text-lg">
                  Book Your Free Discovery Call
                </SmoothLink>
                <SmoothLink href="#how-it-works" className="btn btn-outline text-lg">
                  See How It Works
                </SmoothLink>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="left" threshold={0.4}>
              <div className="bg-primary-light p-4 shadow-2xl rounded-xl overflow-hidden border border-gray-800 transition duration-300 hover:border-gray-700">
                <div className="bg-secondary/5 p-5 rounded-lg mb-3">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white">
                      AI Implementation Partner
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    We're an AI implementation partner for businesses across all industries. We find high-leverage ways to automate and optimize your operations.
                  </p>
                </div>
                
                <div className="bg-secondary/5 p-5 rounded-lg mb-3">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white">
                      Custom Solutions
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Whether you're drowning in repetitive tasks, wasting leads, or want to move faster — we build solutions around your specific business needs.
                  </p>
                </div>
                
                <div className="bg-secondary/5 p-5 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white">
                      Done-For-You Approach
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    We handle everything from discovery to implementation, delivering ready-to-use AI solutions tailored to your business.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
} 