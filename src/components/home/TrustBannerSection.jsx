import React from 'react';
const TrustBannerSection = () => {
  return (
    <section className="border-y border-[#ebe7dd] bg-[#f8f5ee] px-4 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            첫 상담에서<br className="hidden lg:block" /> 차근차근 안내드립니다
          </h2>
          <p className="max-w-md text-pretty text-base font-medium leading-7 text-slate-600">
            처음부터 어떤 프로그램이 맞는지 정하고 오실 필요는 없습니다. 요즘 아이가 힘들어 보였던 순간부터 들려주세요.
          </p>
        </div>

        <div className="divide-y divide-[#dcd6c9] border-y border-[#dcd6c9]">
          <div className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <h3 className="text-base font-bold text-slate-800">현재 어려움 확인</h3>
            <p className="text-sm font-medium leading-6 text-slate-600">가정과 학교에서 최근 어려워하는 상황과 보호자가 궁금한 점을 충분히 듣습니다.</p>
          </div>
          <div className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <h3 className="text-base font-bold text-slate-800">진행 방법 설명</h3>
            <p className="text-sm font-medium leading-6 text-slate-600">검사나 수업이 필요한 이유, 진행 방식과 목표를 이해하기 쉽게 설명합니다.</p>
          </div>
          <div className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <h3 className="text-base font-bold text-slate-800">비용과 일정 안내</h3>
            <p className="text-sm font-medium leading-6 text-slate-600">예상 일정과 비용, 이용 가능한 정부 지원 바우처를 함께 안내합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBannerSection;
