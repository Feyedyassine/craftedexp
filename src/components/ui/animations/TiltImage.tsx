'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import SafariImage from '../SafariImage';

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number; // 0-1, where 0.1 is subtle, 0.3 is more pronounced
  children?: React.ReactNode;
}

export function TiltImage({ 
  src, 
  alt, 
  className = '', 
  intensity = 0.1,
  children 
}: TiltImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / rect.height) * intensity * 20;
    const rotateYValue = (mouseX / rect.width) * intensity * 20;
    
    setRotateX(-rotateXValue); // Invert for natural tilt
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
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
  );
}
