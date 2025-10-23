import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo-icon.png" alt="Your Venture Vista" className="h-9 w-auto" />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground mr-2">Connect:</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black hover:bg-transparent hover:text-accent border-2 border-accent transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@yourventurevista.com"
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black hover:bg-transparent hover:text-accent border-2 border-accent transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Venture Vista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
