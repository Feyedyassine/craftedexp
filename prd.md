# Product Requirements Document (PRD)
## Crafted Experiences Website

### Project Overview

**Project Name:** Crafted Experiences Website  
**Technology Stack:** Next.js 14+ (App Router)  
**Timeline:** 8-12 weeks  
**Target Audience:** Corporate clients (EVENTI) and Leisure travelers  

### Executive Summary

Crafted Experiences is a premium travel and event agency operating under a dual-brand strategy:
- **Umbrella Brand:** Crafted Experiences
- **Corporate Division:** EVENTI by Crafted Experiences
- **Leisure Division:** Crafted Experiences (Travel)

The website will serve both B2B corporate clients and B2C leisure travelers through a unified platform with distinct user experiences.

---

## Business Objectives

### Primary Goals
1. **Lead Generation:** Convert website visitors into qualified leads for both corporate and leisure services
2. **Brand Positioning:** Establish Crafted Experiences as a premium, trustworthy agency
3. **Service Showcase:** Demonstrate expertise through case studies and testimonials
4. **SEO Performance:** Rank for relevant keywords in travel and corporate events sectors

### Success Metrics
- **Corporate:** Lead conversion rate, RFP submissions, corporate client inquiries
- **Leisure:** Travel inquiry forms, consultation bookings, newsletter signups
- **General:** Page load speed <3s, mobile responsiveness, SEO rankings

---

## Target Audience

### Corporate Clients (EVENTI)
- **Decision Makers:** HR directors, marketing managers, CEOs
- **Company Size:** Mid to large enterprises
- **Needs:** ROI-focused, hassle-free execution, professional credibility
- **Pain Points:** Complex event coordination, vendor management, budget optimization

### Leisure Travelers
- **Demographics:** Affluent individuals, couples, families
- **Preferences:** Personalized experiences, authenticity, luxury service
- **Pain Points:** Generic travel packages, lack of local insight, planning complexity

---

## Feature Requirements

### Core Features

#### 1. Dual-Path Homepage
- **Hero Section:** Immersive video/imagery with dual CTAs
- **Brand Philosophy:** Three pillars (Connections, Craftsmanship, Character)
- **Service Preview:** Corporate vs. Leisure quick overview
- **Case Study Carousel:** Rotating success stories
- **Testimonials:** Split corporate/leisure testimonials

#### 2. Corporate Section (EVENTI)
- **Services Grid:** 6 core corporate services
- **Why EVENTI:** Value propositions with icons
- **Case Studies:** Filterable by service type
- **Client Testimonials:** Corporate logos and quotes
- **Contact Form:** Corporate-specific inquiry form

#### 3. Leisure Section
- **Signature Journeys:** 6 journey types with imagery
- **Why Choose Us:** Personalization benefits
- **Featured Destinations:** Grid with location highlights
- **Traveler Stories:** Personal testimonials with photos
- **Contact Form:** Leisure-specific inquiry form

#### 4. About Us
- **Brand Story:** Founder's journey and philosophy
- **Team Section:** Key personnel and partners
- **Global Reach:** Interactive map or network visualization
- **Brand Values:** 8 core promises/commitments

#### 5. Case Studies Hub
- **Filterable Gallery:** Corporate vs. Leisure toggle
- **Detailed Pages:** Individual case study narratives
- **Impact Metrics:** ROI data for corporate, satisfaction for leisure
- **Visual Storytelling:** High-quality imagery and videos

#### 6. Insights Blog
- **Content Categories:** Corporate insights, travel inspiration, news
- **SEO Optimization:** Keyword-rich articles
- **Social Sharing:** LinkedIn (corporate), Instagram (leisure)
- **Newsletter Integration:** Lead capture through valuable content

#### 7. Contact System
- **Dual Forms:** Corporate and leisure inquiry forms
- **WhatsApp Integration:** Quick contact option
- **Contact Information:** Office details, social links
- **Response Automation:** Auto-responders for different inquiry types

### Advanced Features

#### 8. Content Management System
- **Blog Management:** Easy content publishing
- **Case Study Updates:** Regular portfolio additions
- **Image Optimization:** Automatic compression and formatting
- **SEO Tools:** Meta descriptions, alt tags, schema markup

