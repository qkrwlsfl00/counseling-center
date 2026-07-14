'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { getButtonClassName } from '../ui/Button';
import DropdownMenu from './DropdownMenu';
import logo from '../../assets/logo.png';

const NAV_LINKS = [
  {
    title: '센터 안내',
    href: '/about',
    subLinks: [
      { title: '센터 소개', href: '/about' },
      { title: '선생님 소개', href: '/therapists' }
    ]
  },
  {
    title: '프로그램',
    href: '/programs',
    subLinks: [
      { title: '수업 소개', href: '/programs' },
      { title: '검사 안내', href: '/assessments' }
    ]
  },
  {
    title: '커뮤니티',
    href: '/notice',
    subLinks: [
      { title: '공지사항', href: '/notice' },
      { title: '센터 소식', href: '/news' },
      { title: '자료실', href: '/resource' }
    ]
  }
];

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
              <Image src={logo} alt="드림학습코칭상담센터 로고" className="w-10 h-10 object-contain" priority />
              <div className="flex flex-col leading-tight text-left">
                <span>드림학습코칭상담센터</span>
                <span className="text-[1.1rem] opacity-90">드림심리상담연구소</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7 font-brand text-[1.2rem] tracking-tight">
            <Link href="/" className="text-gray-700 hover:text-dream-blue font-bold transition-colors">홈</Link>

            {NAV_LINKS.map((nav) => (
              <DropdownMenu key={nav.href} title={nav.title} href={nav.href}>
                {nav.subLinks.map((sub) => (
                  <Link key={sub.href} href={sub.href} className="block px-4 py-2 text-base text-gray-700 hover:bg-dream-blue/5 hover:text-dream-blue focus:bg-dream-blue/5 focus:text-dream-blue font-bold transition-colors outline-none">
                    {sub.title}
                  </Link>
                ))}
              </DropdownMenu>
            ))}

            <Link
              href="/#location"
              onClick={(e) => handleLocationClick(e, false)}
              className="text-gray-700 hover:text-dream-blue font-bold transition-colors py-2"
            >
              오시는 길
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://blog.naver.com/dsc14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full px-4 py-1.5 text-sm bg-[#03C75A] text-white hover:bg-[#02b351] focus:ring-[#03C75A]"
            >
              네이버 블로그
            </a>
            <Link
              href="/booking"
              className={getButtonClassName({ size: 'sm', className: '!font-bold' })}
            >
              상담 예약
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-2 font-brand tracking-tight max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" onClick={handleMobileNavClick} className="block px-3 py-3 rounded-md text-lg font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">홈</Link>

            {NAV_LINKS.map((nav) => (
              <div key={nav.href} className="pt-4 pb-2 border-t border-gray-50">
                <Link href={nav.href} onClick={handleMobileNavClick} className="block px-3 text-sm font-bold text-dream-blue/70 mb-2 mt-2">{nav.title}</Link>
                {nav.subLinks.map((sub) => (
                  <Link key={sub.href} href={sub.href} onClick={handleMobileNavClick} className="block px-3 py-2.5 pl-6 rounded-md text-base font-bold text-gray-700 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors">
                    {sub.title}
                  </Link>
                ))}
              </div>
            ))}

            <Link
              href="/#location"
              onClick={(e) => handleLocationClick(e, true)}
              className="block px-3 py-3 rounded-md text-lg font-bold text-gray-800 hover:text-dream-blue hover:bg-dream-blue/5 transition-colors mt-2 border-t border-gray-50"
            >
              오시는 길
            </Link>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="https://blog.naver.com/dsc14"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMobileNavClick}
                className="inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full w-full py-3 text-base bg-[#03C75A] text-white hover:bg-[#02b351] focus:ring-[#03C75A]"
              >
                네이버 블로그
              </a>
              <Link
                href="/booking"
                onClick={handleMobileNavClick}
                className={getButtonClassName({ fullWidth: true, className: 'py-3 !font-bold' })}
              >
                상담 예약
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
