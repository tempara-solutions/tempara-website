"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      <div className="pt-48 pb-24 bg-primary">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="bg-primary-light p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing or using the services provided by Tempara Solutions ("we," "us," or "our"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Description of Services</h2>
              <p className="text-gray-300 mb-4">
                Tempara Solutions provides custom AI solutions that help businesses streamline operations, 
                gain valuable insights, and create competitive advantages. Our services may include, but are not 
                limited to, AI consulting, custom AI development, data analysis, machine learning implementation, 
                and ongoing support and maintenance.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Client Accounts</h2>
              <p className="text-gray-300 mb-4">
                Some of our services may require you to create an account. You are responsible for maintaining 
                the confidentiality of your account information and for all activities that occur under your account. 
                You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Client Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>Provide accurate and complete information required for service delivery.</li>
                <li>Ensure you have appropriate rights to data provided to us for processing.</li>
                <li>Use our services only for lawful purposes and in accordance with these Terms.</li>
                <li>Cooperate with our team during project implementation and maintenance.</li>
                <li>Pay all fees associated with the services as agreed upon.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                5.1 <strong className="text-white">Client Data:</strong> You retain all rights to data you provide to us.
              </p>
              <p className="text-gray-300 mb-4">
                5.2 <strong className="text-white">Tempara Solutions IP:</strong> We retain all rights to our proprietary technologies, 
                methodologies, and frameworks. Unless explicitly stated otherwise in a service agreement, we grant you a 
                non-exclusive, non-transferable license to use our AI solutions solely for your internal business purposes.
              </p>
              <p className="text-gray-300 mb-4">
                5.3 <strong className="text-white">Custom Developments:</strong> Ownership of custom code and developments 
                will be specified in individual service agreements.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Confidentiality</h2>
              <p className="text-gray-300 mb-4">
                We take client confidentiality seriously. Both parties agree to protect confidential information 
                shared during service delivery. Specific confidentiality terms will be outlined in individual 
                service agreements.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Fees and Payment</h2>
              <p className="text-gray-300 mb-4">
                7.1 <strong className="text-white">Service Fees:</strong> Fees for our services will be outlined in project 
                proposals and service agreements.
              </p>
              <p className="text-gray-300 mb-4">
                7.2 <strong className="text-white">Payment Terms:</strong> Unless otherwise specified, invoices are due 
                within 30 days of issue. Late payments may be subject to interest charges.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Term and Termination</h2>
              <p className="text-gray-300 mb-4">
                8.1 <strong className="text-white">Term:</strong> These Terms remain in effect while you use our services.
              </p>
              <p className="text-gray-300 mb-4">
                8.2 <strong className="text-white">Termination:</strong> Either party may terminate services according to 
                the terms specified in individual service agreements. Upon termination, you will remain responsible for 
                any outstanding payments due.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                9.1 <strong className="text-white">No Guarantees:</strong> While we strive for excellence, we cannot 
                guarantee specific results from our AI solutions. AI technology involves inherent uncertainties and 
                limitations.
              </p>
              <p className="text-gray-300 mb-4">
                9.2 <strong className="text-white">Liability Cap:</strong> To the maximum extent permitted by law, our 
                liability for any claims arising from these Terms or our services shall be limited to the fees paid 
                for the relevant services during the preceding 12 months.
              </p>
              <p className="text-gray-300 mb-4">
                9.3 <strong className="text-white">Exclusions:</strong> We will not be liable for indirect, consequential, 
                special, or punitive damages, including lost profits, data loss, or business interruption.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Indemnification</h2>
              <p className="text-gray-300 mb-4">
                You agree to indemnify and hold Tempara Solutions and its affiliates harmless from any claims, 
                losses, liabilities, demands, and expenses arising from your use of our services, your violation 
                of these Terms, or your violation of any rights of a third party.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Wisconsin, United States, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms shall be 
                resolved in the courts of Wisconsin.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We may update these Terms from time to time. We will notify you of any changes by posting the new 
                Terms on our website. Continued use of our services after such changes constitutes your acceptance 
                of the new Terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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