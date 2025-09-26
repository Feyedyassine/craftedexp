import { Container, Section } from '@/components/ui';

interface TestimonialsProps {
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

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <Section background="white" padding="none" className={`${className} pt-6 pb-42`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4 text-center">
              <blockquote className="text-charcoal text-lg leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="space-y-1">
                <div className="font-medium text-charcoal">
                  {testimonial.author}
                </div>
                <div className="text-sm text-charcoal/70">
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
