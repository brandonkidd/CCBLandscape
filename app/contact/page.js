import { company, cities } from '@/lib/data';

export const metadata = {
  title: `Contact ${company.name} | Commercial Landscape Services`,
  description: `Contact ${company.name} for professional commercial landscape services throughout Orange County and the Inland Empire. Call ${company.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started Today
            </h1>
            <p className="text-xl text-white/90">
              Call for your complimentary property assessment
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a href={`tel:${company.phone}`} className="text-2xl text-primary hover:text-primary-dark font-bold">
                    {company.phone}
                  </a>
                  <p className="text-gray-600 mt-1">
                    {company.owner} answers directly
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href={`mailto:${company.email}`} className="text-lg text-primary hover:text-primary-dark">
                    {company.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Office</h3>
                  <address className="not-italic text-gray-700">
                    {company.address.street}<br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </address>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Emergency service: 24/7
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Credentials</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ CA Licenses: {company.licenses.join(', ')}</li>
                  <li>✓ BuildZoom Score: {company.buildZoomScore} (Top 15%)</li>
                  <li>✓ BBB Rating: {company.bbbRating}</li>
                  <li>✓ Insurance: {company.insurance}</li>
                  <li>✓ Qualified Applicator License</li>
                </ul>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Area</h2>
              <p className="text-gray-700 mb-6">
                Professional commercial landscape services throughout Orange County and the Inland Empire:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Orange County</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    {cities.filter(c => c.county.includes('Orange')).map(city => (
                      <div key={city.slug}>{city.name}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Inland Empire</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    {cities.filter(c => c.region === 'Inland Empire').map(city => (
                      <div key={city.slug}>{city.name}</div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mt-6 text-sm">
                Don't see your city? We may still serve your area. Call to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Property Managers Choose {company.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-3">👤</div>
                <h3 className="font-semibold mb-2">Owner-Operated</h3>
                <p className="text-gray-600 text-sm">
                  Direct access to {company.owner}, not corporate account managers
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">24/7 Emergency Response</h3>
                <p className="text-gray-600 text-sm">
                  Rapid response for urgent landscape issues anytime
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-semibold mb-2">Top-Rated</h3>
                <p className="text-gray-600 text-sm">
                  BuildZoom {company.buildZoomScore} (Top 15%), BBB {company.bbbRating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Call {company.phone} to schedule your complimentary property assessment. 
              Owner {company.owner} personally evaluates every property.
            </p>
            <a href={`tel:${company.phone}`} className="btn-primary text-lg px-10 py-4">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
