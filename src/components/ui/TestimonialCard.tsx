import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './Card';
import { Body, Caption } from './Typography';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: ReactNode;
  className?: string;
  variant?: 'corporate' | 'leisure';
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  className,
  variant = 'corporate',
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        'relative',
        variant === 'corporate' ? 'bg-white' : 'bg-sand',
        className
      )}
      variant="elevated"
    >
      <CardContent>
        {/* Quote mark */}
        <div className="absolute -top-2 -left-2 text-charcoal text-4xl font-display">
          &ldquo;
        </div>
        
        <Body className="italic text-charcoal/90 mb-6 relative z-10">
          {quote}
        </Body>
        
        <div className="flex items-center space-x-4">
          {avatar && (
            <div className="w-12 h-12 rounded-full bg-soft-gray flex items-center justify-center">
              {avatar}
            </div>
          )}
          <div>
            <div className="font-semibold text-charcoal">{author}</div>
            {role && (
              <Caption>
                {role}
                {company && ` at ${company}`}
              </Caption>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
