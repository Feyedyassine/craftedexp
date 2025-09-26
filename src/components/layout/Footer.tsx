import Link from 'next/link';
import Image from 'next/image';
import { Container, H3, Body } from '@/components/ui';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-black text-cream ${className}`}>
      <Container size="xl">
        <div className="py-12 sm:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="mb-4">
                <Image
                  src="/icons/logo_horizental.svg"
                  alt="Crafted Experiences"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <Body className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Creating unforgettable moments through tailored travel and event experiences for corporations and individuals who seek more than the ordinary.
              </Body>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <H3 className="text-cream text-lg sm:text-xl font-display mb-4">
                Our Services
              </H3>
              <div className="space-y-2">
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/" className="hover:text-cream transition-colors">
                    For Corporate
                  </Link>
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/" className="hover:text-cream transition-colors">
                    For Individuals
                  </Link>
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/contact" className="hover:text-cream transition-colors">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="space-y-4">
              <H3 className="text-cream text-lg sm:text-xl font-display mb-4">
                Success Stories
              </H3>
              <div className="space-y-2">
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/case-studies/porsche-taycan-launch" className="hover:text-cream transition-colors">
                    Porsche Taycan Launch
                  </Link>
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/case-studies/green-growth-summit" className="hover:text-cream transition-colors">
                    Green Growth Summit
                  </Link>
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/case-studies/darana-photoshoot" className="hover:text-cream transition-colors">
                    Darana Photoshoot
                  </Link>
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/case-studies/padel-master-tournament" className="hover:text-cream transition-colors">
                    Padel Master Tournament
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <H3 className="text-cream text-lg sm:text-xl font-display mb-4">
                Contact Us
              </H3>
              <div className="space-y-3">
                <div className="text-cream/80 text-sm sm:text-base">
                  <a 
                    href="tel:+21628780000" 
                    className="hover:text-cream transition-colors"
                  >
                    +216 28 780 000
                  </a>
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  <Link href="/contact" className="hover:text-cream transition-colors">
                    Contact Form
                  </Link>
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  <span>Monday - Friday</span>
                  <br />
                  <span className="text-cream/60">9:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-cream/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-cream/60 text-xs sm:text-sm">
                © 2024 Crafted Experiences. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-cream/60 hover:text-cream text-xs sm:text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-cream/60 hover:text-cream text-xs sm:text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
