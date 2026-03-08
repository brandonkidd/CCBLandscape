import Link from 'next/link';
import { services, cities } from '@/lib/data';

export const metadata = {
  title: 'CCB Landscape Services | Commercial Landscape Maintenance Orange County',
  description: 'Owner-operated commercial landscape maintenance serving Orange County since 2012. Professional service for HOAs, commercial properties, and retail centers. BuildZoom Score: 99. Call (888) 416-0840.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-blue via-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Orange County's Owner-Operated Commercial Landscape Partner
            </h1>
            <p className="text-2xl mb-8 text-light-blue">
              Boutique attention. Enterprise-grade execution. Since 2012.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:8884160840"
                className="bg-orange hover:bg-dark-orange text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Call (888) 416-0840
              </a>
              <Link 
                href="/services"
                className="bg-white text-dark-blue hover:bg-light-gray font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-charcoal leading-relaxed">
            When you call CCB Landscape Services, <span className="font-semibold text-dark-blue">Christian Burke answers</span>. Not a call center. Not an account manager three layers removed from your property. The owner who built this business on reputation and referrals. That's the CCB difference.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-blue mb-4">
              Commercial Landscape Services
            </h2>
            <p className="text-xl text-charcoal">
              Professional maintenance for Orange County commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 border-2 border-transparent hover:border-primary transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-dark-blue mb-3">
                  {service.name}
                </h3>
                <p className="text-charcoal mb-4">
                  Professional {service.name.toLowerCase()} for commercial properties throughout Orange County.
                </p>
                <span className="text-orange font-semibold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/services"
              className="inline-block bg-dark-blue hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Owner-Operated Excellence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">50+</div>
              <div className="text-light-blue">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">99</div>
              <div className="text-light-blue">BuildZoom Score (Top 15%)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">A+</div>
              <div className="text-light-blue">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">$1M</div>
              <div className="text-light-blue">Insurance Coverage</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-light-blue">
              CA Licensed Contractor #981154, #1087655, #771033 | Qualified Applicator License
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-blue mb-4">
              Serving Orange County & Inland Empire
            </h2>
            <p className="text-xl text-charcoal">
              Professional commercial landscape maintenance throughout Southern California
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.slice(0, 18).map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-light-gray hover:bg-primary hover:text-white rounded-lg shadow p-4 text-center border-2 border-transparent hover:border-dark-blue transition-all font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/locations"
              className="inline-block bg-orange hover:bg-dark-orange text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Experience the CCB Difference?
          </h2>
          <p className="text-xl mb-8 text-light-blue">
            Schedule a complimentary property assessment with Christian Burke
          </p>
          <a 
            href="tel:8884160840"
            className="inline-block bg-orange hover:bg-dark-orange text-white font-bold px-10 py-4 rounded-lg text-xl transition-all transform hover:scale-105 shadow-xl"
          >
            Call (888) 416-0840
          </a>
        </div>
      </section>
    </div>
  );
}
