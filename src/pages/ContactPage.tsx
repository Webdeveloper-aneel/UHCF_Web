import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Facebook, Youtube, Send, MessageCircle, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "espoohsrkurduhindi@gmail.com",
      href: "mailto:espoohsrkurduhindi@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Espoo, Finland",
      href: "https://maps.google.com",
      description: "Join us for Sunday service",
    },
    {
      icon: Clock,
      label: "Service Times",
      value: "Sundays at 10:00 AM",
      href: "#",
      description: "Doors open at 9:30 AM",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook Group",
      href: "https://m.facebook.com/groups/UHWSEspoo/",
      description: "Join our community group",
      color: "bg-[#1877F2]",
    },
    {
      icon: Youtube,
      name: "YouTube Channel",
      href: "https://www.youtube.com/@uhcf5361",
      description: "Watch sermons & worship",
      color: "bg-destructive",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:espoohsrkurduhindi@gmail.com",
      description: "Send us a message",
      color: "bg-primary",
    },
  ];

  const faqs = [
    {
      question: "What should I wear to service?",
      answer: "Come as you are! We have no dress code. Most people dress casually.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have free parking available for all visitors.",
    },
    {
      question: "Do you have programs for children?",
      answer: "Yes! We have age-appropriate programs during Sunday service for kids ages 3-12.",
    },
    {
      question: "What languages are services in?",
      answer: "Services are conducted in Urdu and Hindi with some English elements.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float delay-200" />
        </div>
        
        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/20 rounded-full border border-accent/30 animate-fade-in">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-slide-up">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-slide-up delay-100">
              We'd love to hear from you. Reach out with any questions or just to say hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-20">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-card p-8 rounded-2xl shadow-card card-hover animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <info.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-1">{info.label}</h3>
                <p className="text-primary font-medium mb-2">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Send a Message</span>
              <h2 className="section-title mt-4 mb-6">Get in Touch</h2>
              <div className="gold-divider mb-8 mx-0" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <button type="submit" className="btn-gold flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Social & FAQ */}
            <div className="space-y-12">
              {/* Social Links */}
              <div className="animate-slide-up delay-100">
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">Stay Connected</span>
                <h2 className="text-2xl font-heading font-bold mt-4 mb-6">Follow Us</h2>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-card rounded-xl card-hover"
                    >
                      <div className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center`}>
                        <social.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">{social.name}</h4>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                      <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="animate-slide-up delay-200">
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">Common Questions</span>
                <h2 className="text-2xl font-heading font-bold mt-4 mb-6">FAQs</h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-card p-6 rounded-xl">
                      <div className="flex items-start gap-3">
                        <MessageCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">{faq.question}</h4>
                          <p className="text-muted-foreground text-sm">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-card">
        <div className="container-custom mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Find Us</span>
            <h2 className="section-title mt-4 mb-6">Our Location</h2>
            <div className="gold-divider" />
          </div>
          
          <div className="bg-foreground/5 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Espoo, Finland</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-block"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-custom mx-auto relative z-10 text-center text-primary-foreground">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            We Can't Wait to Meet You
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you have questions, need prayer, or just want to connect, we're here for you.
          </p>
          <a
            href="mailto:espoohsrkurduhindi@gmail.com"
            className="btn-gold inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Us Directly
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
