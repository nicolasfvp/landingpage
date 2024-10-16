import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Minha Landing Page',
  description: 'Página inicial responsiva com Next.js e Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Magison&family=Michroma&family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-[#110D35] text-white`}>
        <Header/>
        <main className="max-w-[1200px] m-auto">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}