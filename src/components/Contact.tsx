import { Mail, MapPin, Phone, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "espoohsrkurduhindi@gmail.com",
      href: "mailto:espoohsrkurduhindi@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Espoo, Finland",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://m.facebook.com/groups/UHWSEspoo/",
      color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@uhcf5361",
      color: "hover:bg-[#FF0000] hover:border-[#FF0000]",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:espoohsrkurduhindi@gmail.com",
      color: "hover:bg-accent hover:border-accent",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Get In Touch</h2>
          <div className="gold-divider mb-6" />
          <p className="section-subtitle mx-auto">
            We'd love to hear from you. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft card-hover group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="text-xl font-heading font-semibold mb-6 text-foreground">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-14 h-14 rounded-xl border-2 border-border bg-card text-foreground transition-all duration-300 hover:text-primary-foreground ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card">
            <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Write your message..."
                />
              </div>
              <button type="submit" className="w-full btn-gold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
