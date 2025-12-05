import heroImage from "@/assets/hero-tea-fields.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById('opening-note')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tea fields touched by morning fog, viewed through a wooden window"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="font-handwritten text-2xl md:text-3xl text-primary mb-4 animate-float">
            ✧
          </p>
          <h1 className="font-handwritten text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            A Small December Story
            <span className="block text-primary">for Jordan</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-muted-foreground italic mb-12">
            December 16–18 • Tigoni Teapods
          </p>
          <button
            onClick={scrollToContent}
            className="btn-folklore"
          >
            Turn the Page
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
