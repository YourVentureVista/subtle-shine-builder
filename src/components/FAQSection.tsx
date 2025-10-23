import { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Who is this for?',
    answer:
      'Technical founders (pre-seed to Series A) who need rigorous financial analysis but don\'t have a CFO yet. You\'re technical, you can build, but the business/financial side feels like a different language. That\'s where we come in.',
  },
  {
    question: 'What makes you different from a fractional CFO or consultant?',
    answer:
      "We're founders who've been in your seat and analysts who've evaluated deals. We combine empathy with rigor: we understand the emotional weight of these decisions because we've made them ourselves, but we interrogate the numbers with investor-grade scrutiny. Plus, we move at startup speed—48 hour turnarounds, not 3-week engagements.",
  },
  {
    question: 'How much does it cost?',
    answer:
      'Project-based pricing starting at $2,500 for initial strategic analysis. Think of it as insurance against expensive mistakes: one bad hire decision or poorly-timed pivot can cost 10x that amount. Let\'s talk about your specific needs and we\'ll build a custom scope.',
  },
  {
    question: 'What if I just need a quick gut-check, not a full engagement?',
    answer:
      'Book a discovery call. First 30 minutes are free. We\'ll give you our honest take on whether you need deep analysis or just tactical advice. Sometimes a focused conversation is all you need.',
  },
  {
    question: 'Do you take equity?',
    answer:
      'We prefer cash engagements to maintain objectivity, but we\'re open to hybrid arrangements (cash + equity) for the right partnerships. If we\'re aligned on vision and you\'re capital-constrained, let\'s talk.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'Primarily B2B SaaS and technical products, but our frameworks apply across industries. If you\'re a technical founder building something innovative and wrestling with strategic/financial decisions, we can probably help.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Subtle graphical element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Frequently Asked Questions
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white" />
          </h2>
        </div>

        <div className="max-w-[900px] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-muted border border-border rounded-lg overflow-hidden transition-all duration-1000 hover:border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:text-muted-foreground transition-colors"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <Plus
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 px-6 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
