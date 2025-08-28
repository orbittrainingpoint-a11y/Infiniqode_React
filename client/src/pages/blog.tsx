import { useQuery } from "@tanstack/react-query";
import { type BlogPost } from "@shared/schema";
import GlassCard from "@/components/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  // Demo blog posts since we don't have actual blog data
  const demoPosts = [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2025",
      slug: "future-web-development-trends-2025",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced performance optimization.",
      content: "",
      imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Web Development",
      tags: ["React", "AI", "Performance"],
      isPublished: true,
      createdAt: new Date("2024-12-15"),
    },
    {
      id: "2",
      title: "Digital Marketing Strategies That Actually Work",
      slug: "digital-marketing-strategies-that-work",
      excerpt: "Discover proven digital marketing strategies that drive real results for businesses in today's competitive landscape.",
      content: "",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Digital Marketing",
      tags: ["SEO", "Social Media", "Analytics"],
      isPublished: true,
      createdAt: new Date("2024-12-10"),
    },
    {
      id: "3",
      title: "Building Scalable SaaS Applications: A Complete Guide",
      slug: "building-scalable-saas-applications",
      excerpt: "Learn how to build SaaS applications that can scale from zero to millions of users with proper architecture and best practices.",
      content: "",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "SaaS",
      tags: ["Architecture", "Scaling", "Cloud"],
      isPublished: true,
      createdAt: new Date("2024-12-05"),
    },
    {
      id: "4",
      title: "E-commerce UX: Converting Visitors into Customers",
      slug: "ecommerce-ux-converting-visitors",
      excerpt: "Master the art of e-commerce user experience design to maximize conversions and customer satisfaction.",
      content: "",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "E-commerce",
      tags: ["UX Design", "Conversion", "User Research"],
      isPublished: true,
      createdAt: new Date("2024-11-28"),
    },
    {
      id: "5",
      title: "The Rise of AI in Digital Agencies",
      slug: "ai-in-digital-agencies",
      excerpt: "How artificial intelligence is transforming the way digital agencies work and deliver value to their clients.",
      content: "",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "AI & Technology",
      tags: ["Artificial Intelligence", "Automation", "Future"],
      isPublished: true,
      createdAt: new Date("2024-11-20"),
    },
    {
      id: "6",
      title: "Mobile-First Design: Why It Matters More Than Ever",
      slug: "mobile-first-design-importance",
      excerpt: "Understanding the critical importance of mobile-first design in today's mobile-dominated digital landscape.",
      content: "",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Design",
      tags: ["Mobile Design", "Responsive", "UX"],
      isPublished: true,
      createdAt: new Date("2024-11-15"),
    },
  ];

  const postsToDisplay = posts && posts.length > 0 ? posts : demoPosts;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Loading our latest insights and articles...
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

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in digital technology, design, and business growth.
          </p>
        </div>

        {/* Featured Post */}
        {postsToDisplay.length > 0 && (
          <div className="mb-16">
            <GlassCard className="overflow-hidden hover:bg-white/5 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <img 
                  src={postsToDisplay[0].imageUrl} 
                  alt={postsToDisplay[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="border-primary text-primary bg-primary/10 w-fit mb-4">
                    Featured
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {postsToDisplay[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {postsToDisplay[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="secondary">{postsToDisplay[0].category}</Badge>
                    <span className="text-muted-foreground text-sm">
                      {postsToDisplay[0].createdAt.toLocaleDateString()}
                    </span>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 w-fit"
                    data-testid={`button-read-${postsToDisplay[0].id}`}
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {postsToDisplay.slice(1).map((post) => (
            <GlassCard key={post.id} className="overflow-hidden hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-primary text-primary bg-primary/10">
                    {post.category}
                  </Badge>
                  <span className="text-muted-foreground text-xs">
                    {post.createdAt.toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  data-testid={`button-read-${post.id}`}
                >
                  Read More
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center glass-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest insights, industry trends, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              data-testid="input-newsletter-email"
            />
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              data-testid="button-subscribe-newsletter"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
