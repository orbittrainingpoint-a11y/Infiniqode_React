import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlassCard from "@/components/glass-card";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      const validatedData = insertNewsletterSchema.parse({ email });
      newsletterMutation.mutate(validatedData);
    } catch (error) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/career", label: "Career" },
  ];

  const services = [
    { href: "/services", label: "Web Development" },
    { href: "/services", label: "Digital Marketing" },
    { href: "/services", label: "SAAS Solutions" },
    { href: "/services", label: "E-commerce" },
    { href: "/services", label: "Consulting" },
  ];

  const resources = [
    { href: "/blog", label: "Blog" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "Webinars" },
    { href: "#", label: "Help Center" },
    { href: "#", label: "Templates" },
  ];

  const locations = [
    "New York",
    "London", 
    "Tokyo",
    "Sydney",
    "Remote",
  ];

  return (
    <footer className="navy-bg pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold gradient-text">INFINIQODE</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              OUR NEWSLETTER
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Stay updated with the latest trends, insights, and exclusive content from our team of digital experts.
            </p>
            
            {/* Newsletter Form */}
            <GlassCard className="p-6 mb-8">
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                  data-testid="input-newsletter-email"
                  required
                />
                <Button 
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  data-testid="button-subscribe-newsletter"
                >
                  {newsletterMutation.isPending ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </form>
            </GlassCard>
          </div>
          
          {/* Right Content - Footer Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">RESOURCES</h3>
              <ul className="space-y-3">
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <a 
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <a 
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">SERVICES</h3>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <a 
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        data-testid={`footer-service-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Locations */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">LOCATIONS</h3>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground">
                      {location}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 INFINIQODE Agency. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="social-link-facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="social-link-twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="social-link-instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="social-link-linkedin"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
