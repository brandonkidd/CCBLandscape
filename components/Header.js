import Link from 'next/link'
import { company } from '@/lib/data'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-dark-blue hover:text-primary transition-colors">
            {company.name}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-charcoal hover:text-dark-blue font-medium transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-charcoal hover:text-dark-blue font-medium transition-colors">
              Locations
            </Link>
            <a 
              href={`tel:${company.phone}`} 
              className="bg-orange hover:bg-dark-orange text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
