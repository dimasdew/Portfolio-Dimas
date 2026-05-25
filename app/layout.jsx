import './globals.css'
import { Syne, DM_Sans } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Dimas Dewantara — UI/UX Designer & Frontend Developer',
  description: 'UI/UX Designer & Frontend Developer based in Indonesia. Crafting digital experiences that feel alive.',
  metadataBase: new URL('https://portfolio-dimasdew.vercel.app'),
  openGraph: {
    title: 'Dimas Dewantara — Portfolio',
    description: 'UI/UX Designer & Frontend Developer. Crafting digital experiences that feel alive.',
    url: 'https://portfolio-dimasdew.vercel.app',
    siteName: 'Dimas Dewantara Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimas Dewantara — Portfolio',
    description: 'UI/UX Designer & Frontend Developer. Crafting digital experiences that feel alive.',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
