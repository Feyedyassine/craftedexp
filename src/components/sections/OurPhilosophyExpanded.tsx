import { Container, Section, H2, Body } from '@/components/ui';

interface OurPhilosophyExpandedProps {
  className?: string;
}

export function OurPhilosophyExpanded({ className }: OurPhilosophyExpandedProps) {
  return (
    <Section background="sand" padding="lg" className={className}>
      <Container size="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="text-charcoal text-lg sm:text-xl md:text-2xl lg:text-3xl font-display mb-4 sm:mb-6 text-center">
            Our Philosophy
          </H2>
          <div className="space-y-4 sm:space-y-6">
            <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
              We see our craft as a delicate balance between structure and spirit. Every project begins with a conversation, 
              an attentive listening to your story, your culture, and your ambitions. From there, we shape experiences with 
              care, guided by an unwavering devotion to detail and authenticity.
            </Body>
            <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
              At Crafted Experiences, <strong>Craftsmanship is our language</strong>, <strong>Connection is our purpose</strong>, 
              and <strong>Character is our signature</strong>. We believe true excellence is not defined by luxury alone, but by 
              the sincerity and intention with which each moment is designed. This is how we transform travel and events into 
              stories that linger — elegant, human, and deeply felt.
            </Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}

