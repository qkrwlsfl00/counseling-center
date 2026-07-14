import React from 'react';
import { client } from '../../sanity/client';
import { centerGalleryQuery } from '../../sanity/queries';
import CenterGalleryClient from './CenterGalleryClient';

const CenterGallery = async (props) => {
  let photos = [];

  try {
    const data = await client.fetch(centerGalleryQuery, {}, { next: { revalidate: 60 } });
    photos = data?.images || [];
  } catch (error) {
    console.error('Failed to fetch gallery photos from Sanity:', error.message);
  }

  return <CenterGalleryClient photos={photos} {...props} />;
};

export default CenterGallery;
