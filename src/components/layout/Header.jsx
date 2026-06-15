'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import logo from '../../assets/logo.png';

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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = () => setIsMobileMenuOpen(false);

  const handleLocationClick = (e, isMobile = false) => {
    if (isMobile) handleMobileNavClick();
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-400 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="text-[1.42rem] font-bold text-dream-blue flex items-center gap-2.5 font-brand tracking-tight">
              <img src={logo.src || logo} alt="드림학습코칭상담센터 로고" className="w-10 h-10 object-contain" />
              <div className="flex flex-col leading-tight text-left">
                <span>드림학습코칭상담센터</span>
                <span className="text-[1.1rem] opacity-90">드림심리상담연구소</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7 font-brand text-[1.2rem] tracking-tight">
            <Link href="/" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">홈</Link>

            <DropdownMenu title="센터 안내" href="/about">
              <Link href="/about" className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue font-bold transition-colors">센터 소개</Link>
              <Link href="/therapists" className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue font-bold transition-colors">선생님 소개</Link>
            </DropdownMenu>

            <DropdownMenu title="프로그램" href="/programs">
              <Link href="/programs" className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue font-bold transition-colors">수업 소개</Link>
              <Link href="/assessments" className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue font-bold transition-colors">검사 안내</Link>
            </DropdownMenu>

            <DropdownMenu title="커뮤니티" href="/notice">
              <Link href="/notice" className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue font-bold transition-colors">공지사항</Link>
              <Link href="/news" className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue font-bold transition-colors">센터 소식</Link>
              <Link href="/resource" className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue font-bold transition-colors">자료실</Link>
            </DropdownMenu>

            <a
              href="/#location"
              onClick={(e) => handleLocationClick(e, false)}
              className="text-gray-700 hover:text-dream-blue font-bold transition-colors py-2"
            >
              오시는 길
            </a>
          </nav>

          {/* Booking Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/booking">
              <Button variant="primary" size="sm">상담 예약</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-2 font-brand tracking-tight max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" onClick={handleMobileNavClick} className="block px-3 py-3 rounded-md text-lg font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">홈</Link>

            <div className="pt-4 pb-2">
              <Link href="/about" onClick={handleMobileNavClick} className="block px-3 text-sm font-bold text-dream-blue/70 mb-2">센터 안내</Link>
              <Link href="/about" onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">센터 소개</Link>
              <Link href="/therapists" onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">선생님 소개</Link>
            </div>

            <div className="pt-2 pb-2 border-t border-gray-50">
              <Link href="/programs" onClick={handleMobileNavClick} className="block px-3 text-sm font-bold text-dream-blue/70 mb-2 mt-2">프로그램</Link>
              <Link href="/programs" onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">수업 소개</Link>
              <Link href="/assessments" onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">검사 안내</Link>
            </div>

            <div className="pt-2 pb-2 border-t border-gray-50">
              <Link href="/notice" onClick={handleMobileNavClick} className="block px-3 text-sm font-bold text-dream-blue/70 mb-2 mt-2">커뮤니티</Link>
              <Link href="/notice" onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">공지사항</Link>
              <Link href="/news" onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">센터 소식</Link>
              <Link href="/resource" onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">자료실</Link>
            </div>

            <a
              href="/#location"
              onClick={(e) => handleLocationClick(e, true)}
              className="block px-3 py-3 rounded-md text-lg font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors mt-2 border-t border-gray-50"
            >
              오시는 길
            </a>

            <Link href="/booking" onClick={handleMobileNavClick} className="block mt-6 pt-4 border-t border-gray-100">
              <Button variant="primary" fullWidth className="py-3 font-bold">상담 예약</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
