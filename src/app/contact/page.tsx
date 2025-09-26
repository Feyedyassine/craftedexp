import { Header } from '@/components/layout';
import { Container, Section, H2, Body } from '@/components/ui';
import { ContactForm, ContactInfo } from '@/components/sections';

export default function ContactPage() {
  // Get current day and time
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute; // Convert to minutes for easier comparison

  // Business hours: Monday-Friday 9:00am-11:00pm (540-1380 minutes), Saturday-Sunday closed
  const isOpen = currentDay >= 1 && currentDay <= 5; // Monday to Friday
  const isWithinHours = isOpen && currentTime >= 540 && currentTime <= 1380; // 9:00am to 11:00pm
  
  // Get next opening day or time
  const getNextOpeningInfo = () => {
    if (currentDay === 0) { // Sunday
      return "Monday";
    } else if (currentDay === 6) { // Saturday
      return "Monday";
    } else if (currentDay >= 1 && currentDay <= 5) { // Monday-Friday
      if (currentTime < 540) { // Before 9am
        return "at 9:00am today";
      } else if (currentTime > 1380) { // After 11pm
        return currentDay === 5 ? "Monday" : "at 9:00am tomorrow";
      }
    }
    return "Monday"; // Default fallback
  };

  const nextOpeningInfo = getNextOpeningInfo();

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Section background="white" padding="lg">
        <Container size="xl">
          {/* Header Text */}
          <div className="text-center mb-12">
            <H2 className="text-charcoal font-display uppercase tracking-wide mb-4">
              {isWithinHours 
                ? "WE ARE OPEN TODAY UNTIL 11.00PM"
                : `We will be open on ${nextOpeningInfo}`
              }
            </H2>
            <div className="w-16 h-px bg-charcoal mx-auto mb-6"></div>
            <Body className="text-charcoal text-lg leading-relaxed max-w-4xl mx-auto">
              We&apos;ll be in touch shortly after you submit the form, matching you with a Travel Expert and setting up a time to talk - over email, phone or video call. For an immediate conversation, simply call us on{' '}
              <a href="tel:+21628780000" className="text-charcoal font-semibold hover:underline">
                +216 28 780 000
              </a>
            </Body>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form - Left Side */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information - Right Side */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
