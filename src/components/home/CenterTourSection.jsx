import React from 'react';
import Link from 'next/link';
import { getButtonClassName } from '../ui/Button';
import CenterGallery from '../common/CenterGallery';

const CenterTourSection = () => {
  return (
    <section className="py-24 px-4 bg-white border-b border-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">센터 둘러보기</h2>
          <p className="text-gray-600 font-bold">아이들과 부모님이 안심하고 편안하게 머무를 수 있는 드림학습코칭상담센터 공간입니다.</p>
        </div>

        <CenterGallery limit={4} linkHref="/about#gallery" />

        <div className="mt-16 text-center">
          <Link
            href="/about#gallery"
            className={getButtonClassName({ variant: 'outline', size: 'lg', className: 'group border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md transition-all rounded-full px-10 text-lg font-bold flex items-center gap-2 mx-auto' })}
          >
            센터 사진 더보기
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CenterTourSection;
