
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import PricingSection from '@/components/PricingSection';
import RequestForm from '@/components/RequestForm';
import PaymentInstructions from '@/components/PaymentInstructions';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Set metadata using useEffect instead of react-helmet
  useEffect(() => {
    document.title = "UOR Student Portfolio Subdomains";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get your professional portfolio subdomain for University of Rajasthan students learning web development. Just ₹49 one-time payment.');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Process />
        <PricingSection />
        <RequestForm />
        <PaymentInstructions />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
