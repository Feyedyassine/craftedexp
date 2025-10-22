import { Document } from '@contentful/rich-text-types';
import type { Asset, Entry, EntryFieldTypes } from 'contentful';

// Contentful Image Asset
export interface ContentfulImage {
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

// Case Study Entry Skeleton Type
export interface CaseStudySkeleton {
  contentTypeId: 'caseStudy';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    shortDescription: EntryFieldTypes.Text;
    challenge: EntryFieldTypes.Text;
    solution: EntryFieldTypes.Text;
    results: EntryFieldTypes.Text;
    heroImage: EntryFieldTypes.AssetLink;
    heroImageAlt: EntryFieldTypes.Text;
    heroTitle?: EntryFieldTypes.Text;
    client: EntryFieldTypes.Text;
    date: EntryFieldTypes.Text;
    location: EntryFieldTypes.Text;
    additionalDetails?: EntryFieldTypes.Object;
    contextObjectives?: EntryFieldTypes.RichText;
    creativeDirection?: EntryFieldTypes.RichText;
    execution?: EntryFieldTypes.RichText;
    eventHighlights?: EntryFieldTypes.RichText;
    resultsImpact?: EntryFieldTypes.RichText;
    testimonial?: EntryFieldTypes.RichText;
    challengesLearnings?: EntryFieldTypes.RichText;
    valueAdded?: EntryFieldTypes.RichText;
    metaDescription?: EntryFieldTypes.Text;
    featured?: EntryFieldTypes.Boolean;
    order?: EntryFieldTypes.Integer;
  };
}

// Case Study Entry Type
export type CaseStudyEntry = Entry<CaseStudySkeleton, undefined, string>;

// Case Study Fields (for easier access)
export type CaseStudyFields = CaseStudySkeleton['fields'];

// Processed Case Study for frontend use
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string;
  heroImage: string;
  heroImageAlt: string;
  heroTitle?: string;
  client: string;
  date: string;
  location: string;
  additionalDetails?: {
    [key: string]: string;
  };
  contextObjectives?: Document;
  creativeDirection?: Document;
  execution?: Document;
  eventHighlights?: Document;
  resultsImpact?: Document;
  testimonial?: Document;
  challengesLearnings?: Document;
  valueAdded?: Document;
  metaDescription?: string;
  featured?: boolean;
  order?: number;
}

// Testimonial Entry Skeleton Type
export interface TestimonialSkeleton {
  contentTypeId: 'testimonial';
  fields: {
    clientName: EntryFieldTypes.Text;
    clientRole?: EntryFieldTypes.Text;
    clientCompany?: EntryFieldTypes.Text;
    companyWebsite?: EntryFieldTypes.Text;
    testimonialText: EntryFieldTypes.Text;
    featured?: EntryFieldTypes.Boolean;
    order?: EntryFieldTypes.Integer;
  };
}

// Testimonial Entry Type
export type TestimonialEntry = Entry<TestimonialSkeleton, undefined, string>;

// Testimonial Fields (for easier access)
export type TestimonialFields = TestimonialSkeleton['fields'];

// Processed Testimonial for frontend use
export interface Testimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  companyWebsite?: string;
  testimonialText: string;
  featured?: boolean;
  order?: number;
}

// Service Entry Skeleton Type
export interface ServiceSkeleton {
  contentTypeId: 'service';
  fields: {
    serviceName: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    shortDescription: EntryFieldTypes.Text;
    fullDescription: EntryFieldTypes.RichText;
    serviceCategory: EntryFieldTypes.Text<'Travel' | 'Events' | 'both' | 'Both'>;
    targetAudience: EntryFieldTypes.Array<EntryFieldTypes.Symbol<'Corporate' | 'Individuals' | 'both' | 'Both'>>;
    heroImage: EntryFieldTypes.AssetLink;
    secondaryImage?: EntryFieldTypes.AssetLink;
    imageAlt: EntryFieldTypes.Text;
    order?: EntryFieldTypes.Integer;
    featured?: EntryFieldTypes.Boolean;
  };
}

// Service Entry Type
export type ServiceEntry = Entry<ServiceSkeleton, undefined, string>;

// Service Fields (for easier access)
export type ServiceFields = ServiceSkeleton['fields'];

// Processed Service for frontend use
export interface Service {
  id: string;
  serviceName: string;
  slug: string;
  shortDescription: string;
  fullDescription: Document;
  serviceCategory: 'Travel' | 'Events' | 'both' | 'Both';
  targetAudience: ('Corporate' | 'Individuals' | 'both' | 'Both')[];
  heroImage: string;
  secondaryImage?: string;
  imageAlt: string;
  order?: number;
  featured?: boolean;
}

// Hero Section Entry Skeleton Type
export interface HeroSectionSkeleton {
  contentTypeId: 'heroSection';
  fields: {
    headline: EntryFieldTypes.Text;
    subheadline?: EntryFieldTypes.Text;
    ctaButtonText: EntryFieldTypes.Text;
    ctaButtonLink: EntryFieldTypes.Text;
    dynamicWords: EntryFieldTypes.Object;
    carouselImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    imageTransitionDuration?: EntryFieldTypes.Number;
    logoImage: EntryFieldTypes.AssetLink;
  };
}

// Hero Section Entry Type
export type HeroSectionEntry = Entry<HeroSectionSkeleton, undefined, string>;

// Hero Section Fields (for easier access)
export type HeroSectionFields = HeroSectionSkeleton['fields'];

// Processed Hero Section for frontend use
export interface HeroSection {
  id: string;
  headline: string;
  subheadline?: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  dynamicWords: string[];
  carouselImages: {
    url: string;
    title: string;
    description?: string;
  }[];
  imageTransitionDuration: number;
  logoImage: {
    url: string;
    title: string;
    description?: string;
  };
}

// Our Story Entry Skeleton Type
export interface OurStorySkeleton {
  contentTypeId: 'aboutHomepage';
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    founderQuote: EntryFieldTypes.Text;
    founderName: EntryFieldTypes.Text;
    founderTitle: EntryFieldTypes.Text;
    ctaText: EntryFieldTypes.Text;
    ctaLink: EntryFieldTypes.Text;
    isActive: EntryFieldTypes.Boolean;
    sortOrder?: EntryFieldTypes.Integer;
  };
}

// Our Story Entry Type
export type OurStoryEntry = Entry<OurStorySkeleton, undefined, string>;

// Our Story Fields (for easier access)
export type OurStoryFields = OurStorySkeleton['fields'];

// Processed Our Story for frontend use
export interface OurStory {
  id: string;
  title: string;
  description: string;
  founderQuote: string;
  founderName: string;
  founderTitle: string;
  ctaText: string;
  ctaLink: string;
  isActive: boolean;
  sortOrder?: number;
}

