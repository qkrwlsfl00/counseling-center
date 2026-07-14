import React from 'react';
import Link from 'next/link';
import { getButtonClassName } from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-dream-blue/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-dream-yellow/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <div className="flex items-center justify-center gap-1 mb-5 text-gray-600">
          <span className="text-sm font-bold">* 정부 지원 발달재활서비스 지정 전문가 코칭 기관</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          아이의 보폭에 맞춘<br /><span className="text-dream-blue">따뜻한 동행</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
          단순한 문제 해결을 넘어, 아이가 지닌 고유한 잠재력을 발견하고 <br className="hidden md:block" />가족 모두가 편안해지는 길을 제안합니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/booking" className={getButtonClassName({ variant: 'primary', size: 'lg', className: 'shadow-lg hover:shadow-xl transition-all rounded-full px-8 text-lg' })}>
            상담 안내받기
          </Link>
          <Link href="/programs" className={getButtonClassName({ variant: 'outline', size: 'lg', className: 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:shadow-md transition-all rounded-full px-8 text-lg font-bold' })}>
            운영 프로그램 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
