
import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to set up my subdomain?",
      answer: "Once your payment is confirmed, your subdomain will typically be set up within 24-48 hours. You will receive a confirmation email when it's ready to use."
    },
    {
      question: "Where will my portfolio be hosted?",
      answer: "You are responsible for hosting your actual portfolio files. We recommend using free services like GitHub Pages, Netlify, or Vercel. After your subdomain is created, we'll help you point it to your hosting provider."
    },
    {
      question: "Can I change my subdomain name later?",
      answer: "Unfortunately, once a subdomain is created, it cannot be changed. You would need to request and pay for a new subdomain if you want a different name."
    },
    {
      question: "How long will my subdomain remain active?",
      answer: "Your subdomain will remain active as long as the main domain (uorstudent.me) is maintained. This is a one-time payment with no recurring fees."
    },
    {
      question: "Can I use my subdomain for something other than a portfolio?",
      answer: "The subdomains are primarily intended for web development portfolios for UOR students. Any other use cases might be rejected or removed if discovered."
    },
    {
      question: "Can I get help with setting up my portfolio?",
      answer: "This service only covers the subdomain creation. However, as a fellow student, I'm happy to provide basic guidance on connecting your portfolio to the subdomain."
    }
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Frequently <span className="gradient-text">Asked</span> Questions</h2>
        <p className="section-subtitle">
          Get answers to common questions about the subdomain service
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-4 flex justify-between items-center rounded-lg ${
                  openIndex === index ? 'bg-uor-purple text-white' : 'bg-white border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-white border border-t-0 border-gray-200 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
