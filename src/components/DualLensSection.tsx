import { User, Briefcase } from 'lucide-react';
import { AnimatedListItem } from './AnimatedListItem';

const lenses = [
  {
    icon: User,
    title: "We've Been You",
    description:
      "Built businesses ourselves. Sent the 2am panic email about runway. Made the tough call on a key hire when cash was tight. Had the \"your valuation is too high\" conversation. Pivoted when the numbers screamed pivot. Celebrated the term sheet signature. Lost a deal over a formatting error in the cap table. Got challenged on assumptions we couldn't defend. Made hiring decisions that looked great on paper but killed our runway. Made every mistake in the book. This isn't theoretical knowledge. It's scar tissue. We know what keeps you up at night because we've been kept up by the same fears and facing the same impossible trade-offs.",
  },
  {
    icon: Briefcase,
    title: 'We Know What They See',
    description:
      "Transaction-level analytical expertise from years of buy-side and sell-side experience across venture-backed startups and consulting engagements. We've evaluated pitches, assessed acquisitions, and stress-tested business models from every angle. We know what investors scrutinize, what advisors question, what key hires need to understand, and what strategic partners evaluate. When you engage with your ecosystem—whether investors, leadership team, advisors, or potential partners—you'll have already explored every angle they'll probe, with someone who's on your side.",
  },
];

export const DualLensSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            The Founder + Investor Perspective
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white" />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            We've lived both sides of the table
          </p>
        </div>

        <div className="mt-12">
          {lenses.map((lens, index) => (
            <AnimatedListItem key={lens.title} {...lens} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
