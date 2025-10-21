'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Section, H2, Body, Button } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';
import { CaseStudy as CaseStudyType } from '@/types/contentful';

interface CaseStudyProps {
  caseStudies: CaseStudyType[];
  className?: string;
}

export function CaseStudy({ caseStudies, className }: CaseStudyProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-advance carousel every 12 seconds
  useEffect(() => {
    if (!caseStudies || caseStudies.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 800); // Half of fade transition duration
    }, 12000);

    return () => clearInterval(interval);
  }, [caseStudies]);

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsVisible(true);
      }, 800);
    }
  };

  // If no case studies, show nothing (after all hooks)
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  const currentCaseStudy = caseStudies[currentIndex];

  return (
    <Section background="sand" padding="xl" className={className}>
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <H2 className="text-charcoal text-h2 font-display mb-3 sm:mb-4">
            Corporate Success Stories
          </H2>
          <Body className="text-charcoal/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Discover how we&apos;ve transformed experiences for some of our clients across different industries and occasions.
          </Body>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
          <button
            onClick={() => goToSlide(currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1)}
            className="hidden lg:block absolute left-2 xl:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-charcoal p-2 xl:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100"
            aria-label="Previous case study"
          >
            <svg
              className="w-4 h-4 xl:w-5 xl:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => goToSlide(currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1)}
            className="hidden lg:block absolute right-2 xl:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-charcoal p-2 xl:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100"
            aria-label="Next case study"
          >
            <svg
              className="w-4 h-4 xl:w-5 xl:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 px-4 sm:px-0 order-2 lg:order-1">
              <div>
                <h3 className="text-charcoal text-h3 font-display mb-3 sm:mb-4">
                  {currentCaseStudy.title}
                </h3>
                <Body className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
                  {currentCaseStudy.shortDescription}
                </Body>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-charcoal text-h4 font-display mb-1 sm:mb-2">Challenge</h4>
                    <Body className="text-charcoal/70 text-sm sm:text-base">
                      {currentCaseStudy.challenge}
                    </Body>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-charcoal text-h4 font-display mb-1 sm:mb-2">Solution</h4>
                    <Body className="text-charcoal/70 text-sm sm:text-base">
                      {currentCaseStudy.solution}
                    </Body>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-charcoal text-h4 font-display mb-1 sm:mb-2">Results</h4>
                    <Body className="text-charcoal/70 text-sm sm:text-base">
                      {currentCaseStudy.results}
                    </Body>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 text-center sm:text-left">
                <Link href={`/case-studies/${currentCaseStudy.slug}`}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-charcoal text-cream border-charcoal hover:bg-cream hover:text-charcoal text-sm sm:text-base"
                  >
                    Read Full Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] overflow-hidden order-1 lg:order-2">
              <SafariImage
                src={currentCaseStudy.heroImage}
                alt={currentCaseStudy.heroImageAlt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                key={`${currentCaseStudy.slug}-${currentIndex}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-charcoal scale-125' 
                  : 'bg-charcoal/30 hover:bg-charcoal/60'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
