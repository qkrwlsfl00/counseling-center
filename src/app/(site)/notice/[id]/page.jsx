import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft } from 'lucide-react';
import { client } from '../../../../sanity/client';
import { noticeDetailQuery } from '../../../../sanity/queries';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../../sanity/image';

export const revalidate = 60;

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 relative w-full h-auto overflow-hidden rounded-xl border border-gray-100">
          <img
            src={urlForImage(value).url()}
            alt={value.alt || '첨부 이미지'}
            className="w-full h-auto object-contain max-h-[600px] bg-gray-50"
          />
        </div>
      );
    },
  },
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  let notice = null;
  try {
    notice = await client.fetch(noticeDetailQuery, { id });
  } catch (e) {
    console.error("Sanity fetch error in metadata:", e.message);
  }
  
  if (!notice) {
    return {
      title: '게시글을 찾을 수 없습니다',
    };
  }

  return {
    title: `${notice.title} | 드림학습코칭상담센터`,
    description: notice.title,
  };
}

const NoticeDetail = async ({ params }) => {
  const { id } = await params;
  let notice = null;
  try {
    notice = await client.fetch(noticeDetailQuery, { id });
  } catch (e) {
    console.error("Sanity fetch error in page:", e.message);
  }

  if (!notice) {
    return (
      <div className="w-full bg-dream-beige/10 py-24 px-4 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
          <p className="text-red-500 mb-6 font-bold">게시글이 존재하지 않습니다.</p>
          <Link 
            href="/notice"
            className="bg-dream-blue text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors inline-block"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = (type) => {
    switch(type) {
      case '이벤트': return 'bg-pink-100 text-pink-700';
      case '바우처 소식': return 'bg-dream-yellow text-yellow-800';
      case '교육 소식': 
      case '교육 정보': return 'bg-dream-blue/20 text-blue-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full bg-dream-beige/10 py-12 md:py-16 px-4 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/notice"
          className="flex items-center text-gray-500 hover:text-dream-blue transition-colors mb-6 font-medium group w-fit"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          목록으로 돌아가기
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-gray-100 pb-6 md:pb-8">
            <div className="flex items-center mb-4">
              <span className={`px-3 py-1.5 rounded-md text-xs font-bold ${getTypeColor(notice.type)}`}>
                {notice.type}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              {notice.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 font-medium">
              <Calendar className="w-4 h-4 mr-1.5 text-dream-blue" />
              {notice.date} 
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 min-h-[400px]">
            <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed break-words">
              {typeof notice.content === 'string' ? (
                // 레거시 HTML 데이터 (마이그레이션용)
                <div dangerouslySetInnerHTML={{ __html: notice.content }} />
              ) : (
                // Sanity Portable Text
                <PortableText value={notice.content} components={ptComponents} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
