import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const variantClasses = {
  default: 'bg-white border border-soft-gray',
  elevated: 'bg-white shadow-lg border border-soft-gray',
  outlined: 'bg-transparent border-2 border-charcoal',
  filled: 'bg-sand border border-soft-gray',
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg transition-all duration-200',
        variantClasses[variant],
        paddingClasses[padding],
        hover && 'hover:shadow-md hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

// Card sub-components
export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-h3 font-display text-charcoal', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-body text-charcoal/80 mt-2', className)}>
      {children}
    </p>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('space-y-4', className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mt-6 pt-4 border-t border-soft-gray', className)}>
      {children}
    </div>
  );
}
