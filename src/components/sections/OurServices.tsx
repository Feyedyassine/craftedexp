'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Section, H2, Body } from '@/components/ui';

interface OurServicesProps {
  className?: string;
}

const OurServices: React.FC<OurServicesProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'corporate' | 'individuals'>('corporate');

  const corporateServices = [
    {
      id: 'trade-shows',
      image: '/images/tradeshow.webp',
      title: 'Trade Shows',
      description: 'Professional trade show planning and execution for corporate clients with measurable ROI and seamless coordination.',
    },
    {
      id: 'conferences',
      image: '/images/conference.webp',
      title: 'Conferences',
      description: 'Large-scale conference management with state-of-the-art facilities and comprehensive support services.',
    },
    {
      id: 'incentive-trips',
      image: '/images/trip.webp',
      title: 'Incentive Trips',
      description: 'Reward and motivate your team with carefully designed incentive travel programs that inspire and engage.',
    },
    {
      id: 'team-building',
      image: '/images/teambuilding.webp',
      title: 'Team Building',
      description: 'Creative team building experiences that strengthen relationships and boost workplace collaboration.',
    },
    {
      id: 'product-launches',
      image: '/images/productlaunch.webp',
      title: 'Product Launches',
      description: 'Memorable product launch events that create buzz and generate maximum impact in the market.',
    },
  ];

  const individualServices = [
    {
      id: 'luxury-travel',
      image: '/images/luxurytravel.webp',
      title: 'Luxury Travel',
      description: 'Personalized travel experiences crafted for discerning travelers seeking authentic moments and exclusive access.',
    },
    {
      id: 'honeymoon',
      image: '/images/Honeymoon.webp',
      title: 'Honeymoon',
      description: 'Romantic getaways designed for couples celebrating their special union with unforgettable experiences.',
    },
    {
      id: 'family-trips',
      image: '/images/familytrip.webp',
      title: 'Family Trips',
      description: 'Memorable family vacations that create lasting bonds and provide fun for all ages.',
    },
    {
      id: 'solo-travel',
      image: '/images/solotravel.webp',
      title: 'Solo Travel',
      description: 'Empowering solo adventures that offer personal growth, self-discovery, and meaningful connections.',
    },
    {
      id: 'adventure-travel',
      image: '/images/adventure.webp',
      title: 'Adventure Travel',
      description: 'Thrilling outdoor experiences for adrenaline seekers and nature enthusiasts.',
    },
  ];

  const currentServices = activeTab === 'corporate' ? corporateServices : individualServices;

  return (
    <Section background="sand" padding="xl" className={className}>
      <Container size="xl">
        {/* Section Title and Tabs */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 sm:mb-12 md:mb-16 space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <H2 className="text-charcoal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-2">
              Our Services
            </H2>
            <p className="text-charcoal/70 text-sm md:text-base">
              Curated experiences for every occasion
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-1 bg-cream/20 p-1 mx-auto lg:mx-0">
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'corporate'
                  ? 'bg-charcoal text-white'
                  : 'text-black hover:bg-cream/10'
              }`}
            >
              For Corporate
            </button>
            <button
              onClick={() => setActiveTab('individuals')}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'individuals'
                  ? 'bg-charcoal text-white'
                  : 'text-black hover:bg-cream/10'
              }`}
            >
              For Individuals
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {currentServices.map((service) => (
             <div
               key={service.id}
               className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden group cursor-pointer"
             >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent group-hover:from-charcoal/80 transition-all duration-300" />
              
              {/* Content Container - Flex layout from bottom */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                <div className="flex flex-col-reverse space-y-reverse space-y-2 sm:space-y-3">
                  {/* Description - Slides up from collapsed state */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-24 sm:group-hover:max-h-32 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
                     <Body className="text-cream text-xs sm:text-sm md:text-base leading-relaxed">
                       {service.description}
                     </Body>
                  </div>
                  
                   {/* Title - Always visible, positioned above description */}
                   <div className="mb-2 sm:mb-3">
                     <h3 className="text-cream text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-display leading-tight break-words">
                       {service.title}
                     </h3>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurServices;
