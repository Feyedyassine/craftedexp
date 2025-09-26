'use client';

import { Header, Footer } from '@/components/layout';
import { Container, Section, H2, Body } from '@/components/ui';
import { CTA, CaseStudyNavigation } from '@/components/sections';
import Image from 'next/image';

export default function GreenGrowthSummitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Sticky Case Study Navigation */}
      <CaseStudyNavigation currentId="green-growth-summit" />

      {/* Hero Section */}
      <Section background="white" padding="none" className="relative">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <Image
            src="/images/greensummit.jpg"
            alt="Green Growth Summit event"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <H2 className="text-[#E4E2DD] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display mb-3 sm:mb-4">
                Green Growth Summit
              </H2>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-0">
            
            {/* Project Details */}
            <div className="bg-sand border border-charcoal/20 p-6 rounded-lg">
              <H2 className="text-charcoal text-xl font-display mb-4">Project Details</H2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-charcoal">
                <div>
                  <strong>Client:</strong> New Silk Roads x Hivos
                </div>
                <div>
                  <strong>Date:</strong> April 30, 2024
                </div>
                <div>
                  <strong>Location:</strong> Mövenpick Gammarth, Tunis
                </div>
              </div>
            </div>
            
            {/* Context & Objectives */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Context & Objectives</H2>
              <Body className="text-charcoal text-lg leading-relaxed mb-4">
                The <strong>Green Growth Summit</strong> gathered influential voices and changemakers from Tunisia and across the MENA region, with the aim of advancing dialogue on <strong>green justice and sustainable development</strong>.
              </Body>
              <Body className="text-charcoal text-lg leading-relaxed mb-4">
                The summit sought to:
              </Body>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li>Create a platform for bold conversations around climate ambition and equity.</li>
                <li>Foster collaboration between policymakers, NGOs, private sector leaders, and activists.</li>
                <li>Position Tunisia as a hub for regional climate action.</li>
                <li>Inspire actionable commitments toward a just green transition.</li>
              </ul>
            </div>

            {/* Creative Concept */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Creative Concept</H2>
              <Body className="text-charcoal text-lg leading-relaxed mb-4">
                The agency&apos;s role was to design and deliver an event that reflected the urgency and ambition of the green transition while providing a welcoming, inspiring, and professional environment. Key elements included:
              </Body>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li><strong>Immersive identity & staging:</strong> A fresh, nature-inspired design language with eco-conscious materials and branding throughout the venue.</li>
                <li><strong>Dynamic programming:</strong> Panels, keynote talks, and interactive sessions encouraging diverse perspectives and cross-sector collaboration.</li>
                <li><strong>Seamless logistics:</strong> Full event management, including invitations, delegate hospitality, audiovisual production, and translation.</li>
                <li><strong>Engagement & communication:</strong> Media presence, social media amplification, and post-event content to extend the summit&apos;s impact beyond the room.</li>
              </ul>
            </div>

            {/* Event Flow & Highlights */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Event Flow & Highlights</H2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-charcoal/20">
                  <thead>
                    <tr className="bg-charcoal/10">
                      <th className="border border-charcoal/20 px-4 py-3 text-left text-charcoal font-display">Moment</th>
                      <th className="border border-charcoal/20 px-4 py-3 text-left text-charcoal font-display">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal font-medium">Opening Session</td>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal">High-level welcome setting the tone for ambitious regional climate action.</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal font-medium">Keynotes & Panels</td>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal">Leaders from Tunisia and MENA shared insights on green justice, policy, finance, and innovation.</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal font-medium">Networking Sessions</td>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal">Dedicated spaces for cross-sector connections and collaboration.</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal font-medium">Interactive Dialogues</td>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal">Engaging discussions where participants co-created ideas and shared best practices.</td>
                    </tr>
                    <tr>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal font-medium">Closing</td>
                      <td className="border border-charcoal/20 px-4 py-3 text-charcoal">A collective call to action for driving a just, green transition across the region and beyond.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Results & Impact */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Results & Impact</H2>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li><strong>Powerful platform for dialogue:</strong> Brought together leading voices in climate, development, and policy.</li>
                <li><strong>Strengthened networks:</strong> Fostered meaningful connections among diverse stakeholders.</li>
                <li><strong>Amplified visibility:</strong> Shared widely through media and social channels, spreading the summit&apos;s message across MENA and globally.</li>
                <li><strong>Momentum for change:</strong> Reinforced Tunisia&apos;s role as a regional convenor for sustainable development and climate justice.</li>
              </ul>
            </div>

            {/* Challenges & Learnings */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Challenges & Learnings</H2>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li><strong>Balancing diversity:</strong> Ensuring representation of multiple perspectives — policymakers, civil society, and youth.</li>
                <li><strong>Complex logistics:</strong> Managing international speakers, simultaneous interpretation, and hybrid participation.</li>
                <li><strong>Sustainability in practice:</strong> Aligning event execution (materials, catering, waste) with the summit&apos;s green values.</li>
              </ul>
            </div>

            {/* Our Value Added */}
            <div>
              <H2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6">Our Value Added</H2>
              <ul className="list-disc list-inside space-y-2 text-charcoal text-lg leading-relaxed ml-4">
                <li>Ability to design and deliver a large-scale <strong>impact-driven summit</strong> with global relevance.</li>
                <li>Expertise in aligning <strong>brand values with event execution</strong>, ensuring authenticity and resonance.</li>
                <li>Proven capacity to manage <strong>complex, multi-stakeholder events</strong> with flawless coordination.</li>
                <li>Strong storytelling and communication, ensuring the summit&apos;s impact extended well beyond the venue.</li>
              </ul>
            </div>

            {/* Back to Homepage Button */}
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
