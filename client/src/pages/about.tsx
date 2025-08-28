import { useQuery } from "@tanstack/react-query";
import { type TeamMember } from "@shared/schema";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  // Demo team data since we don't have actual team members
  const demoTeam = [
    {
      id: "1",
      name: "EZRA MICHAEL",
      position: "CEO & Founder",
      bio: "Visionary leader with over 10 years of experience in digital transformation and technology innovation. Passionate about creating solutions that drive business success.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "2",
      name: "SARAH JOHNSON",
      position: "CTO",
      bio: "Technical architect with expertise in scalable systems and modern development practices. Leads our engineering team with a focus on innovation and quality.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b27c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "3",
      name: "MICHAEL RODRIGUEZ",
      position: "Head of Design",
      bio: "Creative director specializing in user experience and interface design. Transforms complex ideas into intuitive and beautiful digital experiences.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      },
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "4",
      name: "EMILY CHEN",
      position: "Marketing Director",
      bio: "Digital marketing strategist with a data-driven approach to growth. Specializes in building brands and driving customer acquisition through innovative campaigns.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      },
      isActive: true,
      createdAt: new Date(),
    },
  ];

  const teamToDisplay = teamMembers && teamMembers.length > 0 ? teamMembers : demoTeam;

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">INFINIQODE</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            We are a leading digital agency dedicated to transforming businesses through innovative technology solutions. Our team combines creativity, technical expertise, and strategic thinking to deliver exceptional results.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <GlassCard className="p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-rocket text-white text-2xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation. We believe in creating technology that not only meets today's needs but anticipates tomorrow's opportunities.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the world's most trusted partner for digital transformation, known for our innovative approach, exceptional quality, and unwavering commitment to client success.
            </p>
          </GlassCard>
        </div>

        {/* Stats Section */}
        <div className="navy-bg rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">18K+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">13K+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.9</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">8+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in technology, design, and business strategy to deliver exceptional results.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                  <div className="w-full h-64 bg-muted"></div>
                  <div className="p-6">
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded mb-4"></div>
                    <div className="h-16 bg-muted rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamToDisplay.map((member) => (
                <GlassCard key={member.id} className="overflow-hidden hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold mb-4">{member.position}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    {member.socialLinks && (
                      <div className="flex space-x-3">
                        {member.socialLinks.linkedin && (
                          <a 
                            href={member.socialLinks.linkedin} 
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            data-testid={`link-linkedin-${member.id}`}
                          >
                            <i className="fab fa-linkedin"></i>
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a 
                            href={member.socialLinks.twitter} 
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            data-testid={`link-twitter-${member.id}`}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a 
                            href={member.socialLinks.github} 
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            data-testid={`link-github-${member.id}`}
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with our clients as partners, ensuring transparent communication and shared success.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-gem text-white text-2xl"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We maintain the highest standards in everything we do, from code quality to customer service.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join the hundreds of businesses that trust INFINIQODE for their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                data-testid="button-view-work"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
