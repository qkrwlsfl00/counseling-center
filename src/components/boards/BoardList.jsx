import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BoardList({ heading, path, posts }) {
  return (
    <div className="w-full bg-white px-5 py-12 sm:px-6 md:py-20 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <header className="border-b border-gray-200 pb-8 md:pb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 text-balance">
            {heading}
          </h1>
        </header>

        <section className="min-h-[300px]" aria-label={`${heading} 게시글 목록`}>
          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 border-b border-gray-200 text-gray-500">
              <p>등록된 게시글이 없습니다.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200 border-b border-gray-200">
              {posts.map((post) => (
                <li key={post._id}>
                  <Link
                    href={`${path}/${post._id}`}
                    className="group flex items-center justify-between gap-4 px-1 py-5 transition-colors duration-200 hover:bg-dream-blue/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dream-blue sm:px-2 md:py-6"
                  >
                    <div className="flex min-w-0 flex-grow flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                      <p className="text-gray-900 font-semibold leading-relaxed transition-colors group-hover:text-dream-blue md:text-lg">
                        {post.title}
                      </p>
                      <time className="shrink-0 text-sm font-medium tabular-nums text-gray-500 sm:min-w-[6.5rem] sm:text-right">
                        {post.date}
                      </time>
                    </div>

                    <ChevronRight
                      className="hidden w-5 h-5 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-dream-blue sm:block"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
