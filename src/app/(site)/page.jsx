'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../components/ui/Button';
import LocationSection from '../../components/layout/LocationSection';
import CenterGallery from '../../components/common/CenterGallery';
import { Heart, Brain, Music, Smile, BookOpen, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

const ProgramCard = ({ icon: Icon, title, desc, color, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-dream-blue/50 group cursor-pointer"
  >
    <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-8 h-8 text-gray-700 group-hover:text-dream-blue transition-colors duration-300" />
    </div>
    <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-dream-blue transition-colors duration-300">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed mb-6 font-semibold">{desc}</p>
    <div className="mt-auto flex items-center gap-1.5 text-dream-blue font-bold text-sm group-hover:gap-3 transition-all">
      자세히 보기 <span className="text-lg">→</span>
    </div>
  </div>
);

const Home = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-dream-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-dream-yellow/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="flex items-center justify-center gap-1 mb-6 text-gray-600">
            <span className="text-sm font-bold">* 정부 지원 발달재활서비스 지정 전문가 코칭 기관</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            아이의 보폭에 맞춘<br /><span className="text-dream-blue">따뜻한 동행</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
            단순한 문제 해결을 넘어, 아이가 지닌 고유한 잠재력을 발견하고<br className="hidden md:block" />가족 모두가 편안해지는 길을 제안합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" onClick={() => router.push('/booking')} className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full px-8 text-lg">
              상담 안내받기
            </Button>
            <Button variant="outline" size="lg" onClick={() => router.push('/programs')} className="border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md transition-all rounded-full px-8 text-lg font-bold">
              운영 프로그램 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Program Summary */}
      <section className="py-24 px-4 bg-white border-y border-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">진행 중인 코칭 프로그램</h2>
            <p className="text-gray-600 font-bold">신뢰할 수 있는 전문가가 1:1 맞춤형 솔루션을 제안합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard
              icon={Smile} title="놀이/심리 치료"
              desc="놀이를 매개체로 아이의 불안을 덜어내고 긍정적인 정서 발달을 이끌어냅니다."
              color="bg-[#Fdfcf0]"
              onClick={() => router.push('/programs#therapy')}
            />
            <ProgramCard
              icon={Brain} title="언어 치료"
              desc="아이의 발달 수준을 고려하여 자연스러운 의사소통 능력을 길러줍니다."
              color="bg-[#F4FAFD]"
              onClick={() => router.push('/programs#therapy')}
            />
            <ProgramCard
              icon={Music} title="음악 치료"
              desc="음악적 활동을 통해 창의성과 사회성을 기르고 심리적 안정을 도모합니다."
              color="bg-[#F8F5F9]"
              onClick={() => router.push('/programs#therapy')}
            />
            <ProgramCard
              icon={BookOpen} title="학습 코칭"
              desc="아이 스스로 흥미를 느끼고 학습하는 올바른 기본기를 잡아줍니다."
              color="bg-[#FEFCE8]"
              onClick={() => router.push('/programs#learning')}
            />
            <ProgramCard
              icon={FileText} title="종합 심리 검사"
              desc="정확한 진단 시스템을 활용해 아이의 지능, 정서, 행동을 입체적으로 파악합니다."
              color="bg-[#F2FCF1]"
              onClick={() => router.push('/programs#learning')}
            />
            <ProgramCard
              icon={Heart} title="부모/양육 상담"
              desc="양육 과정에서 겪는 어려움을 객관적으로 진단하고 올바른 방향을 제시합니다."
              color="bg-[#FEF8F4]"
              onClick={() => router.push('/programs#therapy')}
            />
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/programs')}
              className="group border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md transition-all rounded-full px-10 text-lg font-bold flex items-center gap-2 mx-auto"
            >
              전체 프로그램 보러가기
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Banner - Simple & Warm Design */}
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

      {/* Center Tour Gallery Section */}
      <section className="py-24 px-4 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">센터 둘러보기</h2>
            <p className="text-gray-600 font-bold">아이들과 부모님이 안심하고 편안하게 머무를 수 있는 드림학습코칭상담센터 공간입니다.</p>
          </div>

          <CenterGallery limit={4} linkHref="/about#gallery" />

           <div className="mt-16 text-center">
             <Button
               variant="outline"
               size="lg"
               onClick={() => router.push('/about#gallery')}
               className="group border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md transition-all rounded-full px-10 text-lg font-bold flex items-center gap-2 mx-auto"
             >
               센터 사진 더보기
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </Button>
           </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />
    </div>
  );
};

export default Home;
