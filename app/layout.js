import { Inter } from 'next/font/google'
import './globals.css'
import { company } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: `%s | ${company.name}`,
    default: `${company.name} - Commercial Landscape Services Orange County & Inland Empire`
  },
  description: company.tagline,
  metadataBase: new URL('https://ccblandscape.com'),
}

export default function RootLayout({ children }) {
  // Organization Schema (appears on all pages)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "name": company.name,
    "legalName": company.legalName,
    "url": "https://ccblandscape.com",
    "logo": "https://ccblandscape.com/logo.png",
    "telephone": company.phone,
    "email": company.email,
    "foundingDate": company.founded.toString(),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address.street,
      "addressLocality": company.address.city,
      "addressRegion": company.address.state,
      "postalCode": company.address.zip,
      "addressCountry": "US"
    },
    "areaServed": company.serviceArea,
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    },
    "sameAs": [
      "https://www.facebook.com/ccblandscape",
      "https://www.linkedin.com/company/ccb-landscape"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
