
import { Check, FileText, CreditCard, Cog, Globe } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Request',
      description: 'Fill in your details below and choose your preferred subdomain name (e.g., yourname.uorstudent.me).',
      icon: <FileText className="w-6 h-6 text-white" />
    },
    {
      number: 2,
      title: 'One-Time Payment',
      description: 'Pay just ₹49 once using UPI or bank transfer. No hidden fees, no renewals.',
      icon: <CreditCard className="w-6 h-6 text-white" />
    },
    {
      number: 3,
      title: '24-48hr Setup',
      description: 'Your subdomain is manually configured and DNS records are set up within 1-2 business days.',
      icon: <Cog className="w-6 h-6 text-white" />
    },
    {
      number: 4,
      title: 'Go Live',
      description: 'Receive confirmation by email with instructions to connect your portfolio to your new domain.',
      icon: <Globe className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="process" className="py-16 bg-uor-soft-gray">
      <div className="section-container">
        <h2 className="section-title">Simple <span className="gradient-text">4-Step</span> Process</h2>
        <p className="section-subtitle">
          Getting your professional web presence is quick and straightforward
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Progress line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div className="bg-gradient-to-r from-uor-purple to-uor-light-purple w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg z-10">
                  {step.icon}
                </div>
                <div className="bg-white rounded-lg p-5 text-center shadow-md border border-gray-100 h-full w-full card-hover">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-uor-purple to-uor-light-purple text-white text-center font-semibold flex items-center justify-center mx-auto mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-24 transform -translate-y-1/2 z-10">
                      <Check className="w-6 h-6 text-uor-purple" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
