import localFont from 'next/font/local';

import type { Metadata } from 'next';
import './globals.css';

const dotFont = localFont({ src: '../../public/fonts/k8x12.ttf' });

export const metadata: Metadata = {
  title: 'Chat Dot',
  description: 'Chat Dot',
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
