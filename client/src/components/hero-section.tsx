import { Button } from "@/components/ui/button";
import GlassCard from "@/components/glass-card";
import Particles from "@/components/particles";

export default function HeroSection() {
  const brandLogos = ["LOGO", "BOGO", "L.HYP", "LOGO", "IPSUM"];

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>
      
      {/* Floating Particles */}
      <Particles count={50} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Client Testimonial */}
          <div className="lg:col-span-4 xl:col-span-3 animate-fade-in-up order-2 lg:order-1">
            <GlassCard className="p-4 sm:p-6 mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="EZRA MICHAEL Client Profile" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  data-testid="client-profile-image"
                />
                <div className="text-left min-w-0">
                  <h3 className="text-white font-semibold text-xs sm:text-sm truncate">EZRA MICHAEL</h3>
                  <p className="text-muted-foreground text-xs">Our Client</p>
                </div>
              </div>
              <p className="text-white/80 text-xs sm:text-sm italic leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
            </GlassCard>
            
            {/* Circular Logo */}
            <div className="circular-logo mx-auto relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
              <div className="circular-text">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <path
                    id="circle"
                    d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    fill="none"
                  />
                  <text fontSize="8" fill="rgba(255,255,255,0.7)" className="sm:text-[10px]">
                    <textPath href="#circle">
                      INFINIQODE • GROW BUSINESS • INFINIQODE • 
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white font-bold text-xl sm:text-2xl">∞</span>
              </div>
            </div>
          </div>
          
          {/* Center/Right - Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 text-center lg:text-left order-1 lg:order-2">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up leading-tight">
              <span className="text-white block mb-1 sm:mb-2">OPTIMIZING</span>
              <span className="gradient-text block">VISIBILITY</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
              <Button 
                className="bg-gradient-to-r from-primary to-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto text-sm sm:text-base"
                data-testid="button-learn-more"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto text-sm sm:text-base"
                data-testid="button-watch-video"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Play Video</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Brand Logos - Bottom */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 opacity-30 animate-fade-in-up">
          {brandLogos.map((logo, index) => (
            <div key={index} className="text-white/50 font-semibold text-lg sm:text-xl tracking-wider px-2">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
