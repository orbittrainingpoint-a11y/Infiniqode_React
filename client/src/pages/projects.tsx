import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen navy-bg pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Loading our portfolio of successful projects...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
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
      </div>
    );
  }

  // Demo projects since we don't have actual project data
  const demoProjects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and customer analytics. Built with modern technologies for optimal performance.",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      clientName: "TechMart Solutions",
      projectUrl: "#",
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "SaaS Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts, data visualization, and automated reporting features.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "SaaS",
      technologies: ["React", "Python", "PostgreSQL", "D3.js"],
      clientName: "DataVision Corp",
      projectUrl: "#",
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "Digital Marketing Platform",
      description: "Comprehensive digital marketing automation platform with campaign management, lead tracking, and performance analytics.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Marketing",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      clientName: "Marketing Pro Agency",
      projectUrl: "#",
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "4",
      title: "Healthcare Management System",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities for modern healthcare providers.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Healthcare",
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      clientName: "HealthCare Plus",
      projectUrl: "#",
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "5",
      title: "Financial Trading Platform",
      description: "Advanced trading platform with real-time market data, portfolio management, and risk analysis tools for financial institutions.",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Finance",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "WebSocket"],
      clientName: "FinTech Solutions",
      projectUrl: "#",
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "6",
      title: "Educational Learning Platform",
      description: "Interactive online learning platform with course management, video streaming, progress tracking, and certification systems.",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Education",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      clientName: "EduTech Academy",
      projectUrl: "#",
      isActive: true,
      createdAt: new Date(),
    },
  ];

  const projectsToDisplay = projects && projects.length > 0 ? projects : demoProjects;

  return (
    <div className="min-h-screen navy-bg pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering innovative digital solutions across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectsToDisplay.map((project) => (
            <GlassCard key={project.id} className="overflow-hidden hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Badge variant="outline" className="border-primary text-primary bg-primary/10">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {project.clientName && (
                  <p className="text-primary text-sm font-semibold mb-4">
                    Client: {project.clientName}
                  </p>
                )}

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  data-testid={`button-view-project-${project.id}`}
                >
                  View Project
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let's collaborate to bring your vision to life. We're here to help you create something extraordinary.
          </p>
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            data-testid="button-start-project"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
