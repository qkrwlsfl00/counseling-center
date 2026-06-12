'use client';

import React, { useState, useEffect } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { MapPin, Phone } from 'lucide-react';

const branches = [
  {
    id: 1,
    name: '드림학습코칭상담센터',
    address: '대구광역시 남구 이천로 14 하은빌딩 3층',
    phone: '053-475-1627',
    lat: 35.841914,
    lng: 128.598277,
    link: 'https://map.kakao.com/link/map/26396765'
  },
  {
    id: 2,
    name: '드림심리상담연구소',
    address: '대구광역시 남구 대명로 60-2 3층',
    phone: '053-675-1627',
    lat: 35.838870,
    lng: 128.564029,
    link: 'https://map.kakao.com/link/map/888679199'
  }
];

const LocationSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [loading, error] = useKakaoLoader({
    appkey: '03326967e9b56646190fe9f9a7bf96f5',
    libraries: ['services', 'clusterer', 'drawing']
  });
  const branch = branches[activeTab];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="location" className="w-full bg-[#fdfdfc] py-24 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 animate-fade-in">오시는 길</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-dream-beige/50 p-1.5 rounded-full">
            {branches.map((b, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-[#8BA888] text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 transition-all duration-500">
          {/* Info Side */}
          <div className="md:col-span-4 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{branch.name}</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#F2FCF1] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#8BA888]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">주소</p>
                  <p className="text-gray-800 font-medium leading-relaxed">{branch.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2FCF1] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#8BA888]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1">전화번호</p>
                  <a href={`tel:${branch.phone}`} className="text-gray-800 font-bold hover:text-[#8BA888] transition-colors">{branch.phone}</a>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <a 
                href={branch.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-[#8BA888] hover:text-white text-gray-700 font-bold py-3.5 rounded-xl transition-colors shadow-sm"
              >
                카카오맵 길찾기
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="md:col-span-8 h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative">
            {isClient && !loading && !error ? (
              <Map
                center={{ lat: branch.lat, lng: branch.lng }}
                style={{ width: "100%", height: "100%" }}
                level={3}
              >
                <MapMarker position={{ lat: branch.lat, lng: branch.lng }}>
                   <div className="px-3 py-1 text-sm font-bold text-gray-700">{branch.name}</div>
                </MapMarker>
              </Map>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                {error ? '지도를 불러오는 중 오류가 발생했습니다.' : '지도 API를 불러오는 중입니다...'}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
