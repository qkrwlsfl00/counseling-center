import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import ProgramCard from '../common/ProgramCard';
import { Heart, Brain, Music, Smile, BookOpen, Users } from 'lucide-react';

const PROGRAMS = [
  {
    icon: Smile,
    title: "놀이/심리 치료",
    desc: "놀이를 매개로 아이가 자신의 감정을 표출하며 마음의 안정을 찾도록 돕습니다.",
    color: "bg-[#Fdfcf0]"
  },
  {
    icon: Brain,
    title: "언어 치료",
    desc: "전문적인 진단을 바탕으로 발달 수준에 맞춘 체계적인 언어 자극을 제공합니다.",
    color: "bg-[#F4FAFD]"
  },
  {
    icon: Music,
    title: "미술 치료",
    desc: "창작 활동을 통해 내면의 감정을 표출하고, 예술적 치유 경험을 제공합니다.",
    color: "bg-[#F8F5F9]"
  },
  {
    icon: Heart,
    title: "심리운동",
    desc: "신체 활동을 통해 자신의 몸을 탐색하고 건강한 자아상을 확립합니다.",
    color: "bg-[#FEF8F4]"
  },
  {
    icon: BookOpen,
    title: "인지학습치료",
    desc: "주의집중력, 사고력 등 학습 기초 역량을 체계적으로 훈련합니다.",
    color: "bg-[#FEFCE8]"
  },
  {
    icon: Users,
    title: "사회성집단",
    desc: "또래 집단 활동을 통해 사회적 규칙을 익히고 소통 능력을 기릅니다.",
    color: "bg-[#F2FCF1]"
  }
];

const ProgramSection = () => {
  const router = useRouter();

  return (
    <section className="py-24 px-4 bg-white border-y border-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">진행 중인 코칭 프로그램</h2>
          <p className="text-gray-600 font-bold">신뢰할 수 있는 전문가가 1:1 맞춤형 솔루션을 제안합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              desc={program.desc}
              color={program.color}
              onClick={() => router.push('/programs')}
            />
          ))}
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
  );
};

export default ProgramSection;
