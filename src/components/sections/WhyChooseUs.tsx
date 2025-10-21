import { Container, Section, H2, Body } from '@/components/ui';
import { StaggeredCards } from '@/components/ui/animations';
import { Target, Globe, Layers, Shield, Heart } from 'lucide-react';

interface WhyChooseUsProps {
  className?: string;
}

const reasons = [
  {
    icon: <Target className="w-12 h-12 mx-auto" />,
    title: "Tailored, Not Template",
    description: "Every journey custom-designed around you — no off-the-shelf packages",
  },
  {
    icon: <Globe className="w-12 h-12 mx-auto" />,
    title: "Global Network, Local Expertise",
    description: "Trusted partners worldwide ensure insider access and authentic touches",
  },
  {
    icon: <Layers className="w-12 h-12 mx-auto" />,
    title: "Seamless End-to-End Service",
    description: "We handle all details so you can focus only on enjoying the moment",
  },
  {
    icon: <Shield className="w-12 h-12 mx-auto" />,
    title: "Premium & Discreet Concierge",
    description: "Round-the-clock support ensuring smooth, private, stress-free experiences",
  },
  {
    icon: <Heart className="w-12 h-12 mx-auto" />,
    title: "Memorable Beyond Measure",
    description: "We craft stories worth telling that linger long after they're over",
  },
];

export function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <Section background="white" padding="lg" className={className}>
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <H2 className="text-charcoal text-h2 font-display mb-2">
            Why Choose Us?
          </H2>
          <Body className="text-charcoal/70 text-sm md:text-base">
            What sets us apart in creating exceptional experiences
          </Body>
        </div>
        
         <StaggeredCards 
           staggerDelay={0.5}
           direction="right"
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8"
         >
           {reasons.map((reason, index) => {
             return (
               <div key={index} className="text-center px-2">
                 <div className="text-charcoal mb-3 sm:mb-4">
                   {reason.icon}
                 </div>
               <h4 className="text-charcoal text-h4 font-display font-semibold mb-2">
                 {reason.title}
               </h4>
                <p className="text-charcoal/70 text-xs sm:text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </StaggeredCards>
      </Container>
    </Section>
  );
}
