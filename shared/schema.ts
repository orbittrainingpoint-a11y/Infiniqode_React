import { pgTable, serial, text, timestamp, integer, boolean, jsonb } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Services table
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  icon: text('icon').notNull(),
  category: text('category').notNull(), // 'web-development', 'digital-marketing', 'saas', 'ecommerce'
  features: jsonb('features').$type<string[]>().default([]),
  price: text('price'),
  popular: boolean('popular').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Projects/Portfolio table
export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  category: text('category').notNull(),
  technologies: jsonb('technologies').$type<string[]>().default([]),
  clientName: text('client_name'),
  projectUrl: text('project_url'),
  featured: boolean('featured').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Team members table
export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  position: text('position').notNull(),
  bio: text('bio').notNull(),
  image: text('image').notNull(),
  skills: jsonb('skills').$type<string[]>().default([]),
  socialLinks: jsonb('social_links').$type<{
    linkedin?: string;
    twitter?: string;
    github?: string;
  }>().default({}),
  createdAt: timestamp('created_at').defaultNow(),
});

// Blog posts table
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  image: text('image').notNull(),
  category: text('category').notNull(),
  tags: jsonb('tags').$type<string[]>().default([]),
  author: text('author').notNull(),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Testimonials table
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  clientName: text('client_name').notNull(),
  clientPosition: text('client_position').notNull(),
  clientCompany: text('client_company').notNull(),
  content: text('content').notNull(),
  rating: integer('rating').notNull(),
  image: text('image'),
  projectId: integer('project_id').references(() => projects.id),
  featured: boolean('featured').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Contact submissions table
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  service: text('service').notNull(),
  budget: text('budget'),
  timeline: text('timeline'),
  message: text('message').notNull(),
  status: text('status').default('new'), // 'new', 'in-progress', 'completed'
  createdAt: timestamp('created_at').defaultNow(),
});

// FAQ table
export const faqs = pgTable('faqs', {
  id: serial('id').primaryKey(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  category: text('category').notNull(),
  order: integer('order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// Insert schemas
export const insertServiceSchema = createInsertSchema(services).omit({ id: true, createdAt: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true, createdAt: true });
export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({ id: true, createdAt: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true, createdAt: true, updatedAt: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true, createdAt: true });
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({ id: true, createdAt: true, status: true });
export const insertFaqSchema = createInsertSchema(faqs).omit({ id: true, createdAt: true });

// Types
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type FAQ = typeof faqs.$inferSelect;
export type InsertFAQ = z.infer<typeof insertFaqSchema>;