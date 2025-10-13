import { createClient, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { 
  CaseStudyEntry, 
  CaseStudy,
  TestimonialEntry, 
  Testimonial,
  ServiceEntry, 
  Service
} from '@/types/contentful';

// Validate environment variables
if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
  throw new Error('NEXT_PUBLIC_CONTENTFUL_SPACE_ID is not defined');
}

if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN is not defined');
}

// Create Contentful client
export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master',
});

/**
 * Transform Contentful entry to frontend-friendly format
 */
function transformCaseStudyEntry(entry: CaseStudyEntry): CaseStudy {
  const fields = entry.fields;
  
  // Get image URL from Contentful asset
  const heroImage = fields.heroImage as Asset | undefined;
  const imageUrl = heroImage?.fields?.file?.url 
    ? `https:${heroImage.fields.file.url}` 
    : '';

  return {
    id: entry.sys.id,
    title: fields.title as string,
    slug: fields.slug as string,
    shortDescription: fields.shortDescription as string,
    challenge: fields.challenge as string,
    solution: fields.solution as string,
    results: fields.results as string,
    heroImage: imageUrl,
    heroImageAlt: fields.heroImageAlt as string,
    heroTitle: fields.heroTitle as string | undefined,
    client: fields.client as string,
    date: fields.date as string,
    location: fields.location as string,
    additionalDetails: fields.additionalDetails as Record<string, string> | undefined,
    contextObjectives: fields.contextObjectives as Document | undefined,
    creativeDirection: fields.creativeDirection as Document | undefined,
    execution: fields.execution as Document | undefined,
    eventHighlights: fields.eventHighlights as Document | undefined,
    resultsImpact: fields.resultsImpact as Document | undefined,
    testimonial: fields.testimonial as Document | undefined,
    challengesLearnings: fields.challengesLearnings as Document | undefined,
    valueAdded: fields.valueAdded as Document | undefined,
    metaDescription: fields.metaDescription as string | undefined,
    featured: fields.featured as boolean | undefined,
    order: fields.order as number | undefined,
  };
}

/**
 * Fetch all case studies
 * Optionally filter by featured status
 */
export async function getCaseStudies(featuredOnly = false): Promise<CaseStudy[]> {
  try {
    const query: Record<string, unknown> = {
      content_type: 'caseStudy',
      order: ['fields.order', '-sys.createdAt'],
    };

    if (featuredOnly) {
      query['fields.featured'] = true;
    }

    const response = await contentfulClient.getEntries(query);

    return (response.items as CaseStudyEntry[]).map(transformCaseStudyEntry);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

/**
 * Fetch a single case study by slug
 */
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'caseStudy',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return transformCaseStudyEntry(response.items[0] as CaseStudyEntry);
  } catch (error) {
    console.error(`Error fetching case study with slug "${slug}":`, error);
    throw error;
  }
}

/**
 * Fetch all case study slugs (for static generation)
 */
export async function getAllCaseStudySlugs(): Promise<string[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'caseStudy',
      select: ['fields.slug'],
    });

    return (response.items as CaseStudyEntry[]).map((item) => item.fields.slug as string);
  } catch (error) {
    console.error('Error fetching case study slugs:', error);
    throw error;
  }
}

/**
 * Transform Contentful testimonial entry to frontend-friendly format
 */
function transformTestimonialEntry(entry: TestimonialEntry): Testimonial {
  const fields = entry.fields;

  return {
    id: entry.sys.id,
    clientName: fields.clientName as string,
    clientRole: fields.clientRole as string | undefined,
    clientCompany: fields.clientCompany as string | undefined,
    companyWebsite: fields.companyWebsite as string | undefined,
    testimonialText: fields.testimonialText as string,
    featured: fields.featured as boolean | undefined,
    order: fields.order as number | undefined,
  };
}

/**
 * Fetch all testimonials
 * Optionally filter by featured status
 */
export async function getTestimonials(featuredOnly = false): Promise<Testimonial[]> {
  try {
    const query: Record<string, unknown> = {
      content_type: 'testimonial',
      order: ['fields.order', '-sys.createdAt'],
    };

    if (featuredOnly) {
      query['fields.featured'] = true;
    }

    const response = await contentfulClient.getEntries(query);

    return (response.items as TestimonialEntry[]).map(transformTestimonialEntry);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
}

/**
 * Transform Contentful service entry to frontend-friendly format
 */
function transformServiceEntry(entry: ServiceEntry): Service {
  const fields = entry.fields;
  
  // Get image URLs from Contentful assets
  const heroImage = fields.heroImage as Asset | undefined;
  const heroImageUrl = heroImage?.fields?.file?.url 
    ? `https:${heroImage.fields.file.url}` 
    : '';
    
  const secondaryImage = fields.secondaryImage as Asset | undefined;
  const secondaryImageUrl = secondaryImage?.fields?.file?.url 
    ? `https:${secondaryImage.fields.file.url}` 
    : undefined;

  return {
    id: entry.sys.id,
    serviceName: fields.serviceName as string,
    slug: fields.slug as string,
    shortDescription: fields.shortDescription as string,
    fullDescription: fields.fullDescription as Document,
    serviceCategory: fields.serviceCategory as 'Travel' | 'Events',
    targetAudience: fields.targetAudience as ('Corporate' | 'Individuals')[],
    heroImage: heroImageUrl,
    secondaryImage: secondaryImageUrl,
    imageAlt: fields.imageAlt as string,
    order: fields.order as number | undefined,
    featured: fields.featured as boolean | undefined,
  };
}

/**
 * Fetch all services
 * Optionally filter by category, audience, or featured status
 */
export async function getServices(options?: {
  category?: 'Travel' | 'Events';
  audience?: 'Corporate' | 'Individuals';
  featuredOnly?: boolean;
}): Promise<Service[]> {
  try {
    const query: Record<string, unknown> = {
      content_type: 'service',
      order: ['fields.order', '-sys.createdAt'],
    };

    if (options?.category) {
      query['fields.serviceCategory'] = options.category;
    }

    if (options?.audience) {
      query['fields.targetAudience[in]'] = options.audience;
    }

    if (options?.featuredOnly) {
      query['fields.featured'] = true;
    }

    const response = await contentfulClient.getEntries(query);

    return (response.items as ServiceEntry[]).map(transformServiceEntry);
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'service',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return transformServiceEntry(response.items[0] as ServiceEntry);
  } catch (error) {
    console.error(`Error fetching service with slug "${slug}":`, error);
    throw error;
  }
}

