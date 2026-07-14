import '../index.css';
import { Analytics } from '@vercel/analytics/react';
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 대구 아동·청소년 심리상담`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 대구 아동·청소년 심리상담`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/favicon.png',
        width: 640,
        height: 640,
        alt: `${SITE_NAME} 로고`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${SITE_NAME} | 대구 아동·청소년 심리상담`,
    description: SITE_DESCRIPTION,
    images: ['/favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: '심리상담 및 아동 발달 지원',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
        <Analytics />

      </body>
    </html>
  );
}
