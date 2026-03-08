import Link from 'next/link'
import { company } from '@/lib/data'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-gray-900">
            {company.name}
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-dark-blue font-medium transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-dark-blue font-medium transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-dark-blue font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-dark-blue font-medium transition-colors">
              Contact
            </Link>
          </div>
          
          {/* CTA Button - Green to match Framer */}
          <a 
            href={`tel:${company.phone}`} 
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2 rounded-lg transition-colors text-sm"
          >
            {company.phone}
          </a>
        </div>
      </nav>
    </header>
  )
}
