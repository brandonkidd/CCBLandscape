import Link from 'next/link'
import { company } from '@/lib/data'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            {company.name}
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium">
              Services
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-primary font-medium">
              Locations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
          </div>
          
          <a href={`tel:${company.phone}`} className="btn-primary text-sm md:text-base">
            {company.phone}
          </a>
        </div>
      </nav>
    </header>
  )
}
