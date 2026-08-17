import { PortableText } from '@portabletext/react';
import { ArrowLeft, FileDown } from 'lucide-react';
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
        <div className="my-10 relative w-full h-auto overflow-hidden rounded-xl bg-gray-50">
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
    <div className="w-full bg-white px-5 py-24 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="text-center max-w-md w-full">
        <p className="text-gray-900 mb-2 text-xl font-bold">게시글을 찾을 수 없습니다</p>
        <p className="text-gray-500 mb-8">삭제되었거나 주소가 변경된 게시글입니다.</p>
        <Link
          href={path}
          className="inline-flex items-center font-semibold text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-dream-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dream-blue"
        >
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
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
    <section className="border-t border-gray-200 pt-8 pb-2 md:pt-10" aria-labelledby="attachments-heading">
      <h2 id="attachments-heading" className="text-lg font-bold text-gray-900 mb-5">
        첨부 파일
      </h2>
      <ul className="border-t border-gray-200">
        {downloadableAttachments.map((file) => (
          <li key={file._key || file.url} className="border-b border-gray-200">
            <a
              href={`${file.url}?dl=`}
              className="group flex items-center justify-between gap-4 px-2 py-4 transition-colors duration-200 hover:bg-dream-blue/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dream-blue"
            >
              <div className="flex min-w-0 items-center gap-3">
                <FileDown className="w-5 h-5 shrink-0 text-dream-blue" aria-hidden="true" />
                <div className="truncate">
                  <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-dream-blue transition-colors">
                    {file.originalFilename || '첨부파일'}
                  </p>
                  {file.description && (
                    <p className="text-xs text-gray-500 truncate mt-0.5">{file.description}</p>
                  )}
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-500 group-hover:text-dream-blue transition-colors whitespace-nowrap">
                다운로드
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
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
    <div className="w-full bg-white px-5 py-12 sm:px-6 md:py-20 min-h-[70vh]">
      <div className="max-w-3xl mx-auto">
        <Link
          href={path}
          className="group mb-10 flex w-fit items-center text-sm font-semibold text-gray-500 transition-colors hover:text-dream-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dream-blue md:mb-14"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          목록으로 돌아가기
        </Link>

        <article>
          <header className="border-b border-gray-200 pb-8 md:pb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 mb-5 leading-[1.3] text-balance">
              {post.title}
            </h1>
            <time className="block text-sm text-gray-500 font-medium tabular-nums">
              {post.date}
            </time>
          </header>

          <div className="py-10 md:py-14 min-h-[360px]">
            <div className="prose prose-blue max-w-none text-gray-700 leading-[1.85] break-words">
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
