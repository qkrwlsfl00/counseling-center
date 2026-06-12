import React from 'react';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { client } from '../../../sanity/client';
import { noticesQuery } from '../../../sanity/queries';


export const metadata = {
  title: '센터 소식 | 드림학습코칭상담센터',
  description: '드림학습코칭상담센터의 새로운 소식과 유용한 교육 정보를 전해드립니다.',
};

export const revalidate = 60; // ISR: 60초마다 재검증

const Notice = async () => {
  let notices = [];
  try {
    notices = await client.fetch(noticesQuery);
  } catch (error) {
    console.error("Sanity fetch error:", error.message);
  }

  const getTypeColor = (type) => {
    switch(type) {
      case '이벤트': return 'bg-pink-100 text-pink-700';
      case '바우처 소식': return 'bg-dream-yellow text-yellow-800';
      case '교육 정보': return 'bg-dream-blue/20 text-blue-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full bg-[#fcfcfc] py-16 px-4 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b-2 border-dream-blue pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 pr-6 inline-block">센터 소식 및 공지사항</h1>
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
                    href={`/notice/${notice._id}`}
                    className="hover:bg-dream-blue/5 transition-colors cursor-pointer p-5 flex items-center justify-between group block"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 flex-grow">
                      <span className={`px-3 py-1.5 rounded-md text-xs font-bold w-fit sm:w-24 text-center shrink-0 ${getTypeColor(notice.type)}`}>
                        {notice.type}
                      </span>
                      <div className="flex-grow">
                        <p className="text-gray-900 font-medium md:text-lg group-hover:text-dream-blue transition-colors">
                          {notice.title}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 min-w-[100px] shrink-0 font-medium">
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

export default Notice;
