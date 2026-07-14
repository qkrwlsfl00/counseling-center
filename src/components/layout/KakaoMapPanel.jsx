'use client';

import React from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const kakaoMapAppKey = process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY;

const KakaoMapPanel = ({ branch }) => {
  const [loading, error] = useKakaoLoader({
    appkey: kakaoMapAppKey,
    libraries: ['services'],
  });

  if (loading || error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 px-6 text-center">
        {error ? '지도를 불러오는 중 오류가 발생했습니다.' : '지도를 불러오는 중입니다...'}
      </div>
    );
  }

  return (
    <Map
      center={{ lat: branch.lat, lng: branch.lng }}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      <MapMarker position={{ lat: branch.lat, lng: branch.lng }}>
        <div className="px-3 py-1 text-sm font-bold text-gray-700">{branch.name}</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMapPanel;
