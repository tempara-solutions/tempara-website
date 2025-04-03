"use client";
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';
import { SmoothLink } from './utils/SmoothScroll';

export default function Benefits() {
  const benefits = [
    {
      title: "Streamlined Operations",
      description: "Automate repetitive tasks and optimize workflows with AI-powered solutions tailored to your business processes.",
      icon: "/icons/automation.svg"
    },
    {
      title: "Data-Driven Insights",
      description: "Transform your raw data into actionable business intelligence with advanced analytics and predictive models.",
      icon: "/icons/insights.svg"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deploy intelligent systems that provide personalized interactions and faster service to your customers.",
      icon: "/icons/customer.svg"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI implementations that differentiate your business in the market.",
      icon: "/icons/growth.svg"
    },
    {
      title: "Scalable Solutions",
      description: "Our AI systems grow with your business, adapting to increasing demands and evolving requirements.",
      icon: "/icons/scale.svg"
    },
    {
      title: "Reduced Costs",
      description: "Minimize operational expenses through intelligent automation and optimization of your business processes.",
      icon: "/icons/costs.svg"
    }
  ];

  return (
    <section id="benefits" className="section bg-primary">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Implementation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our custom AI solutions deliver tangible value across all aspects of your business operations
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} threshold={0.1}>
              <div className="bg-primary-light rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-800">
                <div className="mb-4 bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Image 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={32} 
                    height={32}
                    className="text-secondary"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll threshold={0.2}>
          <div className="mt-16 flex justify-center">
            <SmoothLink href="#contact" className="btn btn-secondary">
              Start Your AI Journey
            </SmoothLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 