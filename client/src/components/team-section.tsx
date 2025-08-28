import { useQuery } from "@tanstack/react-query";
import { type BlogPost } from "@shared/schema";
import { Link } from "wouter";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TeamSection() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  // Demo blog posts for the team section
  const demoPosts = [
    {
      id: "1",
      title: "RIGHT SEO AGENCY",
      excerpt: "Discover how choosing the right SEO agency can transform your digital presence and drive sustainable organic growth for your business.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "FINANCE",
      tag: "UNCATEGORIZED",
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "COMMERCE SEO PARTNERS",
      excerpt: "Learn about strategic partnerships in e-commerce SEO and how collaboration drives better results for online businesses.",
      imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "FINANCE",
      tag: "UNCATEGORIZED",
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "DIGITAL SEO PARTNERS",
      excerpt: "Explore the world of digital SEO partnerships and discover how working with the right partners can accelerate your growth.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "FINANCE", 
      tag: "UNCATEGORIZED",
      createdAt: new Date(),
    },
  ];

  const postsToDisplay = posts && posts.length > 0 ? posts.slice(0, 3) : demoPosts;

  if (isLoading) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Our Article</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              WHERE KNOWLEDGE<br />
              MEETS INSPIRATION.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-muted"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-muted rounded-full"></div>
                    <div className="h-3 bg-muted rounded w-16"></div>
                  </div>
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-wide">Our Article</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            WHERE KNOWLEDGE<br />
            MEETS INSPIRATION.
          </h2>
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {postsToDisplay.map((post, index) => (
            <GlassCard 
              key={post.id}
              className="overflow-hidden hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-64 object-cover"
                data-testid={`article-image-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-rocket text-white text-xs"></i>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary bg-primary/10 text-xs">
                    {post.category || 'FINANCE'}
                  </Badge>
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                    <i className="fas fa-bookmark text-white text-xs"></i>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    UNCATEGORIZED
                  </Badge>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-3">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button 
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm"
                  data-testid={`button-learn-more-${post.id}`}
                >
                  Learn more
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Bottom Text Animation */}
        <div className="text-center">
          <div className="text-6xl lg:text-8xl font-bold text-white/5 tracking-wider">
            EXECUTION · SUCCESS · STRATEGY
          </div>
        </div>
      </div>
    </section>
  );
}
