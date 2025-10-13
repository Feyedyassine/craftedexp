import { Header, Footer } from '@/components/layout';
import { AboutHero, AboutUs, OurPhilosophyExpanded, TheTeam, TheFounder, CTA } from '@/components/sections';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <AboutHero />

      {/* About Us Section */}
      <AboutUs />

      {/* Our Philosophy Section (Expanded) */}
      <OurPhilosophyExpanded />

      {/* The Team Section */}
      <TheTeam />

      {/* The Founder Section */}
      <TheFounder />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

