import { Container, Section, H1 } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';

interface AboutHeroProps {
  className?: string;
}

export function AboutHero({ className }: AboutHeroProps) {
  return (
    <Section background="transparent" padding="none" className={className}>
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <SafariImage
          src="/images/aboutus.png"
          alt="About Crafted Experiences"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        
        {/* Content */}
        <Container size="xl">
          <div className="relative z-10 h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
             <div className="text-center max-w-3xl px-4">
               <H1 className="!text-cream text-h1 font-display leading-tight">
                 Curating Travel & Events for Every Occasion
               </H1>
             </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}

