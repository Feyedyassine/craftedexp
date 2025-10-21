'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import SafariImage from '@/components/ui/SafariImage';

interface HeaderProps {
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}



const leftNavItems: NavItem[] = [
  { label: 'About Us', href: '/about', isActive: false },
  { label: 'Our Services', href: '/#our-services', isActive: false },
  { label: 'Our Portfolio', href: '/case-studies', isActive: false },
];

const rightNavItems: NavItem[] = [
  { label: 'Corporate', href: '/for-corporate', isActive: false },
  { label: 'Leisure', href: '/for-individuals', isActive: false },
];

export function Header({ className }: HeaderProps) {
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        // Get the hero section height (assuming it's full viewport height)
        const heroHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        
        // Show logo when scrolled past hero section
        setShowLogo(scrollPosition > heroHeight * 0.8);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // For non-home pages, always show the logo
      setShowLogo(true);
    }
  }, [isHomePage]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for premium feel
        delay: 0.2 
      }}
      className={cn(
        'z-50 transition-all duration-500 ease-in-out border-b',
        showLogo || isMobileMenuOpen
          ? 'sticky top-0 bg-black text-cream border-black/20' 
          : 'absolute top-0 left-0 right-0 bg-transparent text-white border-transparent',
        className
      )}>
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center h-12 sm:h-16">
          {/* Mobile Menu Button - Only visible on mobile */}
          <button 
            onClick={toggleMobileMenu}
            className={cn(
              'lg:hidden p-1.5 mr-3',
              isMobileMenuOpen 
                ? 'text-cream hover:text-charcoal transition-colors duration-200' 
                : showLogo
                  ? 'text-cream hover:text-charcoal transition-colors duration-500 ease-in-out'
                  : 'text-white hover:text-cream drop-shadow-lg transition-colors duration-500 ease-in-out'
            )}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5"
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
                className="w-5 h-5"
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

          {/* Horizontal Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <SafariImage
                src="/icons/logo_horizental.svg"
                alt="Crafted Experiences"
                width={200}
                height={60}
                className="h-6 sm:h-8 lg:h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          {/* Left Navigation Menu - Desktop */}
          <div className="hidden lg:block ml-6">
            <nav className="flex items-center space-x-6">
              {leftNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'font-medium text-sm relative group',
                    isMobileMenuOpen 
                      ? 'text-cream hover:text-charcoal transition-colors duration-200' 
                      : showLogo
                        ? 'text-cream hover:text-charcoal transition-colors duration-500 ease-in-out'
                        : 'text-white hover:text-cream drop-shadow-lg transition-colors duration-500 ease-in-out'
                  )}
                >
                  {item.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 ease-in-out group-hover:w-full',
                    showLogo || isMobileMenuOpen ? 'bg-charcoal' : 'bg-cream'
                  )} />
                </a>
              ))}
            </nav>
          </div>

          {/* Spacer to push right section to the right */}
          <div className="flex-1" />

          {/* Right Navigation Menu - Desktop */}
          <div className="hidden lg:block mr-6">
            <nav className="flex items-center space-x-6">
              {rightNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'font-medium text-sm relative group',
                    isMobileMenuOpen 
                      ? 'text-cream hover:text-charcoal transition-colors duration-200' 
                      : showLogo
                        ? 'text-cream hover:text-charcoal transition-colors duration-500 ease-in-out'
                        : 'text-white hover:text-cream drop-shadow-lg transition-colors duration-500 ease-in-out'
                  )}
                >
                  {item.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 ease-in-out group-hover:w-full',
                    showLogo || isMobileMenuOpen ? 'bg-charcoal' : 'bg-cream'
                  )} />
                </a>
              ))}
            </nav>
          </div>

          {/* Right Section - Phone and CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Phone Number - Hidden on very small screens */}
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
              <svg
                className={cn(
                  'w-3 h-3 sm:w-4 sm:h-4',
                  isMobileMenuOpen 
                    ? 'text-charcoal transition-colors duration-200' 
                    : showLogo
                      ? 'text-charcoal transition-colors duration-500 ease-in-out'
                      : 'text-white drop-shadow-lg transition-colors duration-500 ease-in-out'
                )}
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
                href="tel:+21628780000"
                className={cn(
                  'text-xs sm:text-sm font-medium',
                  isMobileMenuOpen 
                    ? 'text-cream hover:text-charcoal transition-colors duration-200' 
                    : showLogo
                      ? 'text-cream hover:text-charcoal transition-colors duration-500 ease-in-out'
                      : 'text-white hover:text-cream drop-shadow-lg transition-colors duration-500 ease-in-out'
                )}
              >
                <span className="hidden sm:inline">+216 28 780 000</span>
                <span className="sm:hidden">+216 28 780 000</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  'font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 cursor-pointer',
                  isMobileMenuOpen 
                    ? 'bg-cream text-charcoal border-cream hover:bg-charcoal hover:text-cream transition-all duration-200' 
                    : showLogo
                      ? 'bg-cream text-charcoal border-cream hover:bg-charcoal hover:text-cream transition-all duration-500 ease-in-out'
                      : 'bg-white/90 text-charcoal border-white/90 hover:bg-white hover:text-charcoal drop-shadow-lg transition-all duration-500 ease-in-out'
                )}
              >
                Talk To Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          'lg:hidden transition-all duration-500 ease-in-out overflow-hidden bg-black',
          showLogo || isMobileMenuOpen ? 'border-t border-black/20' : 'border-t border-white/20',
          isMobileMenuOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0'
        )}>
          <nav className="pt-4">
            <div className="space-y-4">
              {/* Left Navigation Items */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                  Company
                </h3>
                <div className="space-y-2">
                  {leftNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block transition-colors duration-200 font-medium py-2 text-sm text-cream hover:text-charcoal"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Navigation Items */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                  Services
                </h3>
                <div className="space-y-2">
                  {rightNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block transition-colors duration-200 font-medium py-2 text-sm text-cream hover:text-charcoal"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

      </div>
    </motion.header>
  );
}
