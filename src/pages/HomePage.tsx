import { ChevronDown, Users, Heart, Music, Globe, BookOpen, Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: "Welcoming Community",
      description: "A warm and loving family where everyone belongs, regardless of background.",
    },
    {
      icon: Heart,
      title: "Faith & Love",
      description: "Growing together in faith while sharing God's unconditional love.",
    },
    {
      icon: Music,
      title: "Worship in Our Languages",
      description: "Experience worship in Urdu and Hindi that touches your heart.",
    },
    {
      icon: Globe,
      title: "Cultural Connection",
      description: "Bridging cultures while staying rooted in our heritage.",
    },
  ];

  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "Main Hall",
    },
    {
      title: "Bible Study Group",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Community Room",
    },
    {
      title: "Youth Fellowship",
      date: "Every Friday",
      time: "6:00 PM",
      location: "Youth Center",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float delay-200" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Decorative Cross Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 text-[200px] text-primary-foreground">✝</div>
          <div className="absolute bottom-1/3 left-1/5 text-[150px] text-primary-foreground">✝</div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 text-center text-primary-foreground">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm">
              ✨ Welcome to Our Fellowship ✨
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-slide-up">
            Urdu Hindi Christian
            <span className="block mt-2 text-accent animate-glow">Fellowship</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-slide-up delay-100 font-light leading-relaxed">
            A community of believers united in faith, sharing God's love in Urdu and Hindi. 
            Join us as we worship, grow, and serve together in His name.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
            <Link to="/services" className="btn-gold group">
              <span className="flex items-center gap-2">
                Join Our Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 
                         text-primary-foreground transition-all duration-300 
                         hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Learn More
            </Link>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#features"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="section-title mt-4 mb-6">Experience True Fellowship</h2>
            <div className="gold-divider mb-6" />
            <p className="section-subtitle mx-auto">
              Discover what makes our community special and why thousands have found their spiritual home with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card p-8 rounded-2xl card-hover text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
        </div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <BookOpen className="w-16 h-16 mx-auto mb-8 text-accent animate-float" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 leading-tight">
              "Go therefore and make disciples of all nations..."
            </h2>
            <p className="text-xl md:text-2xl opacity-90 font-light italic mb-8">
              — Matthew 28:19
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              Our mission is to spread the Gospel of Jesus Christ, nurture believers in their faith journey, 
              and create a loving community that reflects God's love to all people.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Join Us</span>
            <h2 className="section-title mt-4 mb-6">Upcoming Events</h2>
            <div className="gold-divider mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="group bg-background p-8 rounded-2xl card-hover border border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                  <span className="text-sm font-medium text-accent">{event.date}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center" style={{ background: "var(--gradient-gold)" }}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMGwyMCAyMC0yMCAyMEwwIDIweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Join Our Family?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                We'd love to welcome you to our community. Come experience the warmth and love of UHCF.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/about" className="px-8 py-3 rounded-lg font-semibold border-2 border-foreground/30 text-foreground hover:bg-foreground/10 transition-all duration-300">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
