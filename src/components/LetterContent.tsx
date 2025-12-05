import { useState, useEffect } from "react";
import teapodsImage from "@/assets/tigoni-teapods.jpg";

interface LetterContentProps {
  isVisible: boolean;
}

const LetterContent = ({ isVisible }: LetterContentProps) => {
  const [showContent, setShowContent] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    { text: "Jordan,", style: "font-handwritten text-3xl md:text-4xl text-primary" },
    { text: "I wanted to create a quiet little weekend just for you —", style: "italic" },
    { text: "a place where time slows down,", style: "" },
    { text: "where December feels softer,", style: "" },
    { text: "where the air smells like tea leaves and stillness.", style: "" },
    { text: "Here's the small tale waiting for you in Tigoni.", style: "pt-4" },
  ];

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowContent(true), 200);
    }
  }, [isVisible]);

  useEffect(() => {
    if (showContent && currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [showContent, currentLine, lines.length]);

  const scrollToItinerary = () => {
    document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div
      className={`transition-all duration-1000 ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Letter paper */}
      <div className="max-w-2xl mx-auto">
        <div className="chapter-card relative overflow-hidden">
          {/* Paper fold line decoration */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          
          {/* Decorative corner */}
          <div className="absolute top-4 right-4">
            <span className="font-handwritten text-2xl text-gold">🍃</span>
          </div>

          {/* Letter content with typewriter effect */}
          <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 space-y-4 py-4">
            {lines.map((line, index) => (
              <p
                key={index}
                className={`transition-all duration-700 ${line.style} ${
                  index < currentLine
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                {line.text}
              </p>
            ))}
          </div>

          {/* Teapods image */}
          <div
            className={`mt-8 rounded-lg overflow-hidden border border-border/50 shadow-md transition-all duration-1000 delay-500 ${
              currentLine >= lines.length ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={teapodsImage}
              alt="Tigoni Teapods at sunset - wooden cabins nestled in tea fields"
              className="w-full h-48 md:h-64 object-cover"
            />
            <p className="text-center py-3 font-handwritten text-muted-foreground text-lg bg-secondary/50">
              The Tigoni Teapods, waiting for us ✧
            </p>
          </div>

          {/* Continue button */}
          <div
            className={`mt-8 text-center transition-all duration-700 delay-700 ${
              currentLine >= lines.length ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={scrollToItinerary}
              className="btn-folklore"
            >
              Continue reading
              <span className="text-xl">↓</span>
            </button>
          </div>

          {/* Decorative signature */}
          <div
            className={`mt-8 flex items-center gap-4 transition-all duration-700 delay-1000 ${
              currentLine >= lines.length ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex-1 decorative-line" />
            <span className="font-handwritten text-xl text-muted-foreground">✧</span>
            <div className="flex-1 decorative-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterContent;
