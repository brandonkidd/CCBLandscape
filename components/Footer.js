import Link from 'next/link'
import { company } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{company.name}</h3>
            <p className="text-sm text-gray-400 mb-4">
              Orange County's owner-operated commercial landscape partner
            </p>
            <p className="text-sm text-gray-400">
              17071 Imperial Highway, Unit A4<br />
              Yorba Linda, CA 92886
            </p>
            <p className="text-sm text-gray-400 mt-2">
              {company.phone}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/commercial-landscape-maintenance" className="text-gray-400 hover:text-white transition-colors">
                  Landscape Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/hoa-landscape-maintenance" className="text-gray-400 hover:text-white transition-colors">
                  HOA Services
                </Link>
              </li>
              <li>
                <Link href="/services/water-management-irrigation" className="text-gray-400 hover:text-white transition-colors">
                  Irrigation
                </Link>
              </li>
              <li>
                <Link href="/services/tree-services-arborist" className="text-gray-400 hover:text-white transition-colors">
                  Tree Service
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Renovations
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Yorba Linda</li>
              <li>Anaheim Hills</li>
              <li>Fullerton</li>
              <li>Brea</li>
              <li>Placentia</li>
              <li>Villa Park</li>
              <li>Anaheim</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-white transition-colors">
                  All Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              License #981154 | BBB Rating: A+
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
