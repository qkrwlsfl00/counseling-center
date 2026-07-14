import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, FileDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { sanitizeLegacyHtml } from '../../lib/sanitizeLegacyHtml';
import { urlForImage } from '../../sanity/image';

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <div className="my-8 relative w-full h-auto overflow-hidden rounded-xl border border-gray-100">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || '첨부 이미지'}
            width={1200}
            height={800}
            sizes="(max-width: 896px) 100vw, 896px"
            className="w-full h-auto object-contain max-h-[600px] bg-gray-50"
          />
        </div>
      );
    },
  },
};

function MissingPost({ path }) {
  return (
    <div className="w-full bg-[#fcfcfc] py-24 px-4 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
        <p className="text-red-500 mb-6 font-bold">게시글이 존재하지 않습니다.</p>
        <Link
          href={path}
          className="bg-dream-blue text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors inline-block"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

function Attachments({ attachments }) {
  const downloadableAttachments = attachments?.filter((file) => file?.url) || [];

  if (downloadableAttachments.length === 0) {
    return null;
  }

  return (
    <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50/50">
      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <FileDown className="w-5 h-5 mr-2 text-dream-blue" aria-hidden="true" />
        첨부 파일
      </h2>
      <ul className="space-y-3">
        {downloadableAttachments.map((file) => (
          <li key={file._key || file.url}>
            <a
              href={`${file.url}?dl=`}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-dream-blue hover:shadow-sm transition-all group"
            >
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="p-2 bg-blue-50 text-dream-blue rounded-lg shrink-0 group-hover:bg-dream-blue group-hover:text-white transition-colors">
                  <FileDown className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="truncate">
                  <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-dream-blue transition-colors">
                    {file.originalFilename || '첨부파일'}
                  </p>
                  {file.description && (
                    <p className="text-xs text-gray-500 truncate mt-0.5">{file.description}</p>
                  )}
                </div>
              </div>
              <span className="text-xs font-medium text-gray-400 group-hover:text-dream-blue transition-colors whitespace-nowrap ml-4">
                다운로드
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BoardDetail({ path, post }) {
  if (!post) {
    return <MissingPost path={path} />;
  }

  const legacyContent = typeof post.content === 'string'
    ? sanitizeLegacyHtml(post.content)
    : null;

  return (
    <div className="w-full bg-[#fcfcfc] py-12 md:py-16 px-4 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <Link
          href={path}
          className="flex items-center text-gray-500 hover:text-dream-blue transition-colors mb-6 font-medium group w-fit"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          목록으로 돌아가기
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <header className="p-6 md:p-8 border-b border-gray-100 pb-6 md:pb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 font-medium">
              <Calendar className="w-4 h-4 mr-1.5 text-dream-blue" aria-hidden="true" />
              {post.date}
            </div>
          </header>

          <div className="p-6 md:p-8 min-h-[400px]">
            <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed break-words">
              {legacyContent !== null ? (
                <div dangerouslySetInnerHTML={{ __html: legacyContent }} />
              ) : (
                <PortableText value={post.content} components={portableTextComponents} />
              )}
            </div>
          </div>

          <Attachments attachments={post.attachments} />
        </article>
      </div>
    </div>
  );
}
