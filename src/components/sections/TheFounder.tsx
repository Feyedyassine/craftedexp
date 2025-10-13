import { Container, Section, H2, Body } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';

interface TheFounderProps {
  className?: string;
}

export function TheFounder({ className }: TheFounderProps) {
  return (
    <Section background="white" padding="none" className={className}>
      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Founder Image - Full Height on Desktop */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-auto overflow-hidden order-2 lg:order-1">
            <SafariImage
              src="/images/founder.jpg"
              alt="Mahdy Ellabben, Founder of Crafted Experiences"
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent lg:hidden" />
          </div>

          {/* Founder Bio - Centered Vertically */}
          <div className="flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 order-1 lg:order-2">
            <div className="max-w-xl space-y-6 sm:space-y-8">
              {/* Label */}
              <div className="text-charcoal/60 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2">
                The Founder
              </div>
              
              {/* Name */}
              <H2 className="text-charcoal text-lg sm:text-xl md:text-2xl font-display mb-6">
                Mahdy Ellabben
              </H2>
              
              <Body className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
                Embodies the essence of contemporary hospitality — human, visionary, and guided by purpose. 
                With a background in tourism and hotel management, Mahdy&apos;s journey spans years of collaboration 
                with leading destinations, hotels, and partners across Tunisia and abroad.
              </Body>
              
              <Body className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
                Driven by a deep respect for craftsmanship and human connection, he created Crafted Experiences 
                to redefine the art of travel and events — where professionalism meets empathy, and where every 
                encounter is curated with heart.
              </Body>
              
              {/* Quote with minimal styling */}
              <div className="pt-6 border-t border-charcoal/20">
                <blockquote className="text-charcoal text-base sm:text-lg md:text-xl italic leading-relaxed mb-3">
                  &ldquo;Great experiences are not planned. They are crafted with precision, empathy, and purpose.&rdquo;
                </blockquote>
                <div className="text-charcoal/60 font-display text-sm">
                  — Mahdy Ellabben
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

