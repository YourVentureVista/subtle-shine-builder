import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '1',
    title: 'Discovery Call',
    description:
      'Share your vision, challenges, and key decisions on the horizon. We dig into your current financial position and immediate needs.',
  },
  {
    number: '2',
    title: 'Strategic Analysis',
    description:
      'Within 48 hours, we deliver rigorous financial modeling tailored to your specific questions: hiring decisions, pivot analysis, runway projections.',
  },
  {
    number: '3',
    title: 'Decision Partnership',
    description:
      'Live walkthrough of the analysis, stress-testing assumptions together, exploring scenarios, and building your confidence for the decisions ahead.',
  },
];

export const ProcessSection = () => {
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

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-card">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            How It Works
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white" />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            From first call to confident decision in days
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`text-center transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 p-6 bg-muted rounded-lg border border-border transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-xl font-semibold">
            <strong>Timeline:</strong> First call to decision-ready analysis in 48-72 hours
          </p>
        </div>
      </div>
    </section>
  );
};
