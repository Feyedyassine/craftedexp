import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
}

// Heading Components
export function H1({ children, className, as: Component = 'h1' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-h1 font-display text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

export function H2({ children, className, as: Component = 'h2' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-h2 font-display text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

export function H3({ children, className, as: Component = 'h3' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-h3 font-display text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

export function H4({ children, className, as: Component = 'h4' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-2xl font-display font-semibold text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

export function H5({ children, className, as: Component = 'h5' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-xl font-display font-semibold text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

export function H6({ children, className, as: Component = 'h6' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-lg font-display font-semibold text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

// Body Text Components
export function Body({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-body text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

export function BodyLarge({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-xl text-charcoal leading-relaxed',
      className
    )}>
      {children}
    </Component>
  );
}

export function BodySmall({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-base text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}

// Specialized Text Components
export function Lead({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-xl text-charcoal/80 leading-relaxed font-medium',
      className
    )}>
      {children}
    </Component>
  );
}

export function Caption({ children, className, as: Component = 'span' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-sm text-charcoal/70 font-medium',
      className
    )}>
      {children}
    </Component>
  );
}

export function Label({ children, className, as: Component = 'label' }: TypographyProps) {
  return (
    <Component className={cn(
      'text-sm font-semibold text-charcoal',
      className
    )}>
      {children}
    </Component>
  );
}
