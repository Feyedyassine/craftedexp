'use client';

import { Header, Footer } from '@/components/layout';
import { Section, Container, H2, Body } from '@/components/ui';
import { CTA, CaseStudyNavigation } from '@/components/sections';
import SafariImage from '@/components/ui/SafariImage';

export default function PadelMasterTournamentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Sticky Case Study Navigation */}
      <CaseStudyNavigation currentId="padel-master-tournament" />
      
      {/* Hero Section */}
      <Section background="white" padding="none" className="relative">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <SafariImage
            src="/images/padel.webp"
            alt="Padel Master Tournament at Magic Hôtel El Manar"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <H2 className="text-[#E4E2DD] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display mb-3 sm:mb-4">
                Padel Master Tournament
              </H2>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" padding="lg" className="py-8 sm:py-16 lg:py-20">
        <Container size="xl">
          {/* Project Details */}
          <div className="bg-sand p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg mb-8 sm:mb-12 lg:mb-16">
            <H2 className="text-xl sm:text-2xl lg:text-3xl font-display mb-4 sm:mb-6">Project Details</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="text-sm sm:text-base lg:text-lg">
                <strong>Client:</strong> Magic Hôtels
              </div>
              <div className="text-sm sm:text-base lg:text-lg">
                <strong>Date:</strong> April 17 – May 3, 2025
              </div>
              <div className="text-sm sm:text-base lg:text-lg">
                <strong>Location:</strong> Magic Hôtel El Manar, Hammamet
              </div>
              <div className="text-sm sm:text-base lg:text-lg">
                <strong>Prize Money:</strong> Over 75,000 DT
              </div>
            </div>
          </div>

          {/* Context & Objectives */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 lg:mb-8">Context & Objectives</H2>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <Body className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Magic Hôtels wanted to create a <strong>flagship national sports event</strong> that would showcase the growing popularity of padel in Tunisia, strengthen its brand visibility, and engage both players and fans in a vibrant atmosphere. The <strong>Padel Master Tournament</strong> was designed to:
              </Body>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 lg:space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed pl-4 sm:pl-6">
                <li>Offer a professional and entertaining competition exclusively for Tunisia&apos;s top padel players.</li>
                <li>Position Magic Hôtel El Manar as a destination for both leisure and sports excellence.</li>
                <li>Deliver an engaging spectacle combining competition, hospitality, and entertainment.</li>
                <li>Elevate the status of padel in Tunisia through a well-structured, high-quality tournament.</li>
              </ul>
            </div>
          </div>

          {/* Creative Concept */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 lg:mb-8">Creative Concept</H2>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <Body className="text-base sm:text-lg lg:text-xl leading-relaxed">
                The tournament was built around three core pillars: <strong>competition, community, and celebration.</strong>
              </Body>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 lg:space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed pl-4 sm:pl-6">
                <li><strong>Competition:</strong> Over two weeks, the country&apos;s best padel players faced off in high-intensity matches for more than <strong>75,000 DT in prize money</strong>.</li>
                <li><strong>Community:</strong> The event created a friendly yet prestigious environment, attracting sports enthusiasts, local fans, and hotel guests.</li>
                <li><strong>Celebration:</strong> Beyond the courts, the event included entertainment, hospitality experiences, and opportunities for guests to engage with the players and the sport.</li>
              </ul>
            </div>
          </div>

          {/* Execution */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 lg:mb-8">Execution</H2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 lg:space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed pl-4 sm:pl-6">
              <li><strong>Tournament Setup:</strong> Professional padel courts prepared to international standards, with seating for spectators.</li>
              <li><strong>Player Management:</strong> Coordination with the best Tunisian players, match scheduling, refereeing, and prize distribution.</li>
              <li><strong>Hospitality & Guest Experience:</strong> Integration of Magic Hôtel El Manar&apos;s premium services — accommodations, catering, and entertainment — to create a festival-like atmosphere.</li>
              <li><strong>Media & Communication:</strong> Promotion before and during the tournament, live updates, and post-event highlights to maximize reach and visibility.</li>
              <li><strong>Logistics & Operations:</strong> End-to-end management of registrations, player coordination, sponsors, and on-site production.</li>
            </ul>
          </div>

          {/* Event Highlights */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 lg:mb-8">Event Highlights</H2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 lg:space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed pl-4 sm:pl-6">
              <li><strong>Over 75,000 DT prize money</strong> awarded, setting a new benchmark for padel in Tunisia.</li>
              <li><strong>Top-level competition</strong> featuring the country&apos;s best players in a friendly yet professional setting.</li>
              <li><strong>Strong audience turnout</strong> with enthusiastic spectators supporting matches throughout the tournament.</li>
              <li><strong>Vibrant atmosphere</strong> blending sport, leisure, and hospitality in Hammamet&apos;s iconic seaside location.</li>
            </ul>
          </div>

          {/* Results & Impact */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 lg:mb-8">Results & Impact</H2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 lg:space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed pl-4 sm:pl-6">
              <li><strong>National recognition:</strong> Positioned Magic Hôtel El Manar as a key venue for sports and lifestyle events.</li>
              <li><strong>Brand engagement:</strong> Strengthened Magic Hôtels&apos; image as a promoter of culture, wellness, and community.</li>
              <li><strong>Sporting legacy:</strong> Contributed to the growth of padel in Tunisia by organizing one of the country&apos;s most prestigious tournaments.</li>
              <li><strong>Memorable experiences:</strong> Delivered an event that was equal parts intense competition and friendly celebration.</li>
            </ul>
          </div>

          {/* Our Value Added */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 lg:mb-8">Our Value Added</H2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 lg:space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed pl-4 sm:pl-6">
              <li>Expertise in <strong>sports event management</strong>, from planning to execution.</li>
              <li>Ability to blend <strong>hospitality with high-level competition</strong>, creating a unique experience for both players and audiences.</li>
              <li>Strong coordination across <strong>logistics, media, and guest relations</strong> to ensure a seamless event.</li>
              <li>Dedication to elevating <strong>Tunisian sports culture</strong> while showcasing the client&apos;s brand values.</li>
            </ul>
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
