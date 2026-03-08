import Link from 'next/link'
import { cities, services, company, getNearbyCities } from '@/lib/data'

export async function generateStaticParams() {
  return cities.map(city => ({
    citySlug: city.slug
  }));
}

export async function generateMetadata({ params }) {
  const city = cities.find(c => c.slug === params.citySlug);
  if (!city) return {};
  
  return {
    title: `Commercial Landscaping ${city.name} CA | ${company.name}`,
    description: `Professional commercial landscaping services in ${city.name}, ${city.county}. ${city.description}`,
  };
}

export default function CityPage({ params }) {
  const city = cities.find(c => c.slug === params.citySlug);
  if (!city) return <div>Not found</div>;
  
  const nearbyCities = getNearbyCities(city.slug, 5);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Landscaping Services in {city.name}, CA
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professional landscape maintenance, irrigation, tree care, and enhancement services 
              for {city.name} commercial properties.
            </p>
            <a href={`tel:${company.phone}`} className="btn-secondary inline-block">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            
            {/* Local Expertise */}
            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
              <h2 className="font-bold text-xl mb-3">Your Local {city.name} Landscape Partner</h2>
              <p className="text-gray-700 leading-relaxed">
                {city.description}
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">About {city.name}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Location</h3>
                <p className="text-gray-700">{city.county}</p>
                <p className="text-gray-700">{city.region}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Water District</h3>
                <p className="text-gray-700">{city.waterDistrict}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Property Types</h3>
                <p className="text-gray-700">{city.propertyTypes}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Landmarks</h3>
                <p className="text-gray-700">{city.landmarks}</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Services in {city.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map(service => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/${city.slug}`}
                  className="block p-6 bg-white hover:shadow-lg rounded-lg transition-shadow text-center border border-gray-200"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold mb-2">{service.shortName}</h3>
                  <p className="text-sm text-gray-600">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose CCB */}
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Why {city.name} Property Managers Choose {company.name}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Owner-Operated:</strong> Direct access to Christian Burke, not corporate account managers
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Local Expertise:</strong> Deep knowledge of {city.waterDistrict} and local regulations
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>24-Hour Emergency Response:</strong> Rapid response for urgent landscape issues
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Serving Since {company.founded}:</strong> Proven track record throughout {city.region}
                </div>
              </li>
            </ul>
          </div>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Nearby Service Areas</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {nearbyCities.map(c => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="block p-4 bg-gray-50 hover:bg-primary hover:text-white rounded-lg transition-colors"
                  >
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="text-sm opacity-75">{c.county}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enhance Your {city.name} Property?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Call {company.phone} for your complimentary {city.name} property assessment.
          </p>
          <a href={`tel:${company.phone}`} className="btn-secondary inline-block">
            Call {company.phone}
          </a>
        </div>
      </section>
    </>
  );
}
