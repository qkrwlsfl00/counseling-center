import React from 'react';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { client } from '../../../sanity/client';
import { resourceBoardsQuery } from '../../../sanity/queries';


export const metadata = {
  title: '상담·교육 자료실',
  description: '아동·청소년 심리상담, 발달, 학습코칭과 부모교육에 도움이 되는 전문 자료를 확인하세요.',
  alternates: { canonical: '/resource' },
};

export const revalidate = 60; // ISR: 60초마다 재검증

const Resource = async () => {
  let notices = [];
  try {
    notices = await client.fetch(resourceBoardsQuery);
  } catch (error) {
    console.error("Sanity fetch error:", error.message);
  }

  return (
    <div className="w-full bg-[#fcfcfc] py-16 px-4 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b-2 border-dream-blue pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 pr-6 inline-block">자료실</h1>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[300px]">
          {notices.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <p>등록된 게시글이 없습니다.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {notices.map((notice) => (
                <li key={notice._id}>
                  <Link 
                    href={`/resource/${notice._id}`}
                    className="hover:bg-dream-blue/5 transition-colors cursor-pointer p-5 flex items-center justify-between group block"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 flex-grow">
                      <div className="flex-grow">
                        <p className="text-gray-900 font-medium md:text-lg group-hover:text-dream-blue transition-colors">
                          {notice.title}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 min-w-[100px] shrink-0 font-medium sm:justify-end">
                        <Calendar className="w-4 h-4 mr-1.5 text-dream-blue" />
                        {notice.date}
                      </div>
                    </div>
                    
                    <div className="hidden sm:flex shrink-0 ml-4">
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-dream-blue transition-colors" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resource;
