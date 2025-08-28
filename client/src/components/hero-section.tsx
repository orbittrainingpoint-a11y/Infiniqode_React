import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/glass-card";
import Particles from "@/components/particles";

export default function HeroSection() {
  const brandLogos = ["LOGO", "BOGO", "TECH", "LOGO", "IPSUM"];

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Particles */}
      <Particles count={30} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Card */}
        <div className="inline-block mb-8 animate-fade-in-up">
          <GlassCard className="p-6">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="EZRA MICHAEL CEO Profile" 
                className="w-16 h-16 rounded-full object-cover"
                data-testid="ceo-profile-image"
              />
              <div className="text-left">
                <h3 className="text-white font-semibold">EZRA MICHAEL</h3>
                <p className="text-muted-foreground text-sm">CEO & Founder</p>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-white">DIGITAL SOLUTIONS</span><br />
          <span className="gradient-text">That Drive Success</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
          INFINIQODE is a leading digital agency specializing in transformative power of digital solutions. Our team of experts creates innovative platforms that drive efficiency, improve user experience and elevate business success.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
          <Link href="/services">
            <Button 
              className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              data-testid="button-learn-more"
            >
              <span>Learn More</span>
              <i className="fas fa-arrow-right"></i>
            </Button>
          </Link>
          <Button 
            variant="outline"
            className="glass-card px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 border-white/20"
            data-testid="button-watch-video"
          >
            <i className="fas fa-play"></i>
            <span>Watch Video</span>
          </Button>
        </div>
        
        {/* Brand Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 animate-fade-in-up">
          {brandLogos.map((logo, index) => (
            <GlassCard key={index} className="px-6 py-3">
              <span className="text-white font-semibold text-lg">{logo}</span>
            </GlassCard>
          ))}
        </div>
      </div>
      
      {/* Large Logo Background Element */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 pointer-events-none">
        <div className="w-96 h-96 text-white/5 text-[20rem] font-bold flex items-center justify-center">
          ∞
        </div>
      </div>
    </section>
  );
}
