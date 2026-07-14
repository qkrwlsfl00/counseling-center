import { groq } from 'next-sanity';

export const noticesQuery = groq`
  *[_type == "notice"] | order(date desc) {
    _id,
    title,
    date
  }
`;

export const noticeDetailQuery = groq`
  *[_type == "notice" && _id == $id][0] {
    _id,
    title,
    date,
    content,
    attachments[] {
      _key,
      "url": asset->url,
      "originalFilename": asset->originalFilename,
      description
    }
  }
`;

export const newsBoardsQuery = groq`
  *[_type == "newsBoard"] | order(date desc) {
    _id,
    title,
    date
  }
`;

export const newsBoardDetailQuery = groq`
  *[_type == "newsBoard" && _id == $id][0] {
    _id,
    title,
    date,
    content,
    attachments[] {
      _key,
      "url": asset->url,
      "originalFilename": asset->originalFilename,
      description
    }
  }
`;

export const resourceBoardsQuery = groq`
  *[_type == "resourceBoard"] | order(date desc) {
    _id,
    title,
    date
  }
`;

export const resourceBoardDetailQuery = groq`
  *[_type == "resourceBoard" && _id == $id][0] {
    _id,
    title,
    date,
    content,
    attachments[] {
      _key,
      "url": asset->url,
      "originalFilename": asset->originalFilename,
      description
    }
  }
`;

export const centerGalleryQuery = groq`
  *[_type == "centerGallery"][0] {
    "images": images[] {
      "src": asset->url,
      "alt": alt
    }
  }
`;
