import { 
  type User, type InsertUser,
  type Service, type InsertService,
  type Project, type InsertProject,
  type TeamMember, type InsertTeamMember,
  type Testimonial, type InsertTestimonial,
  type Faq, type InsertFaq,
  type BlogPost, type InsertBlogPost,
  type Contact, type InsertContact,
  type Newsletter, type InsertNewsletter,
  type PricingPlan, type InsertPricingPlan
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Services
  getServices(): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: string, service: Partial<Service>): Promise<Service | undefined>;
  deleteService(id: string): Promise<boolean>;

  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<Project>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<boolean>;

  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: string): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  updateTeamMember(id: string, member: Partial<TeamMember>): Promise<TeamMember | undefined>;
  deleteTeamMember(id: string): Promise<boolean>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: string): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: string, testimonial: Partial<Testimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: string): Promise<boolean>;

  // FAQs
  getFaqs(): Promise<Faq[]>;
  getFaq(id: string): Promise<Faq | undefined>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  updateFaq(id: string, faq: Partial<Faq>): Promise<Faq | undefined>;
  deleteFaq(id: string): Promise<boolean>;

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<BlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  getContact(id: string): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  markContactAsRead(id: string): Promise<boolean>;

  // Newsletter
  getNewsletterSubscribers(): Promise<Newsletter[]>;
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<Newsletter>;
  unsubscribeNewsletter(email: string): Promise<boolean>;

  // Pricing Plans
  getPricingPlans(): Promise<PricingPlan[]>;
  getPricingPlan(id: string): Promise<PricingPlan | undefined>;
  createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan>;
  updatePricingPlan(id: string, plan: Partial<PricingPlan>): Promise<PricingPlan | undefined>;
  deletePricingPlan(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private services: Map<string, Service> = new Map();
  private projects: Map<string, Project> = new Map();
  private teamMembers: Map<string, TeamMember> = new Map();
  private testimonials: Map<string, Testimonial> = new Map();
  private faqs: Map<string, Faq> = new Map();
  private blogPosts: Map<string, BlogPost> = new Map();
  private contacts: Map<string, Contact> = new Map();
  private newsletters: Map<string, Newsletter> = new Map();
  private pricingPlans: Map<string, PricingPlan> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed initial data for demonstration
    const service1: Service = {
      id: randomUUID(),
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",
      icon: "fas fa-code",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"],
      price: 5000,
      isActive: true,
      createdAt: new Date(),
    };

    const service2: Service = {
      id: randomUUID(),
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive qualified traffic.",
      icon: "fas fa-bullhorn",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
      price: 2500,
      isActive: true,
      createdAt: new Date(),
    };

    const service3: Service = {
      id: randomUUID(),
      title: "SAAS Applications",
      description: "Scalable software-as-a-service solutions designed to streamline your business operations.",
      icon: "fas fa-cloud",
      features: ["Cloud Infrastructure", "API Development", "User Management", "Analytics Dashboard"],
      price: 8000,
      isActive: true,
      createdAt: new Date(),
    };

    const service4: Service = {
      id: randomUUID(),
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and customer analytics.",
      icon: "fas fa-shopping-cart",
      features: ["Payment Gateway", "Inventory Management", "Customer Portal", "Order Tracking"],
      price: 6000,
      isActive: true,
      createdAt: new Date(),
    };

    [service1, service2, service3, service4].forEach(service => {
      this.services.set(service.id, service);
    });

    // Seed pricing plans
    const basicPlan: PricingPlan = {
      id: randomUUID(),
      name: "Basic Plan",
      price: 3199,
      period: "month",
      features: ["Basic web development", "SEO optimization", "3 months support", "Mobile responsive"],
      isPopular: false,
      isActive: true,
      createdAt: new Date(),
    };

    const standardPlan: PricingPlan = {
      id: randomUUID(),
      name: "Standard Plan",
      price: 7699,
      period: "month",
      features: ["Advanced web development", "Digital marketing", "SEO optimization", "6 months support", "Analytics dashboard", "Social media integration"],
      isPopular: true,
      isActive: true,
      createdAt: new Date(),
    };

    const premiumPlan: PricingPlan = {
      id: randomUUID(),
      name: "Premium Plan",
      price: 4699,
      period: "month",
      features: ["Full-stack development", "E-commerce integration", "Custom features", "12 months support"],
      isPopular: false,
      isActive: true,
      createdAt: new Date(),
    };

    [basicPlan, standardPlan, premiumPlan].forEach(plan => {
      this.pricingPlans.set(plan.id, plan);
    });

    // Seed testimonials
    const testimonial1: Testimonial = {
      id: randomUUID(),
      clientName: "HARRY LEE",
      clientPosition: "Co-Founder",
      clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
      content: "INFINIQODE transformed our digital presence completely. Their expertise in web development and digital marketing delivered exceptional results beyond our expectations.",
      rating: 5,
      isActive: true,
      createdAt: new Date(),
    };

    const testimonial2: Testimonial = {
      id: randomUUID(),
      clientName: "SARAH JOHNSON",
      clientPosition: "Marketing Director",
      clientImage: "https://images.unsplash.com/photo-1494790108755-2616b612b27c?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
      content: "The team at INFINIQODE delivered our e-commerce platform on time and within budget. Their attention to detail and professional approach impressed our entire team.",
      rating: 5,
      isActive: true,
      createdAt: new Date(),
    };

    const testimonial3: Testimonial = {
      id: randomUUID(),
      clientName: "DANIEL LEO",
      clientPosition: "CEO",
      clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
      content: "Working with INFINIQODE was a game-changer for our startup. Their SAAS development expertise helped us launch our product successfully in the market.",
      rating: 5,
      isActive: true,
      createdAt: new Date(),
    };

    [testimonial1, testimonial2, testimonial3].forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });

    // Seed FAQs
    const faq1: Faq = {
      id: randomUUID(),
      question: "What services does INFINIQODE offer?",
      answer: "We offer comprehensive digital solutions including web development, digital marketing, SAAS applications, and e-commerce development. Our team specializes in creating custom solutions tailored to your business needs.",
      category: "services",
      order: 1,
      isActive: true,
      createdAt: new Date(),
    };

    const faq2: Faq = {
      id: randomUUID(),
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary depending on complexity and scope. A basic website typically takes 2-4 weeks, while complex SAAS applications can take 3-6 months. We provide detailed timelines during the initial consultation.",
      category: "timeline",
      order: 2,
      isActive: true,
      createdAt: new Date(),
    };

    const faq3: Faq = {
      id: randomUUID(),
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. All our projects include initial support, and we provide extended maintenance plans to ensure your digital solutions continue performing optimally.",
      category: "support",
      order: 3,
      isActive: true,
      createdAt: new Date(),
    };

    const faq4: Faq = {
      id: randomUUID(),
      question: "What technologies do you work with?",
      answer: "We work with cutting-edge technologies including React, Node.js, Python, PostgreSQL, AWS, and modern frameworks. Our tech stack is chosen based on project requirements and best practices.",
      category: "technology",
      order: 4,
      isActive: true,
      createdAt: new Date(),
    };

    [faq1, faq2, faq3, faq4].forEach(faq => {
      this.faqs.set(faq.id, faq);
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id, 
      role: insertUser.role || 'user',
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values()).filter(service => service.isActive);
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { 
      ...insertService, 
      id, 
      isActive: insertService.isActive ?? true,
      createdAt: new Date() 
    };
    this.services.set(id, service);
    return service;
  }

  async updateService(id: string, updates: Partial<Service>): Promise<Service | undefined> {
    const service = this.services.get(id);
    if (!service) return undefined;
    
    const updatedService = { ...service, ...updates };
    this.services.set(id, updatedService);
    return updatedService;
  }

  async deleteService(id: string): Promise<boolean> {
    return this.services.delete(id);
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(project => project.isActive);
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { 
      ...insertProject, 
      id, 
      isActive: insertProject.isActive ?? true,
      createdAt: new Date() 
    };
    this.projects.set(id, project);
    return project;
  }

  async updateProject(id: string, updates: Partial<Project>): Promise<Project | undefined> {
    const project = this.projects.get(id);
    if (!project) return undefined;
    
    const updatedProject = { ...project, ...updates };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async deleteProject(id: string): Promise<boolean> {
    return this.projects.delete(id);
  }

  // Team Member methods
  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).filter(member => member.isActive);
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { ...insertMember, id, createdAt: new Date() };
    this.teamMembers.set(id, member);
    return member;
  }

  async updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<TeamMember | undefined> {
    const member = this.teamMembers.get(id);
    if (!member) return undefined;
    
    const updatedMember = { ...member, ...updates };
    this.teamMembers.set(id, updatedMember);
    return updatedMember;
  }

  async deleteTeamMember(id: string): Promise<boolean> {
    return this.teamMembers.delete(id);
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.isActive);
  }

  async getTestimonial(id: string): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id, createdAt: new Date() };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<Testimonial | undefined> {
    const testimonial = this.testimonials.get(id);
    if (!testimonial) return undefined;
    
    const updatedTestimonial = { ...testimonial, ...updates };
    this.testimonials.set(id, updatedTestimonial);
    return updatedTestimonial;
  }

  async deleteTestimonial(id: string): Promise<boolean> {
    return this.testimonials.delete(id);
  }

  // FAQ methods
  async getFaqs(): Promise<Faq[]> {
    return Array.from(this.faqs.values()).filter(faq => faq.isActive).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getFaq(id: string): Promise<Faq | undefined> {
    return this.faqs.get(id);
  }

  async createFaq(insertFaq: InsertFaq): Promise<Faq> {
    const id = randomUUID();
    const faq: Faq = { ...insertFaq, id, createdAt: new Date() };
    this.faqs.set(id, faq);
    return faq;
  }

  async updateFaq(id: string, updates: Partial<Faq>): Promise<Faq | undefined> {
    const faq = this.faqs.get(id);
    if (!faq) return undefined;
    
    const updatedFaq = { ...faq, ...updates };
    this.faqs.set(id, updatedFaq);
    return updatedFaq;
  }

  async deleteFaq(id: string): Promise<boolean> {
    return this.faqs.delete(id);
  }

  // Blog Post methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(post => post.isPublished).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { ...insertPost, id, createdAt: new Date() };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    
    const updatedPost = { ...post, ...updates };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getContact(id: string): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { ...insertContact, id, createdAt: new Date() };
    this.contacts.set(id, contact);
    return contact;
  }

  async markContactAsRead(id: string): Promise<boolean> {
    const contact = this.contacts.get(id);
    if (!contact) return false;
    
    const updatedContact = { ...contact, isRead: true };
    this.contacts.set(id, updatedContact);
    return true;
  }

  // Newsletter methods
  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values()).filter(newsletter => newsletter.isActive);
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const existing = Array.from(this.newsletters.values()).find(n => n.email === insertNewsletter.email);
    if (existing) {
      if (existing.isActive) {
        throw new Error("Email already subscribed");
      } else {
        // Reactivate subscription
        const updated = { ...existing, isActive: true };
        this.newsletters.set(existing.id, updated);
        return updated;
      }
    }
    
    const id = randomUUID();
    const newsletter: Newsletter = { ...insertNewsletter, id, createdAt: new Date() };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async unsubscribeNewsletter(email: string): Promise<boolean> {
    const newsletter = Array.from(this.newsletters.values()).find(n => n.email === email);
    if (!newsletter) return false;
    
    const updated = { ...newsletter, isActive: false };
    this.newsletters.set(newsletter.id, updated);
    return true;
  }

  // Pricing Plan methods
  async getPricingPlans(): Promise<PricingPlan[]> {
    return Array.from(this.pricingPlans.values()).filter(plan => plan.isActive);
  }

  async getPricingPlan(id: string): Promise<PricingPlan | undefined> {
    return this.pricingPlans.get(id);
  }

  async createPricingPlan(insertPlan: InsertPricingPlan): Promise<PricingPlan> {
    const id = randomUUID();
    const plan: PricingPlan = { ...insertPlan, id, createdAt: new Date() };
    this.pricingPlans.set(id, plan);
    return plan;
  }

  async updatePricingPlan(id: string, updates: Partial<PricingPlan>): Promise<PricingPlan | undefined> {
    const plan = this.pricingPlans.get(id);
    if (!plan) return undefined;
    
    const updatedPlan = { ...plan, ...updates };
    this.pricingPlans.set(id, updatedPlan);
    return updatedPlan;
  }

  async deletePricingPlan(id: string): Promise<boolean> {
    return this.pricingPlans.delete(id);
  }
}

export const storage = new MemStorage();
