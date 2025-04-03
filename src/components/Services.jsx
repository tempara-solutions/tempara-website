"use client";
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';
import { SmoothLink } from './utils/SmoothScroll';

export default function Services() {
  const services = [
    {
      title: "AI Strategy & Consulting",
      description: "We help you identify the highest-impact AI opportunities for your business, creating a strategic roadmap for implementation and ROI.",
      icon: "/icons/strategy.svg"
    },
    {
      title: "Custom AI Development",
      description: "Our team builds tailored AI solutions that solve your unique business challenges, from data analysis to process automation.",
      icon: "/icons/development.svg"
    },
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows, ensuring smooth adoption and maximizing value.",
      icon: "/icons/integration.svg"
    },
    {
      title: "Data Analysis & Engineering",
      description: "Transform your raw data into structured, actionable intelligence that drives better business decisions and uncovers opportunities.",
      icon: "/icons/data.svg"
    }
  ];

  return (
    <section id="services" className="section bg-primary-dark">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Implementation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI solutions designed to transform your business operations and create competitive advantages
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} threshold={0.1}>
              <div className="bg-primary rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-800">
                <div className="flex items-start">
                  <div className="mr-6 mt-1 bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      width={32} 
                      height={32}
                      className="text-secondary"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll threshold={0.2}>
          <div className="mt-16 flex justify-center">
            <SmoothLink href="#contact" className="btn btn-secondary">
              Discuss Your AI Project
            </SmoothLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 