import { Header, Footer } from '@/components/layout';
import { Container, Section, H1, H2, Body, RichText } from '@/components/ui';
import { CTA } from '@/components/sections';
import SafariImage from '@/components/ui/SafariImage';
import { getServices } from '@/lib/contentful';

export const metadata = {
  title: 'For Individuals | Crafted Experiences',
  description: 'Discover extraordinary journeys crafted exclusively for you. From luxury escapes to adventure expeditions, we design experiences that match your unique desires.',
};

export default async function ForIndividualsPage() {
  // Fetch individual services from Contentful
  const services = await getServices({ audience: 'Individuals' });
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Section background="white" padding="lg" className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <div className="text-center max-w-4xl mx-auto">
            <H1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display mb-6 text-charcoal">
              Personal Journeys
            </H1>
            <Body className="text-lg sm:text-xl lg:text-2xl text-charcoal/80 leading-relaxed">
              Discover extraordinary journeys crafted exclusively for you. From luxury escapes to adventure expeditions, we design experiences that match your unique desires and create memories that last a lifetime.
            </Body>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const displayImage = service.secondaryImage || service.heroImage;
        
        return (
          <Section key={service.id} background="white" padding="lg" className="py-16 sm:py-20">
            <Container size="xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                  <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 text-charcoal">
                    {service.serviceName}
                  </H2>
                  <RichText content={service.fullDescription} />
                </div>
                <div className={isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <SafariImage
                      src={displayImage}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}
