import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import uhcfLogo from "@/assets/uhcf-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Media", href: "#media" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={uhcfLogo} alt="UHCF Logo" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link py-2">
                {link.name}
              </a>
            ))}
            <a
              href="https://www.bible.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-gold text-sm"
            >
              <BookOpen size={18} />
              Bible
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card shadow-card animate-slide-up">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link py-3 text-lg border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.bible.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 btn-gold mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen size={18} />
                Bible
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
