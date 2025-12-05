import ChapterCard from "./ChapterCard";

const chapters = [
  {
    emoji: "🫖",
    title: "December 16",
    subtitle: "— the prologue",
    items: [
      "Arrival at the Teapods — still air, wooden calm",
      "A picnic in the tea farms, sunlight folded between leaves",
      "Slow dinner as the hills fall into twilight",
      "Wine and Netflix, the gentle kind of evening meant for unwinding",
    ],
  },
  {
    emoji: "🎉",
    title: "December 17",
    subtitle: "— the chapter where the world warms",
    items: [
      "Breakfast at the Teapod — slow, simple, unhurried",
      "One hour of quad biking at Tigoni Twin Rivers — a spark of thrill, a breath of open air",
      "Ziplining — a moment suspended above the valley",
      "Back at 4 PM for a quiet refresh",
      "6 PM dinner at Como — candlelight, warmth, the soft glow of a birthday evening",
    ],
  },
  {
    emoji: "🌄",
    title: "December 18",
    subtitle: "— the epilogue",
    items: [
      "Breakfast at 9 AM",
      "Checkout at 10 AM",
      "A gentle ending to a weekend meant just for you",
    ],
  },
];

const Itinerary = () => {
  return (
    <section id="itinerary" className="py-16 md:py-24 px-6 bg-secondary/30 paper-texture">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-handwritten text-2xl text-muted-foreground mb-4">
            like chapters in a quiet album
          </p>
          <h2 className="font-handwritten text-4xl md:text-5xl text-foreground">
            The Itinerary
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="w-24 decorative-line" />
          </div>
        </div>

        {/* Chapter cards */}
        <div className="space-y-8 md:space-y-12">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.title}
              {...chapter}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
