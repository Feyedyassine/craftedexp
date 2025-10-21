'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DynamicTextProps {
  words: string[];
  animationSpeed?: number; // milliseconds per word
  className?: string;
}

export function DynamicText({ 
  words, 
  animationSpeed = 2000, 
  className 
}: DynamicTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    const interval = setInterval(() => {
      // Fade out current word
      setIsVisible(false);
      
      // After fade out completes, change word and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500); // Longer fade transition for smoother effect
      
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [words, animationSpeed]);

  if (words.length === 0) {
    return null;
  }

  return (
    <span 
      className={cn(
        'inline-block transition-opacity duration-500 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      aria-live="polite"
      aria-label={`Current word: ${words[currentIndex]}`}
    >
      {words[currentIndex]}
    </span>
  );
}
