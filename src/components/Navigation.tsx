import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/logo-full.png"
            alt="Your Venture Vista"
            className="h-8 md:h-10 w-auto"
          />
        </a>
        <Button
          onClick={scrollToContact}
          className="bg-white text-black hover:bg-transparent hover:text-white border-2 border-white font-semibold px-6 transition-all duration-300 hover:scale-105"
        >
          Book a Call
        </Button>
      </div>
    </nav>
  );
};
