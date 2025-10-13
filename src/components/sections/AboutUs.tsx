import { Container, Section, H2, Body } from '@/components/ui';

interface AboutUsProps {
  className?: string;
}

export function AboutUs({ className }: AboutUsProps) {
  return (
    <Section background="white" padding="lg" className={className}>
      <Container size="xl">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
              At Crafted Experiences, we believe that every journey and event tells a story — one that deserves 
              to be shaped with intention, emotion, and grace. We don&apos;t simply organize; we curate, blending 
              artistry with precision to create experiences that connect people, purpose, and place.
            </Body>
            <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
              Born from a passion for meaningful travel and refined hospitality, our agency stands at the intersection 
              of craftsmanship and human connection. Each experience — whether corporate or leisure — is designed as 
              a dialogue between creativity and structure, where every detail carries purpose and every moment holds meaning.
            </Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}

