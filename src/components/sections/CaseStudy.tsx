'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Section, H2, Body, Button } from '@/components/ui';
import Image from 'next/image';

interface CaseStudyProps {
  className?: string;
}

interface CaseStudyData {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  imageAlt: string;
}

const caseStudies: CaseStudyData[] = [
  {
    id: 'porsche-taycan-launch',
    title: 'Porsche Taycan Launch',
    description: 'ENNAKL Automobile introduced the brand\'s first 100% electric sports car with an exclusive launch event in Gammarth.',
    challenge: 'Create a high-impact product launch that combined prestige, innovation, and technical credibility while positioning Porsche as a leader in electric mobility in Tunisia.',
    solution: 'Our agency designed and delivered a premium experience with a dramatic reveal, immersive brand storytelling, seamless logistics, and strong media and influencer engagement.',
    results: 'Widespread press coverage, strengthened brand positioning in the electric segment, memorable experiences for VIP guests, and valuable new client leads for Porsche/Ennakl.',
    image: '/images/porsche.webp',
    imageAlt: 'Porsche Taycan launch event in Tunisia'
  },
  {
    id: 'green-growth-summit',
    title: 'Green Growth Summit',
    description: 'New Silk Roads x Hivos convened bold voices and visionary minds from Tunisia and the MENA region to drive dialogue on green justice and sustainable development.',
    challenge: 'Host a summit that not only inspired climate ambition but also fostered meaningful cross-sector collaboration and positioned Tunisia as a hub for green transition in the region.',
    solution: 'Our agency delivered an impactful event with dynamic programming, eco-inspired staging, seamless logistics, and strong engagement strategies to amplify voices and connections.',
    results: 'Powerful regional dialogue, strengthened stakeholder networks, amplified media visibility, and renewed momentum for a just, green transition in Tunisia and beyond.',
    image: '/images/greensummit.jpg',
    imageAlt: 'Green Growth Summit event'
  },
  {
    id: 'darana-photoshoot',
    title: 'Photoshoot for Darana',
    description: 'Darana Switzerland, a premium cosmetics brand, partnered with our agency to create a luxury lifestyle photoshoot at the Four Seasons Hotel Gammarth.',
    challenge: 'Deliver a high-end brand shoot abroad that reflected Darana\'s elegance and values, while managing all logistics for an international client.',
    solution: 'We provided full creative direction, coordinated top photographers and professional models, and oversaw styling, makeup, and production to ensure a seamless experience.',
    results: 'Stunning visual assets for Darana\'s European campaigns, a smooth and stress-free process, and an impressed client who praised our professionalism, creativity, and attention to detail.',
    image: '/images/darana.webp',
    imageAlt: 'Darana Switzerland luxury photoshoot at Four Seasons Hotel Gammarth'
  },
  {
    id: 'padel-master-tournament',
    title: 'Padel Master Tournament',
    description: 'Magic Hôtel El Manar hosted Tunisia\'s premier Padel Master Tournament, bringing together the country\'s best players for two weeks of competition and celebration.',
    challenge: 'Organize a high-profile, 100% Tunisian tournament that combined professionalism, intensity, and entertainment, while positioning Magic Hôtels as a leader in sports and hospitality.',
    solution: 'We delivered a turnkey event with professional courts, seamless logistics, premium hospitality, and dynamic promotion — ensuring both players and guests experienced the highest standards.',
    results: 'Over 75,000 DT in prize money awarded, strong media visibility, unforgettable experiences for players and fans, and reinforced Magic Hôtels\' role in growing padel and hosting world-class events in Tunisia.',
    image: '/images/padel.jpeg',
    imageAlt: 'Padel Master Tournament at Magic Hôtel El Manar'
  }
];

export function CaseStudy({ className }: CaseStudyProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const currentCaseStudy = caseStudies[currentIndex];

  // Auto-advance carousel every 12 seconds
  useEffect(() => {
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
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsVisible(true);
      }, 800);
    }
  };

  return (
    <Section background="white" padding="xl" className={className}>
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <H2 className="text-charcoal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-3 sm:mb-4">
            Corporate Success Stories
          </H2>
          <Body className="text-charcoal/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Discover how we&apos;ve transformed experiences for some of our clients across different industries and occasions.
          </Body>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 px-4 sm:px-0 order-2 lg:order-1">
              <div>
                <H2 className="text-charcoal text-lg sm:text-xl md:text-2xl lg:text-3xl font-display mb-3 sm:mb-4">
                  {currentCaseStudy.title}
                </H2>
                <Body className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
                  {currentCaseStudy.description}
                </Body>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-charcoal font-display text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Challenge</h3>
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
                    <h3 className="text-charcoal font-display text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Solution</h3>
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
                    <h3 className="text-charcoal font-display text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Results</h3>
                    <Body className="text-charcoal/70 text-sm sm:text-base">
                      {currentCaseStudy.results}
                    </Body>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 text-center sm:text-left">
                <Link href={
                  currentCaseStudy.id === 'porsche-taycan-launch' ? '/case-studies/porsche-taycan-launch' :
                  currentCaseStudy.id === 'green-growth-summit' ? '/case-studies/green-growth-summit' :
                  currentCaseStudy.id === 'darana-photoshoot' ? '/case-studies/darana-photoshoot' :
                  currentCaseStudy.id === 'padel-master-tournament' ? '/case-studies/padel-master-tournament' :
                  '#'
                }>
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
            <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src={currentCaseStudy.image}
                alt={currentCaseStudy.imageAlt}
                fill
                className="object-cover"
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
