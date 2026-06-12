import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <h3 
              className="text-lg font-bold text-dream-blue mb-4 flex items-center gap-2 select-none font-brand tracking-tight"
            >
              <img src={logo.src || logo} alt="드림학습코칭상담센터 로고" className="w-8 h-8 object-contain" />
              <span>드림학습코칭상담센터</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              꿈을 키우는 아이, 안심하는 부모.<br />
              따뜻한 전문성으로 아이들의 밝은 미래를 함께합니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-500 text-sm">
                <Phone className="h-5 w-5 mr-2 text-dream-blue flex-shrink-0" />
                <span>053-475-1627</span>
              </li>
              <li className="flex items-start text-gray-500 text-sm">
                <MapPin className="h-5 w-5 mr-2 text-dream-blue flex-shrink-0" />
                <span>대구광역시 남구 이천로 14 하은빌딩 3층</span>
              </li>
              <li className="flex items-start text-gray-500 text-sm">
                <Clock className="h-5 w-5 mr-2 text-dream-blue flex-shrink-0" />
                <span>
                  월-토 10:00 - 20:00<br />
                  (일요일 및 공휴일 휴무)
                </span>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center md:text-left">
          <div className="text-sm text-gray-400 space-y-1">
            <p>대표자: 박현호 ㅣ 사업자등록번호 : 514-27-02431</p>
            <p>&copy; {new Date().getFullYear()} <span className="tracking-tight">드림학습코칭상담센터</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
