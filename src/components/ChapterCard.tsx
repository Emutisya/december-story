import { useEffect, useRef, useState } from "react";

interface ChapterCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  items: string[];
  delay?: number;
}

const ChapterCard = ({ emoji, title, subtitle, items, delay = 0 }: ChapterCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`chapter-card transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Chapter header */}
      <div className="text-center mb-6">
        <span className="text-4xl mb-3 block">{emoji}</span>
        <h3 className="font-handwritten text-3xl md:text-4xl text-primary mb-2">
          {title}
        </h3>
        <p className="font-serif italic text-muted-foreground">
          {subtitle}
        </p>
      </div>

      {/* Decorative line */}
      <div className="decorative-line mb-6" />

      {/* Items list */}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 font-serif text-foreground/85"
          >
            <span className="text-gold mt-1 flex-shrink-0">✦</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterCard;
