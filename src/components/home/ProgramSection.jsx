import React from 'react';
import Link from 'next/link';
import ProgramCard from '../common/ProgramCard';
import { Heart, Brain, Music, Smile, BookOpen, Users, Target, ShieldCheck } from 'lucide-react';

const PROGRAMS = [
  {
    icon: Smile,
    title: "놀이·심리치료",
    desc: "말로 설명하기 어려운 감정과 행동을 놀이 안에서 살펴봅니다.",
    color: "bg-[#Fdfcf0]"
  },
  {
    icon: Brain,
    title: "언어치료",
    desc: "언어 이해와 표현, 발음, 상황에 맞는 대화를 평가하고 연습합니다.",
    color: "bg-dream-blue/10"
  },
  {
    icon: Music,
    title: "미술치료",
    desc: "그림과 만들기를 통해 감정을 표현하고 긴장을 다루는 경험을 돕습니다.",
    color: "bg-[#F8F5F9]"
  },
  {
    icon: Heart,
    title: "심리운동",
    desc: "몸을 움직이며 신체 조절, 자신감, 또래 관계를 연습합니다.",
    color: "bg-[#FEF8F4]"
  },
  {
    icon: BookOpen,
    title: "인지학습치료",
    desc: "주의집중, 기억, 문제 해결 등 학습의 기초를 점검하고 훈련합니다.",
    color: "bg-[#FEFCE8]"
  },
  {
    icon: Users,
    title: "사회성 집단",
    desc: "또래와 함께 대화, 차례 지키기, 갈등 조절을 연습합니다.",
    color: "bg-[#F2FCF1]"
  },
  {
    icon: Target,
    title: "경계선 치료",
    desc: "학습 속도와 인지 특성을 살펴보고, 아이의 수준에 맞춰 기초 학습을 돕습니다.",
    color: "bg-[#FFF4F2]"
  },
  {
    icon: ShieldCheck,
    title: "성인상담",
    desc: "스트레스, 관계, 직무 갈등, 우울·불안 등 일상의 어려움을 함께 살펴봅니다.",
    color: "bg-[#F8F3FA]"
  }
];

const ProgramSection = () => {
  return (
    <section className="border-b border-slate-100 bg-white px-4 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl text-left md:mb-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">필요한 상담과 프로그램을 살펴보세요</h2>
          <p className="text-pretty text-base font-medium leading-7 text-slate-600 md:text-lg">
            어떤 상담이나 프로그램이 맞는지 미리 정하지 않아도 괜찮습니다. 첫 상담 후 현재 어려움과 목표에 맞춰 안내합니다.
          </p>
        </div>

        <div className="grid grid-flow-dense grid-cols-1 border-y border-slate-200 md:grid-cols-2">
          {PROGRAMS.map((program, index) => (
            <ProgramCard
              key={index}
              className={`${index < PROGRAMS.length - 1 ? 'border-b border-slate-200' : ''} ${index % 2 === 0 ? 'md:border-r md:border-slate-200' : ''} ${index >= PROGRAMS.length - 2 ? 'md:border-b-0' : ''}`}
              icon={program.icon}
              title={program.title}
              desc={program.desc}
              color={program.color}
              href="/programs"
            />
          ))}
        </div>

        <div className="mt-10 text-left">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 border-b border-slate-400 pb-1 text-base font-semibold text-slate-700 transition-colors hover:border-dream-blue hover:text-dream-blue focus:outline-none focus:ring-2 focus:ring-dream-blue focus:ring-offset-4"
          >
            전체 프로그램 안내
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
