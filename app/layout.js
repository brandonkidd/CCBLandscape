import { Inter, Figtree } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/framer/Navigation'
import Footer from '@/components/framer/Footer'
import { company } from '@/lib/data'

// Exact fonts from Framer template
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata = {
  title: 'CCB Landscape Services | Commercial Landscape Maintenance Orange County',
  description: 'Owner-operated commercial landscape maintenance serving Orange County since 2012. Professional service for HOAs, commercial properties, and retail centers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${figtree.variable}`}>
      <body className="font-figtree antialiased">
        <Navigation company={company} />
        <main className="pt-20">{children}</main>
        <Footer company={company} />
      </body>
    </html>
  )
}
