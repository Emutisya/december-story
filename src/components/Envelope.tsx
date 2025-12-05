import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        onOpen();
      }, 800);
    }, 600);
  };

  return (
    <div
      className={`relative cursor-pointer transition-all duration-1000 ${
        isOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
      }`}
      onClick={handleClick}
    >
      {/* Envelope container */}
      <div className="relative w-80 md:w-96 mx-auto">
        {/* Envelope back */}
        <div className="relative bg-cream-dark border border-border rounded-lg shadow-xl overflow-hidden">
          {/* Inner shadow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/5" />
          
          {/* Envelope body */}
          <div className="p-8 md:p-12 min-h-[280px] flex flex-col items-center justify-center">
            {/* Wax seal */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ${
                isOpening ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <span className="font-handwritten text-2xl text-primary-foreground">J</span>
              </div>
            </div>

            {/* Hidden letter preview */}
            <div
              className={`text-center transition-all duration-700 ${
                isOpening ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-handwritten text-xl text-muted-foreground">
                Opening...
              </p>
            </div>
          </div>
        </div>

        {/* Envelope flap (triangle) */}
        <div
          className={`absolute top-0 left-0 right-0 origin-top transition-transform duration-700 ease-in-out ${
            isOpening ? "[transform:rotateX(180deg)]" : ""
          }`}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <svg
            viewBox="0 0 400 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L200,100 L400,0 L400,10 L200,110 L0,10 Z"
              className="fill-cream-dark stroke-border"
              strokeWidth="1"
            />
            <path
              d="M0,0 L200,100 L400,0"
              className="fill-secondary stroke-border"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Instruction text */}
        <p
          className={`absolute -bottom-10 left-0 right-0 text-center font-handwritten text-lg text-muted-foreground transition-opacity duration-500 ${
            isOpening ? "opacity-0" : "opacity-100 animate-pulse"
          }`}
        >
          tap to open ✧
        </p>
      </div>
    </div>
  );
};

export default Envelope;
