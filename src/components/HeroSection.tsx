import { useState } from "react";
import heroImage from "@/assets/hero-tea-fields.jpg";
import Envelope from "./Envelope";
import LetterContent from "./LetterContent";

const HeroSection = () => {
  const [letterOpened, setLetterOpened] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tea fields touched by morning fog, viewed through a wooden window"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay - darker when letter is open for readability */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            letterOpened
              ? "bg-gradient-to-b from-background/80 via-background/70 to-background"
              : "bg-gradient-to-b from-background/40 via-background/20 to-background"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto w-full">
        {/* Header - always visible but smaller when letter opens */}
        <div
          className={`transition-all duration-700 ${
            letterOpened ? "mb-8" : "mb-16"
          }`}
        >
          <p
            className={`font-handwritten text-primary mb-4 animate-float transition-all duration-500 ${
              letterOpened ? "text-xl" : "text-2xl md:text-3xl"
            }`}
          >
            ✧
          </p>
          <h1
            className={`font-handwritten text-foreground leading-tight transition-all duration-700 ${
              letterOpened
                ? "text-3xl md:text-4xl mb-2"
                : "text-5xl md:text-7xl lg:text-8xl mb-6"
            }`}
          >
            A Small December Story
            <span className="block text-primary">for Jordan</span>
          </h1>
          <p
            className={`font-serif text-muted-foreground italic transition-all duration-500 ${
              letterOpened ? "text-base" : "text-lg md:text-xl mb-12"
            }`}
          >
            December 16–18 • Tigoni Teapods
          </p>
        </div>

        {/* Envelope or Letter content */}
        {!letterOpened ? (
          <Envelope onOpen={() => setLetterOpened(true)} />
        ) : (
          <LetterContent isVisible={letterOpened} />
        )}
      </div>

      {/* Decorative bottom fade - only show before letter opens */}
      {!letterOpened && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      )}
    </section>
  );
};

export default HeroSection;
