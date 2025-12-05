import HeroSection from "@/components/HeroSection";
import OpeningNote from "@/components/OpeningNote";
import Itinerary from "@/components/Itinerary";
import ClosingNote from "@/components/ClosingNote";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background grain-overlay">
      <HeroSection />
      <OpeningNote />
      <Itinerary />
      <ClosingNote />
      <Footer />
    </main>
  );
};

export default Index;
