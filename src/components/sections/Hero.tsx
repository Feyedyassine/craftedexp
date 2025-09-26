import { Button, Body } from '@/components/ui';
import Image from 'next/image';

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
          backgroundImage: 'url(/images/bg.jpg)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container - Centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo SVG - Centered */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Image
            src="/icons/logo.svg"
            alt="Crafted Experiences Logo"
            width={400}
            height={200}
            className="mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto"
          />
        </div>
        
        {/* Subtext - Centered */}
        <div className="mb-6 sm:mb-8 text-center max-w-4xl px-4">
          <Body className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            Tailored travel & event experiences for corporations and individuals who seek more than the ordinary.
          </Body>
        </div>
        
        {/* Button - Centered */}
        <div className="w-full max-w-xs sm:max-w-sm">
          <Button 
            variant="outline"
            size="lg" 
            className="w-full text-cream border-cream hover:bg-cream hover:text-charcoal"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
}
