import React from "react";
import Link from "next/link";
import { getButtonClassName } from "../ui/Button";
import HeroIllustration from "./HeroIllustration";

const HeroSection = () => {
  return (
    <section className="overflow-hidden border-b border-[#efede8] bg-[#fcfcfc] px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div className="relative isolate flex flex-col justify-center py-4 text-left animate-fade-in-up md:py-8">
          <HeroIllustration compact />
          <h1 className="relative z-10 mb-7 max-w-3xl text-balance text-4xl font-extrabold leading-[1.14] tracking-[-0.02em] text-slate-900 md:text-[3.45rem] lg:text-[3.7rem]">
            아이를 먼저 이해하고,
            <br />
            <span className="text-dream-blue">필요한 도움을 함께 찾습니다</span>
          </h1>
          <p className="mb-9 max-w-xl text-pretty text-base font-medium leading-8 text-slate-600 md:text-lg">
            언어, 놀이·심리, 인지학습, 심리운동 상담을 진행합니다.
            <br className="hidden md:block" />첫 상담에서 아이의 현재 어려움과
            필요한 과정을 차분히 안내드립니다.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/booking"
              className={getButtonClassName({
                variant: "primary",
                size: "lg",
                className:
                  "!rounded-xl px-8 text-base font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all",
              })}
            >
              첫 상담 예약하기
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:text-dream-blue focus:outline-none focus:ring-2 focus:ring-dream-blue focus:ring-offset-2 sm:px-3"
            >
              프로그램 살펴보기 <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-11 flex flex-wrap justify-center sm:justify-normal gap-x-6 gap-y-2 border-t border-slate-200 pt-5 text-sm font-medium text-slate-500">
            <span>아동·청소년 상담</span>
            <span>1:1 및 집단 프로그램</span>
            <span>바우처 이용 기관</span>
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
};

export default HeroSection;
