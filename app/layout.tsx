import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ju Alves | Fisioterapeuta Dermatofuncional',
  description: 'Consultório de Fisioterapia Dermatofuncional - Tratamentos para saúde, bem-estar e estética. Atendimento individual com hora marcada.',
  generator: 'v0.app',
    keywords: [
    'fisioterapia dermatofuncional',
    'fisioterapeuta porto alegre',
    'fisioterapia porto alegre',
    'fisioterapia cachoeirinha',
    'drenagem linfática',
    'pós-operatório',
    'reabilitação',
  ],
  openGraph: {
    title: 'Juliana Alves | Fisioterapia',
    description: 'Atendimento individualizado em fisioterapia dermatofuncional.',
    url: 'https://jufisioterapia.com',
    siteName: 'Ju Fisioterapia',
    locale: 'pt_BR',
    type: 'website',
  },
  verification: {
    google: 'ILqky2C3ic3RNOOg3hm1tF_dQgi-6U6XOVafuB1LDb8',
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
      },
    ],
    apple: '/logo.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
