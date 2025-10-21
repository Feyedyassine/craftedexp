'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Container, Section, H2, Body } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';
import { CaseStudy } from '@/types/contentful';
import { formatDateRange } from '@/lib/utils/dateFormatter';

interface CaseStudiesListProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // Extract unique years from case studies
  const years = useMemo(() => {
    const yearSet = new Set<number>();
    caseStudies.forEach((caseStudy) => {
      try {
        const date = new Date(caseStudy.date);
        if (!isNaN(date.getTime())) {
          yearSet.add(date.getFullYear());
        }
      } catch (_error) {
        // Skip invalid dates
      }
    });
    return Array.from(yearSet).sort((a, b) => b - a); // Sort descending
  }, [caseStudies]);

  // Filter case studies by selected year
  const filteredCaseStudies = useMemo(() => {
    if (selectedYear === 'all') {
      return caseStudies;
    }
    
    return caseStudies.filter((caseStudy) => {
      try {
        const date = new Date(caseStudy.date);
        return date.getFullYear().toString() === selectedYear;
      } catch (_error) {
        return false;
      }
    });
  }, [caseStudies, selectedYear]);

  return (
    <Section background="white" padding="lg" className="py-12 sm:py-16 lg:py-20">
      <Container size="xl">
        {/* Filter Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-charcoal font-display text-h3 mb-2">
                Filter by Year
              </h3>
              <p className="text-charcoal/60 text-sm">
                Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
              </p>
            </div>
            
            {/* Year Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 border ${
                  selectedYear === 'all'
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-white text-charcoal border-charcoal/20 hover:border-charcoal/40'
                }`}
              >
                All Years
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year.toString())}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 border ${
                    selectedYear === year.toString()
                      ? 'bg-charcoal text-cream border-charcoal'
                      : 'bg-white text-charcoal border-charcoal/20 hover:border-charcoal/40'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6 sm:space-y-8">
          {filteredCaseStudies.map((caseStudy, index) => (
            <Link
              key={caseStudy.slug}
              href={`/case-studies/${caseStudy.slug}`}
              className="block group"
            >
              <article className="relative h-64 sm:h-80 lg:h-96 overflow-hidden border border-charcoal/20 transition-all duration-500 hover:border-charcoal/60 hover:shadow-2xl">
                {/* Background Image */}
                <SafariImage
                  src={caseStudy.heroImage}
                  alt={caseStudy.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                  priority={index === 0}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent group-hover:from-charcoal/95 group-hover:via-charcoal/80 transition-all duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-16">
                  <div className="max-w-3xl">
                    {/* Client & Date */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4 text-cream/80 text-xs sm:text-sm">
                      <span className="font-medium">{caseStudy.client}</span>
                      <span>•</span>
                      <span>{formatDateRange(caseStudy.date)}</span>
                    </div>

                    {/* Title */}
                    <H2 className="text-cream text-h3 font-display mb-3 sm:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {caseStudy.title}
                    </H2>
                    
                    {/* Description */}
                    <Body className="text-cream/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 max-w-2xl">
                      {caseStudy.shortDescription}
                    </Body>

                    {/* Read More Link */}
                    <div className="flex items-center text-cream font-medium text-sm sm:text-base group-hover:translate-x-3 transition-transform duration-500">
                      <span>Explore Case Study</span>
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <Body className="text-charcoal/60 text-lg mb-4">
              No case studies found for {selectedYear}.
            </Body>
            <button
              onClick={() => setSelectedYear('all')}
              className="text-charcoal underline hover:text-charcoal/70 transition-colors"
            >
              Show all case studies
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}

