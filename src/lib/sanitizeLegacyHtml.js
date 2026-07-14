import sanitizeHtml from 'sanitize-html';

const allowedTags = [
  ...sanitizeHtml.defaults.allowedTags,
  'h1',
  'h2',
  'h3',
  'h4',
  'img',
];

export function sanitizeLegacyHtml(html) {
  return sanitizeHtml(html, {
    allowedTags,
    allowedAttributes: {
      '*': ['class'],
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowProtocolRelative: false,
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', {
        rel: 'noopener noreferrer',
      }),
      img: sanitizeHtml.simpleTransform('img', {
        loading: 'lazy',
      }),
    },
  });
}
