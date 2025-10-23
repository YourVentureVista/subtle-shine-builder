import { useEffect, useRef, useState } from 'react';

export const AISection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden transition-all duration-1200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Subtle graphical elements */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <div className="inline-block bg-white text-black px-6 py-3 rounded-full font-bold mb-8 border-2 border-white text-sm tracking-wider">
          COMING SOON
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">AI-Powered Strategic Intelligence</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          We're building a proprietary AI system trained on thousands of financial models, cap tables,
          and strategic decisions from real startups. Think of it as your always-on thought partner
          for instant analysis.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Upload your current financials and immediately see how changes ripple through your entire
          business: What happens if you hire 3 engineers vs 2? How does your runway shift if CAC
          increases 20%? What's the sensitivity analysis on your latest pricing experiment?
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This isn't replacing human partnership—it's accelerating it. Get instant scenario analysis
          24/7, then bring the nuanced questions to our team for deeper strategic exploration.
        </p>
      </div>
    </section>
  );
};
