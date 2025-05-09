
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const RequestForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    fullName: '',
    desiredSubdomain: '',
    rollNumber: '',
    email: '',
    mobileNumber: '',
    portfolioDescription: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formState.fullName || !formState.desiredSubdomain || !formState.email || !formState.mobileNumber) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // This is a dummy form submission - in a real implementation,
    // you would connect this to your form handling backend
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: `Your request for ${formState.desiredSubdomain}.uorstudent.me has been received. Please proceed with the payment.`,
      });
      setIsSubmitting(false);
      
      // Optional: clear form
      setFormState({
        fullName: '',
        desiredSubdomain: '',
        rollNumber: '',
        email: '',
        mobileNumber: '',
        portfolioDescription: ''
      });
      
      // Scroll to payment instructions
      document.getElementById('payment-instructions')?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  return (
    <section id="request-form" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Request Your <span className="gradient-text">Subdomain</span></h2>
        <p className="section-subtitle">
          Fill out this form to start the process of getting your personalized subdomain
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block mb-2 font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="input-field"
                  placeholder="John Doe"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="desiredSubdomain" className="block mb-2 font-medium text-gray-700">
                  Desired Subdomain <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="desiredSubdomain"
                    name="desiredSubdomain"
                    className="input-field rounded-r-none border-r-0"
                    placeholder="yourname"
                    value={formState.desiredSubdomain}
                    onChange={handleChange}
                    required
                  />
                  <span className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-gray-600 whitespace-nowrap">
                    .uorstudent.me
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Only enter the name part, like "john" or "webdev"</p>
              </div>
              
              <div>
                <label htmlFor="rollNumber" className="block mb-2 font-medium text-gray-700">
                  University Roll Number <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
                  className="input-field"
                  placeholder="123456789"
                  value={formState.rollNumber}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="mobileNumber" className="block mb-2 font-medium text-gray-700">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="input-field"
                  placeholder="9876543210"
                  value={formState.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="portfolioDescription" className="block mb-2 font-medium text-gray-700">
                Portfolio Description <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea
                id="portfolioDescription"
                name="portfolioDescription"
                rows={3}
                className="input-field"
                placeholder="Briefly describe what your portfolio showcases (e.g., HTML/CSS projects, React applications)"
                value={formState.portfolioDescription}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
