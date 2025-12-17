import { Heart, Users, BookOpen, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Faith & Love",
      description: "Centered on Christ's teachings, we share unconditional love and support for all.",
    },
    {
      icon: Users,
      title: "Community",
      description: "A warm family of Urdu and Hindi speaking believers from diverse backgrounds.",
    },
    {
      icon: BookOpen,
      title: "Biblical Teaching",
      description: "Deep scriptural study and worship in languages close to your heart.",
    },
    {
      icon: Globe,
      title: "Cultural Bridge",
      description: "Connecting South Asian Christians in Finland through shared heritage and faith.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">About UHCF</h2>
          <div className="gold-divider mb-6" />
          <p className="section-subtitle mx-auto">
            Urdu Hindi Christian Fellowship is a vibrant community based in Espoo, Finland,
            bringing together believers who speak Urdu and Hindi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-background rounded-2xl text-center card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative z-10 max-w-3xl mx-auto text-center text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              To glorify God by making disciples, nurturing spiritual growth, and serving our community 
              through worship, fellowship, and outreach in the Urdu and Hindi languages.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
