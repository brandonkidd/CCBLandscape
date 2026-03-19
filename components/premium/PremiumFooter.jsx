'use client';

import Link from 'next/link';
import FadeInSection from './FadeInSection';

export default function PremiumFooter({ company }) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Commercial Maintenance', href: '/services/commercial-landscape-maintenance' },
        { name: 'HOA Services', href: '/services/hoa-landscape-maintenance' },
        { name: 'Water Management', href: '/services/water-management-irrigation' },
        { name: 'Tree Services', href: '/services/tree-care-services' },
        { name: 'Turf Conversion', href: '/services/drought-tolerant-conversions' },
        { name: 'Landscape Lighting', href: '/services/landscape-lighting' },
      ],
    },
    {
      title: 'Service Areas',
      links: [
        { name: 'Yorba Linda', href: '/locations/yorba-linda' },
        { name: 'Anaheim Hills', href: '/locations/anaheim-hills' },
        { name: 'Fullerton', href: '/locations/fullerton' },
        { name: 'Irvine', href: '/locations/irvine' },
        { name: 'Corona', href: '/locations/corona' },
        { name: 'All Locations', href: '/locations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'All Services', href: '/services' },
        { name: 'All Locations', href: '/locations' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-black">
                C
              </span>
              <span className="text-white text-xl font-bold">CCB Landscape</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
              Orange County's owner-operated commercial landscape partner.
              Boutique attention, enterprise-grade execution since 2012.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-500">
                17071 Imperial Highway, Unit A4<br />
                Yorba Linda, CA 92886
              </p>
              <a
                href={`tel:${(company?.phone || '8884160840').replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {company?.phone || '(888) 416-0840'}
              </a>
              <a
                href="mailto:contact@ccblandscape.com"
                className="block text-gray-500 hover:text-white transition-colors"
              >
                contact@ccblandscape.com
              </a>
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© {currentYear} {company?.name || 'CCB Landscape Services'}. All rights reserved.</p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span>License #981154</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>BBB A+ Rating</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>BuildZoom Score: 99</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>$1M Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
