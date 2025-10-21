'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className 
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
