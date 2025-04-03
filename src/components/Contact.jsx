"use client";
import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-primary-dark">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Start Your AI Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to explore how AI can transform your business? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll threshold={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-primary p-8 rounded-xl border border-gray-800 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                  placeholder="Your Company, Inc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  What AI challenges are you looking to solve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-light border border-gray-700 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                  placeholder="Tell us about your business goals and how you think AI might help..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-secondary w-full md:w-auto px-8"
                >
                  {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                </button>
              </div>
              
              {submitSuccess && (
                <div className="p-4 rounded-lg bg-green-900/30 text-green-400 border border-green-700 text-center">
                  Thanks for reaching out! We'll be in touch with you shortly.
                </div>
              )}
              
              {submitError && (
                <div className="p-4 rounded-lg bg-red-900/30 text-red-400 border border-red-700 text-center">
                  There was an error submitting your request. Please try again.
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
} 