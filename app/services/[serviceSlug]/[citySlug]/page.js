import Link from 'next/link'
import { services, cities, company, getNearbyCities, generateServiceCityMeta } from '@/lib/data'

// Generate all possible service+city combinations for static generation
export async function generateStaticParams() {
  const params = [];
  services.forEach(service => {
    cities.forEach(city => {
      params.push({
        serviceSlug: service.slug,
        citySlug: city.slug
      });
    });
  });
  return params;
}

// Generate metadata for each service+city page
export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.serviceSlug);
  const city = cities.find(c => c.slug === params.citySlug);
  
  if (!service || !city) return {};
  
  const meta = generateServiceCityMeta(service, city);
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default function ServiceCityPage({ params }) {
  const service = services.find(s => s.slug === params.serviceSlug);
  const city = cities.find(c => c.slug === params.citySlug);
  
  if (!service || !city) {
    return <div>Not found</div>;
  }
  
  const nearbyCities = getNearbyCities(city.slug);
  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 3);
  
  // Service schema for this specific service+city combo
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "LandscapingBusiness",
      "name": company.name,
      "telephone": company.phone
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedIn": city.county
    },
    "description": service.description
  };
  
  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Do you provide ${service.shortName.toLowerCase()} in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, ${company.name} provides professional ${service.shortName.toLowerCase()} throughout ${city.name} and surrounding ${city.region}. Call ${company.phone} for same-day assessment.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does ${service.shortName.toLowerCase()} cost in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pricing varies based on property size, scope, and specific requirements. Request a free on-site assessment for accurate pricing tailored to your ${city.name} property.`
        }
      },
      {
        "@type": "Question",
        "name": `How quickly can you respond to ${service.shortName.toLowerCase()} requests in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most ${city.name} properties receive same-day or next-day response. Emergency ${service.shortName.toLowerCase()} available 24/7. Call ${company.phone} anytime.`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container-custom py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-primary">{service.shortName}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name} in {city.name}, {city.county}
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${company.phone}`} className="btn-secondary text-center">
                Call {company.phone}
              </a>
              <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors text-center">
                Request Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="md:col-span-2">
              
              {/* Local Authority Statement */}
              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
                <h2 className="font-bold text-lg mb-2">Local {city.name} Expertise</h2>
                <p className="text-gray-700">
                  {company.name} serves {city.name} commercial properties with deep knowledge of {city.waterDistrict}, 
                  local regulations, and the specific landscape challenges {city.region} properties face. 
                  {city.name === "Yorba Linda" && " Our headquarters location since 2012 ensures same-day response."}
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6">
                Professional {service.shortName} for {city.name} Properties
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <p className="text-gray-700 mb-6">
                  {city.description}
                </p>
              </div>

              {/* Features */}
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Property Types Served */}
              <h3 className="text-2xl font-bold mb-4">{city.name} Property Types We Serve</h3>
              <p className="text-gray-700 mb-8">
                {city.propertyTypes}. Professional {service.shortName.toLowerCase()} for commercial properties 
                throughout {city.name} with owner-operated attention that corporate chains cannot match.
              </p>

              {/* FAQ Section */}
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Do you provide {service.shortName.toLowerCase()} in {city.name}?
                  </h4>
                  <p className="text-gray-700">
                    Yes, {company.name} provides professional {service.shortName.toLowerCase()} throughout {city.name} and 
                    surrounding {city.region}. Call {company.phone} for same-day assessment.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    How much does {service.shortName.toLowerCase()} cost in {city.name}?
                  </h4>
                  <p className="text-gray-700">
                    Pricing varies based on property size, scope, and specific requirements. Request a free on-site 
                    assessment for accurate pricing tailored to your {city.name} property.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    How quickly can you respond to {service.shortName.toLowerCase()} requests in {city.name}?
                  </h4>
                  <p className="text-gray-700">
                    Most {city.name} properties receive same-day or next-day response. Emergency {service.shortName.toLowerCase()} 
                    available 24/7. Call {company.phone} anytime.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Get {service.shortName} Service in {city.name}
                </h3>
                <p className="text-gray-700 mb-6">
                  Call {company.phone} for your complimentary {city.name} property assessment. 
                  Owner Christian Burke personally oversees every project with the quality and 
                  responsiveness that built our reputation throughout {city.region}.
                </p>
                <a href={`tel:${company.phone}`} className="btn-primary inline-block">
                  Call {company.phone}
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              
              {/* Contact Card */}
              <div className="bg-primary text-white p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl mb-4">Get Started Today</h3>
                <p className="mb-4 text-white/90">
                  Serving {city.name} since {company.founded}
                </p>
                <a href={`tel:${company.phone}`} className="block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-center transition-colors mb-3">
                  {company.phone}
                </a>
                <Link href="/contact" className="block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors">
                  Request Assessment
                </Link>
              </div>

              {/* Other Services */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-4">Related Services in {city.name}</h4>
                <ul className="space-y-3">
                  {otherServices.map(s => (
                    <li key={s.slug}>
                      <Link 
                        href={`/services/${s.slug}/${city.slug}`}
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        {s.icon} {s.shortName} in {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="text-primary hover:text-primary/80 font-medium mt-4 block">
                  View All Services →
                </Link>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-4">{service.shortName} in Nearby Cities</h4>
                  <ul className="space-y-3">
                    {nearbyCities.map(c => (
                      <li key={c.slug}>
                        <Link 
                          href={`/services/${service.slug}/${c.slug}`}
                          className="text-primary hover:text-primary/80 font-medium"
                        >
                          {c.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/locations" className="text-primary hover:text-primary/80 font-medium mt-4 block">
                    All Service Areas →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
