import Link from 'next/link';
import { services, cities } from '@/lib/data';

export const metadata = {
  title: 'CCB Landscape Services | Commercial Landscape Maintenance Orange County',
  description: 'Professional commercial landscape maintenance serving Orange County. Owner-operated service for HOAs, commercial properties, and retail centers throughout Yorba Linda, Anaheim Hills, Fullerton, and surrounding areas.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            CCB Landscape Services
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            Professional Commercial Landscape Maintenance
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Owner-operated service throughout Orange County since 2012
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="tel:8884160840"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Call (888) 416-0840
            </a>
            <Link 
              href="/services"
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
              >
                <h3 className="font-semibold text-lg text-blue-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Area */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Service Area
          </h2>
          <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
            Serving commercial properties throughout Orange County and the Inland Empire
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow text-center border-2 border-transparent hover:border-blue-500"
              >
                <span className="text-blue-900 font-medium">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Owner-Operated Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-sm">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">99</div>
              <div className="text-sm">BuildZoom Score (Top 15%)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">A+</div>
              <div className="text-sm">BBB Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">$1M</div>
              <div className="text-sm">Insurance Coverage</div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm opacity-90">
              CA Licensed Contractor #981154, #1087655, #771033 | Qualified Applicator License
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
