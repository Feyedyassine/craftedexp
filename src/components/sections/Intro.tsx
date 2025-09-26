import { Container, Section, Body, H2 } from '@/components/ui';

interface IntroProps {
  className?: string;
}

export function Intro({ className }: IntroProps) {
  return (
    <Section 
      background="white" 
      padding="sm" 
      className={className}
    >
      <Container size="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="text-charcoal text-2xl md:text-3xl lg:text-4xl font-display mb-6">
            Our Philosophy
          </H2>
          <Body className="text-lg text-charcoal leading-relaxed">
            At Crafted Experiences, we believe every journey and every event should tell a story. 
            With deep expertise in travel and event management, we design experiences that go beyond 
            logistics, creating lasting impressions for corporations, groups, and individual travelers.
          </Body>
        </div>
      </Container>
    </Section>
  );
}
