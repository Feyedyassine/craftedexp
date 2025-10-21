import { Header, Footer } from '@/components/layout';
import { Container, Section, H1, H2, Body, RichText } from '@/components/ui';
import { CTA } from '@/components/sections';
import { FadeInUp, ViewportTypewriter, ScrollReveal, ParallaxTiltImage } from '@/components/ui/animations';
import { getServices } from '@/lib/contentful';

export const metadata = {
  title: 'For Corporate | Crafted Experiences',
  description: 'Elevate your corporate events with our comprehensive suite of services designed to create lasting impressions and drive meaningful results.',
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function ForCorporatePage() {
  // Fetch corporate services from Contentful
  const services = await getServices({ audience: 'Corporate' });
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Section background="white" padding="lg" className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp delay={0.2}>
              <H1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display mb-6 text-charcoal">
                Corporate Excellence
              </H1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <Body className="text-lg sm:text-xl lg:text-2xl text-charcoal/80 leading-relaxed">
                Elevate your corporate events with our comprehensive suite of services designed to create lasting impressions and drive meaningful results.
              </Body>
            </FadeInUp>
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
                <ScrollReveal 
                  direction={isEven ? "left" : "right"} 
                  delay={0.2}
                  className={isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"}
                >
                  <H2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 text-charcoal">
                    <ViewportTypewriter 
                      text={service.serviceName} 
                      speed={60}
                      threshold={0.3}
                    />
                  </H2>
                  <FadeInUp delay={0.5}>
                    <RichText content={service.fullDescription} />
                  </FadeInUp>
                </ScrollReveal>
                <ScrollReveal 
                  direction={isEven ? "right" : "left"} 
                  delay={0.1}
                  className={isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"}
                >
                  <ParallaxTiltImage
                    src={displayImage}
                    alt={service.imageAlt}
                    className="h-64 sm:h-80 lg:h-96"
                    parallaxSpeed={0.3}
                    tiltIntensity={0.2}
                  />
                </ScrollReveal>
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
