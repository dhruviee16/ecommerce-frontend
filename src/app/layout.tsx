'use client';

import { Footer } from '@/components/Footer';

import Layout from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arty Us',
  description: 'Fueling your imagination',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Navigation />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
