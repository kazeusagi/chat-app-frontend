import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });
const dotFont = localFont({ src: '../../public/fonts/k8x12.ttf' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={dotFont.className}>{children}</body>
    </html>
  );
}
