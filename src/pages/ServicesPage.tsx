import { Clock, MapPin, Users, Music, BookOpen, Heart, Calendar, Coffee, Baby, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Music,
      title: "Sunday Worship",
      time: "10:00 AM - 12:00 PM",
      description: "Our main weekly gathering featuring praise and worship, prayer, and biblical teaching in Urdu and Hindi.",
      features: ["Live Worship", "Bilingual Sermon", "Children's Church", "Fellowship Time"],
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      time: "Wednesday 7:00 PM",
      description: "Deep dive into God's Word with interactive discussions and practical applications for daily life.",
      features: ["Verse-by-Verse Study", "Group Discussion", "Prayer Time", "Q&A Session"],
    },
    {
      icon: Users,
      title: "Youth Fellowship",
      time: "Friday 6:00 PM",
      description: "A dynamic gathering for young people to grow in faith, build friendships, and discover their purpose.",
      features: ["Worship Night", "Games & Activities", "Mentorship", "Outreach Projects"],
    },
  ];

  const additionalMinistries = [
    {
      icon: Baby,
      title: "Children's Ministry",
      description: "Age-appropriate Bible lessons and activities for kids ages 3-12.",
      time: "During Sunday Service",
    },
    {
      icon: Heart,
      title: "Women's Fellowship",
      description: "Monthly gatherings for women to connect, share, and grow together.",
      time: "2nd Saturday Monthly",
    },
    {
      icon: Mic,
      title: "Men's Breakfast",
      description: "Monthly men's gathering with food, fellowship, and faith discussions.",
      time: "1st Saturday Monthly",
    },
    {
      icon: Coffee,
      title: "Prayer Meeting",
      description: "Corporate prayer for our church, community, and world.",
      time: "Tuesday 6:30 AM",
    },
  ];

  const specialEvents = [
    {
      title: "Easter Celebration",
      description: "Special service celebrating the resurrection of our Lord Jesus Christ.",
      month: "April",
    },
    {
      title: "Summer Camp",
      description: "Annual youth camp filled with worship, teaching, and outdoor activities.",
      month: "July",
    },
    {
      title: "Christmas Program",
      description: "A beautiful celebration of Christ's birth with music and drama.",
      month: "December",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float delay-200" />
        </div>
        
        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/20 rounded-full border border-accent/30 animate-fade-in">
              Join Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-slide-up">
              Our Services & Ministries
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-slide-up delay-100">
              Experience meaningful worship and grow in your faith journey with us.
            </p>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              <span className="font-medium">Espoo, Finland</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <span className="font-medium">Sundays at 10:00 AM</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Weekly Gatherings</span>
            <h2 className="section-title mt-4 mb-6">Main Services</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-8">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-3xl overflow-hidden card-hover animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="p-8 lg:p-12 bg-gradient-to-br from-primary to-blue-dark flex flex-col justify-center text-primary-foreground">
                    <service.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-heading font-bold mb-2">{service.title}</h3>
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <Clock className="w-4 h-4" />
                      <span>{service.time}</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Ministries */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Get Involved</span>
            <h2 className="section-title mt-4 mb-6">Additional Ministries</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalMinistries.map((ministry, index) => (
              <div
                key={ministry.title}
                className="group bg-background p-8 rounded-2xl card-hover text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <ministry.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{ministry.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{ministry.description}</p>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  {ministry.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Mark Your Calendar</span>
            <h2 className="section-title mt-4 mb-6">Special Events</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialEvents.map((event, index) => (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-dark" />
                <div className="relative p-8 text-primary-foreground">
                  <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    <span className="font-medium">{event.month}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{event.title}</h3>
                  <p className="opacity-80 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-gold)" }}>
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                What to Expect When You Visit
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background/90 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-semibold mb-4">First Time Visitors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Friendly greeters will welcome you at the door</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Casual dress code - come as you are!</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Services include Urdu and Hindi translation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Children's programs available during service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background/90 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-semibold mb-4">During the Service</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Warm worship with traditional and contemporary songs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Bible-centered teaching that's practical and applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Time for prayer and reflection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span>Fellowship time with tea and snacks after service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto text-center">
          <h2 className="section-title mb-6">Ready to Visit?</h2>
          <p className="section-subtitle mx-auto mb-8">
            We can't wait to meet you! Join us this Sunday and experience the love of UHCF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Get Directions
            </a>
            <Link to="/contact" className="btn-primary">
              Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
