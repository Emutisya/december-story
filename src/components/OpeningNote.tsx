import { useEffect, useRef, useState } from "react";

const OpeningNote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      id="opening-note"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 paper-texture"
    >
      <div className="max-w-2xl mx-auto">
        <div
          className={`chapter-card transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative leaf */}
          <div className="text-center mb-8">
            <span className="font-handwritten text-4xl text-primary">🍃</span>
          </div>

          <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6">
            <p className="font-handwritten text-2xl md:text-3xl text-primary">
              Jordan,
            </p>

            <p className="italic">
              I wanted to create a quiet little weekend just for you —
            </p>

            <p>
              a place where time slows down,
              <br />
              where December feels softer,
              <br />
              where the air smells like tea leaves and stillness.
            </p>

            <p className="pt-4">
              Here's the small tale waiting for you in Tigoni.
            </p>
          </div>

          {/* Decorative signature line */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex-1 decorative-line" />
            <span className="font-handwritten text-xl text-muted-foreground">✧</span>
            <div className="flex-1 decorative-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningNote;
