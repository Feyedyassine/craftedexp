import { Container, Section, Body, H2 } from '@/components/ui';

interface IntroWithTestimonialsProps {
  className?: string;
}

export function IntroWithTestimonials({ className }: IntroWithTestimonialsProps) {
  return (
    <Section background="white" padding="lg" className={className}>
      <Container size="xl">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="text-charcoal text-lg sm:text-xl md:text-2xl lg:text-3xl font-display mb-4 sm:mb-6">
            Our Philosophy
          </H2>
          <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
            At Crafted Experiences, we believe every journey and every event should tell a story. 
            With deep expertise in travel and event management, we design custom-made experiences that go beyond 
            logistics, creating lasting impressions for corporations, groups, and individual travelers.
          </Body>
        </div>
      </Container>
    </Section>
  );
}
