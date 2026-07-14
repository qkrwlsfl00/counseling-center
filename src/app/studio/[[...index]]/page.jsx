import { Studio } from './Studio';

export const metadata = {
  title: 'Sanity Studio',
  description: 'Manage content for the counseling center',
  viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <Studio />;
}
