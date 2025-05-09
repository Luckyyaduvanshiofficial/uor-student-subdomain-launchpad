
import { useState } from 'react';

const PaymentInstructions = () => {
  const [activeTab, setActiveTab] = useState('upi');
  
  return (
    <section id="payment-instructions" className="py-16 bg-uor-soft-gray">
      <div className="section-container">
        <h2 className="section-title">How to <span className="gradient-text">Pay</span></h2>
        <p className="section-subtitle">
          Make your one-time payment of ₹49 using one of these simple methods
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 text-center font-medium ${activeTab === 'upi' ? 'bg-uor-purple text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('upi')}
            >
              UPI Payment
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium ${activeTab === 'bank' ? 'bg-uor-purple text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('bank')}
            >
              Bank Transfer
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'upi' ? (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center md:space-x-6">
                  <div className="mb-4 md:mb-0 flex justify-center">
                    {/* Replace with an actual QR code image in a real implementation */}
                    <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                      <span className="text-gray-500">UPI QR Code</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">UPI ID</h4>
                      <p className="text-lg font-mono bg-gray-50 p-2 rounded border border-gray-200 mt-1">
                        example@upi
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Amount</h4>
                      <p className="text-lg font-semibold text-uor-purple">₹49</p>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="text-yellow-700">
                        <strong>Important:</strong> Please mention your desired subdomain name in the payment description/remarks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Account Holder Name</h4>
                    <p className="text-lg bg-gray-50 p-2 rounded border border-gray-200 mt-1">
                      Your Full Name
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Account Number</h4>
                    <p className="text-lg font-mono bg-gray-50 p-2 rounded border border-gray-200 mt-1">
                      1234567890
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">IFSC Code</h4>
                    <p className="text-lg font-mono bg-gray-50 p-2 rounded border border-gray-200 mt-1">
                      ABCD0123456
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Amount</h4>
                    <p className="text-lg font-semibold text-uor-purple">₹49</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-700">
                    <strong>Important:</strong> Please mention your desired subdomain name in the transaction remarks.
                  </p>
                </div>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold mb-2">What happens after payment?</h3>
              <p className="text-gray-600 mb-4">
                Once your payment is confirmed, I will manually create your subdomain within 24-48 hours.
                You will receive an email confirmation once your subdomain is live and ready to use.
              </p>
              <h3 className="font-semibold mb-2">How will I host my portfolio?</h3>
              <p className="text-gray-600">
                You can host your portfolio on services like GitHub Pages, Netlify, or Vercel. After payment,
                I'll provide instructions on how to connect your subdomain to your preferred hosting service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInstructions;
