import { Header, Footer } from '@/components/layout';
import { Container, Section, H1, Body } from '@/components/ui';
import { CTA } from '@/components/sections';
import { getCaseStudies } from '@/lib/contentful';
import CaseStudiesList from '@/components/sections/CaseStudiesList';

export const metadata = {
  title: 'Case Studies | Crafted Experiences',
  description: 'Explore our portfolio of successful events and experiences. From corporate launches to luxury photoshoots, discover how we bring visions to life.',
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Section background="sand" padding="lg" className="py-12 sm:py-16 lg:py-20">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <H1 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 text-charcoal">
              Our Case Studies
            </H1>
            <Body className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
              Discover how we&apos;ve transformed visions into unforgettable experiences for clients across different industries and occasions.
            </Body>
          </div>
        </Container>
      </Section>

      {/* Case Studies List with Filters */}
      <CaseStudiesList caseStudies={caseStudies} />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

