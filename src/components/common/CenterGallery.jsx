'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const PHOTOS = [
  { src: '/photos/KakaoTalk_20260613_000754012.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904_05.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904_01.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260613_000754012_01.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904_02.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260613_000754012_02.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904_03.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904_07.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904_04.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260609_171610904_06.jpg', alt: '드림학습코칭상담센터 전경' },
  { src: '/photos/KakaoTalk_20260613_000754012_03.jpg', alt: '드림학습코칭상담센터 전경' }
];

const CenterGallery = ({ limit = null, linkHref = null }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = limit ? PHOTOS.slice(0, limit) : PHOTOS;

  const openLightbox = (index) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % items.length);
      if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items.length]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  // Scroll directly to gallery section if navigated with hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#gallery') {
      const element = document.getElementById('gallery');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="w-full">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((photo, index) => {
          const cardContent = (
            <>
              <Image 
                src={photo.src} 
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Simple Zoom Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </>
          );

          const cardClassName = "group relative aspect-video sm:aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg hover:border-dream-blue/20 transition-all duration-300";

          if (linkHref) {
            return (
              <Link key={index} href={linkHref} className={cardClassName}>
                {cardContent}
              </Link>
            );
          }

          return (
            <div 
              key={index} 
              onClick={() => openLightbox(index)}
              className={cardClassName}
            >
              {cardContent}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 transition-all duration-300"
        >
          {/* Header */}
          <div className="w-full flex justify-between items-center text-white px-4 py-2 relative z-10 max-w-7xl">
            <span className="text-sm font-bold tracking-wide opacity-80">드림학습코칭상담센터</span>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800">
                {activeIndex + 1} / {items.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Core Content Area */}
          <div className="relative w-full flex-1 flex items-center justify-center max-w-6xl py-4">
            {/* Navigation buttons inside overlay */}
            <button 
              onClick={showPrev}
              className="absolute left-2 md:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center border border-white/10 text-white transition-all cursor-pointer select-none"
              aria-label="이전 사진"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Active Image container */}
            <div className="relative w-full h-full max-h-[75vh] md:max-h-[80vh] flex items-center justify-center select-none">
              <Image 
                src={items[activeIndex].src} 
                alt={items[activeIndex].alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain transition-all duration-300 ease-in-out"
                priority
              />
            </div>

            <button 
              onClick={showNext}
              className="absolute right-2 md:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center border border-white/10 text-white transition-all cursor-pointer select-none"
              aria-label="다음 사진"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Footer controls for desktop */}
          <div className="w-full text-center text-gray-400 text-xs py-2 mb-2 select-none">
            키보드 방향키(←, →)로 이동하고 ESC키로 닫을 수 있습니다.
          </div>
        </div>
      )}
    </div>
  );
};

export default CenterGallery;
