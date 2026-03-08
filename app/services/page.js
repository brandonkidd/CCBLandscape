import Link from 'next/link'
import { services, company } from '@/lib/data'

export const metadata = {
  title: 'Commercial Landscape Services Orange County & Inland Empire',
  description: `Professional commercial landscaping services including maintenance, irrigation, tree care, and enhancements. ${company.tagline}`,
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Landscape Services
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Comprehensive commercial landscaping solutions for Orange County and Inland Empire properties.
              Owner-operated attention, professional execution, 24-hour emergency response.
            </p>
            <a href={`tel:${company.phone}`} className="btn-secondary inline-block">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block p-8 bg-white hover:shadow-xl rounded-lg transition-shadow border border-gray-200 group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {service.heroDescription}
                </p>
                <span className="text-primary font-semibold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
