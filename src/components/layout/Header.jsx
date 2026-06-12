'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="text-[1.42rem] font-bold text-dream-blue flex items-center gap-2.5 font-brand tracking-tight">
              <img src={logo.src || logo} alt="드림학습코칭상담센터 로고" className="w-10 h-10 object-contain" />
              <span>드림학습코칭상담센터</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-7 font-brand text-[1.2rem] tracking-tight">
            <Link href="/" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">홈</Link>
            <Link href="/about" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">센터 소개</Link>
            <Link href="/programs" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">수업 소개</Link>
            <Link href="/assessments" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">검사 안내</Link>
            <Link href="/therapists" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">선생님 소개</Link>
            <Link href="/notice" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">공지사항</Link>
            <a 
              href="/#location" 
              onClick={(e) => { 
                if (window.location.pathname === '/') { 
                  e.preventDefault(); 
                  document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' }); 
                } 
              }} 
              className="text-gray-700 hover:text-dream-blue font-bold transition-colors"
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
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-2 font-brand tracking-tight">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">홈</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">센터 소개</Link>
            <Link href="/programs" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">수업 소개</Link>
            <Link href="/assessments" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">검사 안내</Link>
            <Link href="/therapists" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">선생님 소개</Link>
            <Link href="/notice" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">공지사항</Link>
            <a 
              href="/#location" 
              onClick={(e) => { 
                setIsMobileMenuOpen(false);
                if (window.location.pathname === '/') { 
                  e.preventDefault(); 
                  document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' }); 
                } 
              }} 
              className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors"
            >
              오시는 길
            </a>
            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4">
              <Button variant="primary" fullWidth className="py-3 font-bold">상담 예약</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
