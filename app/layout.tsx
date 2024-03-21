import type { Metadata } from 'next';
import { plusJakarta } from '@/components/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mantau App',
  description: 'Aplikasi Monitoring VPN Seluruh Area Kerja PT Delameta Bilano'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}
