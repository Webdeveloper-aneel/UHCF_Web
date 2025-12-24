import { useEffect, useState } from "react";
import heroWorship from "@/assets/hero-worship.jpg";
import heroPreaching from "@/assets/hero-preaching.jpg";
import heroBaptism from "@/assets/hero-baptism.jpg";
import heroCelebration from "@/assets/hero-celebration.jpg";

const images = [heroWorship, heroPreaching, heroBaptism, heroCelebration];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Church fellowship ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "linear-gradient(135deg, hsl(217, 71%, 15%, 0.85) 0%, hsl(217, 71%, 25%, 0.75) 50%, hsl(42, 87%, 45%, 0.6) 100%)" 
        }} 
      />
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-accent w-8" 
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
