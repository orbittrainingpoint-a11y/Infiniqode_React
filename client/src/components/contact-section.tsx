import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
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

  return (
    <section id="contact" className="py-20 navy-bg relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              Stay updated with the latest industry insights, trends, and exclusive content delivered directly to your inbox.
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
                  data-testid="input-contact-newsletter-email"
                  required
                />
                <Button 
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  data-testid="button-contact-newsletter-subscribe"
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
                <li><a href="/blog" className="text-muted-foreground hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Case Studies</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Webinars</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Templates</a></li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-muted-foreground hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="/services" className="text-muted-foreground hover:text-white transition-colors duration-300">Services</a></li>
                <li><a href="/projects" className="text-muted-foreground hover:text-white transition-colors duration-300">Portfolio</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-white transition-colors duration-300">Contact</a></li>
                <li><a href="/career" className="text-muted-foreground hover:text-white transition-colors duration-300">Career</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">SERVICES</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-muted-foreground hover:text-white transition-colors duration-300">Web Development</a></li>
                <li><a href="/services" className="text-muted-foreground hover:text-white transition-colors duration-300">Digital Marketing</a></li>
                <li><a href="/services" className="text-muted-foreground hover:text-white transition-colors duration-300">SAAS Solutions</a></li>
                <li><a href="/services" className="text-muted-foreground hover:text-white transition-colors duration-300">E-commerce</a></li>
                <li><a href="/services" className="text-muted-foreground hover:text-white transition-colors duration-300">Consulting</a></li>
              </ul>
            </div>
            
            {/* Locations */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">LOCATIONS</h3>
              <ul className="space-y-3">
                <li><span className="text-muted-foreground">New York</span></li>
                <li><span className="text-muted-foreground">London</span></li>
                <li><span className="text-muted-foreground">Tokyo</span></li>
                <li><span className="text-muted-foreground">Sydney</span></li>
                <li><span className="text-muted-foreground">Remote</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
