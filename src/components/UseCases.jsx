"use client";
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';
import { SmoothLink } from './utils/SmoothScroll';

export default function UseCases() {
  const useCases = [
    {
      title: "Intelligent Process Automation",
      description: "Automate complex workflows across your organization with AI that learns and improves over time, reducing manual effort and streamlining operations.",
      image: "/images/solutions/Ai Workflow.png"
    },
    {
      title: "Data Analysis & Insights",
      description: "Transform your business data into actionable insights with AI analytics that identify trends, predict outcomes, and recommend strategic actions.",
      image: "/images/solutions/Ai Driven insights .png"
    },
    {
      title: "Personalized Customer Experiences",
      description: "Deliver tailored interactions to your customers with AI systems that understand preferences, anticipate needs, and provide relevant recommendations.",
      image: "/images/solutions/Ai data .png"
    },
    {
      title: "Document Processing & Analysis",
      description: "Extract value from unstructured documents with AI that can read, understand, and categorize information from various formats and sources.",
      image: "/images/solutions/ai document processing.png"
    }
  ];

  return (
    <section id="use-cases" className="section bg-primary-dark">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions for Your Business</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our custom AI implementations deliver value across various business functions
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="flex flex-wrap justify-center gap-6">
          {useCases.map((useCase, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} threshold={0.1}>
              <div className="bg-primary rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-800 flex flex-col items-center w-[250px]">
                <div className="relative aspect-square w-full">
                  <Image 
                    src={useCase.image} 
                    alt={useCase.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="250px"
                  />
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll threshold={0.2}>
          <div className="mt-16 flex justify-center">
            <SmoothLink href="#contact" className="btn btn-secondary">
              Explore AI Solutions for Your Business
            </SmoothLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 