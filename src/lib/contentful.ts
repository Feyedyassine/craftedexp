import { createClient, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { 
  CaseStudyEntry, 
  CaseStudy,
  TestimonialEntry, 
  Testimonial,
  ServiceEntry, 
  Service,
  HeroSectionEntry,
  HeroSection,
  OurStoryEntry,
  OurStory
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
    serviceCategory: fields.serviceCategory as 'Travel' | 'Events' | 'both',
    targetAudience: fields.targetAudience as ('Corporate' | 'Individuals' | 'both')[],
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
    // Fetch all services first
    const query: Record<string, unknown> = {
      content_type: 'service',
      order: ['fields.order', '-sys.createdAt'],
    };

    if (options?.featuredOnly) {
      query['fields.featured'] = true;
    }

    const response = await contentfulClient.getEntries(query);

    // Transform all services first
    const allServices = (response.items as ServiceEntry[]).map(transformServiceEntry);
    
    // Filter on the frontend
    let filteredServices = allServices;
    
    if (options?.category) {
      filteredServices = filteredServices.filter(service => 
        service.serviceCategory === options.category || 
        service.serviceCategory === 'both' || 
        service.serviceCategory === 'Both'
      );
    }
    
    if (options?.audience) {
      filteredServices = filteredServices.filter(service => 
        service.targetAudience.includes(options.audience!) || 
        service.targetAudience.includes('both') || 
        service.targetAudience.includes('Both')
      );
    }
    
    return filteredServices;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

/**
 * Transform Contentful hero section entry to frontend-friendly format
 */
function transformHeroSectionEntry(entry: HeroSectionEntry): HeroSection {
  const fields = entry.fields;
  
  // Get logo image URL from Contentful asset
  const logoImage = fields.logoImage as Asset | undefined;
  const logoImageUrl = logoImage?.fields?.file?.url 
    ? `https:${logoImage.fields.file.url}` 
    : '';
    
  const logoImageTitle = typeof logoImage?.fields?.title === 'string' ? logoImage.fields.title : '';
  const logoImageDescription = typeof logoImage?.fields?.description === 'string' ? logoImage.fields.description : '';

  // Get carousel images URLs from Contentful assets
  const carouselImages = (fields.carouselImages as Asset[] || []).map(asset => ({
    url: asset.fields?.file?.url ? `https:${asset.fields.file.url}` : '',
    title: typeof asset.fields?.title === 'string' ? asset.fields.title : '',
    description: typeof asset.fields?.description === 'string' ? asset.fields.description : ''
  }));

  // Parse dynamic words from JSON object
  let dynamicWords: string[] = [];
  try {
    if (fields.dynamicWords && typeof fields.dynamicWords === 'object') {
      // If it's already an array, use it directly
      if (Array.isArray(fields.dynamicWords)) {
        dynamicWords = fields.dynamicWords as string[];
      } else {
        // If it's an object with numbered keys, convert to array
        const wordsObj = fields.dynamicWords as Record<string, string>;
        dynamicWords = Object.values(wordsObj).filter(word => typeof word === 'string');
      }
    }
  } catch (error) {
    console.error('Error parsing dynamic words:', error);
    dynamicWords = ['Experiences', 'Events', 'Travel', 'Celebrations', 'Journeys', 'Concierge']; // fallback
  }

  return {
    id: entry.sys.id,
    headline: fields.headline as string,
    subheadline: fields.subheadline as string | undefined,
    ctaButtonText: fields.ctaButtonText as string,
    ctaButtonLink: fields.ctaButtonLink as string,
    dynamicWords,
    carouselImages,
    imageTransitionDuration: (fields.imageTransitionDuration as number) || 5,
    logoImage: {
      url: logoImageUrl,
      title: logoImageTitle,
      description: logoImageDescription
    },
  };
}

/**
 * Fetch the hero section (since there's only one)
 */
export async function getHeroSection(): Promise<HeroSection | null> {
  try {
    const query = {
      content_type: 'heroSection',
      order: ['-sys.createdAt'],
      limit: 1
    };

    const response = await contentfulClient.getEntries(query);

    if (response.items.length === 0) {
      return null;
    }

    return transformHeroSectionEntry(response.items[0] as HeroSectionEntry);
  } catch (error) {
    console.error('Error fetching hero section:', error);
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

/**
 * Transform OurStory entry to frontend-friendly format
 */
function transformOurStoryEntry(entry: OurStoryEntry): OurStory {
  const fields = entry.fields;

  return {
    id: entry.sys.id,
    title: fields.title as string,
    description: fields.description as string,
    founderQuote: fields.founderQuote as string,
    founderName: fields.founderName as string,
    founderTitle: fields.founderTitle as string,
    ctaText: fields.ctaText as string,
    ctaLink: fields.ctaLink as string,
    isActive: fields.isActive as boolean,
    sortOrder: fields.sortOrder as number | undefined,
  };
}

/**
 * Fetch the Our Story section (since there's only one)
 */
export async function getOurStory(): Promise<OurStory | null> {
  try {
    const query = {
      content_type: 'aboutHomepage',
      'fields.isActive': true,
      order: ['fields.sortOrder', '-sys.createdAt'],
      limit: 1
    };

    const response = await contentfulClient.getEntries(query);

    if (response.items.length === 0) {
      return null;
    }

    return transformOurStoryEntry(response.items[0] as OurStoryEntry);
  } catch (error) {
    // If content type doesn't exist yet, return null instead of throwing
    if (error && typeof error === 'object' && 'status' in error && error.status === 400) {
      console.warn('aboutHomepage content type not found in Contentful. Using fallback data.');
      return null;
    }
    console.error('Error fetching our story:', error);
    throw error;
  }
}

