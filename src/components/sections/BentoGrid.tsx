'use client';

import Link from 'next/link';
import { Container, Section, H2, Body } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';
import { CaseStudy as CaseStudyType } from '@/types/contentful';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BentoGridProps {
  caseStudies: CaseStudyType[];
  className?: string;
}

interface GridItemProps {
  caseStudy: CaseStudyType;
  index: number;
  getGridClasses: () => string;
}

function GridItem({ caseStudy, index, getGridClasses }: GridItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3,
    margin: "-50px 0px"
  });

  return (
    <motion.div
      ref={ref}
      key={caseStudy.id}
      className={`group relative overflow-hidden cursor-pointer ${getGridClasses()}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[400px] overflow-hidden">
          <SafariImage
            src={caseStudy.heroImage}
            alt={caseStudy.heroImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          
          {/* Content Overlay - Always visible */}
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
            <div className="space-y-2 sm:space-y-3">
              {/* Title */}
              <h3 className="text-cream text-lg sm:text-xl lg:text-2xl font-display leading-tight">
                {caseStudy.title}
              </h3>
              
              {/* Short Description */}
              <Body className="text-cream/90 text-sm sm:text-base leading-relaxed line-clamp-2">
                {caseStudy.shortDescription}
              </Body>
            </div>
          </div>

          {/* Hover Overlay - Shows on hover */}
          <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-cream text-sm sm:text-base font-medium underline">
              Read Full Story
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BentoGrid({ caseStudies, className }: BentoGridProps) {

  // If no case studies, show nothing
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  // Take only the first 6 case studies for the grid
  const displayCaseStudies = caseStudies.slice(0, 6);

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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {displayCaseStudies.map((caseStudy, index) => {
            // Define grid positions for alternating pattern
            const getGridClasses = () => {
              const totalItems = displayCaseStudies.length;
              const isOddTotal = totalItems % 2 === 1;
              
              if (isOddTotal) {
                // For odd totals, we need to place 3 items in one row somewhere
                // Let's place them in the middle row for better visual balance
                const middleStartIndex = Math.floor((totalItems - 3) / 2);
                const middleEndIndex = middleStartIndex + 2;
                
                // If we're in the middle 3 items, make them all small
                if (index >= middleStartIndex && index <= middleEndIndex) {
                  return 'md:col-span-1';
                }
              }
              
              // Regular alternating pattern for all other items
              const isEvenRow = Math.floor(index / 2) % 2 === 0;
              const isFirstInRow = index % 2 === 0;
              
              if (isEvenRow) {
                // Row 1, 3, 5...: [Large] [Small]
                return isFirstInRow ? 'md:col-span-2' : 'md:col-span-1';
              } else {
                // Row 2, 4, 6...: [Small] [Large]
                return isFirstInRow ? 'md:col-span-1' : 'md:col-span-2';
              }
            };

            return (
              <GridItem
                key={caseStudy.id}
                caseStudy={caseStudy}
                index={index}
                getGridClasses={getGridClasses}
              />
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="/case-studies" 
            className="inline-block text-charcoal hover:text-charcoal/70 font-medium text-sm sm:text-base underline transition-colors duration-200"
          >
            View All Case Studies →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
