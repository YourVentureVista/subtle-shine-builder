import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Subtle graphical elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="max-w-[1100px] text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-in fade-in duration-1000">
          Turn Vision Into{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Strategic Clarity</span>
            <span
              className="absolute -bottom-1 left-0 right-0 h-3 bg-accent -z-10"
              style={{ animation: 'fadeIn 1.2s ease 0.5s both' }}
            />
          </span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto"
          style={{ animation: 'fadeInUp 1.2s ease 0.4s both' }}
        >
          Rigorous financial modeling and thought partnership from founders who've been there—so every
          critical decision is made with confidence
        </p>
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{ animation: 'fadeInUp 1.2s ease 0.7s both' }}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-black hover:bg-transparent hover:text-white border-2 border-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
          >
            Book Your Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};
