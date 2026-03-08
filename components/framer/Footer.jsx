import Link from 'next/link';

export default function Footer({ company }) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Commercial Maintenance', href: '/services/commercial-landscape-maintenance' },
        { name: 'HOA Services', href: '/services/hoa-landscape-maintenance' },
        { name: 'Water Management', href: '/services/water-management-irrigation' },
        { name: 'Tree Services', href: '/services/tree-services-arborist' },
      ],
    },
    {
      title: 'Service Areas',
      links: [
        { name: 'Yorba Linda', href: '/locations/yorba-linda' },
        { name: 'Anaheim Hills', href: '/locations/anaheim-hills' },
        { name: 'Fullerton', href: '/locations/fullerton' },
        { name: 'Brea', href: '/locations/brea' },
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              {company?.name || 'CCB Landscape Services'}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Orange County's owner-operated commercial landscape partner since 2012
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                17071 Imperial Highway, Unit A4<br />
                Yorba Linda, CA 92886
              </p>
              <a 
                href={`tel:${company?.phone || '8884160840'}`}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors block"
              >
                {company?.phone || '(888) 416-0840'}
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
            <p>
              © {currentYear} {company?.name || 'CCB Landscape Services'}. All rights reserved.
            </p>
            <p>
              License #981154 | BBB Rating: A+ | BuildZoom Score: 99
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
