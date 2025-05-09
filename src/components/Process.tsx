
import { Check, FileText, CreditCard, Cog, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Process = () => {
  const isMobile = useIsMobile();
  
  const steps = [
    {
      number: 1,
      title: 'Submit Request',
      description: 'Fill in your details and choose your preferred subdomain name (e.g., yourname.uorstudent.me).',
      icon: <FileText className="w-6 h-6 text-white" />
    },
    {
      number: 2,
      title: 'One-Time Payment',
      description: 'Pay ₹49 once via UPI. No hidden fees or renewals.',
      icon: <CreditCard className="w-6 h-6 text-white" />
    },
    {
      number: 3,
      title: '24-48hr Setup',
      description: 'Your subdomain is configured and DNS records set up within 1-2 business days.',
      icon: <Cog className="w-6 h-6 text-white" />
    },
    {
      number: 4,
      title: 'Go Live',
      description: 'Receive email confirmation with instructions to connect your portfolio.',
      icon: <Globe className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="process" className="py-10 md:py-16 bg-uor-soft-gray">
      <div className="section-container">
        <h2 className="section-title text-2xl md:text-4xl">Simple <span className="gradient-text">4-Step</span> Process</h2>
        <p className="section-subtitle text-base md:text-lg px-4 md:px-0">
          Getting your professional web presence is quick and straightforward
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Progress line - only show on tablet and above */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Step number and icon - bigger on mobile for better visibility */}
                <div className="bg-gradient-to-r from-uor-purple to-uor-light-purple w-16 h-16 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 shadow-lg z-10">
                  {step.icon}
                </div>
                
                <div className="bg-white rounded-lg p-4 md:p-5 text-center shadow-md border border-gray-100 h-full w-full card-hover">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-uor-purple to-uor-light-purple text-white text-center font-semibold flex items-center justify-center mx-auto mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                  
                  {/* Connection indicators between steps - only show on tablet and above */}
                  {!isMobile && index < steps.length - 1 && (
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
