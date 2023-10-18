import { Footer } from '@/components/Footer';
import Layout from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { WithApollo } from '@/modules/apollo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
        <WithApollo>
          {children}
          <Toaster />
        </WithApollo>
      </body>
    </html>
  );
}