#### 9. Analytics & Tracking
- **Google Analytics 4:** User behavior tracking
- **Conversion Tracking:** Lead form submissions
- **Heat Mapping:** User interaction analysis
- **A/B Testing:** CTA optimization

#### 10. Performance Optimization
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic bundle optimization
- **CDN Integration:** Global content delivery
- **Caching Strategy:** Static and dynamic content caching

---

## Technical Requirements

### Technology Stack

#### Frontend
- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS + CSS Modules
- **Typography:** Google Fonts (Playfair Display, Lato/Montserrat)
- **Icons:** Lucide React or Heroicons
- **Animations:** Framer Motion

#### Backend
- **API Routes:** Next.js API routes
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js (if needed)
- **File Upload:** Cloudinary or AWS S3

#### Deployment
- **Hosting:** Vercel (recommended) or Netlify
- **Domain:** Custom domain with SSL
- **CDN:** Vercel Edge Network or Cloudflare
- **Monitoring:** Vercel Analytics or Sentry

### Performance Requirements
- **Page Load Time:** <3 seconds
- **Core Web Vitals:** All metrics in "Good" range
- **Mobile Performance:** 90+ Lighthouse score
- **SEO Score:** 95+ Lighthouse score

### Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile:** iOS Safari, Chrome Mobile
- **Responsive:** Mobile-first design approach

---

## Design System

### Brand Colors
```css
/* Accent Colors */
--Saffron: #E2A93B

/* Neutral Colors */
--sand: #F5F3EF;        /* Clean background */
--charcoal: #3A3A3A;    /* Text color */
--soft-gray: #E6E6E6;   /* Neutral balance */
```

### Typography
- **Headlines:** Neutra Text 
- **Body Text:** Oswald (sans-serif) - clarity, modernity
- **Hierarchy:** H1 (64px), H2 (48px), H3 (32px), Body (18px)

### Layout Principles
- **Whitespace:** Generous spacing for premium feel
- **Grid System:** 12-column responsive grid
- **Breakpoints:** Mobile (320px), Tablet (768px), Desktop (1024px+)
- **Navigation:** Sticky header with dual-path menu

---

## Content Strategy

### Content Types

#### Corporate Content (EVENTI)
- **Service Descriptions:** ROI-focused, benefit-driven
- **Case Studies:** Measurable outcomes, client logos
- **Testimonials:** Professional quotes with company names
- **Blog Topics:** Industry trends, ROI studies, sustainability

#### Leisure Content
- **Journey Descriptions:** Emotional, storytelling approach
- **Destination Guides:** Cultural insights, hidden gems
- **Traveler Stories:** Personal experiences, authentic moments
- **Blog Topics:** Travel inspiration, cultural guides, luxury insights

### SEO Strategy
- **Primary Keywords:** "corporate event planning," "luxury travel agency," "incentive travel"
- **Long-tail Keywords:** "corporate team building Tunisia," "luxury family vacations"
- **Local SEO:** Tunisia-based services, regional event planning
- **Content Calendar:** 2-3 blog posts per month

---

## Development Phases

### Phase 1: Foundation (Weeks 1-2)
**Deliverable:** Basic Next.js setup with design system

#### Week 1: Project Setup
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS with custom color palette
- [ ] Set up project structure and folder organization
- [ ] Install and configure essential dependencies
- [ ] Set up development environment and Git workflow

#### Week 2: Design System Implementation
- [ ] Create typography components (Headings, Body text)
- [ ] Build color system and theme configuration
- [ ] Implement responsive grid system
- [ ] Create reusable UI components (Buttons, Cards, Icons)
- [ ] Set up component library structure

### Phase 2: Core Pages (Weeks 3-4)
**Deliverable:** Static pages with responsive design

#### Week 3: Homepage Development
- [ ] Build hero section with dual CTAs
- [ ] Implement brand philosophy section
- [ ] Create service preview cards
- [ ] Build case study carousel
- [ ] Add testimonials section

#### Week 4: Corporate & Leisure Pages
- [ ] Develop EVENTI landing page
- [ ] Create leisure journeys page
- [ ] Implement service grids with icons
- [ ] Build "Why Choose Us" sections
- [ ] Add contact forms (static)

### Phase 3: Content & Functionality (Weeks 5-6)
**Deliverable:** Dynamic content and interactive features

