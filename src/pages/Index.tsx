import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SectionDivider } from '@/components/SectionDivider';
import { ProblemSection } from '@/components/ProblemSection';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { DualLensSection } from '@/components/DualLensSection';
import { ProcessSection } from '@/components/ProcessSection';
import { AISection } from '@/components/AISection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Animate dividers when they come into view
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      });
    }, observerOptions);

    const dividers = document.querySelectorAll('[data-animate="divider"]');
    dividers.forEach((divider) => observer.observe(divider));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <SectionDivider />
      <ProblemSection />
      <SectionDivider />
      <WhatWeDoSection />
      <SectionDivider />
      <DualLensSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <AISection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
