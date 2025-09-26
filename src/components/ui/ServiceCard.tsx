import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  variant?: 'corporate' | 'leisure';
}

export function ServiceCard({
  title,
  description,
  icon,
  ctaText = 'Learn More',
  onCtaClick,
  className,
  variant = 'corporate',
}: ServiceCardProps) {
  const variantStyles = {
    corporate: 'border-l-4 border-charcoal',
    leisure: 'border-l-4 border-soft-gray',
  };

  return (
    <Card
      className={cn(
        'h-full flex flex-col',
        variantStyles[variant],
        className
      )}
      hover
    >
      <CardHeader>
        {icon && (
          <div className="w-12 h-12 text-charcoal mb-4">
            {icon}
          </div>
        )}
        <CardTitle className="text-h3">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={onCtaClick}
          className="self-start"
        >
          {ctaText} →
        </Button>
      </CardContent>
    </Card>
  );
}
