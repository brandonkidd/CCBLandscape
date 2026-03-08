import Link from 'next/link'
import { cities, company } from '@/lib/data'

export const metadata = {
  title: 'Service Areas - Orange County & Inland Empire Commercial Landscaping',
  description: `Professional commercial landscape services throughout Orange County and the Inland Empire. Serving ${cities.length}+ cities with owner-operated attention.`,
}

export default function LocationsPage() {
  const ocCities = cities.filter(c => c.county.includes("Orange"));
  const ieCities = cities.filter(c => c.region === "Inland Empire");

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Areas
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professional commercial landscaping throughout Orange County and the Inland Empire. 
              Local expertise, owner-operated attention, 24-hour emergency response.
            </p>
            <a href={`tel:${company.phone}`} className="btn-secondary inline-block">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          
          {/* Orange County */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Orange County</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ocCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="block p-6 bg-white hover:shadow-lg rounded-lg transition-shadow border border-gray-200 group"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{city.region}</p>
                  <span className="text-primary font-semibold text-sm">
                    View Services →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Inland Empire */}
          {ieCities.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Inland Empire</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ieCities.map(city => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}`}
                    className="block p-6 bg-white hover:shadow-lg rounded-lg transition-shadow border border-gray-200 group"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{city.county}</p>
                    <span className="text-primary font-semibold text-sm">
                      View Services →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't See Your City?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We may still serve your area. Call {company.phone} to discuss your commercial 
            landscape needs anywhere in Orange County or the Inland Empire.
          </p>
          <a href={`tel:${company.phone}`} className="btn-primary inline-block">
            Call {company.phone}
          </a>
        </div>
      </section>
    </>
  )
}
