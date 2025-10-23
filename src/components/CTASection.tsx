import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-20 px-6 bg-card text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Strategic Advantage?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let's turn uncertainty into confidence. Book your free discovery call.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-white text-black hover:bg-transparent hover:text-white border-2 border-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
        >
          Book Your Strategy Call
        </Button>
      </div>
    </section>
  );
};
