import { Container, Section, Body, H2 } from '@/components/ui';

interface IntroWithTestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    quote: "Crafted Experiences transformed our annual conference into an unforgettable event that exceeded all expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
  },
  {
    quote: "Our family vacation to Morocco was absolutely magical. Every detail was perfectly orchestrated.",
    author: "Michael Chen",
    role: "Executive",
    company: "Global Finance",
  },
  {
    quote: "The attention to detail and personalized service made our corporate retreat an exceptional success.",
    author: "Emily Rodriguez",
    role: "HR Director",
    company: "InnovateTech",
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
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
