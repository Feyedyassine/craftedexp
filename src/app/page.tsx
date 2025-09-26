import { Header, Footer } from '@/components/layout';
import { Hero, OurServices, CaseStudy, IntroWithTestimonials, WhyChooseUs, CTA } from '@/components/sections';

export default function Home() {


  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Intro + Testimonials Section */}
      <IntroWithTestimonials />

      {/* Services Section */}
      <OurServices />

      {/* Case Study Section */}
      <CaseStudy />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
