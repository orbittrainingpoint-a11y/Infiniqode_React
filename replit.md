# INFINIQODE - Digital Agency Platform

## Overview

INFINIQODE is a modern digital agency website built with React and TypeScript on the frontend, Node.js/Express on the backend, and PostgreSQL for data storage. The application showcases digital services, portfolio projects, team members, and provides contact functionality. It features a glassmorphism design aesthetic with dark theme, purple accent colors, and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom glassmorphism components and dark theme
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe forms
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Database ORM**: Drizzle ORM for type-safe database interactions
- **API Design**: RESTful API architecture with structured error handling
- **Middleware**: Custom logging, JSON parsing, and CORS handling
- **Development**: Hot reload with Vite integration for seamless full-stack development

### Database Architecture
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Design**: Normalized relational schema with tables for:
  - Users (authentication and roles)
  - Services (digital agency offerings)
  - Projects (portfolio items)
  - Team Members (staff profiles)
  - Testimonials (client feedback)
  - FAQs (frequently asked questions)
  - Blog Posts (content management)
  - Contacts (inquiry forms)
  - Newsletter (email subscriptions)
  - Pricing Plans (service tiers)
- **Migration Management**: Drizzle Kit for schema migrations and database management

### Design System
- **Theme**: Dark mode with glassmorphism effects
- **Colors**: Black background, white text, purple accents (#A37CF0)
- **Typography**: Inter font family for modern, readable text
- **Components**: Reusable glass card components with blur effects and transparency
- **Responsive**: Mobile-first design with Tailwind CSS responsive utilities

### Data Flow
- **Client-Server Communication**: RESTful API endpoints with JSON responses
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Caching**: React Query for client-side caching and background updates
- **Form Validation**: Client-side validation with Zod schemas shared between frontend and backend

### Development Workflow
- **Monorepo Structure**: Shared schema definitions between client and server
- **Type Safety**: End-to-end TypeScript with shared types and validation schemas
- **Hot Reload**: Vite development server with backend integration
- **Build Process**: Separate client and server builds with optimized production outputs

## External Dependencies

### Database Services
- **PostgreSQL**: Primary database using Neon Database serverless platform
- **Connection**: `@neondatabase/serverless` for optimized serverless connections
- **Session Storage**: `connect-pg-simple` for PostgreSQL session management

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Icons**: Lucide React for modern icon set
- **Animations**: Embla Carousel for responsive carousel components
- **Styling**: PostCSS and Autoprefixer for CSS processing

### Development Tools
- **Build Tools**: Vite with React plugin and runtime error overlay
- **Code Quality**: TypeScript for static type checking
- **Development**: tsx for TypeScript execution and hot reload
- **Replit Integration**: Vite plugin for Replit development environment

### Form and Validation
- **Form Management**: React Hook Form with Hookform Resolvers
- **Schema Validation**: Zod for runtime type checking and validation
- **Date Handling**: date-fns for date manipulation and formatting

### Utility Libraries
- **Class Management**: clsx and class-variance-authority for conditional classes
- **Styling Utilities**: Tailwind Merge for class deduplication
- **Command Interface**: cmdk for command palette functionality