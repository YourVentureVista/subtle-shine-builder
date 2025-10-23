import { useEffect, useRef, useState } from 'react';

export const ProblemSection = () => {
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
      className={`py-20 px-6 bg-card transition-all duration-1200 relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Subtle graphical element */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            You've Built Something Worth Scaling
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white" />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            But the hardest decisions are ahead
          </p>
        </div>

        <div className="max-w-[900px] mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Should you hire that senior engineer now or wait two months? Can you afford to pivot into
            enterprise while keeping your runway intact? What's the real unit economics story you need
            to tell your board, your team, your potential acquirers?
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Most first-time technical founders make these calls in a fog—not because they can't build,
            but because startup finance operates on different logic than code. The decisions feel like
            guesswork when they should be systematic.
          </p>

          <div className="py-8 my-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
              You don't need another spreadsheet. You need someone who's sat in your chair at 2am doing
              the math on that critical hire, and sat across the table evaluating whether the numbers
              actually pencil out. Someone who can think through the hard questions alongside you—before
              stakes get higher.
            </p>
          </div>

          <p className="text-xl md:text-2xl font-semibold">
            <strong>Strategic clarity is a competitive advantage.</strong>{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Let's build it together.</span>
              <span className="absolute -bottom-0.5 left-0 right-0 h-2 bg-accent -z-10" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
