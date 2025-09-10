// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'She Forward Coast',
  description: 'Empowering women and youth in Coastal Kenya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body text-light bg-dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
