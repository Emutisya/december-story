import { useEffect, useRef, useState } from "react";

const ClosingNote = () => {
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
      ref={sectionRef}
      className="py-24 md:py-32 px-6 paper-texture"
    >
      <div className="max-w-2xl mx-auto">
        <div
          className={`chapter-card transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative element */}
          <div className="text-center mb-8">
            <span className="font-handwritten text-4xl text-gold">✧</span>
          </div>

          <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6 text-center">
            <p className="font-handwritten text-2xl md:text-3xl text-primary">
              Jordan,
            </p>

            <p className="italic">
              I hope these days feel like stepping into a favorite song —
            </p>

            <p>
              the kind that settles into your memory like a soft echo.
            </p>

            <p className="pt-4 font-handwritten text-2xl text-primary">
              Happy birthday.
            </p>

            <p className="text-muted-foreground italic">
              This little December story belongs to you.
            </p>
          </div>

          {/* Decorative footer */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="font-handwritten text-xl text-muted-foreground">with love</span>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 decorative-line" />
            <span className="font-handwritten text-2xl text-gold animate-float">🍂</span>
            <div className="flex-1 decorative-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingNote;
