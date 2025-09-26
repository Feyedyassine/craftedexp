import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  };
}

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-2 sm:gap-4',
  md: 'gap-4 sm:gap-6',
  lg: 'gap-6 sm:gap-8',
  xl: 'gap-8 sm:gap-12',
};

const getGridCols = (cols: number) => {
  const colMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  };
  return colMap[cols] || 'grid-cols-1';
};

const getResponsiveCols = (responsive?: GridProps['responsive']) => {
  if (!responsive) return '';
  
  let classes = '';
  if (responsive.sm) classes += ` sm:${getGridCols(responsive.sm).replace('grid-cols-', 'grid-cols-')}`;
  if (responsive.md) classes += ` md:${getGridCols(responsive.md).replace('grid-cols-', 'grid-cols-')}`;
  if (responsive.lg) classes += ` lg:${getGridCols(responsive.lg).replace('grid-cols-', 'grid-cols-')}`;
  if (responsive.xl) classes += ` xl:${getGridCols(responsive.xl).replace('grid-cols-', 'grid-cols-')}`;
  
  return classes;
};

export function Grid({ 
  children, 
  className, 
  cols = 1, 
  gap = 'md',
  responsive 
}: GridProps) {
  const baseCols = getGridCols(cols);
  const responsiveCols = getResponsiveCols(responsive);
  
  return (
    <div className={cn(
      'grid',
      baseCols,
      responsiveCols,
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
}
