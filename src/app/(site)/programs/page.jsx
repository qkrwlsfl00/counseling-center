import React from 'react';
import { Heart, Brain, Music, Smile, BookOpen, Users, Target, ShieldCheck } from 'lucide-react';

const ProgramDetailCard = ({ icon: Icon, title, catchphrase, desc, features, color }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center shrink-0`}>
          <Icon className="w-8 h-8 text-gray-800" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <span className="text-sm text-dream-blue font-bold">"{catchphrase}"</span>
        </div>
      </div>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{desc}</p>
      <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-1.5">기대 효과</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              {/* <span className="font-bold">•</span> */}
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const metadata = {
  title: '프로그램 안내 | 드림학습코칭상담센터',
  description: '드림학습코칭상담센터의 놀이/심리 치료, 언어, 인지학습, 성인상담 등 체계적인 전문 프로그램을 안내합니다.',
};

const Programs = () => {
  const allPrograms = [
    {
      icon: Smile, title: "놀이/심리 치료", color: "bg-[#FFB7B2]",
      catchphrase: "마음의 언어, 놀이로 소통하다",
      desc: "놀이를 매개로 아이가 자신의 감정을 자연스럽게 표출하며 마음의 안정을 찾도록 돕습니다.",
      features: ["정서 조절 및 불안감 해소", "주의집중력 강화 및 공격성 완화", "건강한 사회성 및 또래 관계 형성"]
    },
    {
      icon: Brain, title: "언어 치료", color: "bg-[#A2D2FF]",
      catchphrase: "생각을 말로, 세상을 넓히는 언어 발달",
      desc: "전문적인 진단을 바탕으로 아이의 언어 발달 수준에 맞춘 체계적인 자극과 교정을 제공합니다.",
      features: ["수용 및 표현 언어 발달 촉진", "정확한 발음 교정 (조음 및 음운)", "상황에 맞는 대화법(화용 언어) 향상"]
    },
    {
      icon: Music, title: "미술 치료", color: "bg-[#CDB4DB]",
      catchphrase: "그림으로 피어나는 아이의 마음 성장",
      desc: "창작 활동을 통해 내면의 감정을 표출하고, 자기 이해를 돕는 예술적 치유 경험을 제공합니다.",
      features: ["비언어적 감정 표현 및 정서 환기", "자기 효능감 향상 및 창의적 표현", "심리적 긴장 완화 및 자아 통합"]
    },
    {
      icon: Heart, title: "심리운동", color: "bg-[#FFDAC1]",
      catchphrase: "몸으로 배우고, 마음으로 자라는 아이",
      desc: "신체 활동을 통해 자신의 몸을 온전히 탐색하고, 환경과 상호작용하며 건강한 자아상을 확립합니다.",
      features: ["신체 인식 능력 및 조절력 강화", "자신감과 긍정적 자아 존중감 형성", "협동을 통한 사회성 및 협응력 발달"]
    },
    {
      icon: BookOpen, title: "인지학습치료", color: "bg-[#FDFD96]",
      catchphrase: "배움의 즐거움을 찾고 생각의 힘을 키우다",
      desc: "아동의 인지 발달 단계를 진단하여 주의집중력, 기억력, 사고력 등 학습의 기초 역량을 체계적으로 훈련하고, 학습 자신감을 심어줍니다.",
      features: ["학습 동기 부여 및 주의집중력 향상", "문제 해결 능력 및 사고력 강화", "자기주도적 학습 태도 형성"]
    },
    {
      icon: Users, title: "사회성집단", color: "bg-[#B2FBA5]",
      catchphrase: "함께 어울리며 배우는 관계의 기술",
      desc: "또래 친구들과의 집단 활동을 통해 사회적 규칙을 익히고, 타인과의 공감 및 소통 능력을 길러 건강한 대인관계를 맺도록 돕습니다.",
      features: ["상황에 맞는 사회적 기술 및 대화법 습득", "공감 능력 및 갈등 해결 능력 향상", "협동심 및 대인관계 자신감 증진"]
    },
    {
      icon: Target, title: "경계선 치료", color: "bg-[#FFE4E1]",
      catchphrase: "느린 학습자를 위한 따뜻한 동행과 배려",
      desc: "일반적인 아동보다 학습 속도가 다소 느리거나 인지 발달에 어려움을 겪는 아동을 위해, 개인별 맞춤형 커리큘럼을 제공하여 학습 부진을 예방하고 자존감을 회복하도록 돕습니다.",
      features: ["기초 학습 능력 향상 및 학습 성공 경험 축적", "개인의 속도에 맞춘 맞춤형 학습 전략 수립", "학습에 대한 거부감 감소 및 심리적 안정"]
    },
    {
      icon: ShieldCheck, title: "성인상담", color: "bg-[#D8BFD8]",
      catchphrase: "삶의 무게를 나누고 내면의 회복을 찾는 시간",
      desc: "일상 속 스트레스, 대인관계, 직무 갈등, 우울 및 불안 등 성인이 겪는 다양한 심리적 어려움을 전문가와 함께 탐색하여 건강한 심리 상태를 되찾고 삶의 질을 높입니다.",
      features: ["감정의 객관적 인식 및 자기 통찰력 향상", "스트레스 대처 능력 강화 및 심리적 유연성 증진", "대인관계 갈등 해결 및 건강한 자아상 확립"]
    }
  ];

  return (
    <div className="w-full bg-[#fcfcfc] py-12 px-4 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dream-blue text-white font-bold text-sm mb-4 tracking-wider">
            OUR PROGRAMS
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">프로그램 안내</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            아이의 특성과 연령에 맞춘 체계적이고 전문적인 치료·학습 코칭 프로그램을 제공합니다. 바우처 프로그램과 연계 가능합니다.
          </p>
        </div>

        {/* Program List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allPrograms.map((prog, idx) => <ProgramDetailCard key={idx} {...prog} />)}
        </div>
      </div>
    </div>
  );
};

export default Programs;
