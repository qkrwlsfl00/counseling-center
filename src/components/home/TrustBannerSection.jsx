import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TrustBannerSection = () => {
  return (
    <section className="py-20 px-4 bg-dream-beige/30 relative overflow-hidden border-y border-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-dream-blue/15 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-dream-yellow/20 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
          <span className="text-dream-blue underline decoration-dream-blue decoration-4 underline-offset-8">편안한 마음으로 방문하세요</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
          아이의 보폭에 맞춘 따뜻한 동행, 투명하고 정직한 전문 코칭을 약속드립니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left md:px-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-dream-blue" />
              <h3 className="font-bold text-gray-800 text-lg">정직한 상담 체계</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-semibold">
              꼼꼼한 초기 상담을 통해 아이의 상태에 꼭 필요한 코칭만을 제안하여 불필요한 장기 프로그램을 강요하지 않습니다.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-dream-blue" />
              <h3 className="font-bold text-gray-800 text-lg">투명한 운영 방식</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed font-semibold">
              정부 지원 바우처 사용 및 센터 비용에 대해 상세하게 안내해 드립니다. 아이들의 건강한 성장을 위한 정직한 운영을 약속합니다.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-1 text-gray-500">
          <span className="text-sm">* 정부 지원 발달재활서비스 지정 전문가 코칭 기관</span>
        </div>
      </div>
    </section>
  );
};

export default TrustBannerSection;
