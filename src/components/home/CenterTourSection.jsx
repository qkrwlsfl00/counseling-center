import React from 'react';
import Link from 'next/link';
import CenterGallery from '../common/CenterGallery';

const CenterTourSection = () => {
  return (
    <section className="border-b border-slate-100 bg-white px-4 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl text-left">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">센터 둘러보기</h2>
          <p className="text-base font-medium leading-7 text-slate-600 md:text-lg">방문 전에 상담실과 활동 공간을 사진으로 미리 만나보세요.</p>
        </div>

        <CenterGallery limit={4} linkHref="/about#gallery" />

        <div className="mt-10 text-left">
          <Link
            href="/about#gallery"
            className="group inline-flex items-center gap-2 border-b border-slate-400 pb-1 text-base font-semibold text-slate-700 transition-colors hover:border-[#4d9fc4] hover:text-[#4d9fc4] focus:outline-none focus:ring-2 focus:ring-dream-blue focus:ring-offset-4"
          >
            센터 공간 더보기
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CenterTourSection;
