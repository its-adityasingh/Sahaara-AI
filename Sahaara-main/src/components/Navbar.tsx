import { useState, useEffect } from "react";
import { Heart, Zap, Sun, BookOpen, Home, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", icon: Home },
  { name: "Ayush", subtitle: "Elderly Care", href: "https://sahaara-ayush-black.vercel.app/", icon: Heart },
  { name: "Manas & Fit", subtitle: "Youth Wellbeing", href: "https://sahaara-manas.vercel.app/", icon: Zap },
  { name: "Poshan", subtitle: "Child Nutrition", href: "https://sahaara-poshan-git-main-its-adityasinghs-projects.vercel.app/", icon: Sun },
  { name: "Gyaan", subtitle: "Education", href: "https://sahaara-gyaan-delta.vercel.app/", icon: BookOpen },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Check if it's an external URL
    if (href.startsWith("http://") || href.startsWith("https://")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    // Internal anchor link
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#");
              }}
              className="flex items-center gap-3"
            >
              <img 
                src="/logo.png" 
                alt="SAHAARA Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  // Fallback to SVG if PNG doesn't exist
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('.png')) {
                    target.src = '/logo.svg';
                  }
                }}
              />
              <div>
                <span className="text-lg font-bold text-foreground">SAHAARA</span>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Care & Wellbeing</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http://") || link.href.startsWith("https://");
                const baseClassName = `group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-secondary transition-all duration-300 ${
                  index === 0 ? "bg-sahaara-orange-light" : ""
                }`;
                
                if (isExternal) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseClassName}
                    >
                      <link.icon className={`w-4 h-4 transition-colors ${
                        index === 0 ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                      }`} />
                      <div className="text-left">
                        <span className={`text-sm font-medium block ${
                          index === 0 ? "text-primary" : "text-foreground"
                        }`}>{link.name}</span>
                        {link.subtitle && (
                          <span className="text-[10px] text-muted-foreground">{link.subtitle}</span>
                        )}
                      </div>
                    </a>
                  );
                }
                
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={baseClassName}
                  >
                    <link.icon className={`w-4 h-4 transition-colors ${
                      index === 0 ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    }`} />
                    <div className="text-left">
                      <span className={`text-sm font-medium block ${
                        index === 0 ? "text-primary" : "text-foreground"
                      }`}>{link.name}</span>
                      {link.subtitle && (
                        <span className="text-[10px] text-muted-foreground">{link.subtitle}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-border shadow-xl">
            <div className="container mx-auto px-6 py-4">
              {navLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http://") || link.href.startsWith("https://");
                const baseClassName = `w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary transition-all duration-300 ${
                  index === 0 ? "bg-sahaara-orange-light" : ""
                }`;
                
                if (isExternal) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseClassName}
                    >
                      <link.icon className={`w-5 h-5 ${index === 0 ? "text-primary" : "text-muted-foreground"}`} />
                      <div className="text-left">
                        <span className={`font-medium block ${index === 0 ? "text-primary" : "text-foreground"}`}>{link.name}</span>
                        {link.subtitle && (
                          <span className="text-xs text-muted-foreground">{link.subtitle}</span>
                        )}
                      </div>
                    </a>
                  );
                }
                
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={baseClassName}
                  >
                    <link.icon className={`w-5 h-5 ${index === 0 ? "text-primary" : "text-muted-foreground"}`} />
                    <div className="text-left">
                      <span className={`font-medium block ${index === 0 ? "text-primary" : "text-foreground"}`}>{link.name}</span>
                      {link.subtitle && (
                        <span className="text-xs text-muted-foreground">{link.subtitle}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
