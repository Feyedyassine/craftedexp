import { Header } from '@/components/layout';
import { Hero, OurServices, IntroWithTestimonials, WhyChooseUs } from '@/components/sections';

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

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
}
