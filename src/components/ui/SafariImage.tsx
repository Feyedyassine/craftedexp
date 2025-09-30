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
      // Check for WebP support using multiple methods for better iOS Safari compatibility
      if (typeof window === 'undefined') return true; // SSR fallback
      
      // Method 1: Canvas toDataURL test
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const webpDataURL = canvas.toDataURL('image/webp');
        if (webpDataURL.indexOf('data:image/webp') === 0) {
          return true;
        }
      } catch (e) {
        // Canvas method failed
      }

      // Method 2: User agent check for known problematic browsers
      const userAgent = navigator.userAgent.toLowerCase();
      const isOldSafari = userAgent.includes('safari') && 
                         !userAgent.includes('chrome') && 
                         (userAgent.includes('version/14') || userAgent.includes('version/13') || userAgent.includes('version/12'));
      
      if (isOldSafari) {
        return false;
      }

      // Method 3: Feature detection using createImageBitmap
      if (typeof createImageBitmap !== 'undefined') {
        const webpData = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAsAAAAAByoAQBTQEEASADwAQAA';
        return new Promise<boolean>((resolve) => {
          const img = document.createElement('img');
          img.onload = () => resolve(img.height === 2);
          img.onerror = () => resolve(false);
          img.src = webpData;
        }).then((supported) => {
          setIsWebPSupported(supported);
        });
      }

      return true; // Default to supported if we can't determine
    };

    const result = checkWebPSupport();
    if (typeof result === 'boolean') {
      setIsWebPSupported(result);
    }
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
    if (!hasError) {
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

  // Determine which image to use
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
