import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';

export default function BoardList({ heading, path, posts }) {
  return (
    <div className="w-full bg-[#fcfcfc] py-16 px-4 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b-2 border-dream-blue pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 pr-6 inline-block">
            {heading}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[300px]">
          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <p>등록된 게시글이 없습니다.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {posts.map((post) => (
                <li key={post._id}>
                  <Link
                    href={`${path}/${post._id}`}
                    className="hover:bg-dream-blue/5 transition-colors cursor-pointer p-5 flex items-center justify-between group block"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 flex-grow">
                      <p className="flex-grow text-gray-900 font-medium md:text-lg group-hover:text-dream-blue transition-colors">
                        {post.title}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 min-w-[100px] shrink-0 font-medium sm:justify-end">
                        <Calendar className="w-4 h-4 mr-1.5 text-dream-blue" aria-hidden="true" />
                        {post.date}
                      </div>
                    </div>

                    <ChevronRight
                      className="hidden sm:block w-5 h-5 shrink-0 ml-4 text-gray-300 group-hover:text-dream-blue transition-colors"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
