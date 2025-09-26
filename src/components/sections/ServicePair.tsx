'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Section, H2, Body } from '@/components/ui';

interface ServicePairProps {
  firstService: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    features: string[];
  };
  secondService: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    features: string[];
  };
}

const ServicePair: React.FC<ServicePairProps> = ({ 
  firstService, 
  secondService 
}) => {
  return (
    <>
      {/* First Service - White background, image on right */}
      <Section background="white" padding="lg" className="py-16 sm:py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 text-charcoal">
                {firstService.title}
              </H2>
              <Body className="text-base sm:text-lg lg:text-xl text-charcoal/80 leading-relaxed mb-6">
                {firstService.description}
              </Body>
              <div className="space-y-4">
                {firstService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                    <Body className="text-sm sm:text-base text-charcoal/70">
                      {feature}
                    </Body>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={firstService.image}
                  alt={firstService.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Second Service - Sand background, image on left */}
      <Section background="sand" padding="lg" className="py-16 sm:py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={secondService.image}
                  alt={secondService.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 text-charcoal">
                {secondService.title}
              </H2>
              <Body className="text-base sm:text-lg lg:text-xl text-charcoal/80 leading-relaxed mb-6">
                {secondService.description}
              </Body>
              <div className="space-y-4">
                {secondService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                    <Body className="text-sm sm:text-base text-charcoal/70">
                      {feature}
                    </Body>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServicePair;
