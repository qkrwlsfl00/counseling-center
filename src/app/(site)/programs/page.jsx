import React from 'react';
import ProgramDetailCard from '../../../components/programs/ProgramDetailCard';
import { allPrograms } from '../../../data/programsData';

export const metadata = {
  title: '프로그램 안내 | 드림학습코칭상담센터',
  description: '드림학습코칭상담센터의 놀이/심리 치료, 언어, 인지학습, 성인상담 등 체계적인 전문 프로그램을 안내합니다.',
};

const Programs = () => {
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
