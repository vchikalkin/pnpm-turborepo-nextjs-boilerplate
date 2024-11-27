import '@repo/ui/globals.css';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated by create turbo',
  title: 'Docs',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
