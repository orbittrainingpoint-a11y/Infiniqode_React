import { useQuery } from "@tanstack/react-query";
import { type PricingPlan } from "@shared/schema";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PricingSection() {
  const { data: plans, isLoading } = useQuery<PricingPlan[]>({
    queryKey: ["/api/pricing"],
  });

  if (isLoading) {
    return (
      <section className="py-20 navy-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Essential Services</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              SMART PRICING FOR<br />
              SMART CHOICES.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 animate-pulse">
                <div className="h-6 bg-muted rounded mb-4"></div>
                <div className="h-12 bg-muted rounded mb-6"></div>
                <div className="space-y-3 mb-8">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-muted rounded"></div>
                  ))}
                </div>
                <div className="h-12 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 navy-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Essential Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            SMART PRICING FOR<br />
            SMART CHOICES.
          </h2>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans?.map((plan, index) => (
            <GlassCard 
              key={plan.id}
              className={`p-8 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 ${
                plan.isPopular ? 'border-2 border-primary relative' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                    Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-2">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-white">
                    ${(plan.price / 100).toFixed(0)}
                  </span>
                  <span className="text-muted-foreground text-sm">/ {plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Perfect for {plan.name.toLowerCase().includes('basic') ? 'small businesses starting their digital journey' : 
                    plan.name.toLowerCase().includes('standard') ? 'growing companies with established needs' : 
                    'enterprises requiring comprehensive solutions'}.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <i className="fas fa-check text-primary"></i>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                )) || []}
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                data-testid={`button-choose-plan-${plan.id}`}
              >
                Choose Plan
              </Button>
              
              <p className="text-muted-foreground text-xs text-center mt-4">
                *Advanced management with custom solution for your business and other benefits as included above.
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
