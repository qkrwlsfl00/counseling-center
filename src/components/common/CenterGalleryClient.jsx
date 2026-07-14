'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const CenterGalleryClient = ({ photos, limit = null, linkHref = null }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = limit ? photos.slice(0, limit) : photos;

  const closeLightbox = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const showPrev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    if (window.location.hash !== '#gallery') return;

    const timeoutId = window.setTimeout(() => {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'auto' });
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((photo, index) => {
          const cardContent = (
            <>
              <Image
                src={photo.src}
                alt={photo.alt || '드림학습코칭상담센터 사진'}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {photo.alt && (
                <div className="absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                  <p className="text-white text-sm font-medium text-center line-clamp-2 drop-shadow-md">
                    {photo.alt}
                  </p>
                </div>
              )}
            </>
          );

          const cardClassName = 'group relative aspect-video sm:aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg hover:border-dream-blue/20 transition-all duration-300';

          if (linkHref) {
            return (
              <Link key={photo.src} href={linkHref} className={cardClassName}>
                {cardContent}
              </Link>
            );
          }

          return (
            <button
              type="button"
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              className={`${cardClassName} w-full text-left focus:outline-none focus:ring-2 focus:ring-dream-blue focus:ring-offset-2`}
              aria-label={`${photo.alt || '센터 사진'} 크게 보기`}
            >
              {cardContent}
            </button>
          );
        })}
      </div>

      <ImageLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </div>
  );
};

export default CenterGalleryClient;
