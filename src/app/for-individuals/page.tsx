'use client';

import { Header, Footer } from '@/components/layout';
import { Container, Section, H1, H2, Body } from '@/components/ui';
import { CTA, ServicePair } from '@/components/sections';
import Image from 'next/image';

export default function ForIndividualsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Section background="white" padding="lg" className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <div className="text-center max-w-4xl mx-auto">
            <H1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display mb-6 text-charcoal">
              Individual Excellence
            </H1>
            <Body className="text-lg sm:text-xl lg:text-2xl text-charcoal/80 leading-relaxed">
              Discover extraordinary journeys crafted exclusively for you. From luxury escapes to adventure expeditions, we design experiences that match your unique desires and create memories that last a lifetime.
            </Body>
          </div>
        </Container>
      </Section>

      {/* Luxury Travel & Honeymoon */}
      <ServicePair
        firstService={{
          title: "Luxury Travel",
          description: "For those who seek the extraordinary, we craft journeys that redefine luxury. Each itinerary is bespoke, combining handpicked destinations, unique experiences, and impeccable service, with every detail refined to perfection.",
          image: "/images/luxurytravel.jpg",
          imageAlt: "Luxury Travel",
          features: [
            "Bespoke itinerary design and planning",
            "Handpicked luxury destinations and accommodations",
            "Impeccable service with attention to every detail"
          ]
        }}
        secondService={{
          title: "Honeymoon",
          description: "Begin your forever with a journey as unique as your love story. From secluded beach escapes to cultural adventures, we create honeymoons that balance romance, discovery, and unforgettable moments made just for two.",
          image: "/images/Honeymoon.jpg",
          imageAlt: "Honeymoon",
          features: [
            "Romantic destination selection and planning",
            "Secluded beach escapes and cultural adventures",
            "Unforgettable moments crafted for couples"
          ]
        }}
      />

      {/* Family Trips & Solo Travel */}
      <ServicePair
        firstService={{
          title: "Family Trips",
          description: "Traveling together becomes effortless when every generation is cared for. Our family trips are designed with balance in mind; engaging activities for children, relaxation for adults, and meaningful experiences to enjoy together.",
          image: "/images/familytrip.jpg",
          imageAlt: "Family Trips",
          features: [
            "Multi-generational trip planning and coordination",
            "Engaging activities for children and relaxation for adults",
            "Meaningful experiences for the whole family"
          ]
        }}
        secondService={{
          title: "Solo Travel",
          description: "For the independent explorer, we curate solo journeys that combine freedom with security. Each experience is designed to empower discovery, while ensuring comfort and authentic encounters along the way.",
          image: "/images/solotravel.jpg",
          imageAlt: "Solo Travel",
          features: [
            "Independent journey curation and planning",
            "Freedom with security and comfort",
            "Authentic encounters and empowering discoveries"
          ]
        }}
      />

      {/* Adventure Travel - Standalone section */}
      <Section background="white" padding="lg" className="py-16 sm:py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 text-charcoal">
                Adventure Travel
              </H2>
              <Body className="text-base sm:text-lg lg:text-xl text-charcoal/80 leading-relaxed mb-6">
                For those who crave the thrill of the unknown, we open doors to the world&apos;s most exhilarating adventures. From mountain trails to desert safaris, our itineraries balance excitement with safety; creating stories worth telling.
              </Body>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                  <Body className="text-sm sm:text-base text-charcoal/70">
                    Thrilling adventure itinerary design
                  </Body>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                  <Body className="text-sm sm:text-base text-charcoal/70">
                    Mountain trails to desert safaris
                  </Body>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                  <Body className="text-sm sm:text-base text-charcoal/70">
                    Excitement balanced with safety and security
                  </Body>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src="/images/adventure.jpg"
                  alt="Adventure Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}
