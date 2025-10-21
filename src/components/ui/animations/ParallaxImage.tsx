'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SafariImage from '../SafariImage';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0-1, where 0.5 is normal speed, 0.3 is slower
  children?: React.ReactNode;
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '', 
  speed = 0.3,
  children 
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="h-full w-full"
      >
        <SafariImage
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {children}
      </motion.div>
    </div>
  );
}
