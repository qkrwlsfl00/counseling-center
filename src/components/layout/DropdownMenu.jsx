import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const DropdownMenu = ({ title, href, children }) => {
  return (
    <div className="relative group py-2">
      <Link href={href} className="flex items-center text-gray-700 group-hover:text-dream-blue font-bold transition-colors">
        {title} <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
      </Link>
      <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-200 z-50 overflow-hidden">
        <div className="py-2 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
