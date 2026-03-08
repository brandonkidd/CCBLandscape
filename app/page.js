import Link from 'next/link';
import { services, cities } from '@/lib/data';

export const metadata = {
  title: 'CCB Landscape Services | Commercial Landscape Maintenance Orange County',
  description: 'Owner-operated commercial landscape maintenance serving Orange County since 2012. Professional service for HOAs, commercial properties, and retail centers. BuildZoom Score: 99. Call (888) 416-0840.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Minimal like Framer */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue mb-6">
            CCB Landscape Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Professional Commercial Landscape Maintenance
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Owner-operated service throughout Orange County since 2012
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:8884160840"
              className="bg-orange hover:bg-dark-orange text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Call (888) 416-0840
            </a>
            <Link 
              href="/services"
              className="bg-dark-blue hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Grid like Framer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional landscape maintenance for commercial properties throughout Orange County
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-semibold text-dark-blue mb-3 group-hover:text-orange transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Professional {service.name.toLowerCase()} for commercial properties.
                </p>
                <span className="text-dark-blue group-hover:text-orange font-medium transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area - Clean & Minimal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue text-center mb-4">
            Service Area
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Serving commercial properties throughout Orange County and the Inland Empire
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.slice(0, 18).map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-dark-blue hover:shadow-md transition-all"
              >
                <span className="text-dark-blue font-medium text-sm">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals - Clean Design */}
      <section className="py-20 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Owner-Operated Excellence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">50+</div>
              <div className="text-gray-300 text-sm">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">99</div>
              <div className="text-gray-300 text-sm">BuildZoom Score (Top 15%)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">A+</div>
              <div className="text-gray-300 text-sm">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">$1M</div>
              <div className="text-gray-300 text-sm">Insurance Coverage</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              CA Licensed Contractor #981154, #1087655, #771033 | Qualified Applicator License
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
