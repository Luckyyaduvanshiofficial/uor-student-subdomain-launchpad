
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

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

  const submitFormToEmail = async (formData: typeof formState) => {
    try {
      // Create a mailto link with subject and body
      const subject = encodeURIComponent(`Subdomain Request: ${formData.desiredSubdomain}.uorstudent.me`);
      
      const body = encodeURIComponent(
        `Name: ${formData.fullName}\n` +
        `Desired Subdomain: ${formData.desiredSubdomain}.uorstudent.me\n` +
        `Roll Number: ${formData.rollNumber || 'Not provided'}\n` +
        `Email: ${formData.email}\n` +
        `Mobile Number: ${formData.mobileNumber}\n` +
        `Portfolio Description: ${formData.portfolioDescription || 'Not provided'}\n\n` +
        `This request was sent from the UOR Student Portfolio Subdomains website.`
      );
      
      // Using FormData to submit to a serverless function
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      
      // Try to use a serverless email service with fetch
      try {
        const response = await fetch('https://formsubmit.co/contact@uorstudent.me', {
          method: 'POST',
          body: data
        });

        if (response.ok) {
          return { success: true };
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Fall back to mailto link if fetch fails
        window.location.href = `mailto:contact@uorstudent.me?subject=${subject}&body=${body}`;
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      const result = await submitFormToEmail(formState);
      
      if (result.success) {
        toast({
          title: "Request Submitted!",
          description: `Your request for ${formState.desiredSubdomain}.uorstudent.me has been received. Please proceed with the payment.`,
        });
        
        // Clear form
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
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at contact@uorstudent.me",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request-form" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Request Your <span className="gradient-text">Subdomain</span></h2>
        <p className="section-subtitle">
          Fill out this form to start the process of getting your personalized subdomain
        </p>
        
        <form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6"
          action="https://formsubmit.co/contact@uorstudent.me" 
          method="POST"
        >
          {/* FormSubmit.co honeypot field to prevent spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Subdomain Request" />
          <input type="hidden" name="_next" value={window.location.href + "#payment-instructions"} />
          
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
            className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                <span>Submit Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestForm;
