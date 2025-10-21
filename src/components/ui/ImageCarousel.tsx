'use client';

import { useState, useEffect } from 'react';
import SafariImage from './SafariImage';
import { cn } from '@/lib/utils';

interface CarouselImage {
  url: string;
  title: string;
  description?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  transitionDuration?: number; // seconds per image
  fadeDuration?: number; // milliseconds for fade transition
  className?: string;
}

export function ImageCarousel({ 
  images, 
  transitionDuration = 5,
  fadeDuration = 1000,
  className 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDuration * 1000);

    return () => clearInterval(interval);
  }, [images.length, transitionDuration]);

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className={cn('relative w-full h-full', className)}>
        <SafariImage
          src={images[0].url}
          alt={images[0].title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div className={cn('relative w-full h-full', className)}>
      {images.map((image, index) => (
        <SafariImage
          key={`${image.url}-${index}`}
          src={image.url}
          alt={image.title}
          fill
          className={cn(
            'absolute inset-0 object-cover transition-opacity ease-in-out',
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            transitionDuration: `${fadeDuration}ms`
          }}
          priority={index === 0}
          sizes="100vw"
        />
      ))}
    </div>
  );
}
