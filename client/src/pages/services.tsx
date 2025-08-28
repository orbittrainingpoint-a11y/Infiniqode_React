import { useQuery } from "@tanstack/react-query";
import { type Service } from "@shared/schema";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Loading our comprehensive digital solutions...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 animate-pulse">
                <div className="w-16 h-16 bg-muted rounded-lg mb-6"></div>
                <div className="h-6 bg-muted rounded mb-4"></div>
                <div className="h-20 bg-muted rounded mb-6"></div>
                <div className="h-10 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth through cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services?.map((service) => (
            <GlassCard key={service.id} className="p-8 hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <i className="fas fa-check text-primary mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.price && (
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white">
                    ${(service.price / 100).toFixed(0)}
                    <span className="text-sm text-muted-foreground font-normal ml-1">
                      starting from
                    </span>
                  </div>
                </div>
              )}

              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                data-testid={`button-learn-more-${service.id}`}
              >
                Learn More
              </Button>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how our services can help you achieve your digital goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                data-testid="button-view-portfolio"
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
