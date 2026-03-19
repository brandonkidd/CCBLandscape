import './globals.css'
import PremiumNav from '@/components/premium/PremiumNav'
import PremiumFooter from '@/components/premium/PremiumFooter'
import StickyCtaBar from '@/components/premium/StickyCtaBar'
import { company } from '@/lib/data'

export const metadata = {
  title: 'CCB Landscape Services | Commercial Landscape Maintenance Orange County',
  description: 'Owner-operated commercial landscape maintenance serving Orange County since 2012. Professional service for HOAs, commercial properties, and retail centers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Figtree:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <PremiumNav company={company} />
        <main>{children}</main>
        <PremiumFooter company={company} />
        <StickyCtaBar phone={company.phone} />
      </body>
    </html>
  )
}
