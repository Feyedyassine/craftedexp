import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

const variantClasses = {
  primary: 'bg-charcoal text-cream hover:bg-charcoal/90 focus:ring-charcoal/50',
  secondary: 'bg-soft-gray text-charcoal hover:bg-soft-gray/90 focus:ring-soft-gray/50',
  outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream focus:ring-charcoal/50',
  ghost: 'text-charcoal hover:bg-charcoal/10 focus:ring-charcoal/50',
  link: 'text-charcoal underline hover:no-underline focus:ring-charcoal/50',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-sm',
  md: 'px-3 py-1 text-base',
  lg: 'px-4 py-1.5 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-none font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
