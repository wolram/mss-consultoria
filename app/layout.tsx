import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MSS Consultoria | RPA, IA e Engenharia de Software',
  description:
    'Soluções em RPA, Inteligência Artificial e Engenharia de Software. Transforme sua empresa com tecnologia de ponta.',
  keywords: ['RPA', 'IA', 'Engenharia de Software', 'Consultoria', 'Automação'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'MSS Consultoria',
    description: 'Consultoria em RPA, IA e Engenharia de Software',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mssconsultoria.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
