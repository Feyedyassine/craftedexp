'use client';

import { Header, Footer } from '@/components/layout';
import { Container, Section, H1, H2, Body } from '@/components/ui';
import { CTA, ServicePair } from '@/components/sections';
import SafariImage from '@/components/ui/SafariImage';

export default function ForCorporatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Section background="white" padding="lg" className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <div className="text-center max-w-4xl mx-auto">
            <H1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display mb-6 text-charcoal">
              Corporate Excellence
            </H1>
            <Body className="text-lg sm:text-xl lg:text-2xl text-charcoal/80 leading-relaxed">
              Elevate your corporate events with our comprehensive suite of services designed to create lasting impressions and drive meaningful results.
            </Body>
          </div>
        </Container>
      </Section>

      {/* Trade Shows & Incentive Trips */}
      <ServicePair
        firstService={{
          title: "Trade Shows",
          description: "We design trade show experiences that go beyond logistics; helping your brand stand out, connect with the right audience, and leave a lasting impression. From booth design to full event management, every element is curated for maximum impact and seamless execution.",
          image: "/images/tradeshow.webp",
          imageAlt: "Trade Shows",
          features: [
            "Strategic booth design and layout optimization",
            "Complete event management and coordination",
            "Lead generation and audience engagement strategies"
          ]
        }}
        secondService={{
          title: "Incentive Trips",
          description: "Reward and inspire your top performers with journeys that celebrate achievement in style. Our incentive trips combine exclusive destinations, immersive cultural encounters, and thoughtful touches that turn recognition into unforgettable memories.",
          image: "/images/trip.webp",
          imageAlt: "Incentive Trips",
          features: [
            "Exclusive destination selection and planning",
            "Cultural immersion and unique experiences",
            "Personalized recognition and celebration elements"
          ]
        }}
      />

      {/* Conferences & Team Building */}
      <ServicePair
        firstService={{
          title: "Conferences",
          description: "From intimate executive forums to large-scale industry gatherings, we deliver conferences that run flawlessly. With meticulous planning, cutting-edge technology, and a focus on delegate engagement, we create platforms that foster knowledge, networking, and growth.",
          image: "/images/conference.webp",
          imageAlt: "Conferences",
          features: [
            "End-to-end conference planning and execution",
            "State-of-the-art technology and AV solutions",
            "Delegate engagement and networking facilitation"
          ]
        }}
        secondService={{
          title: "Team Building",
          description: "Strengthen bonds, spark creativity, and build resilience with tailor-made team-building programs. Whether outdoors in nature or through innovative workshops, our experiences are designed to energize teams and align them with your company's vision.",
          image: "/images/teambuilding.webp",
          imageAlt: "Team Building",
          features: [
            "Customized team-building program design",
            "Outdoor adventures and nature-based activities",
            "Innovative workshops and creative challenges"
          ]
        }}
      />

      {/* Product Launch - Standalone section */}
      <Section background="white" padding="lg" className="py-16 sm:py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 text-charcoal">
                Product Launch
              </H2>
              <Body className="text-base sm:text-lg lg:text-xl text-charcoal/80 leading-relaxed mb-6">
                We help brands reveal their latest innovations in a way that resonates. From concept to execution, our product launches blend creativity, precision, and storytelling to ensure your message reaches the right audience and makes an impact.
              </Body>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                  <Body className="text-sm sm:text-base text-charcoal/70">
                    Creative concept development and storytelling
                  </Body>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                  <Body className="text-sm sm:text-base text-charcoal/70">
                    Precision execution and event management
                  </Body>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                  <Body className="text-sm sm:text-base text-charcoal/70">
                    Target audience engagement and impact measurement
                  </Body>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <SafariImage
                  src="/images/productlaunch.webp"
                  alt="Product Launch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
