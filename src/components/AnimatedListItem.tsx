import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedListItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const AnimatedListItem = ({ icon: Icon, title, description, index }: AnimatedListItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`py-10 border-b border-border last:border-b-0 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex items-start gap-6 mb-4">
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        </div>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed md:pl-14">{description}</p>
    </div>
  );
};
