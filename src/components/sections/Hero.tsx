import { Button, Body } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';
import Link from 'next/link';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero.webp)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container - Centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo SVG - Centered */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <SafariImage
            src="/icons/logo.svg"
            alt="Crafted Experiences Logo"
            width={400}
            height={200}
            className="mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto"
            priority
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
          />
        </div>
        
        {/* Subtext - Centered */}
        <div className="mb-6 sm:mb-8 text-center max-w-4xl px-4">
          <Body className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            Tailored travel & event experiences for corporations and individuals who seek more than the ordinary.
          </Body>
        </div>
        
        {/* CTAs - Centered */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg">
          <Link href="/for-corporate" className="flex-1">
            <Button 
              variant="outline"
              size="md" 
              className="w-full text-cream border-cream hover:bg-cream hover:text-charcoal text-sm font-medium py-2"
            >
              Corporate
            </Button>
          </Link>
          <Link href="/for-individuals" className="flex-1">
            <Button 
              variant="outline"
              size="md" 
              className="w-full text-cream border-cream hover:bg-cream hover:text-charcoal text-sm font-medium py-2 whitespace-nowrap"
            >
              Independent Traveler
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
