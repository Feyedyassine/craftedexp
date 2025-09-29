'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SafariImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

export default function SafariImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  quality = 75,
  sizes,
  style,
  onLoad,
  onError,
}: SafariImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isWebPSupported, setIsWebPSupported] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check WebP support
  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    setIsWebPSupported(checkWebPSupport());
  }, []);

  // Generate fallback PNG path
  const getFallbackSrc = (webpSrc: string) => {
    if (webpSrc.endsWith('.webp')) {
      return webpSrc.replace('.webp', '-min.png');
    }
    return webpSrc;
  };

  // Handle image load error
  const handleError = () => {
    if (!hasError && isWebPSupported) {
      // Try PNG fallback
      const fallbackSrc = getFallbackSrc(src);
      setImageSrc(fallbackSrc);
      setHasError(true);
    } else if (onError) {
      onError();
    }
  };

  // Handle successful image load
  const handleLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };

  // Use PNG fallback for older Safari versions
  const finalSrc = isWebPSupported ? imageSrc : getFallbackSrc(src);

  return (
    <Image
      src={finalSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      style={style}
      onLoad={handleLoad}
      onError={handleError}
      // Safari optimization settings
      unoptimized={false}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}
