import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/career", label: "Career" },
    { href: "/blog", label: "Blog" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          isScrolled ? "glass-nav backdrop-blur-md" : "glass-nav"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer" data-testid="logo-link">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-code text-white text-xl"></i>
                </div>
                <span className="text-2xl font-bold gradient-text">INFINIQODE</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a 
                    className={`transition-colors duration-300 ${
                      isActiveLink(item.href) 
                        ? "text-primary font-semibold" 
                        : "text-foreground hover:text-primary"
                    }`}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link href="/contact">
              <Button 
                className="hidden lg:block bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-testid="mobile-menu-overlay"
      >
        <div className="flex flex-col h-full p-6 pt-24">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className={`text-lg transition-colors duration-300 ${
                    isActiveLink(item.href) 
                      ? "text-primary font-semibold" 
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            
            <Link href="/contact">
              <Button 
                className="bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 mt-8"
                onClick={() => setIsMenuOpen(false)}
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Background Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
          data-testid="mobile-menu-backdrop"
        />
      )}
    </>
  );
}
