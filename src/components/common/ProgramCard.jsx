import React from 'react';
import Link from 'next/link';

const ProgramCard = ({ icon: Icon, title, desc, color, href }) => (
  <Link
    href={href}
    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-dream-blue/50 group cursor-pointer"
  >
    <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-8 h-8 text-gray-700 group-hover:text-dream-blue transition-colors duration-300" />
    </div>
    <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-dream-blue transition-colors duration-300">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed mb-6 font-semibold">{desc}</p>
    <div className="mt-auto flex items-center gap-1.5 text-dream-blue font-bold text-sm group-hover:gap-3 transition-all">
      자세히 보기 <span className="text-lg">→</span>
    </div>
  </Link>
);

export default ProgramCard;
