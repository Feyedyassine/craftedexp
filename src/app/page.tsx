import { Header, Footer } from '@/components/layout';
import { Hero, OurServices, CaseStudy, OurStory, WhyChooseUs, Testimonials, CTA } from '@/components/sections';
import { getCaseStudies, getTestimonials, getServices } from '@/lib/contentful';

export default async function Home() {
  // Fetch data from Contentful
  const caseStudies = await getCaseStudies(true); // Only featured case studies
  const testimonials = await getTestimonials(true); // Only featured testimonials
  const services = await getServices({ featuredOnly: true }); // Only featured services

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Our Story Section */}
      <OurStory />

      {/* Services Section */}
      <OurServices services={services} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Case Study Section */}
      <CaseStudy caseStudies={caseStudies} />

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
