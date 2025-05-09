
const PricingSection = () => {
  const features = [
    'Personalized subdomain (yourname.uorstudent.me)',
    'One-time payment (no recurring fees)',
    'Professional URL for your portfolio',
    'DNS setup and configuration',
    'Email confirmation when ready',
    'Connect to your GitHub Pages or other hosting',
  ];

  const scrollToRequestForm = () => {
    const element = document.getElementById('request-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Simple, <span className="gradient-text">One-Time</span> Price</h2>
        <p className="section-subtitle">
          Affordable pricing specifically for UOR students, with no hidden costs
        </p>
        
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-uor-purple to-uor-light-purple px-6 py-12 text-center text-white">
            <h3 className="text-2xl font-semibold mb-2">UOR Student Subdomain</h3>
            <div className="text-5xl font-bold mb-2">₹49</div>
            <p className="opacity-80">One-time payment. No recurring costs.</p>
          </div>
          
          <div className="px-6 py-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-uor-light-purple/20 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-uor-purple"></div>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={scrollToRequestForm}
              className="mt-8 w-full btn-primary"
            >
              Request Your Subdomain
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
