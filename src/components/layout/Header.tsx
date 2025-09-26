'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface SecondaryNavItem {
  label: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  { label: 'For Corporate', href: '/corporate', isActive: false },
  { label: 'For Individuals', href: '/individuals', isActive: false },
];

const secondaryNavItems: SecondaryNavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (assuming it's full viewport height)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Show logo when scrolled past hero section
      setShowLogo(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'bg-black text-cream sticky top-0 z-50',
      'border-b border-black/20',
      className
    )}>
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center h-12 sm:h-16">
          {/* Mobile Menu Button - Left aligned on mobile */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 sm:p-2 text-cream hover:text-charcoal transition-colors mr-3 sm:mr-4"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-cream hover:text-charcoal transition-colors duration-200',
                  'font-medium text-base relative group',
                  item.isActive && 'text-charcoal'
                )}
              >
                {item.label}
                {item.isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-charcoal" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-charcoal group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Spacer to push right section to the right */}
          <div className="flex-1" />

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className={cn(
              'transition-all duration-500 ease-in-out',
              showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}>
              <Image
                src="/icons/icon_logo.svg"
                alt="Crafted Experiences Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Phone Number - Always visible on mobile */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-charcoal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+1234567890"
                className="text-cream hover:text-charcoal transition-colors duration-200 text-xs sm:text-sm font-medium"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Secondary Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-3">
              {secondaryNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-cream/80 hover:text-charcoal transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-cream text-charcoal border-cream hover:bg-charcoal hover:text-cream font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
            >
              <span className="hidden sm:inline">Get a Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden border-t border-black/20 transition-all duration-300',
          isMobileMenuOpen ? 'max-h-48 opacity-100 pb-2' : 'max-h-0 opacity-0 overflow-hidden'
        )}>
          <nav className="pt-2 pb-1">
            {/* Main Nav Items */}
            <div className="space-y-1">
              {mainNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-cream hover:text-charcoal transition-colors duration-200 font-medium py-1.5 text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Secondary Nav Items */}
            <div className="space-y-1 pt-2 border-t border-black/20 mt-2">
              {secondaryNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-cream/80 hover:text-charcoal transition-colors duration-200 text-xs py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
