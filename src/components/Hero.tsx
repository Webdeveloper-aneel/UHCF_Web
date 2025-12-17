import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float delay-200" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 text-center text-primary-foreground">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/20 rounded-full border border-accent/30">
            Welcome to Our Fellowship
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-slide-up">
          Urdu Hindi Christian
          <span className="block mt-2 text-accent">Fellowship</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-slide-up delay-100 font-light">
          A community of believers united in faith, sharing God's love in Urdu and Hindi. 
          Join us as we worship, grow, and serve together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
          <a href="#services" className="btn-gold">
            Join Our Services
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 
                       text-primary-foreground transition-all duration-300 
                       hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
          >
            Learn More
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