#### Week 5: About & Case Studies
- [ ] Build About Us page with founder story
- [ ] Create case studies hub with filtering
- [ ] Implement individual case study pages
- [ ] Add team/partners section
- [ ] Build global reach visualization

#### Week 6: Blog & Contact System
- [ ] Set up blog structure and routing
- [ ] Create blog post templates
- [ ] Implement contact forms with validation
- [ ] Add WhatsApp integration
- [ ] Build newsletter signup functionality

### Phase 4: Optimization & Launch (Weeks 7-8)
**Deliverable:** Production-ready website

#### Week 7: Performance & SEO
- [ ] Optimize images and implement lazy loading
- [ ] Configure SEO meta tags and schema markup
- [ ] Implement analytics tracking
- [ ] Set up sitemap and robots.txt
- [ ] Conduct performance testing

#### Week 8: Testing & Deployment
- [ ] Cross-browser testing and bug fixes
- [ ] Mobile responsiveness verification
- [ ] Content review and copy optimization
- [ ] Deploy to production environment
- [ ] Set up monitoring and backup systems

---

## Quality Assurance

### Testing Strategy
- **Unit Tests:** Component functionality with Jest/React Testing Library
- **Integration Tests:** API routes and database operations
- **E2E Tests:** Critical user journeys with Playwright
- **Performance Tests:** Lighthouse audits and Core Web Vitals
- **Accessibility Tests:** WCAG 2.1 AA compliance

### Browser Testing
- **Desktop:** Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile:** iOS Safari, Chrome Mobile, Samsung Internet
- **Tablet:** iPad, Android tablets
- **Responsive:** Test all breakpoints and orientations

---

## Launch Plan

### Pre-Launch (Week 7)
- [ ] Content review and approval
- [ ] SEO audit and optimization
- [ ] Performance testing and optimization
- [ ] Security scan and vulnerability assessment
- [ ] Backup and recovery procedures

### Launch (Week 8)
- [ ] Domain configuration and SSL setup
- [ ] DNS propagation and CDN configuration
- [ ] Google Analytics and Search Console setup
- [ ] Social media integration testing
- [ ] Final user acceptance testing

### Post-Launch (Week 9+)
- [ ] Monitor performance metrics
- [ ] Track conversion rates and user behavior
- [ ] Gather user feedback and iterate
- [ ] Plan content updates and maintenance
- [ ] Implement ongoing SEO strategy

---

## Maintenance & Updates

### Regular Maintenance
- **Weekly:** Content updates, blog posts, case studies
- **Monthly:** Performance monitoring, security updates
- **Quarterly:** SEO analysis, conversion optimization
- **Annually:** Full security audit, technology updates

### Content Strategy
- **Blog Posts:** 2-3 per month (corporate insights + travel inspiration)
- **Case Studies:** 1-2 new studies per quarter
- **Testimonials:** Collect and update quarterly
- **Portfolio Updates:** Regular addition of new projects

---

## Risk Mitigation

### Technical Risks
- **Performance Issues:** Implement monitoring and optimization
- **Security Vulnerabilities:** Regular updates and security audits
- **Browser Compatibility:** Comprehensive testing across devices
- **SEO Penalties:** Follow best practices and avoid black-hat techniques

### Business Risks
- **Content Delays:** Prepare content templates and workflows
- **Design Changes:** Implement flexible component system
- **Scope Creep:** Maintain clear feature boundaries
- **Timeline Delays:** Build buffer time into each phase

---

## Success Metrics

### Technical KPIs
- **Page Load Speed:** <3 seconds average
- **Core Web Vitals:** All metrics in "Good" range
- **Mobile Performance:** 90+ Lighthouse score
- **Uptime:** 99.9% availability

### Business KPIs
- **Lead Generation:** 50+ qualified leads per month
- **Conversion Rate:** 3-5% visitor to lead conversion
- **SEO Performance:** Top 10 rankings for target keywords
- **User Engagement:** 2+ minutes average session duration

---

## Conclusion

This PRD provides a comprehensive roadmap for developing the Crafted Experiences website using Next.js. The phased approach ensures steady progress with shippable deliverables at each stage, while the dual-brand strategy serves both corporate and leisure audiences effectively.

The focus on performance, SEO, and user experience will position Crafted Experiences as a premium agency in the competitive travel and events market.
