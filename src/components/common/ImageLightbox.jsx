import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ items, activeIndex, onClose, onNext, onPrev }) => {
  const closeButtonRef = useRef(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    return () => {
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, onClose, onNext, onPrev]);

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

  if (activeIndex === null) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="센터 사진 크게 보기"
    >
      {/* Header */}
      <div className="w-full flex justify-between items-center text-white px-4 py-2 relative z-10 max-w-7xl">
        <span className="text-sm font-bold tracking-wide opacity-80">드림학습코칭상담센터</span>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800">
            {activeIndex + 1} / {items.length}
          </span>
          <button 
            ref={closeButtonRef}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
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
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 md:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center border border-white/10 text-white transition-all cursor-pointer select-none"
          aria-label="이전 사진"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Active Image container */}
        <div className="relative w-full h-full max-h-[75vh] md:max-h-[80vh] flex items-center justify-center select-none">
          <Image 
            src={items[activeIndex].src} 
            alt={items[activeIndex].alt || '드림학습코칭상담센터 사진'}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain transition-all duration-300 ease-in-out"
            priority
          />
        </div>

        <button 
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 md:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center border border-white/10 text-white transition-all cursor-pointer select-none"
          aria-label="다음 사진"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Footer controls for desktop */}
      <div className="w-full flex flex-col items-center justify-end pb-4 select-none">
        {items[activeIndex].alt && (
          <p className="text-white/90 text-sm md:text-base font-medium mb-3 px-4 text-center max-w-3xl drop-shadow-md">
            {items[activeIndex].alt}
          </p>
        )}
        <div className="text-center text-gray-400 text-xs">
          키보드 방향키(←, →)로 이동하고 ESC키로 닫을 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
