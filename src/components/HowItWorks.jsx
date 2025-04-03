"use client";
import RevealOnScroll from './RevealOnScroll';
import { SmoothLink } from './utils/SmoothScroll';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We analyze your business needs and identify opportunities for AI-driven optimization and improvement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Custom Solution Design",
      description: "We create a tailored AI strategy and implementation plan focused on your specific challenges and goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Implementation & Results",
      description: "We deploy custom AI solutions that deliver measurable results, creating competitive advantages and increasing efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="section bg-primary-dark">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Create AI Solutions for Your Business</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology helps organizations leverage AI to gain market advantages and optimize operations.
            </p>
          </div>
        </RevealOnScroll>
        
        {/* Visual Process Flow */}
        <RevealOnScroll>
          <div className="relative mb-20 hidden md:block">
            <div className="flex justify-between items-center relative">
              {/* Step 1 */}
              <div className="text-center w-1/3">
                <div className="bg-secondary text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-2">{steps[0].title}</h3>
                <p className="text-gray-300 max-w-xs mx-auto">{steps[0].description}</p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center w-1/3">
                <div className="bg-secondary text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-2">{steps[1].title}</h3>
                <p className="text-gray-300 max-w-xs mx-auto">{steps[1].description}</p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center w-1/3">
                <div className="bg-secondary text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-2">{steps[2].title}</h3>
                <p className="text-gray-300 max-w-xs mx-auto">{steps[2].description}</p>
              </div>
              
              {/* Connecting Lines */}
              <div className="absolute top-8 left-0 w-full h-0.5 bg-secondary -z-10">
                <div className="absolute top-0 left-[16.6%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full"></div>
                <div className="absolute top-0 left-[83.3%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        
        {/* Mobile Steps */}
        <div className="grid md:hidden gap-8">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} threshold={0.1}>
              <div className="bg-primary rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden border border-gray-800">
                <div className="absolute top-0 right-0 opacity-30 text-secondary text-6xl font-bold p-4">
                  {step.number}
                </div>
                <div className="mb-6 text-secondary bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll threshold={0.2}>
          <div className="mt-16 flex justify-center">
            <SmoothLink href="#contact" className="btn btn-secondary">
              Schedule Your Discovery Call
            </SmoothLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 