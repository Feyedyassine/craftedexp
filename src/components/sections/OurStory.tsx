import { Container, Section, H2, Body } from '@/components/ui';
import Link from 'next/link';

interface OurStoryProps {
  className?: string;
}

export function OurStory({ className }: OurStoryProps) {
  return (
    <Section background="white" padding="lg" className={className}>
      <Container size="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="text-charcoal text-lg sm:text-xl md:text-2xl lg:text-3xl font-display mb-4 sm:mb-6">
            Our Story
          </H2>
          <Body className="text-base sm:text-lg text-charcoal leading-relaxed mb-6">
            At Crafted Experiences, we believe every journey and every event should tell a story. 
            With deep expertise in travel and event management, we design custom-made experiences that go beyond 
            logistics, creating lasting impressions for corporations, groups, and individual travelers.
          </Body>
          
          {/* Founder Quote */}
          <div className="bg-sand p-6 sm:p-8 border-l-4 border-charcoal my-6 sm:my-8 max-w-2xl mx-auto">
            <blockquote className="text-charcoal text-base sm:text-lg md:text-xl italic leading-relaxed mb-3">
              &ldquo;Great experiences are not planned. They are crafted with precision, empathy, and purpose.&rdquo;
            </blockquote>
            <div className="text-charcoal font-display text-sm">
              — Mahdy Ellabben, Founder
            </div>
          </div>

          {/* Learn More Link */}
          <Link 
            href="/about" 
            className="inline-block text-charcoal hover:text-charcoal/70 font-medium text-sm sm:text-base underline transition-colors duration-200"
          >
            Learn more about us →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

