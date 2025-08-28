import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import GlassCard from "@/components/glass-card";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Our Testimonials</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              HEAR IT FROM THOSE WHO<br />
              KNOW US BEST.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-4 h-4 bg-muted rounded"></div>
                    ))}
                  </div>
                </div>
                <div className="h-20 bg-muted rounded mb-6"></div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-muted rounded-full"></div>
                  <div>
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded"></div>
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Our Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            HEAR IT FROM THOSE WHO<br />
            KNOW US BEST.
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <GlassCard 
              key={testimonial.id}
              className="p-8 hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <i 
                      key={index}
                      className={`fas fa-star ${
                        index < testimonial.rating ? 'text-primary' : 'text-muted'
                      }`}
                    ></i>
                  ))}
                </div>
                <span className="text-muted-foreground text-sm ml-2">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
              
              <div className="text-6xl text-primary mb-4">"</div>
              
              <blockquote className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {testimonial.content}
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.clientImage} 
                  alt={`${testimonial.clientName} testimonial`}
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid={`testimonial-image-${testimonial.id}`}
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.clientName}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.clientPosition}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
