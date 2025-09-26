import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Grid } from './Grid';
import { H3, Body } from './Typography';

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
  title?: string;
  description?: string;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  responsive?: {
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
}

export function FeatureGrid({
  features,
  title,
  description,
  className,
  columns = 3,
  responsive = { sm: 1, md: 2, lg: 3 },
}: FeatureGridProps) {
  return (
    <div className={cn('space-y-8', className)}>
      {(title || description) && (
        <div className="text-center max-w-3xl mx-auto">
          {title && <H3 className="text-h2 mb-4">{title}</H3>}
          {description && <Body className="text-xl">{description}</Body>}
        </div>
      )}
      
      <Grid
        cols={columns}
        responsive={responsive}
        gap="lg"
      >
        {features.map((feature, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto text-charcoal">
              {feature.icon}
            </div>
            <div>
              <H3 className="text-h3 mb-2">{feature.title}</H3>
              <Body className="text-charcoal/80">{feature.description}</Body>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}
