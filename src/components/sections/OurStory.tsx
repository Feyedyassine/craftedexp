import { Container, Section, H2, Body } from '@/components/ui';
import { LineTypewriter, FadeInUp } from '@/components/ui/animations';
import Link from 'next/link';
import { OurStory as OurStoryType } from '@/types/contentful';

interface OurStoryProps {
  ourStoryData: OurStoryType | null;
  className?: string;
}

export function OurStory({ ourStoryData, className }: OurStoryProps) {
  // Fallback data in case Contentful data is not available
  const fallbackData = {
    title: "Our Story",
    description: "At Crafted Experiences, we believe every journey and every event should tell a story. With deep expertise in travel and event management, we design custom-made experiences that go beyond logistics, creating lasting impressions for corporations, groups, and individual travelers.",
    founderQuote: "Great experiences are not planned. They are crafted with precision, empathy, and purpose.",
    founderName: "Mahdy Ellabben",
    founderTitle: "Founder",
    ctaText: "Learn more about us",
    ctaLink: "/about"
  };

  const data = ourStoryData || fallbackData;

  return (
    <Section background="white" padding="lg" className={className}>
      <Container size="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="text-charcoal text-h2 font-display mb-4 sm:mb-6">
            {data.title}
          </H2>
          <Body className="text-base sm:text-lg text-charcoal leading-relaxed mb-6">
            {data.description}
          </Body>
          
          {/* Founder Quote */}
          <div className="bg-sand p-6 sm:p-8 my-6 sm:my-8 max-w-2xl mx-auto">
            <blockquote className="text-charcoal text-base sm:text-lg md:text-xl italic leading-relaxed mb-3">
              <LineTypewriter 
                text={data.founderQuote}
                speed={600} // Faster but still elegant
                delay={0.1} // Quicker start
                className="block"
              />
            </blockquote>
            <FadeInUp delay={1.0}>
              <div className="text-charcoal font-display text-base sm:text-lg font-semibold">
                — {data.founderName}, {data.founderTitle}
              </div>
            </FadeInUp>
          </div>

          {/* Learn More Link */}
          <FadeInUp delay={2.0}>
            <Link 
              href={data.ctaLink} 
              className="inline-block text-charcoal hover:text-charcoal/70 font-medium text-sm sm:text-base underline transition-colors duration-200"
            >
              {data.ctaText} →
            </Link>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  );
}

