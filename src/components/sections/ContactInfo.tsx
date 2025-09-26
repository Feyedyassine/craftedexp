import { H2, Body } from '@/components/ui';
import { Phone, Clock } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className }: ContactInfoProps) {
  // Get current day and time
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute; // Convert to minutes for easier comparison

  // Business hours: Monday-Friday 9:00am-11:00pm (540-1380 minutes), Saturday-Sunday closed
  const isOpen = currentDay >= 1 && currentDay <= 5; // Monday to Friday
  const isWithinHours = isOpen && currentTime >= 540 && currentTime <= 1380; // 9:00am to 11:00pm
  
  // Format closing time
  const getClosingTime = () => {
    if (currentDay >= 1 && currentDay <= 5) {
      return "11:00pm";
    }
    return null;
  };

  return (
    <div className={`bg-sand p-6 sm:p-8 lg:p-10 ${className}`}>
      <div className="space-y-8">
        {/* Call Us Today */}
        <div className="text-center">
          <Phone className="w-8 h-8 text-charcoal mx-auto mb-4" />
          <H2 className="text-charcoal text-lg font-display uppercase tracking-wide mb-2">
            {isWithinHours ? 'CALL US TODAY' : 'CALL US'}
          </H2>
          <a
            href="tel:+21628780000"
            className="text-charcoal text-xl font-bold hover:underline block mb-2"
          >
            +216 28 780 000
          </a>
          {isWithinHours && getClosingTime() && (
            <Body className="text-sm text-charcoal/70">
              We are open today until {getClosingTime()}
            </Body>
          )}
        </div>

        {/* Office Hours */}
        <div className="text-center">
          <Clock className="w-8 h-8 text-charcoal mx-auto mb-4" />
          <H2 className="text-charcoal text-lg font-display uppercase tracking-wide mb-4">
            OFFICE HOURS
          </H2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-charcoal">Monday</span>
              <span className="text-charcoal">9:00am - 11:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal">Tuesday</span>
              <span className="text-charcoal">9:00am - 11:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal">Wednesday</span>
              <span className="text-charcoal">9:00am - 11:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal">Thursday</span>
              <span className="text-charcoal">9:00am - 11:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal">Friday</span>
              <span className="text-charcoal">9:00am - 11:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal">Saturday</span>
              <span className="text-charcoal">Closed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal">Sunday</span>
              <span className="text-charcoal">Closed</span>
            </div>
          </div>
          <Body className="text-xs text-charcoal/70 mt-3">
            (excluding national holidays)
          </Body>
        </div>
      </div>
    </div>
  );
}
