
const Benefits = () => {
  const benefits = [
    {
      title: 'Professional Appearance',
      description: 'A personalized subdomain looks more professional than a generic free hosting URL when sharing with potential employers.',
      icon: '🚀'
    },
    {
      title: 'Memorable & Easy to Share',
      description: 'A custom URL like "yourname.uorstudent.me" is much easier to remember and share in your resume or during interviews.',
      icon: '💼'
    },
    {
      title: 'Student-Focused',
      description: 'Created by a fellow UOR student specifically to help other web development students showcase their work.',
      icon: '🎓'
    },
    {
      title: 'One-Time Payment',
      description: 'Just ₹49 one-time fee with no recurring costs - much more affordable than purchasing your own domain.',
      icon: '💰'
    },
    {
      title: 'Technical Learning',
      description: 'Get familiar with concepts of domain management and hosting as you prepare to enter the web development profession.',
      icon: '🔧'
    },
    {
      title: 'UOR Community',
      description: 'Join fellow University of Rajasthan students in creating a community of talented web developers.',
      icon: '🤝'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Why Get a <span className="gradient-text">uorstudent.me</span> Subdomain?</h2>
        <p className="section-subtitle">
          Stand out from the crowd with a professional web address for your portfolio
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 card-hover"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
