import Hero from '@/components/framer/Hero';
import ServiceCard from '@/components/framer/ServiceCard';
import { services, cities } from '@/lib/data';

export const metadata = {
  title: 'CCB Landscape Services | Commercial Landscape Maintenance Orange County',
  description: 'Owner-operated commercial landscape maintenance serving Orange County since 2012. Professional service for HOAs, commercial properties, and retail centers. BuildZoom Score: 99.',
};

export default function HomePage() {
  return (
    <>
      {/* Full-Screen Hero - Matching Framer */}
      <Hero
        title="Professional Commercial Landscape Services"
        subtitle="Orange County's Owner-Operated Landscape Partner"
        description="Boutique attention. Enterprise-grade execution. Serving commercial properties throughout Orange County since 2012."
        primaryButtonText="Get Free Assessment"
        primaryButtonLink="tel:8884160840"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
      />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional landscape maintenance for commercial properties throughout Orange County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={`Professional ${service.name.toLowerCase()} for commercial properties, HOAs, and retail centers.`}
                link={`/services/${service.slug}`}
                icon="🌳"
                iconBgColor="bg-green-100"
                iconColor="text-green-600"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Owner-Operated Excellence
            </h2>
            <p className="text-xl text-blue-100">
              Christian Burke answers directly. No call centers. No layers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">99</div>
              <div className="text-blue-100">BuildZoom Score (Top 15%)</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">A+</div>
              <div className="text-blue-100">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">$1M</div>
              <div className="text-blue-100">Insurance Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Service Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving commercial properties throughout Orange County and the Inland Empire
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.slice(0, 18).map((city) => (
              <a
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white rounded-xl p-6 text-center border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <span className="text-gray-900 font-semibold">{city.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the CCB Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Schedule a complimentary property assessment with Christian Burke
          </p>
          <a
            href="tel:8884160840"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Call (888) 416-0840
          </a>
        </div>
      </section>
    </>
  );
}
