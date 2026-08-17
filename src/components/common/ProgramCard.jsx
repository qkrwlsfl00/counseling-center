import React from 'react';
import Link from 'next/link';

const ProgramCard = ({ icon: Icon, title, desc, color, href, className = '' }) => (
  <Link
    href={href}
    className={`group grid grid-cols-[3rem_1fr_auto] items-start gap-x-4 bg-white px-2 py-7 text-left transition-colors duration-200 hover:bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dream-blue md:px-8 md:py-9 ${className}`}
  >
    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} transition-transform duration-200 group-hover:-translate-y-px`}>
      <Icon className="h-6 w-6 text-slate-700" strokeWidth={1.8} />
    </div>
    <div>
      <h3 className="mb-2 text-lg font-bold tracking-[0.01em] text-slate-800">{title}</h3>
      <p className="text-sm font-medium leading-6 text-slate-600">{desc}</p>
    </div>
    <span className="mt-1 text-lg text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
  </Link>
);

export default ProgramCard;
