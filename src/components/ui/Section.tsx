import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'sand' | 'charcoal' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const backgroundClasses = {
  white: 'bg-white',
  cream: 'bg-cream',
  sand: 'bg-sand',
  charcoal: 'bg-charcoal text-cream',
  transparent: 'bg-transparent',
};

const paddingClasses = {
  none: '',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16',
  lg: 'py-16 sm:py-20',
  xl: 'py-20 sm:py-24',
};

const marginClasses = {
  none: '',
  sm: 'my-8 sm:my-12',
  md: 'my-12 sm:my-16',
  lg: 'my-16 sm:my-20',
  xl: 'my-20 sm:my-24',
};

export function Section({ 
  children, 
  className, 
  background = 'transparent',
  padding = 'md',
  margin = 'none'
}: SectionProps) {
  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      marginClasses[margin],
      className
    )}>
      {children}
    </section>
  );
}
