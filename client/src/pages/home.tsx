import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/glass-card";
import Particles from "@/components/particles";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Service, Project, Testimonial, PricingPlan, Faq, BlogPost, InsertNewsletter } from "@shared/schema";
import { insertNewsletterSchema } from "@shared/schema";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    rating: 0,
    experience: 0
  });
  
  // Data fetching
  const { data: services } = useQuery<Service[]>({ queryKey: ["/api/services"] });
  const { data: projects } = useQuery<Project[]>({ queryKey: ["/api/projects"] });
  const { data: testimonials } = useQuery<Testimonial[]>({ queryKey: ["/api/testimonials"] });
  const { data: plans } = useQuery<PricingPlan[]>({ queryKey: ["/api/pricing"] });
  const { data: faqs } = useQuery<Faq[]>({ queryKey: ["/api/faqs"] });
  const { data: posts } = useQuery<BlogPost[]>({ queryKey: ["/api/blog"] });

  // Newsletter subscription
  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Subscribed!", description: "Thank you for subscribing to our newsletter." });
      setEmail("");
    }
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const validatedData = insertNewsletterSchema.parse({ email });
    newsletterMutation.mutate(validatedData);
  };

  // Counter animation
  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void, isDecimal = false) => {
      const increment = target / 120;
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(250, (val) => setCounters(prev => ({ ...prev, projects: val })));
          animateCounter(120, (val) => setCounters(prev => ({ ...prev, clients: val })));
          animateCounter(4.9, (val) => setCounters(prev => ({ ...prev, rating: val })), true);
          animateCounter(8, (val) => setCounters(prev => ({ ...prev, experience: val })));
          observer.unobserve(entry.target);
        }
      });
    });

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      {/* 1. Hero Section */}
      <section className="scroll-snap-section">
        <HeroSection />
      </section>
      
      {/* 2. Services Overview */}
      <section className="scroll-snap-section">
        <ServicesOverview services={services} />
      </section>
      
      {/* 3. Featured Projects */}
      <section className="scroll-snap-section">
        <FeaturedProjects projects={projects} />
      </section>
      
      {/* 4. Client Testimonials */}
      <section className="scroll-snap-section">
        <ClientTestimonials testimonials={testimonials} />
      </section>
      
      {/* 5. Why Choose Us */}
      <section className="scroll-snap-section">
        <WhyChooseUs />
      </section>
      
      {/* 6. Industry Expertise */}
      <section className="scroll-snap-section">
        <IndustryExpertise />
      </section>
      
      {/* 7. Our Process */}
      <section className="scroll-snap-section">
        <OurProcess />
      </section>
      
      {/* 8. Team Spotlight */}
      <section className="scroll-snap-section">
        <TeamSpotlight />
      </section>
      
      {/* 9. Statistics & Achievements */}
      <section className="scroll-snap-section">
        <StatisticsSection counters={counters} />
      </section>
      
      {/* 10. Technology Stack */}
      <section className="scroll-snap-section">
        <TechnologyStack />
      </section>
      
      {/* 11. Case Studies */}
      <section className="scroll-snap-section">
        <CaseStudies />
      </section>
      
      {/* 12. Client Partners */}
      <section className="scroll-snap-section">
        <ClientPartners />
      </section>
      
      {/* 13. Latest Blog Posts */}
      <section className="scroll-snap-section">
        <LatestBlog posts={posts} />
      </section>
      
      {/* 14. Newsletter Signup */}
      <section className="scroll-snap-section">
        <NewsletterSection email={email} setEmail={setEmail} onSubmit={handleNewsletterSubmit} loading={newsletterMutation.isPending} />
      </section>
      
      {/* 15. Contact Information */}
      <section className="scroll-snap-section">
        <ContactInformation />
      </section>
      
      {/* 16. Office Locations */}
      <section className="scroll-snap-section">
        <OfficeLocations />
      </section>
      
      {/* 17. FAQ Section */}
      <section className="scroll-snap-section">
        <FaqSectionNew faqs={faqs} />
      </section>
      
      {/* 18. Awards & Recognition */}
      <section className="scroll-snap-section">
        <AwardsRecognition />
      </section>
      
      {/* 19. Call-to-Action */}
      <section className="scroll-snap-section">
        <FinalCallToAction />
      </section>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>
      <Particles count={50} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-4 xl:col-span-3 animate-fade-in-up order-2 lg:order-1">
            <GlassCard className="p-4 sm:p-6 mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="Client Profile" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left min-w-0">
                  <h3 className="text-white font-semibold text-xs sm:text-sm truncate">EZRA MICHAEL</h3>
                  <p className="text-muted-foreground text-xs">Our Client</p>
                </div>
              </div>
              <p className="text-white/80 text-xs sm:text-sm italic leading-relaxed">
                "Outstanding results that exceeded our expectations completely."
              </p>
            </GlassCard>
            
            <div className="circular-logo mx-auto relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
              <div className="circular-text">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <path id="circle" d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none" />
                  <text fontSize="8" fill="rgba(255,255,255,0.7)" className="sm:text-[10px]">
                    <textPath href="#circle">INFINIQODE • GROW BUSINESS • INFINIQODE • </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white font-bold text-xl sm:text-2xl">∞</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 xl:col-span-9 text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up leading-tight">
              <span className="text-white block mb-1 sm:mb-2">DIGITAL</span>
              <span className="gradient-text block">EXCELLENCE</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up leading-relaxed">
              Transform your business with world-class digital solutions. We create exceptional experiences that drive growth and deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
              <Button className="bg-gradient-to-r from-primary to-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto text-sm sm:text-base">
                <span>Start Your Project</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto text-sm sm:text-base">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Watch Demo</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 opacity-30 animate-fade-in-up">
          {["MICROSOFT", "GOOGLE", "AMAZON", "NETFLIX", "SPOTIFY"].map((logo, index) => (
            <div key={index} className="text-white/50 font-semibold text-lg sm:text-xl tracking-wider px-2">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Overview Component
function ServicesOverview({ services }: { services?: Service[] }) {
  const defaultServices = [
    { id: "1", title: "Web Development", description: "Custom web applications built with modern technologies", icon: "fas fa-code" },
    { id: "2", title: "Mobile Apps", description: "Native and cross-platform mobile applications", icon: "fas fa-mobile-alt" },
    { id: "3", title: "UI/UX Design", description: "Beautiful and intuitive user interface designs", icon: "fas fa-paint-brush" },
    { id: "4", title: "Digital Strategy", description: "Comprehensive digital transformation consulting", icon: "fas fa-chart-line" },
    { id: "5", title: "Cloud Solutions", description: "Scalable cloud infrastructure and migration", icon: "fas fa-cloud" },
    { id: "6", title: "DevOps", description: "Continuous integration and deployment pipelines", icon: "fas fa-cogs" }
  ];
  
  const servicesToShow = services && services.length > 0 ? services.slice(0, 6) : defaultServices;
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Our Services</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            COMPREHENSIVE
            <span className="gradient-text block">DIGITAL SOLUTIONS</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital services that transform your business and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesToShow.map((service, index) => (
            <GlassCard key={service.id} className="p-8 hover:scale-105 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-primary hover:text-accent transition-colors cursor-pointer">
                <span className="text-sm font-semibold">Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Projects Component
function FeaturedProjects({ projects }: { projects?: Project[] }) {
  const defaultProjects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced analytics and AI-powered recommendations",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600",
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
      id: "2",
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=600",
      category: "Mobile Development",
      technologies: ["React Native", "Node.js", "MongoDB"]
    },
    {
      id: "3",
      title: "AI Analytics Dashboard",
      description: "Advanced analytics platform with machine learning insights and predictive modeling",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      category: "Data Science",
      technologies: ["Python", "TensorFlow", "React"]
    }
  ];
  
  const projectsToShow = projects && projects.length > 0 ? projects.slice(0, 3) : defaultProjects;
  
  return (
    <section className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Featured Work</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            OUTSTANDING
            <span className="gradient-text block">PROJECT RESULTS</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses achieve remarkable success through innovative digital solutions and strategic execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projectsToShow.map((project, index) => (
            <GlassCard key={project.id} className="overflow-hidden hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary/90 text-white">{project.category}</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center text-primary hover:text-accent transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">View Case Study</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

// Client Testimonials Component
function ClientTestimonials({ testimonials }: { testimonials?: Testimonial[] }) {
  const defaultTestimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      rating: 5,
      content: "Exceptional service and outstanding results. The team delivered beyond our expectations with innovative solutions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e4b1c7?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "StartupXYZ",
      rating: 5,
      content: "Professional, efficient, and creative. They transformed our vision into a reality that exceeded all our goals.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: "3",
      name: "Emily Davis",
      company: "Global Solutions",
      rating: 5,
      content: "The best investment we've made. Their expertise and dedication resulted in remarkable business growth.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    }
  ];
  
  const testimonialsToShow = testimonials && testimonials.length > 0 ? testimonials.slice(0, 3) : defaultTestimonials;
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Client Stories</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            TRUSTED BY
            <span className="gradient-text block">INDUSTRY LEADERS</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsToShow.map((testimonial, index) => (
            <GlassCard key={testimonial.id} className="p-8 hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-lg mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Component
function WhyChooseUs() {
  const reasons = [
    {
      icon: "fas fa-rocket",
      title: "Innovative Solutions",
      description: "Cutting-edge technology and creative approaches to solve complex business challenges."
    },
    {
      icon: "fas fa-users",
      title: "Expert Team",
      description: "Seasoned professionals with proven track records across multiple industries."
    },
    {
      icon: "fas fa-clock",
      title: "Timely Delivery",
      description: "Committed to meeting deadlines without compromising on quality or performance."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Reliable Support",
      description: "24/7 support and maintenance to ensure your systems run smoothly at all times."
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Why Choose Us</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              YOUR SUCCESS IS
              <span className="gradient-text block">OUR PRIORITY</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We combine technical expertise with strategic thinking to deliver solutions that not only meet your current needs but position you for future growth.
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <GlassCard key={index} className="p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <i className={`${reason.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Industry Expertise Component
function IndustryExpertise() {
  const industries = [
    { name: "Healthcare", icon: "fas fa-heartbeat", projects: "50+" },
    { name: "FinTech", icon: "fas fa-chart-line", projects: "75+" },
    { name: "E-commerce", icon: "fas fa-shopping-cart", projects: "100+" },
    { name: "Education", icon: "fas fa-graduation-cap", projects: "40+" },
    { name: "Real Estate", icon: "fas fa-building", projects: "30+" },
    { name: "Manufacturing", icon: "fas fa-industry", projects: "25+" }
  ];
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Industry Focus</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            DEEP EXPERTISE
            <span className="gradient-text block">ACROSS INDUSTRIES</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our diverse portfolio spans multiple industries, giving us unique insights into sector-specific challenges and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <GlassCard key={index} className="p-6 text-center hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${industry.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-white font-bold mb-2">{industry.name}</h3>
              <p className="text-primary text-sm font-semibold">{industry.projects} Projects</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Our Process Component
function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and challenges through comprehensive research and analysis."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on our findings, we develop a tailored strategy that aligns with your objectives and market requirements."
    },
    {
      number: "03",
      title: "Design",
      description: "Our creative team designs intuitive and engaging user experiences that reflect your brand and resonate with your audience."
    },
    {
      number: "04",
      title: "Development",
      description: "We build robust, scalable solutions using cutting-edge technologies and industry best practices."
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing ensures your solution meets the highest standards of quality, performance, and security."
    },
    {
      number: "06",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support to ensure continued success and optimization."
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Our Methodology</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            PROVEN PROCESS
            <span className="gradient-text block">FOR SUCCESS</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures every project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <GlassCard key={index} className="p-8 hover:scale-105 transition-all duration-500 relative">
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary/30">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Spotlight Component
function TeamSpotlight() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
      bio: "10+ years of experience in enterprise architecture and cloud solutions."
    },
    {
      name: "Sarah Kim",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e4b1c7?auto=format&fit=crop&w=300&h=300",
      bio: "Award-winning designer with expertise in user experience and brand identity."
    },
    {
      name: "Michael Thompson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
      bio: "Full-stack developer specializing in modern web technologies and APIs."
    },
    {
      name: "Emily Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
      bio: "Certified PMP with a track record of delivering complex projects on time."
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Our Team</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            MEET THE EXPERTS
            <span className="gradient-text block">BEHIND YOUR SUCCESS</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our diverse team brings together decades of experience in technology, design, and business strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <GlassCard key={index} className="p-6 text-center hover:scale-105 transition-all duration-500 group">
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Statistics Section Component
function StatisticsSection({ counters }: { counters: { projects: number; clients: number; rating: number; experience: number } }) {
  return (
    <section id="stats-section" className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Our Impact</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            NUMBERS THAT
            <span className="gradient-text block">SPEAK VOLUMES</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{counters.projects}+</div>
            <p className="text-white/70 font-semibold">Projects Completed</p>
          </GlassCard>
          
          <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{counters.clients}+</div>
            <p className="text-white/70 font-semibold">Happy Clients</p>
          </GlassCard>
          
          <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{counters.rating}</div>
            <p className="text-white/70 font-semibold">Client Rating</p>
          </GlassCard>
          
          <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{counters.experience}+</div>
            <p className="text-white/70 font-semibold">Years Experience</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// Technology Stack Component
function TechnologyStack() {
  const technologies = {
    "Frontend": [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Vue.js", icon: "fab fa-vuejs", color: "#4FC08D" },
      { name: "Angular", icon: "fab fa-angular", color: "#DD0031" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "#007ACC" }
    ],
    "Backend": [
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "Java", icon: "fab fa-java", color: "#007396" },
      { name: "C#", icon: "fab fa-microsoft", color: "#239120" }
    ],
    "Cloud": [
      { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
      { name: "Azure", icon: "fab fa-microsoft", color: "#0078D4" },
      { name: "Google Cloud", icon: "fab fa-google", color: "#4285F4" },
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" }
    ],
    "Database": [
      { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
      { name: "Redis", icon: "fas fa-memory", color: "#DC382D" },
      { name: "MySQL", icon: "fas fa-database", color: "#4479A1" }
    ]
  };
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Technology Stack</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            CUTTING-EDGE
            <span className="gradient-text block">TECHNOLOGIES</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build scalable, maintainable, and high-performance solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <GlassCard key={category} className="p-6">
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {techs.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                    <i className={`${tech.icon} text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`} style={{ color: tech.color }}></i>
                    <span className="text-white/80 text-sm font-semibold text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const caseStudies = [
    {
      title: "E-Commerce Revenue Growth",
      client: "RetailTech Solutions",
      challenge: "Outdated platform limiting growth",
      solution: "Modern e-commerce platform with AI recommendations",
      result: "300% increase in online revenue",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Digital Transformation",
      client: "Healthcare Provider",
      challenge: "Manual processes and poor patient experience",
      solution: "Integrated digital platform with patient portal",
      result: "50% reduction in administrative costs",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&h=400"
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Success Stories</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            REAL RESULTS
            <span className="gradient-text block">REAL IMPACT</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore detailed case studies showcasing how we've helped businesses achieve extraordinary results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <GlassCard key={index} className="overflow-hidden hover:scale-105 transition-all duration-500">
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-primary font-semibold mb-4">{study.client}</p>
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-white/60 text-sm">Challenge: </span>
                    <span className="text-white/80 text-sm">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Solution: </span>
                    <span className="text-white/80 text-sm">{study.solution}</span>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Result: </span>
                    <span className="text-accent font-semibold text-sm">{study.result}</span>
                  </div>
                </div>
                <Button variant="ghost" className="text-primary hover:text-accent hover:bg-white/5 p-0">
                  Read Full Case Study →
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientPartners() {
  const partners = [
    "TechCorp", "GlobalTech", "InnovateCo", "FutureWorks", 
    "DigitalPro", "NextGen", "SmartSys", "CloudFirst",
    "DataDriven", "AIConnect", "WebFlow", "AppMaster"
  ];
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Our Partners</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            TRUSTED BY LEADING
            <span className="gradient-text block">COMPANIES WORLDWIDE</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <GlassCard key={index} className="p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-white/60 font-bold text-lg">{partner}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestBlog({ posts }: { posts?: BlogPost[] }) {
  const defaultPosts = [
    {
      id: "1",
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies shaping the future of web development in 2024 and beyond.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      category: "Technology",
      createdAt: new Date("2024-01-15")
    },
    {
      id: "2",
      title: "Digital Transformation Strategies",
      excerpt: "How businesses can successfully navigate digital transformation in today's competitive landscape.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&h=400",
      category: "Business",
      createdAt: new Date("2024-01-10")
    },
    {
      id: "3",
      title: "AI and Machine Learning in Business",
      excerpt: "Practical applications of AI and ML technologies that are revolutionizing business operations.",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&h=400",
      category: "AI/ML",
      createdAt: new Date("2024-01-05")
    }
  ];
  
  const postsToShow = posts && posts.length > 0 ? posts.slice(0, 3) : defaultPosts;
  
  return (
    <section className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Latest Insights</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            STAY AHEAD WITH
            <span className="gradient-text block">EXPERT INSIGHTS</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, insights, and best practices from our team of experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {postsToShow.map((post, index) => (
            <GlassCard key={post.id} className="overflow-hidden hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-white">{post.category}</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm">{post.createdAt.toLocaleDateString()}</span>
                  <Button variant="ghost" className="text-primary hover:text-accent p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection({ email, setEmail, onSubmit, loading }: { 
  email: string; 
  setEmail: (email: string) => void; 
  onSubmit: (e: React.FormEvent) => void; 
  loading: boolean; 
}) {
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Stay Connected</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            GET EXCLUSIVE
            <span className="gradient-text block">INSIGHTS & UPDATES</span>
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our newsletter to receive the latest industry insights, project updates, and exclusive content delivered directly to your inbox.
          </p>
          
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}

function ContactInformation() {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      details: ["hello@infiniqode.com", "support@infiniqode.com"]
    },
    {
      icon: "fas fa-phone",
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Visit Us",
      details: ["123 Innovation Drive", "Tech District, CA 90210"]
    },
    {
      icon: "fas fa-clock",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By Appointment"]
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            LET'S START YOUR
            <span className="gradient-text block">SUCCESS STORY</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team to discuss your project and discover how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <GlassCard key={index} className="p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${info.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-white/70 text-sm">{detail}</p>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfficeLocations() {
  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Tech District",
      phone: "+1 (555) 123-4567",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&h=400"
    },
    {
      city: "New York",
      address: "456 Business Ave, Manhattan",
      phone: "+1 (555) 987-6543",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&h=400"
    },
    {
      city: "London",
      address: "789 Tech Street, Shoreditch",
      phone: "+44 20 1234 5678",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&h=400"
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Global Presence</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            OFFICES AROUND
            <span className="gradient-text block">THE WORLD</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            With offices in key cities worldwide, we're always close to our clients and ready to provide local support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <GlassCard key={index} className="overflow-hidden hover:scale-105 transition-all duration-500">
              <img src={office.image} alt={office.city} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                    <p className="text-white/70">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-phone text-primary"></i>
                    <p className="text-white/70">{office.phone}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSectionNew({ faqs }: { faqs?: Faq[] }) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  
  const defaultFaqs = [
    {
      id: "1",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      id: "2",
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally. This includes security updates, bug fixes, and feature enhancements."
    },
    {
      id: "3",
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS and Azure. Our team stays current with the latest industry trends and best practices."
    },
    {
      id: "4",
      question: "How do you ensure project quality?",
      answer: "We follow rigorous testing procedures, code reviews, and quality assurance processes. Our team uses industry-standard tools and methodologies to ensure the highest quality deliverables."
    }
  ];
  
  const faqsToShow = faqs && faqs.length > 0 ? faqs.slice(0, 4) : defaultFaqs;
  
  return (
    <section className="py-20 lg:py-32 navy-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">FAQ</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            FREQUENTLY ASKED
            <span className="gradient-text block">QUESTIONS</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and approach.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqsToShow.map((faq) => (
            <GlassCard key={faq.id} className="p-6">
              <button
                className="w-full text-left flex items-center justify-between"
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
              >
                <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                <i className={`fas fa-chevron-down text-primary transition-transform duration-300 ${expandedFaq === faq.id ? 'rotate-180' : ''}`}></i>
              </button>
              {expandedFaq === faq.id && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsRecognition() {
  const awards = [
    {
      title: "Best Digital Agency 2024",
      organization: "Tech Excellence Awards",
      year: "2024",
      icon: "fas fa-trophy"
    },
    {
      title: "Innovation in Web Development",
      organization: "Digital Innovation Summit",
      year: "2023",
      icon: "fas fa-medal"
    },
    {
      title: "Top 10 Development Companies",
      organization: "Industry Leaders Magazine",
      year: "2023",
      icon: "fas fa-award"
    },
    {
      title: "Excellence in Client Service",
      organization: "Business Excellence Council",
      year: "2022",
      icon: "fas fa-star"
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Recognition</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            INDUSTRY
            <span className="gradient-text block">RECOGNITION</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized by leading industry organizations and publications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <GlassCard key={index} className="p-8 text-center hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${award.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-primary font-bold text-lg mb-2">{award.year}</div>
              <h3 className="text-white font-bold mb-3">{award.title}</h3>
              <p className="text-white/60 text-sm">{award.organization}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className="py-20 lg:py-32 navy-bg relative overflow-hidden">
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <Particles count={30} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Ready to Get Started?</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            LET'S BUILD SOMETHING
            <span className="gradient-text block">EXTRAORDINARY TOGETHER</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 mb-8 leading-relaxed">
            Ready to transform your business with cutting-edge digital solutions? Our team is here to turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 text-lg">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="text-white/50 text-sm">
            <p>✓ Free consultation  ✓ Custom solutions  ✓ Expert team  ✓ Proven results</p>
          </div>
        </div>
      </div>
    </section>
  );
}