'use client';

import { Header, Footer } from '@/components/layout';
import { Container, Section, H2, Body } from '@/components/ui';
import { CTA, CaseStudyNavigation } from '@/components/sections';
import SafariImage from '@/components/ui/SafariImage';

export default function DaranaPhotoshootPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Sticky Case Study Navigation */}
      <CaseStudyNavigation currentId="darana-photoshoot" />

      {/* Hero Section */}
      <Section background="white" padding="none" className="relative">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <SafariImage
            src="/images/darana.webp"
            alt="Darana Switzerland luxury photoshoot at Four Seasons Hotel Gammarth"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <H2 className="text-[#E4E2DD] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display mb-3 sm:mb-4">
                Product Shooting for Darana Switzerland
              </H2>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-0">
            
            {/* Project Details */}
            <div className="bg-sand border border-charcoal/20 p-6 rounded-lg">
              <H2 className="text-charcoal text-xl font-display mb-4">Project Details</H2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-charcoal">
                <div>
                  <strong>Client:</strong> Darana Switzerland
                </div>
                <div>
                  <strong>Date:</strong> August 20, 2024
                </div>
                <div>
                  <strong>Location:</strong> Four Seasons Hotel, Gammarth
                </div>
              </div>
            </div>
            
            {/* Context & Objectives */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Context & Objectives</H2>
              <Body className="text-charcoal text-lg leading-relaxed mb-4">
                Darana Switzerland, a premium cosmetics brand operating across Switzerland and Europe, sought to create a <strong>luxury lifestyle brand shoot</strong> in Tunis. The objective was to:
              </Body>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li>Capture stunning visuals that embodied the elegance and sophistication of Darana&apos;s brand.</li>
                <li>Blend Mediterranean authenticity with global luxury aesthetics.</li>
                <li>Produce versatile content for use across marketing campaigns, social media, and digital platforms.</li>
                <li>Ensure seamless execution for an international client unfamiliar with local logistics.</li>
              </ul>
            </div>

            {/* Creative Direction */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Creative Direction</H2>
              <Body className="text-charcoal text-lg leading-relaxed mb-4">
                Our agency took charge of the <strong>creative direction</strong> to align the shoot with Darana&apos;s brand DNA. Key steps included:
              </Body>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li>Developing a <strong>visual concept</strong> inspired by Mediterranean luxury, natural beauty, and timeless elegance.</li>
                <li>Selecting the <strong>Four Seasons Hotel Gammarth</strong> as the venue — offering breathtaking backdrops and premium settings.</li>
                <li>Casting and coordinating <strong>professional models</strong> who embodied the brand&apos;s style and values.</li>
                <li>Engaging <strong>top photographers and stylists</strong> to deliver world-class production value.</li>
                <li>Managing hair, makeup, and wardrobe styling to ensure cohesion with the brand&apos;s aesthetic.</li>
              </ul>
            </div>

            {/* Execution */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Execution</H2>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li><strong>Pre-production:</strong> Mood boards, shoot planning, location scouting, and casting.</li>
                <li><strong>Production day:</strong> Full coordination of photographers, models, styling team, and client representatives. On-site creative direction to ensure every detail aligned with the brand story.</li>
                <li><strong>Post-production:</strong> Selection and delivery of high-quality imagery ready for campaign deployment.</li>
              </ul>
            </div>

            {/* Client Testimonial */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Client Testimonial</H2>
              <div className="bg-charcoal/5 border-l-4 border-charcoal p-6 rounded-r-lg">
                <blockquote className="text-charcoal text-lg leading-relaxed italic mb-4">
                  &ldquo;Working with Crafted Experiences has been an absolute pleasure. They helped us organize our shooting for Darana in Tunis, and everything was handled with outstanding professionalism and care. As a Swiss company, we were truly impressed and very happy with their services. Their attention to detail, creativity, and dedication made the whole experience seamless. I couldn&apos;t recommend them more for anyone looking to create unforgettable travel and event experiences.&rdquo;
                </blockquote>
                <cite className="text-charcoal font-display text-lg">
                  — Darana Switzerland
                </cite>
              </div>
            </div>

            {/* Results & Impact */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Results & Impact</H2>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li><strong>High-end visual assets:</strong> A library of luxury brand imagery tailored for Darana&apos;s European campaigns.</li>
                <li><strong>Seamless coordination:</strong> Delivered a stress-free experience for an international client working abroad.</li>
                <li><strong>Enhanced brand storytelling:</strong> The shoot visually translated Darana&apos;s values of elegance, quality, and care.</li>
                <li><strong>Client satisfaction:</strong> A delighted client, praising our professionalism, creativity, and attention to detail.</li>
              </ul>
            </div>

            {/* Our Value Added */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Our Value Added</H2>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li>Expertise in blending <strong>creative direction and flawless execution</strong>.</li>
                <li>Strong <strong>network of local talent</strong> (photographers, models, stylists) to deliver world-class results.</li>
                <li>Ability to manage <strong>end-to-end logistics</strong> for international clients, ensuring peace of mind.</li>
                <li>Commitment to producing <strong>brand-defining experiences</strong> that resonate globally.</li>
              </ul>
            </div>

          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
