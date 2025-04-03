"use client";
import RevealOnScroll from './RevealOnScroll';
import { SmoothLink } from './utils/SmoothScroll';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Start your AI journey today. Our team of experts will help you identify the right opportunities and develop custom solutions to address your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmoothLink href="#contact" className="btn btn-secondary">
                Schedule a Free Consultation
              </SmoothLink>
              <SmoothLink href="#how-it-works" className="btn btn-outline">
                Learn How We Work
              </SmoothLink>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 