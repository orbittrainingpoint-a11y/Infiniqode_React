import { useQuery } from "@tanstack/react-query";
import { type Faq } from "@shared/schema";
import { useState } from "react";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";

export default function FaqSection() {
  const { data: faqs, isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  if (isLoading) {
    return (
      <section className="py-20 navy-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Our FAQs</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              FROM CURIOUS TO<br />
              CONFIDENT IN SECONDS.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card rounded-xl p-6 animate-pulse">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-muted rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-16 bg-muted rounded"></div>
                  </div>
                </div>
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
          <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Our FAQs</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            FROM CURIOUS TO<br />
            CONFIDENT IN SECONDS.
          </h2>
          <Button 
            variant="outline"
            className="glass-card px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 mx-auto border-white/20"
            data-testid="button-learn-more-faq"
          >
            <span>Learn More</span>
            <i className="fas fa-arrow-right"></i>
          </Button>
        </div>
        
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs?.map((faq, index) => (
            <GlassCard 
              key={faq.id}
              className="p-6 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-sm leading-tight pr-4">
                      {faq.question}
                    </h3>
                    <i 
                      className={`fas ${expandedFaq === faq.id ? 'fa-minus' : 'fa-plus'} text-primary transition-transform duration-300`}
                      data-testid={`faq-toggle-${faq.id}`}
                    ></i>
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                      {faq.answer}
                    </p>
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
