'use client';

import { Header } from '@/components/layout';
import { Container, Section, H2, Body, Button } from '@/components/ui';
import Image from 'next/image';

export default function PorscheTaycanLaunchPage() {
  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[70vh] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        <Image
          src="/images/porsche.webp"
          alt="Porsche Taycan launch event in Tunisia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream max-w-4xl px-4">
            <H2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display mb-4 sm:mb-6 text-[#E4E2DD]">
              Launch of the Porsche Taycan in Tunisia
            </H2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <Section background="white" padding="lg">
        <Container size="xl">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-0">
            
            {/* Project Details */}
            <div className="bg-sand p-4 sm:p-6 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div>
                  <strong className="text-charcoal">Client:</strong> Porsche Centre Tunis / Ennakl Automobiles
                </div>
                <div>
                  <strong className="text-charcoal">Date:</strong> June 25, 2021
                </div>
                <div>
                  <strong className="text-charcoal">Venue:</strong> Club House, Gammarth, Tunis
                </div>
                <div>
                  <strong className="text-charcoal">Organized by:</strong> Crafted Experiences
                </div>
              </div>
            </div>

            {/* Context & Objectives */}
            <div className="space-y-4 sm:space-y-6">
              <H2 className="text-charcoal text-xl sm:text-2xl md:text-3xl font-display">
                Context & Objectives
              </H2>
              <Body className="text-charcoal text-base sm:text-lg leading-relaxed">
                Porsche, through its local dealer Ennakl Automobiles, wanted to mark the arrival of the <strong>Taycan</strong>, its first 100% electric sports car, on the Tunisian market. The challenge was to deliver a powerful brand experience, combining prestige, innovation, and technology, while positioning Porsche as a credible player in Tunisia&apos;s electric mobility space.
              </Body>
              <div className="bg-charcoal/5 p-4 sm:p-6 rounded-lg">
                <h3 className="text-charcoal font-display text-base sm:text-lg mb-3 sm:mb-4">Specific Objectives:</h3>
                <ul className="space-y-2 text-charcoal text-sm sm:text-base">
                  <li>• Generate national media buzz around the launch</li>
                  <li>• Offer guests an immersive experience in the Porsche universe and the Taycan promise</li>
                  <li>• Reinforce Ennakl / Porsche&apos;s premium and technology-driven image in Tunisia</li>
                  <li>• Create opportunities for test drives and qualified contacts for the dealership</li>
                </ul>
              </div>
            </div>

            {/* Creative Concept */}
            <div className="space-y-6">
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display">
                Creative Concept
              </H2>
              <Body className="text-charcoal text-lg leading-relaxed">
                To achieve these objectives, the agency designed an event experience that embodied the brand&apos;s core values: performance, design, avant-garde, and luxury.
              </Body>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-charcoal font-display text-lg">Key Elements:</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li>• Carefully staged reveal in an exclusive venue</li>
                    <li>• Immersive journey: welcome, speeches, entertainment, vehicle reveal</li>
                    <li>• High-value visual content and lighting design</li>
                    <li>• Close coordination with Porsche/Ennakl on technical content</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-charcoal font-display text-lg">Event Management:</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li>• End-to-end event management</li>
                    <li>• VIP hospitality and security</li>
                    <li>• Professional catering and staging</li>
                    <li>• Sound & lighting, logistics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Event Flow */}
            <div className="space-y-6">
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display">
                Event Flow & Highlights
              </H2>
              <div className="space-y-4">
                <div className="border-l-4 border-charcoal pl-4">
                  <h3 className="text-charcoal font-display text-lg">Guest Welcome & Reception</h3>
                  <Body className="text-charcoal">Guests were greeted in a prestigious setting with a personalized welcome, lounge area, and light entertainment.</Body>
                </div>
                <div className="border-l-4 border-charcoal pl-4">
                  <h3 className="text-charcoal font-display text-lg">Speeches & Introduction</h3>
                  <Body className="text-charcoal">Ennakl&apos;s CEO introduced Porsche&apos;s vision for electric mobility in Tunisia and presented the arrival of the Taycan.</Body>
                </div>
                <div className="border-l-4 border-charcoal pl-4">
                  <h3 className="text-charcoal font-display text-lg">Vehicle Reveal</h3>
                  <Body className="text-charcoal">Dramatic unveiling of the Taycan with lighting effects and music — the emotional highlight of the evening.</Body>
                </div>
                <div className="border-l-4 border-charcoal pl-4">
                  <h3 className="text-charcoal font-display text-lg">Technical Presentation</h3>
                  <Body className="text-charcoal">Detailed overview of the Taycan&apos;s performance, technology, and features (power, range, charging, design).</Body>
                </div>
                <div className="border-l-4 border-charcoal pl-4">
                  <h3 className="text-charcoal font-display text-lg">Engagement & Interaction</h3>
                  <Body className="text-charcoal">Guests explored the vehicle, engaged with experts, and discovered its innovative features.</Body>
                </div>
                <div className="border-l-4 border-charcoal pl-4">
                  <h3 className="text-charcoal font-display text-lg">Media & Content Capture</h3>
                  <Body className="text-charcoal">Professional photo and video opportunities, with strong media and influencer presence.</Body>
                </div>
                <div className="border-l-4 border-charcoal pl-4">
                  <h3 className="text-charcoal font-display text-lg">Closing Cocktail & Networking</h3>
                  <Body className="text-charcoal">A convivial moment for conversations, networking, and relationship-building.</Body>
                </div>
              </div>
            </div>

            {/* Results & Impact */}
            <div className="space-y-6">
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display">
                Results & Impact
              </H2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-charcoal/5 p-4 rounded-lg">
                    <h3 className="text-charcoal font-display text-lg mb-2">Media Coverage</h3>
                    <Body className="text-charcoal">Widespread national coverage in automotive and general media (articles, features).</Body>
                  </div>
                  <div className="bg-charcoal/5 p-4 rounded-lg">
                    <h3 className="text-charcoal font-display text-lg mb-2">Brand Positioning</h3>
                    <Body className="text-charcoal">Porsche/Ennakl strengthened its credibility in the premium electric segment.</Body>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-charcoal/5 p-4 rounded-lg">
                    <h3 className="text-charcoal font-display text-lg mb-2">Memorable Experience</h3>
                    <Body className="text-charcoal">Guests left with a strong emotional and technological impression of the Taycan.</Body>
                  </div>
                  <div className="bg-charcoal/5 p-4 rounded-lg">
                    <h3 className="text-charcoal font-display text-lg mb-2">Business Impact</h3>
                    <Body className="text-charcoal">New prospects and client opportunities generated for the dealership.</Body>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center pt-8">
              <Button 
                variant="outline" 
                className="bg-charcoal text-cream border-charcoal hover:bg-cream hover:text-charcoal"
                onClick={() => window.location.href = '/'}
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
