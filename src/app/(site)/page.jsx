'use client';

import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import ProgramSection from '../../components/home/ProgramSection';
import TrustBannerSection from '../../components/home/TrustBannerSection';
import CenterTourSection from '../../components/home/CenterTourSection';
import LocationSection from '../../components/layout/LocationSection';

const Home = () => {
  return (
    <div className="w-full bg-[#fcfcfc]">
      <HeroSection />
      <ProgramSection />
      <TrustBannerSection />
      <CenterTourSection />
      <LocationSection />
    </div>
  );
};

export default Home;
