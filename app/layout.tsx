import type { Metadata } from 'next';
import { plusJakarta } from '@/components/fonts';
import './globals.css';
export const metadata: Metadata = {
  title: 'Mantau App',
  description: 'Aplikasi Monitoring VPN Seluruh Area Kerja PT Delameta Bilano'
};
import { cookies } from 'next/headers';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} dark:bg-slate-900`}>
        {children}
      </body>
    </html>
  );
}
