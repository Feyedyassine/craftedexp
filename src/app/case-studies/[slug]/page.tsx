import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Container, Section, H2, RichText } from '@/components/ui';
import { CTA, CaseStudyNavigation } from '@/components/sections';
import SafariImage from '@/components/ui/SafariImage';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/contentful';
import { formatDateRange } from '@/lib/utils/dateFormatter';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all case studies
export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} | Crafted Experiences`,
    description: caseStudy.metaDescription || caseStudy.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get all case studies for navigation
  const allCaseStudies = await getCaseStudies();
  const allSlugs = allCaseStudies.map((cs) => cs.slug);
  const allTitles = allCaseStudies.reduce((acc, cs) => {
    acc[cs.slug] = cs.title;
    return acc;
  }, {} as Record<string, string>);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Sticky Case Study Navigation */}
      <CaseStudyNavigation 
        currentSlug={slug} 
        allSlugs={allSlugs}
        allTitles={allTitles}
      />

      {/* Hero Section */}
      <Section background="white" padding="none" className="relative">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <SafariImage
            src={caseStudy.heroImage}
            alt={caseStudy.heroImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <H2 className="text-[#E4E2DD] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display mb-3 sm:mb-4">
                {caseStudy.heroTitle || caseStudy.title}
              </H2>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-0">
            
            {/* Project Details */}
            <div className="bg-sand border border-charcoal/20 p-6">
              <H2 className="text-charcoal text-xl font-display mb-4">Project Details</H2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-charcoal">
                <div>
                  <strong>Client:</strong> {caseStudy.client}
                </div>
                <div>
                  <strong>Date:</strong> {formatDateRange(caseStudy.date)}
                </div>
                <div>
                  <strong>Location:</strong> {caseStudy.location}
                </div>
                {caseStudy.additionalDetails && Object.entries(caseStudy.additionalDetails).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> {value}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Context & Objectives */}
            {caseStudy.contextObjectives && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Context & Objectives</H2>
                <RichText content={caseStudy.contextObjectives} />
              </div>
            )}

            {/* Creative Direction */}
            {caseStudy.creativeDirection && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">
                  {caseStudy.slug === 'darana-photoshoot' ? 'Creative Direction' : 'Creative Concept'}
                </H2>
                <RichText content={caseStudy.creativeDirection} />
              </div>
            )}

            {/* Execution */}
            {caseStudy.execution && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Execution</H2>
                <RichText content={caseStudy.execution} />
              </div>
            )}

            {/* Event Flow & Highlights */}
            {caseStudy.eventHighlights && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">
                  {caseStudy.slug === 'porsche-taycan-launch' ? 'Event Flow & Highlights' : 'Event Highlights'}
                </H2>
                <RichText content={caseStudy.eventHighlights} />
              </div>
            )}

            {/* Client Testimonial */}
            {caseStudy.testimonial && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Client Testimonial</H2>
                <RichText content={caseStudy.testimonial} />
              </div>
            )}

            {/* Results & Impact */}
            {caseStudy.resultsImpact && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Results & Impact</H2>
                <RichText content={caseStudy.resultsImpact} />
              </div>
            )}

            {/* Challenges & Learnings */}
            {caseStudy.challengesLearnings && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Challenges & Learnings</H2>
                <RichText content={caseStudy.challengesLearnings} />
              </div>
            )}

            {/* Our Value Added */}
            {caseStudy.valueAdded && (
              <div>
                <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Our Value Added</H2>
                <RichText content={caseStudy.valueAdded} />
              </div>
            )}

          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

