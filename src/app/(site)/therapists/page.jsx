import React from 'react';

export const metadata = {
  title: '선생님 소개 | 드림학습코칭상담센터',
  description: '드림학습코칭상담센터의 검증된 각 분야 전문가 선생님들을 소개합니다.',
};

const staffGroups = [
  {
    category: "센터장 / 원장",
    members: [
      { name: "박현호", title: "센터장", education: "심리상담박사, 특수체육석사 / 대구교육대학교 겸임교수", roles: "부모상담, 기업상담, 성인상담, 교육청학부모강사, 아동청소년상담" },
      { name: "남정아", title: "원장", education: "상담학박사, 교육심리석사", roles: "아동심리전문상담사, 인지학습전문상담사, 미술상담사, 중등정교사" }
    ]
  },
  {
    category: "전문상담사",
    members: [
      { name: "위신영", education: "상담학 박사", roles: "임상심리사 1급, 청소년 상담사 1급" },
      { name: "장은주", education: "상담학 박사", roles: "" },
      { name: "조재은", education: "상담학 박사", roles: "" },
      { name: "김혜경", education: "상담학 석사", roles: "청소년상담사 2급" },
      { name: "임수경", education: "상담학 석사", roles: "청소년상담사 2급" }
    ]
  },
  {
    category: "미술전문상담사",
    members: [
      { name: "박다은", education: "대구대 재활심리석사", roles: "" }
    ]
  },
  {
    category: "언어전문상담사",
    members: [
      { name: "옥민주", education: "언어치료전공", roles: "언어재활사 1급" },
      { name: "이슬이", education: "언어치료전공", roles: "언어재활사" },
      { name: "지미애", education: "언어치료전공", roles: "언어재활사" }
    ]
  },
  {
    category: "학습전문상담사",
    members: [
      { name: "김종형", education: "교육학박사", roles: "학습컨설팅, 진로코칭" },
      { name: "강인경", education: "", roles: "학습코칭전문상담사, 논술전문가" }
    ]
  },
  {
    category: "음악, 악기 선생님",
    members: [
      { name: "유지수", education: "성악전공", roles: "음악상담" },
      { name: "박규리", education: "바이올린 전공", roles: "" },
      { name: "박금찬", education: "타악기전공 (드럼, 난타)", roles: "" }
    ]
  },
  {
    category: "체육 바른자세운동 선생님",
    members: [
      { name: "김은주", education: "체육석사", roles: "바른자세운동전문가" },
      { name: "백수희", education: "체육석사", roles: "바른자세운동전문가" }
    ]
  }
];

const Therapists = () => {
  return (
    <div className="w-full bg-[#fcfcfc] py-20 px-4 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-5">선생님 소개</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            아이들의 마음에 귀 기울이고, 가족의 행복을 위해 고민하는<br />
            드림학습코칭상담센터의 분야별 전문가들을 소개합니다.
          </p>
        </div>

        {/* Staff List by Group */}
        <div className="flex flex-col w-full">
          {staffGroups.map((group, gIdx) => (
            <div key={gIdx} className={`py-10 ${gIdx !== staffGroups.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <span className="w-2 h-6 bg-dream-blue rounded-full inline-block"></span>
                {group.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.members.map((member, mIdx) => (
                  <div key={mIdx} className="flex flex-col bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{member.name} <span className="text-base font-medium text-gray-500">선생님</span></h3>
                      {member.title && (
                        <span className="px-2.5 py-0.5 rounded-full bg-dream-blue/10 text-dream-blue text-sm font-bold">
                          {member.title}
                        </span>
                      )}
                    </div>
                    {member.education && (
                      <p className="text-gray-700 text-[15px] leading-relaxed flex items-start gap-2 mt-1">
                        <span>{member.education}</span>
                      </p>
                    )}
                    {member.roles && (
                      <p className="text-gray-600 text-[15px] leading-relaxed flex items-start gap-2 mt-1">
                        <span>{member.roles}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapists;
