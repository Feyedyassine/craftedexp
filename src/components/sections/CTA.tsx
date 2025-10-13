import Link from 'next/link';
import { Container, Section, H2, Button } from '@/components/ui';

interface CTAProps {
  className?: string;
}

export function CTA({ className }: CTAProps) {
  return (
    <Section background="sand" padding="lg" className={className}>
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-between">
          {/* Left Column - Heading */}
          <div className="flex-1 text-center lg:text-left px-2 sm:px-0">
            <H2 className="text-charcoal text-lg sm:text-xl md:text-2xl lg:text-3xl font-display mb-3 sm:mb-4 leading-tight">
              Let&apos;s Create Your Next Unforgettable Experience
            </H2>
          </div>
          
          {/* Right Column - CTA Button */}
          <div className="flex-shrink-0 text-center lg:text-right">
            <Link href="/contact">
              <Button 
                variant="primary"
                size="lg"
                className="bg-charcoal text-cream hover:bg-cream hover:text-charcoal border-charcoal px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              >
                Start Planning
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
