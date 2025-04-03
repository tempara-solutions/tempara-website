"use client";
import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      // Submit to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Success - show thank you message
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        // API returned an error
        setSubmitError(true);
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      // Network or other error
      console.error('Error submitting form:', error);
      setSubmitError(true);
      setErrorMessage('Failed to submit. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Reset the form and thank you message
  const handleReset = () => {
    setSubmitSuccess(false);
  };
  
  return (
    <section id="contact" className="section bg-gradient-to-br from-secondary/90 to-secondary-dark">
      <div className="container">
        <RevealOnScroll threshold={0.1}>
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary rounded-xl shadow-xl overflow-hidden border border-gray-800">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-primary-light">
                  <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
                  <p className="text-xl text-white md:text-2xl mb-8 font-medium">
                    Schedule a free strategy call to discuss how AI solutions can give your organization a competitive edge.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Free AI Opportunity Assessment</h3>
                        <p className="text-gray-300">We'll analyze your current operations and identify AI optimization opportunities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Custom Implementation Plan</h3>
                        <p className="text-gray-300">Get a tailored strategy for integrating AI solutions into your business processes.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">No Obligation Discussion</h3>
                        <p className="text-gray-300">Learn about our approach and see if we're the right partner for your AI journey.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 bg-primary">
                  {submitSuccess ? (
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Thank You!</h3>
                        <p className="text-xl text-gray-300 mb-8">
                          We've received your request for a strategy call. One of our AI specialists will contact you shortly to schedule your session.
                        </p>
                        <p className="text-gray-400 mb-8">
                          In the meantime, feel free to check out our resources or learn more about our approach to AI implementation.
                        </p>
                        <button
                          onClick={handleReset}
                          className="btn btn-outline px-6"
                        >
                          Submit Another Request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-2xl font-bold mb-8">Book Your Free Strategy Call</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <label htmlFor="company" className="block text-gray-300 font-medium mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div className="mt-2">
                        <label htmlFor="message" className="block text-gray-300 font-medium mb-2">How can we help?</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                          placeholder="Tell us about your business and what challenges you're facing..."
                        ></textarea>
                      </div>
                      
                      <div className="mt-8">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full btn btn-secondary font-semibold py-3 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? 'Sending...' : 'Book My Free Strategy Call'}
                        </button>
                      </div>
                      
                      {submitError && (
                        <div className="mt-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                          <p className="text-red-400 font-medium">
                            {errorMessage || 'Something went wrong. Please try again or contact us directly.'}
                          </p>
                        </div>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 