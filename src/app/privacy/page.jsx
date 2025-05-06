"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      <div className="pt-48 pb-24 bg-primary">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="bg-primary-light p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Introduction</h2>
              <p className="text-gray-300 mb-4">
                At Tempara Solutions, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website
                or engage with our AI solutions services.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We may collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>Personal identifiers such as name, email address, phone number, and company name when you contact us or request a consultation.</li>
                <li>Usage data including how you interact with our website, services, and offerings.</li>
                <li>Technical data including IP address, browser type, device information, and cookies.</li>
                <li>When using our AI solutions, we may process data you provide for analysis and service delivery.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>Providing, maintaining, and improving our website and services.</li>
                <li>Responding to your requests, questions, and comments.</li>
                <li>Developing and testing new products and features.</li>
                <li>Monitoring usage metrics to improve user experience.</li>
                <li>Protecting against unauthorized access and other security issues.</li>
                <li>Sending marketing communications (with your consent).</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">AI Data Processing</h2>
              <p className="text-gray-300 mb-4">
                As an AI solutions company, we take data processing seriously:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>When implementing AI solutions for clients, we process data in accordance with our service agreements.</li>
                <li>We implement appropriate technical and organizational measures to ensure data security.</li>
                <li>Client data is compartmentalized and never used to train models for other clients without explicit permission.</li>
                <li>We may use anonymized and aggregated data for improving our AI capabilities.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>Service providers who assist us in operating our website and business.</li>
                <li>Business partners with your consent and as necessary to provide services you've requested.</li>
                <li>Legal authorities when required by law or to protect our rights.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>Access to your personal data.</li>
                <li>Correction of inaccurate data.</li>
                <li>Deletion of your personal data.</li>
                <li>Objection to or restriction of processing.</li>
                <li>Data portability.</li>
                <li>Withdrawal of consent.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure.
                We strive to use commercially acceptable means to protect your personal data, but cannot
                guarantee its absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update our privacy policy from time to time. We will notify you of any changes by
                posting the new privacy policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="text-gray-300 mb-4">
                Email: <a href="mailto:hstreckenbach@temparasolutions.com" className="text-secondary hover:underline">hstreckenbach@temparasolutions.com</a><br />
                Phone: <a href="tel:+19204928350" className="text-secondary hover:underline">+1 (920) 492-8350</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 