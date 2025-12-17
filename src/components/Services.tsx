import { Clock, MapPin, Calendar, Music } from "lucide-react";

const Services = () => {
  const serviceInfo = [
    {
      icon: Calendar,
      title: "Sunday Worship",
      time: "Every Sunday",
      details: "Join us for praise, worship, and the Word of God",
    },
    {
      icon: Clock,
      title: "Service Time",
      time: "10:00 AM - 12:30 PM",
      details: "Worship service followed by fellowship time",
    },
    {
      icon: MapPin,
      title: "Location",
      time: "Espoo, Finland",
      details: "Contact us for the exact venue address",
    },
    {
      icon: Music,
      title: "Worship Style",
      time: "Urdu & Hindi",
      details: "Traditional and contemporary Christian songs",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Services</h2>
          <div className="gold-divider mb-6" />
          <p className="section-subtitle mx-auto">
            Experience meaningful worship and fellowship in your heart language.
            All are welcome to join our services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceInfo.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-2xl shadow-soft card-hover group"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-accent/20 text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-300">
                <service.icon size={26} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-primary font-semibold mb-2">{service.time}</p>
              <p className="text-muted-foreground text-sm">{service.details}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card p-10 md:p-14 rounded-3xl shadow-card">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
            Join Us This Sunday!
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Whether you're new to faith or have been walking with Christ for years, 
            you're welcome at UHCF. Come experience the warmth of our fellowship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Get Directions
            </a>
            <a
              href="https://m.facebook.com/groups/UHWSEspoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Join Our Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
