import { useQuery } from "@tanstack/react-query";
import { type Service } from "@shared/schema";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Featured Services</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              BOOST YOUR WEBSITE TRAFFIC!
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Loading our comprehensive digital solutions...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 animate-pulse">
                <div className="w-16 h-16 bg-muted rounded-lg mb-6"></div>
                <div className="h-6 bg-muted rounded mb-4"></div>
                <div className="h-16 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Featured Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            BOOST YOUR WEBSITE TRAFFIC!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform your digital presence with our comprehensive suite of services designed to drive growth, engagement, and sustainable success for your business.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services?.map((service, index) => (
            <GlassCard 
              key={service.id}
              className="p-8 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title.toUpperCase()}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-all-services"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
