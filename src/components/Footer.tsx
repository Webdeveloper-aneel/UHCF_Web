import { Link } from "react-router-dom";
import { Facebook, Youtube, Mail, Heart, BookOpen } from "lucide-react";
import uhcfLogo from "@/assets/uhcf-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://m.facebook.com/groups/UHWSEspoo/",
      label: "Facebook",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@uhcf5361",
      label: "YouTube",
    },
    {
      icon: Mail,
      href: "mailto:espoohsrkurduhindi@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={uhcfLogo} alt="UHCF Logo" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Urdu Hindi Christian Fellowship is a community of believers united in faith, 
              sharing God's love in Urdu and Hindi. We welcome everyone to join our family.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.bible.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  <BookOpen size={16} />
                  Read Bible Online
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@uhcf5361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  <Youtube size={16} />
                  Watch Sermons
                </a>
              </li>
              <li>
                <a
                  href="https://m.facebook.com/groups/UHWSEspoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  <Facebook size={16} />
                  Join Our Group
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} UHCF - Urdu Hindi Christian Fellowship. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart size={14} className="text-accent" /> for God's glory
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
