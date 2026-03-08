import Link from 'next/link'
import { services, cities, company } from '@/lib/data'

export async function generateStaticParams() {
  return services.map(service => ({
    serviceSlug: service.slug
  }));
}

export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.serviceSlug);
  if (!service) return {};
  
  return {
    title: `${service.name} Orange County & Inland Empire`,
    description: `${service.heroDescription} Serving all of Orange County and the Inland Empire with owner-operated attention.`,
  };
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.serviceSlug);
  if (!service) return <div>Not found</div>;
  
  const primaryCities = cities.slice(0, 12);
  const otherServices = services.filter(s => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name}
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {service.heroDescription}
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
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {service.description}
            </p>

            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-4 mb-12">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Service Areas */}
            <h2 className="text-3xl font-bold mb-6">{service.shortName} Service Areas</h2>
            <p className="text-gray-700 mb-8">
              We provide professional {service.shortName.toLowerCase()} throughout Orange County and the Inland Empire:
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {primaryCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/services/${service.slug}/${city.slug}`}
                  className="block p-4 bg-gray-50 hover:bg-primary hover:text-white rounded-lg transition-colors group"
                >
                  <h3 className="font-semibold mb-1">{city.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/80">
                    {city.county}
                  </p>
                </Link>
              ))}
            </div>

            <Link href="/locations" className="text-primary hover:text-primary/80 font-semibold text-lg">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {otherServices.slice(0, 4).map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block p-6 bg-white hover:shadow-lg rounded-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.shortName}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
