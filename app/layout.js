import { Poppins } from 'next/font/google';

import './globals.css';
import Providers from '@/components/Providers/Providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Xavryn',
  description: 'Modern real-time chat for teams and friends',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${poppins.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
