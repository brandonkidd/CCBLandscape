import Link from 'next/link'
import { company, services, cities } from '@/lib/data'

export default function Footer() {
  const primaryCities = cities.filter(c => c.region === "North Orange County").slice(0, 7);
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{company.name}</h3>
            <p className="text-sm mb-4">{company.tagline}</p>
            <p className="text-sm">{company.address.street}</p>
            <p className="text-sm">{company.address.city}, {company.address.state} {company.address.zip}</p>
            <p className="text-sm mt-2">
              <a href={`tel:${company.phone}`} className="hover:text-white">{company.phone}</a>
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-white">
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {primaryCities.map(city => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="hover:text-white">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/services" className="hover:text-white">All Services</Link></li>
              <li><Link href="/locations" className="hover:text-white">All Locations</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="mt-2">License #{company.licenses[0]} | BBB Rating: {company.bbbRating}</p>
        </div>
      </div>
    </footer>
  )
}
