import React from 'react';
import { ClipboardList, MessageCircle, BrainCircuit, Activity } from 'lucide-react';

export const metadata = {
  title: '검사 안내 | 드림학습코칭상담센터',
  description: '종합심리검사, 언어검사, 학습심리검사, 뇌파검사(BQM) 등 체계적인 진단 평가를 안내합니다.',
};

const AssessmentSection = ({ id, title, icon: Icon, color, children }) => (
  <section id={id} className="mb-16 scroll-mt-24">
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon className="w-7 h-7 text-gray-800" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-100 flex-grow pb-2">
        {title}
      </h2>
    </div>
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
      {children}
    </div>
  </section>
);

const AssessmentItem = ({ title, desc, list }) => (
  <div className="mb-8 last:mb-0">
    <h3 className="text-lg font-bold text-dream-blue mb-2 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-dream-blue"></span>
      {title}
    </h3>
    {desc && <p className="text-gray-600 mb-3 text-base leading-relaxed pl-3 border-l-2 border-gray-100">{desc}</p>}
    {list && list.length > 0 && (
      <ul className="space-y-2.5 bg-gray-50/50 p-5 rounded-xl border border-gray-100">
        {list.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span className="text-dream-yellow font-bold mt-0.5 text-lg leading-none">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Assessments = () => {
  return (
    <div className="w-full bg-[#fdfdfc] py-16 px-4 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dream-blue text-white font-bold text-sm mb-4 tracking-wider">
            ASSESSMENTS
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">검사 안내</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            객관적이고 신뢰도 높은 검사 도구를 통해<br className="hidden md:block" />
            현재 상태를 정확하게 진단하고 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        <AssessmentSection id="psychological" title="종합심리 및 성격 검사" icon={ClipboardList} color="bg-[#FFB7B2]">
          <AssessmentItem 
            title="성격 검사" 
            list={["에니어그램, MBTI, DISC"]} 
          />
          <AssessmentItem 
            title="지능 및 인지 발달 검사" 
            desc="아동의 전반적인 인지 능력과 잠재력을 평가합니다."
            list={[
              "K-WISC-V (한국 웩슬러 아동지능검사 5판)",
              "K-WPPSI-IV (한국 웩슬러 유아지능검사 4판): 만 2세 6개월~7세 7개월 유아 대상"
            ]} 
          />
          <AssessmentItem 
            title="정서 및 성격 검사" 
            desc="아동이 느끼는 불안, 우울, 사회적 어려움 등을 파악합니다."
            list={[
              "CBCL (아동·청소년 행동평가척도): K-CBCL (한국판 아동·청소년 행동평가척도)",
              "MMPI-A / MMPI-A-RF (청소년용 다면적 인성검사)"
            ]} 
          />
          <AssessmentItem 
            title="투사적 검사 (심층 심리 분석)" 
            desc="구조화되지 않은 자극을 통해 아동의 무의식적 욕구나 심리 상태를 투영합니다."
            list={["HTP (집-나무-사람 검사)", "KFD (동적 가족화)", "CAT (아동용 통각검사)"]} 
          />
          <AssessmentItem 
            title="사회성 및 발달 검사 등" 
            list={[
              "K-Vineland-II (한국판 바인랜드 적응행동척도)",
              "Social Skills Rating System (사회성 기술 평정척도)",
              "부모양육태도검사 등"
            ]} 
          />
        </AssessmentSection>

        <AssessmentSection id="language" title="언어 검사" icon={MessageCircle} color="bg-[#A2D2FF]">
          <AssessmentItem 
            title="전반적 언어발달 평가" 
            desc="아동의 전반적인 수용(이해) 및 표현 언어 수준을 확인하는 검사입니다."
            list={[
              "SELSI (영유아 언어발달검사): 생후 5개월~36개월 영유아 대상",
              "PRES (취학 전 아동의 수용언어 및 표현언어 척도): 만 2세~6세 아동 대상",
              "LSSC (학령기 아동 언어검사): 만 7세~12세(초등학생) 대상"
            ]} 
          />
          <AssessmentItem 
            title="조음 및 음운 능력 평가" 
            desc="발음이 정확한지, 음운 규칙을 잘 사용하는지 평가하는 도구입니다."
            list={[
              "U-TAP2 (우리말 조음·음운검사 2): 만 2세 6개월~7세 아동의 조음 정확도 분석",
              "APAC (아동용 발음평가): 조음 및 음운 발달을 평가하는 도구"
            ]} 
          />
          <AssessmentItem 
            title="어휘 및 세부 영역 평가" 
            desc="특정 언어 영역(어휘, 문법, 화용 등)을 심층적으로 확인합니다."
            list={[
              "REVT (수용·표현 어휘력 검사): 어휘 발달 수준을 측정",
              "KOSECT (구문의미 이해력 검사): 문장 구조와 의미 이해 능력을 평가",
              "KOPLAC (한국 아동 메타-화용언어 검사): 사회적 상황에 맞게 언어를 사용하는 화용 능력을 평가(만 5세~12세)"
            ]} 
          />
          <AssessmentItem 
            title="읽기 및 학습 관련 검사" 
            list={[
              "KOLRA (한국어 읽기검사): 초등학생의 읽기 능력 및 하위 영역 평가",
              "QRW (아동 간편 읽기 및 쓰기 발달검사): 초기 읽기/쓰기 문제 조기 선별"
            ]} 
          />
        </AssessmentSection>

        <AssessmentSection id="learning" title="학습 심리 검사" icon={BrainCircuit} color="bg-[#FDFD96]">
          <AssessmentItem 
            title="학습 동기 및 전략 검사" 
            desc="학습을 지속하게 하는 힘과 구체적인 공부 방법을 평가합니다."
            list={["MLST-II (학습전략검사)", "학습동기검사 (Learning Motivation Test)"]} 
          />
          <AssessmentItem 
            title="집중력 및 인지 처리 관련 검사" 
            desc="학습을 방해하는 주의집중력의 결함이나 인지적 특성을 파악합니다."
            list={["CAT (종합주의력검사)"]} 
          />
          <AssessmentItem 
            title="학습 정서 및 태도 검사" 
            desc="공부와 관련하여 아이가 느끼는 불안이나 거부감을 평가합니다."
            list={["학습불안검사"]} 
          />
          <AssessmentItem 
            title="종합 진단형 도구" 
            list={[
              "U&I 학습상담검사: 학습 심리 분석과 학습 행동 분석을 결합하여, 학습자의 성격과 학습 유형을 통합적으로 진단합니다. 아이의 성격에 맞는 공부법을 찾아주는 데 매우 효과적입니다."
            ]} 
          />
        </AssessmentSection>

        <AssessmentSection id="bqm" title="뇌파 검사 (BQM)" icon={Activity} color="bg-[#B2FBA5]">
          <AssessmentItem 
            title="뇌 기능 지표 분석" 
            desc="뇌의 활성도, 좌우뇌 균형, 알파파(안정/이완) 및 베타파(집중/주의)의 비율, 뇌파의 일관성 등을 분석합니다."
          />
          <AssessmentItem 
            title="결과 시각화" 
            desc="측정된 뇌파를 바탕으로 3D 뇌파 다이어그램을 생성하여 현재 뇌의 건강 상태나 학습/정서적 특성을 한눈에 파악할 수 있도록 돕습니다."
          />
          <AssessmentItem 
            title="적용 범위" 
            desc="ADHD 성향, 불면증, 기억력 저하, 스트레스 관리, 치매 예방 등 뇌 기능의 개선이 필요한 다양한 상황에서 활용됩니다."
          />
        </AssessmentSection>

      </div>
    </div>
  );
};

export default Assessments;
