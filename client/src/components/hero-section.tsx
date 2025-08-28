import { Button } from "@/components/ui/button";
import GlassCard from "@/components/glass-card";
import Particles from "@/components/particles";

export default function HeroSection() {
  const brandLogos = ["LOGO", "BOGO", "L.HYP", "LOGO", "IPSUM"];

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 3D Floating Elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>
      
      {/* Floating Particles */}
      <Particles count={50} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Client Testimonial */}
          <div className="lg:col-span-4 animate-fade-in-up">
            <GlassCard className="p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="EZRA MICHAEL Client Profile" 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="client-profile-image"
                />
                <div className="text-left">
                  <h3 className="text-white font-semibold text-sm">EZRA MICHAEL</h3>
                  <p className="text-muted-foreground text-xs">Our Client</p>
                </div>
              </div>
              <p className="text-white/80 text-sm italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
            </GlassCard>
            
            {/* Circular Logo */}
            <div className="circular-logo mx-auto relative">
              <div className="circular-text">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <path
                    id="circle"
                    d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    fill="none"
                  />
                  <text fontSize="10" fill="rgba(255,255,255,0.7)">
                    <textPath href="#circle">
                      INFINIQODE • GROW BUSINESS • INFINIQODE • 
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white font-bold text-2xl">∞</span>
              </div>
            </div>
          </div>
          
          {/* Center/Right - Main Content */}
          <div className="lg:col-span-8 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
              <span className="text-white block mb-2">OPTIMIZING</span>
              <span className="gradient-text block">VISIBILITY</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg text-white/70 mb-8 max-w-2xl animate-fade-in-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-fade-in-up">
              <Button 
                className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                data-testid="button-learn-more"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 px-6 py-4"
                data-testid="button-watch-video"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Play Video</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Brand Logos - Bottom */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 opacity-30 animate-fade-in-up">
          {brandLogos.map((logo, index) => (
            <div key={index} className="text-white/50 font-semibold text-xl tracking-wider">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
