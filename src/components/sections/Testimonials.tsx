import { Container, Section, H2 } from '@/components/ui';
import { StaggeredCards, FadeInUp } from '@/components/ui/animations';
import { Testimonial } from '@/types/contentful';

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function Testimonials({ testimonials, className }: TestimonialsProps) {
  // If no testimonials, show nothing
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  return (
    <Section background="white" padding="lg" className={className}>
      <Container size="xl">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <H2 className="text-charcoal text-h2 font-display">
            What Our Clients Say
          </H2>
        </div>

        {/* Testimonials Grid */}
        <StaggeredCards 
          staggerDelay={0.5}
          direction="up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="space-y-3 sm:space-y-4 text-center px-2">
              <blockquote className="text-charcoal text-sm sm:text-base leading-relaxed italic">
                &ldquo;{testimonial.testimonialText}&rdquo;
              </blockquote>
              <FadeInUp delay={0.3}>
                <div className="space-y-1">
                  <div className="font-medium text-charcoal text-xs sm:text-sm">
                    {testimonial.clientName}
                  </div>
                {testimonial.clientRole && (
                  <div className="text-xs text-charcoal/70">
                    {testimonial.clientRole}
                  </div>
                )}
                {testimonial.clientCompany && (
                  <div className="text-xs text-charcoal/70">
                    {testimonial.companyWebsite ? (
                      <a 
                        href={testimonial.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-charcoal underline transition-colors"
                      >
                        {testimonial.clientCompany}
                      </a>
                    ) : (
                      testimonial.clientCompany
                    )}
                  </div>
                )}
                </div>
              </FadeInUp>
            </div>
          ))}
        </StaggeredCards>
      </Container>
    </Section>
  );
}
