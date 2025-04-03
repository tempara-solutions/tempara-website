"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function TestMail() {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  const sendTestEmail = async () => {
    setIsLoading(true);
    setStatus(null);
    setResult(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          company: 'Test Company',
          message: 'This is a test message from the mail testing page.',
        }),
      });
      
      const data = await response.json();
      setResult(data);
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending test email:', error);
      setStatus('error');
      setResult({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Test Page</h1>
            <p className="text-gray-600">Use this page to verify your Nodemailer configuration</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> This will send a test email using your configured email settings. Make sure your 
                <code className="bg-blue-100 px-1 rounded">.env.local</code> file is properly set up.
              </p>
            </div>
            
            <button
              onClick={sendTestEmail}
              disabled={isLoading}
              className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Test Email'}
            </button>
            
            {status === 'success' && (
              <div className="bg-green-50 p-4 rounded-md">
                <p className="text-sm text-green-700">Test email sent successfully!</p>
                <pre className="mt-2 text-xs bg-green-100 p-2 rounded overflow-auto">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-50 p-4 rounded-md">
                <p className="text-sm text-red-700">Failed to send test email. Check the console for details.</p>
                <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}
            
            <div className="mt-6 border-t border-gray-200 pt-4">
              <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Return to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 