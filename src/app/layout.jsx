import '../index.css';
import '../App.css';

export const metadata = {
  title: '드림학습코칭상담센터',
  description: '아이의 건강한 성장과 발달을 돕는 전문 상담센터입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}

