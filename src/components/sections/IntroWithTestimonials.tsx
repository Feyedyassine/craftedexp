import { Container, Section, Body, H2 } from '@/components/ui';

interface IntroWithTestimonialsProps {
  className?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  companyLink?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Thank you for all you did to make my brief time at the Four Seasons in Tunis such a grand success. It means a lot to me and to the WFP team working so hard to improve the lives of children all over the region. I hope the rest of the Forum goes well. All the best and hope to see you again soon.",
    author: "David Beasley",
    role: "Executive Director",
    company: "WFP",
    companyLink: "https://www.wfp.org/",
  },
  {
    quote: "Working with Crafted Experiences has been an absolute pleasure. They helped us organize our shooting for Darana in Tunis, and everything was handled with outstanding professionalism and care. Their attention to detail, creativity, and dedication made the whole experience seamless. I couldn't recommend them more.",
    author: "Eric Belkhiria",
    role: "Co-Founder",
    company: "Darana",
    companyLink: "https://darana.ch",
  },
  {
    quote: "Our team building event in Bizerte, organized by Crafted Experiences, exceeded all expectations. The program was thoughtfully designed to balance fun activities with meaningful team engagement, and it truly strengthened the bonds within our company. The attention to detail made the whole experience seamless and enjoyable for everyone.",
    author: "Feyed Belkhiria",
    role: "Managing Director",
    company: "Grafen",
    companyLink: "https://grafen.tn",
  },
];

export function IntroWithTestimonials({ className }: IntroWithTestimonialsProps) {
  return (
    <Section background="white" padding="lg" className={className}>
      <Container size="xl">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <H2 className="text-charcoal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-4 sm:mb-6">
            Our Philosophy
          </H2>
          <Body className="text-base sm:text-lg text-charcoal leading-relaxed">
            At Crafted Experiences, we believe every journey and every event should tell a story. 
            With deep expertise in travel and event management, we design custom-made experiences that go beyond 
            logistics, creating lasting impressions for corporations, groups, and individual travelers.
          </Body>
        </div>
        
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-3 sm:space-y-4 text-center px-2">
              <blockquote className="text-charcoal text-base sm:text-lg leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="space-y-1">
                <div className="font-medium text-charcoal text-sm sm:text-base">
                  {testimonial.author}
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70">
                  {testimonial.role}, {testimonial.companyLink ? (
                    <a 
                      href={testimonial.companyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-charcoal/80 underline"
                    >
                      {testimonial.company}
                    </a>
                  ) : (
                    testimonial.company
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
