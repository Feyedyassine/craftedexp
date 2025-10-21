'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import SafariImage from '../SafariImage';

interface ParallaxTiltImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number; // 0-1, where 0.5 is normal speed, 0.3 is slower
  tiltIntensity?: number; // 0-1, where 0.1 is subtle, 0.3 is more pronounced
  children?: React.ReactNode;
}

export function ParallaxTiltImage({ 
  src, 
  alt, 
  className = '', 
  parallaxSpeed = 0.3,
  tiltIntensity = 0.2,
  children 
}: ParallaxTiltImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  // Tilt effect on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / rect.height) * tiltIntensity * 20;
    const rotateYValue = (mouseX / rect.width) * tiltIntensity * 20;
    
    setRotateX(-rotateXValue); // Invert for natural tilt
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        style={{ y }}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
