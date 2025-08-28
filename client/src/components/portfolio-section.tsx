import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import { Link } from "wouter";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSection() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  // Demo projects for display
  const demoProjects = [
    {
      id: "1",
      title: "ADMIN MANAGEMENT",
      description: "Comprehensive administrative management system with advanced user controls, analytics dashboard, and workflow automation.",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "TEAM COLLABORATION",
      icon: "fas fa-users",
      technologies: ["React", "Node.js", "PostgreSQL"],
      clientName: "Enterprise Corp",
    },
    {
      id: "2", 
      title: "CLIENT COMMUNICATION",
      description: "Advanced client communication platform with real-time messaging, project tracking, and collaborative tools for seamless interaction.",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "STRATEGY CONSULTATION",
      icon: "fas fa-chart-line",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      clientName: "Global Strategies",
    },
    {
      id: "3",
      title: "ADVANCED ANALYTICS",
      description: "Powerful analytics platform with machine learning insights, predictive modeling, and comprehensive data visualization tools.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "SYSTEM OPTIMIZATION",
      icon: "fas fa-cog",
      technologies: ["Python", "TensorFlow", "PostgreSQL"],
      clientName: "Analytics Pro",
    },
  ];

  const projectsToDisplay = projects && projects.length > 0 ? projects.slice(0, 3) : demoProjects;

  if (isLoading) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Featured Services</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              COMPREHENSIVE DIGITAL<br />
              SOLUTIONS. SEAMLESS<br />
              RESULTS.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-4 bg-muted rounded mb-3"></div>
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="h-16 bg-muted rounded mb-4"></div>
                  <div className="h-10 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Featured Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            COMPREHENSIVE DIGITAL<br />
            SOLUTIONS. SEAMLESS<br />
            RESULTS.
          </h2>
          <Link href="/projects">
            <Button 
              variant="outline"
              className="glass-card px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 mx-auto border-white/20"
              data-testid="button-learn-more-portfolio"
            >
              <span>Learn More</span>
              <i className="fas fa-arrow-right"></i>
            </Button>
          </Link>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsToDisplay.map((project, index) => (
            <GlassCard 
              key={project.id}
              className="overflow-hidden hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <i className={`${(project as any).icon || 'fas fa-code'} text-white text-xs`}></i>
                  </div>
                  <span className="text-primary text-sm font-semibold">{project.category}</span>
                </div>
                <h3 className="text-white font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <Button 
                  variant="ghost"
                  className="text-primary font-semibold text-sm hover:text-white transition-colors duration-300 p-0 h-auto"
                  data-testid={`button-learn-more-${project.id}`}
                >
                  <span>Learn more</span>
                  <i className="fas fa-arrow-right text-xs ml-1"></i>
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
