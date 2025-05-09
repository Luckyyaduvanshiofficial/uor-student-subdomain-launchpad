
const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Request Your Subdomain',
      description: 'Fill out the simple form with your details and the subdomain name you want (e.g., "lucky").',
      icon: '📝'
    },
    {
      number: 2,
      title: 'Make the Payment',
      description: 'Pay the one-time fee of ₹49 using UPI or bank transfer. No recurring costs ever.',
      icon: '₹'
    },
    {
      number: 3,
      title: 'We Set It Up',
      description: 'I will manually create your subdomain (yourname.uorstudent.me) within 24-48 hours.',
      icon: '⚙️'
    },
    {
      number: 4,
      title: 'Upload & Share',
      description: 'Once confirmed, you can upload your portfolio files and start sharing your professional URL!',
      icon: '🌐'
    }
  ];

  return (
    <section id="process" className="py-16 bg-uor-soft-gray">
      <div className="section-container">
        <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
        <p className="section-subtitle">
          Getting your personalized portfolio subdomain is simple and straightforward
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Progress line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 md:space-x-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-full md:w-1/4">
                <div className="relative z-10 bg-white w-16 h-16 flex items-center justify-center rounded-full border-2 border-uor-purple mb-4 shadow-md text-2xl">
                  {step.icon}
                </div>
                <div className="bg-white rounded-lg p-5 text-center w-full shadow-md border border-gray-100 card-hover">
                  <div className="w-8 h-8 rounded-full bg-uor-purple text-white text-center font-semibold flex items-center justify-center mx-auto mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
