import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Hint for responsive selection, e.g. "(min-width: 1024px) 33vw, 100vw" */
  sizes?: string;
  width?: number;
  height?: number;
}

/* Every image on the site is now served from public/, so the Unsplash srcset
   builder that used to live here is gone with the last hotlinked image. The
   `sizes` prop is kept on the interface for when these get real responsive
   variants generated at build time. */

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  width,
  height
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const handleLoad = () => setLoaded(true);

  /* The fallback used to fetch a placeholder from placehold.co — a third party
     reached for at exactly the moment the network is already failing. The
     styled block below needs no request. */
  const handleError = () => setError(true);

  return (
    <div className={`relative overflow-hidden bg-brand-dark/10 ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-brand-dark/5" aria-hidden="true" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: 'block' }}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-xs">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
