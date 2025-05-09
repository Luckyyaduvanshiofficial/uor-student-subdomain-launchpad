
const Hero = () => {
  const scrollToRequestForm = () => {
    const element = document.getElementById('request-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-uor-soft-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">Showcase Your Web Dev Skills</span> with a Personalized UOR Subdomain
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Get your professional portfolio URL <span className="font-semibold">[YourName]</span>.uorstudent.me
              for a one-time fee of ₹49 only. Perfect for University of Rajasthan web development students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToRequestForm} className="btn-primary">
                Request Your Subdomain
              </button>
              <button onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 transform rotate-1 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-gray-100 rounded-md px-3 py-1 text-sm text-gray-500 flex items-center">
                    yourname.uorstudent.me
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-uor-purple/10 p-3 rounded">
                    <div className="h-6 bg-uor-purple/20 rounded w-3/4"></div>
                    <div className="h-4 bg-uor-purple/20 rounded w-1/2 mt-2"></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-uor-light-purple/20 p-2 rounded text-xs text-uor-purple">HTML</div>
                    <div className="bg-uor-light-purple/20 p-2 rounded text-xs text-uor-purple">CSS</div>
                    <div className="bg-uor-light-purple/20 p-2 rounded text-xs text-uor-purple">JavaScript</div>
                    <div className="bg-uor-light-purple/20 p-2 rounded text-xs text-uor-purple">React</div>
                    <div className="bg-uor-light-purple/20 p-2 rounded text-xs text-uor-purple">UOR Student</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-uor-soft-gray rounded"></div>
                    <div className="h-20 bg-uor-soft-gray rounded"></div>
                    <div className="h-20 bg-uor-soft-gray rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gradient-to-br from-uor-light-purple/40 to-uor-purple/40 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
