import createImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from './client';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'bsiahvkf',
  dataset: dataset || 'production',
});

export const urlForImage = (source) => {
  return imageBuilder.image(source);
};
