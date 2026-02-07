import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MSS Consultoria | Automação Inteligente e IA para Empresas',
  description:
    'Consultoria em automação inteligente, RPA e soluções de IA para empresas brasileiras. Resultados mensuráveis e foco em eficiência operacional.',
  keywords: [
    'Automação inteligente',
    'RPA',
    'Inteligência Artificial',
    'Consultoria',
    'Processos',
    'Eficiência operacional',
  ],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://mssconsultoria.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MSS Consultoria | Automação Inteligente e IA',
    description:
      'Automação inteligente, IA aplicada e consultoria estratégica para acelerar resultados.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mssconsultoria.com.br',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSS Consultoria | Automação Inteligente e IA',
    description:
      'Automação inteligente, IA aplicada e consultoria estratégica para empresas brasileiras.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'MSS Consultoria',
        url: 'https://mssconsultoria.com.br',
        email: 'contato@mssconsultoria.com.br',
        sameAs: ['https://www.linkedin.com/company/mss-consultoria'],
      },
      {
        '@type': 'WebSite',
        name: 'MSS Consultoria',
        url: 'https://mssconsultoria.com.br',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://mssconsultoria.com.br/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1E3A5F" />
        <link rel="icon" href="/favicon.ico" />
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
