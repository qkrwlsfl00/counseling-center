import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import ProgramSection from '../../components/home/ProgramSection';
import TrustBannerSection from '../../components/home/TrustBannerSection';
import CenterTourSection from '../../components/home/CenterTourSection';
import LocationSection from '../../components/layout/LocationSection';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../../lib/site';

export const metadata = {
  title: {
    absolute: `${SITE_NAME} | 대구 아동·청소년 심리상담`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: '드림심리상담연구소',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      sameAs: ['https://blog.naver.com/dsc14'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/favicon.png`,
      telephone: '+82-53-475-1627',
      priceRange: '₩₩',
      description: SITE_DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '이천로 14 하은빌딩 3층',
        addressLocality: '남구',
        addressRegion: '대구광역시',
        addressCountry: 'KR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.841914,
        longitude: 128.598277,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:00',
        },
      ],
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      areaServed: '대구광역시',
    },
  ],
};

const Home = () => {
  return (
    <div className="w-full bg-[#fcfcfc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <ProgramSection />
      <TrustBannerSection />
      <CenterTourSection />
      <LocationSection />
    </div>
  );
};

export default Home;
