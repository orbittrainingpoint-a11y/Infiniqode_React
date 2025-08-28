import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import GlassCard from "@/components/glass-card";

export default function AboutSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    rating: 0,
  });

  useEffect(() => {
    const animateCounter = (
      target: number,
      setter: (value: number) => void,
      duration: number = 2000,
      isDecimal: boolean = false
    ) => {
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setter(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }, 16);
    };

    // Animate counters when component mounts
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(18, (val) => setCounters(prev => ({ ...prev, projects: val })));
          animateCounter(13, (val) => setCounters(prev => ({ ...prev, clients: val })));
          animateCounter(4.9, (val) => setCounters(prev => ({ ...prev, rating: val })), 2000, true);
          observer.unobserve(entry.target);
        }
      });
    });

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 navy-bg relative" data-section-id="about-section">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide">About INFINIQODE</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              FUELING YOUR GROWTH<br />
              WITH SEARCH POWER.
            </h2>
            
            {/* Services Cards */}
            <div className="space-y-4 mb-8">
              <GlassCard className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-bullhorn text-white"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">MARKETING AGENCY</h3>
                  <p className="text-muted-foreground text-sm">
                    We've got the resources and expertise to help you take your digital presence to the next level with advanced SEO strategies.
                  </p>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-search text-white"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">SEO SERVICES</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive SEO solutions that improve your search rankings and drive organic traffic to your website.
                  </p>
                </div>
              </GlassCard>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1" data-testid="counter-projects">
                  {counters.projects}K+
                </div>
                <p className="text-muted-foreground text-sm">Projects Done</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1" data-testid="counter-clients">
                  {counters.clients}K+
                </div>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1" data-testid="counter-rating">
                  {counters.rating}
                </div>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Card */}
          <div className="relative">
            <GlassCard className="p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
                alt="CEO working on development projects" 
                className="w-full h-96 object-cover rounded-xl mb-4"
                data-testid="about-hero-image"
              />
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60" 
                  alt="EZRA MICHAEL CEO Profile" 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="about-ceo-profile"
                />
                <div>
                  <h3 className="text-white font-semibold">EZRA MICHAEL</h3>
                  <p className="text-muted-foreground text-sm">CEO & Founder</p>
                </div>
              </div>
            </GlassCard>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        {/* Bottom Text Animation */}
        <div className="mt-20 text-center">
          <div className="text-6xl lg:text-8xl font-bold text-white/5 tracking-wider">
            EXECUTION · SUCCESS · STRATEGY
          </div>
        </div>
      </div>
    </section>
  );
}
