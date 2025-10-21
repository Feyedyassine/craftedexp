'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface StaggeredCardsProps {
  children: ReactNode[];
  staggerDelay?: number; // delay between each card in seconds
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
}

export function StaggeredCards({ 
  children, 
  staggerDelay = 0.5,
  direction = 'up',
  className,
  threshold = 0.1
}: StaggeredCardsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });

  const directionVariants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: 30, opacity: 0 },
    right: { x: -30, opacity: 0 }
  };

  const animateVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 }
  };

  // For right direction, reverse the order so rightmost elements animate first
  const orderedChildren = direction === 'right' ? [...children].reverse() : children;

  return (
    <div ref={ref} className={className}>
      {orderedChildren.map((child, index) => (
        <motion.div
          key={index}
          initial={directionVariants[direction]}
          animate={isInView ? animateVariants[direction] : directionVariants[direction]}
          transition={{ 
            duration: 0.6,
            delay: isInView ? index * staggerDelay : 0,
            ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for premium feel
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
