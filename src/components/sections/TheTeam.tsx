import { Container, Section, H2, Body } from '@/components/ui';

interface TheTeamProps {
  className?: string;
}

export function TheTeam({ className }: TheTeamProps) {
  return (
    <Section background="white" padding="lg" className={className}>
      <Container size="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="text-charcoal text-h2 font-display mb-4 sm:mb-6 text-center">
            The Team
          </H2>
          <div className="space-y-4 sm:space-y-6">
            <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
              Behind every crafted experience stands a team of passionate professionals — travel designers, event producers, 
              and destination experts who share a singular belief: that excellence is found in the details.
            </Body>
            <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
              Each member brings a unique sensibility: creativity, cultural fluency, and a refined sense of service to ensure 
              every project reflects both precision and emotion.
            </Body>
            <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
              Together, we merge global expertise with local authenticity, crafting experiences that are seamless in execution 
              and soulful in impact.
            </Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}

