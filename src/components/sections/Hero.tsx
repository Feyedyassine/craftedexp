import { Button, Body } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { DynamicText } from '@/components/ui/DynamicText';
import { CharacterTypewriter } from '@/components/ui/animations';
import Link from 'next/link';
import { HeroSection } from '@/types/contentful';

interface HeroProps {
  heroData: HeroSection | null;
  className?: string;
}

export function Hero({ heroData, className }: HeroProps) {
  // Hardcoded values for removed fields
  const FADE_TRANSITION_DURATION = 3000; // 3 seconds for smoother transitions
  const TEXT_ANIMATION_SPEED = 4000; // 4 seconds per word for more premium feel
  const OVERLAY_OPACITY = 40; // 40% opacity

  // Fallback data if Contentful data is not available
  const fallbackData = {
    headline: "Crafted with purpose experienced with heart",
    subheadline: "We design journeys, events, and experiences where precision meets emotion.",
    ctaButtonText: "Craft with us",
    ctaButtonLink: "/contact",
    dynamicWords: ["Experiences", "Events", "Travel", "Celebrations", "Journeys", "Concierge"],
    carouselImages: [
      {
        url: "/images/hero.webp",
        title: "Hero Background",
        description: "Beautiful background image"
      }
    ],
    imageTransitionDuration: 5,
    logoImage: {
      url: "/icons/logo.svg",
      title: "Crafted Experiences Logo",
      description: "Company logo"
    }
  };

  const data = heroData || fallbackData;

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <ImageCarousel
          images={data.carouselImages}
          transitionDuration={data.imageTransitionDuration * 2} // Slower image transitions
          fadeDuration={FADE_TRANSITION_DURATION}
          className="w-full h-full"
        />
      </div>
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${OVERLAY_OPACITY / 100})`
        }}
      />
      
      {/* Content Container - Centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo with Dynamic Words - Centered */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <SafariImage
            src={data.logoImage.url}
            alt={data.logoImage.title}
            width={400}
            height={200}
            className="mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto"
            priority
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
          />
          
          {/* Dynamic Words - Part of Logo */}
          <div className="text-center pt-0.5">
            <h2 className="text-[16px] font-light text-white tracking-[0.5em]">
              <DynamicText 
                words={data.dynamicWords}
                animationSpeed={TEXT_ANIMATION_SPEED}
                className="text-cream"
              />
            </h2>
          </div>
        </div>
        
        {/* Headline and Subheadline - Centered */}
        <div className="mb-6 sm:mb-8 text-center max-w-4xl px-4">
          <h1 className="text-h2 font-normal text-white mb-2">
            <CharacterTypewriter 
              text={data.headline}
              speed={120} // Slower for premium feel
              delay={1.5} // Start after logo and dynamic text
              className="block"
            />
          </h1>
          
          {/* Subheadline - if provided */}
          {data.subheadline && (
            <Body className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              {data.subheadline}
            </Body>
          )}
        </div>
        
        {/* CTA Button - Centered */}
        <div className="text-center">
          <Link href={data.ctaButtonLink}>
            <Button 
              variant="outline"
              size="lg" 
              className="text-cream border-cream hover:bg-cream hover:text-charcoal text-lg font-medium px-8 py-3"
            >
              {data.ctaButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
