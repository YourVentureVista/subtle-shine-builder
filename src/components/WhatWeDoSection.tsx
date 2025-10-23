import { Target, Zap, Handshake, Code2, Lightbulb, Rocket } from 'lucide-react';
import { AnimatedListItem } from './AnimatedListItem';

const values = [
  {
    icon: Target,
    title: 'Rigorous Financial Modeling',
    description:
      "We stress-test every assumption before anyone else does. Your burn multiple, unit economics, and growth projections get interrogated with the same rigor a board member, key hire, or potential acquirer would apply—but from someone on your side who helps you strengthen the story before those conversations happen.",
  },
  {
    icon: Zap,
    title: 'Startup Speed, Strategic Depth',
    description:
      "Decision-ready analysis in 48 hours, not 3 weeks. We've built the systems to move at startup velocity without sacrificing the depth needed to make confident calls on hiring, pivots, and cash allocation. Think of it like having CI/CD for your strategic decisions.",
  },
  {
    icon: Handshake,
    title: 'Thought Partnership, Not Just Deliverables',
    description:
      'We don\'t hand you a model and disappear. We think through it with you: "Can you afford that VP of Sales now?" "What\'s the cash impact of this pivot?" "How do you explain burn rate to your advisors?" We ask the hard questions before you\'re in the room with investors, team members, or strategic partners.',
  },
  {
    icon: Code2,
    title: 'Built for Technical Founders',
    description:
      "We speak your language. Unit economics = core algorithm efficiency. Burn rate = memory leak. Runway = available compute capacity. Financial fluency shouldn't require learning a new dialect—we translate investor-speak into systems thinking.",
  },
  {
    icon: Lightbulb,
    title: 'Battle-Tested Frameworks',
    description:
      'Strategic methodologies from top business programs combined with real founder experience. Market sizing, competitive positioning, hiring plans, product roadmaps, and above all, cash flow analysis—the expertise most founders develop through expensive trial and error. We help you skip the expensive part.',
  },
  {
    icon: Rocket,
    title: 'Pre-Seed to Series A Navigators',
    description:
      "We've worked with founders accepted into top accelerators like Techstars, helping them navigate critical growth decisions: when to hire, how to pivot, where to allocate limited resources. We know what early-stage success looks like because we've built it and evaluated it from both sides.",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Founder Empathy Meets Investor Scrutiny
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white" />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            Thought partnership for every critical decision
          </p>
        </div>

        <div className="mt-12">
          {values.map((value, index) => (
            <AnimatedListItem key={value.title} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
