import { Header, Footer } from '@/components/layout';
import { Hero, OurServices, BentoGrid, OurStory, WhyChooseUs, Testimonials, CTA } from '@/components/sections';
import { getCaseStudies, getTestimonials, getServices, getHeroSection, getOurStory } from '@/lib/contentful';

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function Home() {
  // Fetch data from Contentful
  const heroData = await getHeroSection(); // Hero section data
  const ourStoryData = await getOurStory(); // Our Story section data
  const caseStudies = await getCaseStudies(true); // Only featured case studies
  const testimonials = await getTestimonials(true); // Only featured testimonials
  const services = await getServices({ featuredOnly: true }); // Only featured services

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero heroData={heroData} />

      {/* Our Story Section */}
      <OurStory ourStoryData={ourStoryData} />

      {/* Services Section */}
      <div id="our-services">
        <OurServices services={services} />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Case Study Section */}
      <BentoGrid caseStudies={caseStudies} />

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
