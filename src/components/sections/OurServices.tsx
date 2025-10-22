'use client';

import React, { useState, useMemo } from 'react';
import SafariImage from '@/components/ui/SafariImage';
import { Container, Section, H2, Body } from '@/components/ui';
import { StaggeredCards } from '@/components/ui/animations';
import { Service } from '@/types/contentful';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface OurServicesProps {
  services: Service[];
  className?: string;
}

const OurServices: React.FC<OurServicesProps> = ({ services, className }) => {
  const [activeTab, setActiveTab] = useState<'Travel' | 'Events'>('Travel');
  const [currentPage, setCurrentPage] = useState(0);

  // Filter services by category
  const travelServices = useMemo(() => 
    services.filter(s => s.serviceCategory === 'Travel' || s.serviceCategory === 'both' || s.serviceCategory === 'Both'),
    [services]
  );
  
  const eventServices = useMemo(() => 
    services.filter(s => s.serviceCategory === 'Events' || s.serviceCategory === 'both' || s.serviceCategory === 'Both'),
    [services]
  );

  const currentServices = activeTab === 'Travel' ? travelServices : eventServices;
  
  // Desktop/Tablet: Carousel logic - always show 4 services per page
  const servicesPerPage = 4;
  const totalPages = Math.ceil(currentServices.length / servicesPerPage);
  const hasMultiplePages = totalPages > 1;
  
  // Mobile: Show all services, no carousel
  const mobileServices = currentServices;
  
  // Desktop/Tablet: Get services for current page (always 4 slots)
  const desktopServices = useMemo(() => {
    const startIndex = currentPage * servicesPerPage;
    const pageServices: (Service | null)[] = currentServices.slice(startIndex, startIndex + servicesPerPage);
    
    // Pad with empty slots if less than 4
    while (pageServices.length < servicesPerPage) {
      pageServices.push(null);
    }
    
    return pageServices;
  }, [currentServices, currentPage]);

  // Reset to first page when switching tabs
  const handleTabChange = (tab: 'Travel' | 'Events') => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <Section background="sand" padding="xl" className={className}>
      <Container size="xl">
        {/* Section Title and Tabs */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 sm:mb-12 md:mb-16 space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <H2 className="text-charcoal text-h2 font-display mb-2">
              Our Services
            </H2>
            <p className="text-charcoal/70 text-sm md:text-base">
              Curated experiences for every occasion
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-1 bg-cream/20 p-1 mx-auto lg:mx-0">
            <button
              onClick={() => handleTabChange('Travel')}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'Travel'
                  ? 'bg-charcoal text-white'
                  : 'text-black hover:bg-cream/10'
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => handleTabChange('Events')}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'Events'
                  ? 'bg-charcoal text-white'
                  : 'text-black hover:bg-cream/10'
              }`}
            >
              Events
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Only show if more than 4 services */}
          {hasMultiplePages && (
            <>
              <button
                onClick={goToPrevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-charcoal/80 hover:bg-charcoal text-cream p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 -ml-4 sm:-ml-6"
                aria-label="Previous services"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={goToNextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-charcoal/80 hover:bg-charcoal text-cream p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 -mr-4 sm:-mr-6"
                aria-label="Next services"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Mobile Grid - Show all services, adaptive height */}
          <div className="block sm:hidden">
            <StaggeredCards 
              staggerDelay={0.5}
              direction="up"
              className="grid grid-cols-1 gap-4"
            >
              {mobileServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative ${
                    mobileServices.length <= 2 ? 'h-80' : 
                    mobileServices.length <= 4 ? 'h-72' : 'h-64'
                  } overflow-hidden group cursor-pointer`}
                >
                  {/* Background Image */}
                  <SafariImage
                    src={service.heroImage}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="100vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent group-hover:from-charcoal/80 transition-all duration-300" />
                  
                  {/* Content Container - Flex layout from bottom */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex flex-col-reverse space-y-reverse space-y-2">
                      {/* Description - Slides up from collapsed state */}
                      <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
                        <Body className="text-cream text-xs leading-relaxed">
                          {service.shortDescription}
                        </Body>
                      </div>
                      
                      {/* Title - Always visible, positioned above description */}
                      <div className="mb-2">
                        <h3 className="text-cream text-h3 font-display leading-tight break-words">
                          {service.serviceName}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredCards>
          </div>

          {/* Desktop/Tablet Grid - Carousel with fixed 4 columns */}
          <div className="hidden sm:block">
            <StaggeredCards 
              staggerDelay={0.5}
              direction="up"
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {desktopServices.map((service, index) => (
                service ? (
                  <div
                    key={service.id}
                    className="relative h-72 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden group cursor-pointer"
                  >
                    {/* Background Image */}
                    <SafariImage
                      src={service.heroImage}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent group-hover:from-charcoal/80 transition-all duration-300" />
                    
                    {/* Content Container - Flex layout from bottom */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex flex-col-reverse space-y-reverse space-y-3">
                        {/* Description - Slides up from collapsed state */}
                        <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
                          <Body className="text-cream text-sm md:text-base leading-relaxed">
                            {service.shortDescription}
                          </Body>
                        </div>
                        
                        {/* Title - Always visible, positioned above description */}
                        <div className="mb-3">
                          <h3 className="text-cream text-h3 font-display leading-tight break-words">
                            {service.serviceName}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Empty slot to maintain grid structure
                  <div
                    key={`empty-${index}`}
                    className="relative h-72 md:h-80 lg:h-96 xl:h-[500px] invisible"
                  />
                )
              ))}
            </StaggeredCards>
          </div>

          {/* Page Indicators - Only show on desktop/tablet if multiple pages */}
          {hasMultiplePages && (
            <div className="hidden sm:flex justify-center space-x-2 mt-6 sm:mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentPage 
                      ? 'bg-charcoal scale-125' 
                      : 'bg-charcoal/30 hover:bg-charcoal/60'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default OurServices;
