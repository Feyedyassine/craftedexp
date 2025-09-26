'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CaseStudyNavigationProps {
  currentId: string;
  className?: string;
}

// Define the case study order
const caseStudyOrder = [
  'porsche-taycan-launch',
  'green-growth-summit', 
  'darana-photoshoot',
  'padel-master-tournament'
];

const caseStudyTitles = {
  'porsche-taycan-launch': 'Porsche Taycan Launch',
  'green-growth-summit': 'Green Growth Summit',
  'darana-photoshoot': 'Photoshoot for Darana',
  'padel-master-tournament': 'Padel Master Tournament'
};

export function CaseStudyNavigation({ currentId, className }: CaseStudyNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const currentIndex = caseStudyOrder.indexOf(currentId);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : caseStudyOrder.length - 1;
  const nextIndex = currentIndex < caseStudyOrder.length - 1 ? currentIndex + 1 : 0;
  
  const prevId = caseStudyOrder[prevIndex];
  const nextId = caseStudyOrder[nextIndex];
  
  const prevTitle = caseStudyTitles[prevId as keyof typeof caseStudyTitles];
  const nextTitle = caseStudyTitles[nextId as keyof typeof caseStudyTitles];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setLastScrollY(currentScrollY);

      // Clear existing timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      // Show navigation when scrolling up
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
        
        // Set timeout to hide after scrolling stops
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 2000); // 2 second delay
        
        setHideTimeout(timeout);
      }
      // Hide navigation when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [lastScrollY, hideTimeout]);

  return (
    <>
      {/* Mobile Navigation - Scroll-triggered at top */}
      <div className={`fixed top-16 left-0 right-0 z-50 pointer-events-auto sm:hidden transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="flex justify-between items-center px-4 backdrop-blur-sm">
          {/* Previous Case Study */}
          <div className="flex-1">
            <Link href={`/case-studies/${prevId}`}>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center space-x-2 bg-white border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-3 py-2 shadow-sm group cursor-pointer"
              >
                <ChevronLeft className="w-3 h-3" />
                <div className="text-left">
                  <div className="text-xs text-charcoal/70 group-hover:text-cream">Previous</div>
                  <div className="text-xs font-medium truncate">{prevTitle}</div>
                </div>
              </Button>
            </Link>
          </div>

          {/* Next Case Study */}
          <div className="flex-1 ml-2">
            <Link href={`/case-studies/${nextId}`}>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center space-x-2 bg-white border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-3 py-2 shadow-sm group cursor-pointer"
              >
                <div className="text-right">
                  <div className="text-xs text-charcoal/70 group-hover:text-cream">Next</div>
                  <div className="text-xs font-medium truncate">{nextTitle}</div>
                </div>
                <ChevronRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Scroll-triggered */}
      <div className={`hidden sm:block fixed left-0 right-0 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      } ${className}`}>
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Previous Case Study */}
          <div className="flex-1 pointer-events-auto">
            <Link href={`/case-studies/${prevId}`}>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-4 sm:px-6 py-3 shadow-lg group cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm text-charcoal/70 group-hover:text-cream">Previous</div>
                  <div className="text-sm sm:text-base font-medium">{prevTitle}</div>
                </div>
              </Button>
            </Link>
          </div>

          {/* Next Case Study */}
          <div className="flex-1 flex justify-end pointer-events-auto">
            <Link href={`/case-studies/${nextId}`}>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-4 sm:px-6 py-3 shadow-lg group cursor-pointer"
              >
                <div className="text-right">
                  <div className="text-xs sm:text-sm text-charcoal/70 group-hover:text-cream">Next</div>
                  <div className="text-sm sm:text-base font-medium">{nextTitle}</div>
                </div>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Center - Back to Homepage - Scroll-triggered */}
      <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0 bottom-4' : 'opacity-0 translate-y-4 bottom-0'
      }`}>
        <div className="pointer-events-auto">
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="bg-charcoal text-cream border-charcoal hover:bg-cream hover:text-charcoal px-4 sm:px-6 py-3 shadow-lg cursor-pointer"
            >
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
