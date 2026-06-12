import { groq } from 'next-sanity';

export const noticesQuery = groq`
  *[_type == "notice"] | order(date desc) {
    _id,
    title,
    type,
    date,
    content
  }
`;

export const noticeDetailQuery = groq`
  *[_type == "notice" && _id == $id][0] {
    _id,
    title,
    type,
    date,
    content
  }
`;
