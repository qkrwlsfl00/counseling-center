import React from 'react';
import { Heart, ShieldCheck, Sun, Users } from 'lucide-react';

export const metadata = {
  title: '센터 소개 | 드림학습코칭상담센터',
  description: '드림학습코칭상담센터의 철학과 검증된 전문성을 소개합니다.',
};

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-sans">센터 소개</h1>
        <p className="text-xl text-dream-blue font-bold mb-4">"꿈을 키우는 아이, 안심하는 부모"</p>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
          드림학습코칭상담센터는 아이들의 건강한 발달과 행복한 미래를 위해<br className="hidden md:block"/>
          분야별 최고의 전문가들이 진심을 다해 연구하고 코칭하는 종합 전문 기관입니다.
        </p>
      </div>

      {/* 철학 */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-dream-beige/30 p-8 text-center border-t-[4px] border-pink-300 shadow-sm">
          <Heart className="w-10 h-10 text-pink-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">따뜻한 마음</h3>
          <p className="text-sm text-gray-600">아이의 눈높이에서 공감하며, 정서적으로 가장 따뜻하고 안전한 환경을 제공합니다.</p>
        </div>
        <div className="bg-dream-blue/10 p-8 text-center border-t-[4px] border-dream-blue shadow-sm">
          <ShieldCheck className="w-10 h-10 text-dream-blue mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">검증된 전문성</h3>
          <p className="text-sm text-gray-600">풍부한 임상 경험을 갖춘 각 분야의 석·박사급 국가 공인 전문가가 직접 코칭합니다.</p>
        </div>
        <div className="bg-dream-yellow/20 p-8 text-center border-t-[4px] border-yellow-400 shadow-sm">
          <Sun className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">빛나는 미래</h3>
          <p className="text-sm text-gray-600">스스로 할 수 있다는 자신감을 심어주어 아이의 숨겨진 잠재력과 빛나는 내일을 열어줍니다.</p>
        </div>
      </div>

      {/* 바우처 안내 */}
      <div className="max-w-4xl mx-auto bg-[#FDFD96]/40 border border-[#FDFD96] rounded-[2rem] p-8 md:p-12 text-center shadow-sm relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-bl-full opacity-20 transform translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-tr-full opacity-20 transform -translate-x-5 translate-y-5"></div>
        
        <ShieldCheck className="w-12 h-12 text-dream-blue mx-auto mb-4 relative z-10" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b border-yellow-300 inline-block px-10 relative z-10">정부 지원 바우처 지정 우수 기관</h2>
        <p className="text-gray-700 leading-relaxed mb-6 mt-2 relative z-10 text-lg">
          우리 센터는 보건복지부가 관할하는 공식 <strong>'발달재활서비스'</strong> 및 <strong>'우리아이심리지원서비스'</strong> 제공 기관입니다.<br/>
          엄격한 시설 기준을 통과한 검증된 인력과 투명한 운영을 바탕으로 안정적인 서비스를 제공합니다.
        </p>
      </div>

      {/* 센터 둘러보기 */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">센터 둘러보기</h2>
          <p className="text-gray-600">아늑하고 편안한 드림학습코칭상담센터의 내부 모습을 소개합니다.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden group">
              <span className="text-gray-400 font-medium group-hover:scale-105 transition-transform">사진 준비 중</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
