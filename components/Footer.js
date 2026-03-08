import Link from 'next/link'
import { company } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{company.name}</h3>
            <p className="text-light-blue mb-4">
              Owner-operated commercial landscape maintenance serving Orange County since 2012.
            </p>
            <div className="flex flex-col space-y-2">
              <a href={`tel:${company.phone}`} className="text-white hover:text-orange transition-colors">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="text-white hover:text-orange transition-colors">
                {company.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/commercial-landscape-maintenance" className="text-light-blue hover:text-orange transition-colors">
                  Commercial Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/hoa-landscape-maintenance" className="text-light-blue hover:text-orange transition-colors">
                  HOA Services
                </Link>
              </li>
              <li>
                <Link href="/services/water-management-irrigation" className="text-light-blue hover:text-orange transition-colors">
                  Water Management
                </Link>
              </li>
              <li>
                <Link href="/services/tree-services-arborist" className="text-light-blue hover:text-orange transition-colors">
                  Tree Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Area</h4>
            <ul className="space-y-2 text-light-blue">
              <li>Yorba Linda</li>
              <li>Anaheim Hills</li>
              <li>Fullerton</li>
              <li>Brea</li>
              <li>Placentia</li>
              <li>Villa Park</li>
              <li>Orange County</li>
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Credentials</h4>
            <ul className="space-y-2 text-light-blue text-sm">
              <li>CA License #981154</li>
              <li>BuildZoom Score: 99</li>
              <li>BBB A+ Rating</li>
              <li>$1M Insurance</li>
              <li>Qualified Applicator</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary mt-8 pt-8 text-center text-light-blue text-sm">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="mt-2">
            Licensed Landscape Contractor | Serving Orange County Since 2012
          </p>
        </div>
      </div>
    </footer>
  )
}
