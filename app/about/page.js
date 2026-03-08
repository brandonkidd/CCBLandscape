import { company } from '@/lib/data';

export const metadata = {
  title: `About ${company.name} | Owner-Operated Commercial Landscaping`,
  description: `Meet Christian Burke and learn about ${company.name}, Orange County's owner-operated commercial landscape partner since ${company.founded}.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About {company.name}
            </h1>
            <p className="text-xl text-white/90">
              Owner-operated commercial landscape services since {company.founded}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Owner Story */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Meet Christian Burke</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you call {company.name}, Christian Burke answers. Not a call center. Not an account 
                  manager three layers removed from your property. The owner who built this business on 
                  reputation and referrals.
                </p>
                <p className="text-gray-700 mb-6">
                  Founded in {company.founded}, {company.name} serves commercial properties throughout Orange County 
                  and the Inland Empire with the kind of owner-operated attention that corporate landscape 
                  companies cannot match.
                </p>
                <p className="text-gray-700 mb-6">
                  With over 50 years of combined team experience, professional licensing, and a BuildZoom 
                  score of {company.buildZoomScore} (top 15% of California contractors), {company.name} delivers 
                  enterprise-grade execution with boutique attention.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Professional Credentials</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Licensing</h3>
                  <ul className="space-y-1 text-gray-700">
                    {company.licenses.map(license => (
                      <li key={license}>CA License {license}</li>
                    ))}
                    <li>Qualified Applicator License</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Ratings & Insurance</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>BuildZoom Score: {company.buildZoomScore}</li>
                    <li>BBB Rating: {company.bbbRating}</li>
                    <li>Insurance: {company.insurance}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Property Managers Choose {company.name}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Owner-Operated Accountability</h3>
                  <p className="text-gray-700">
                    Direct access to {company.owner}. No corporate account managers. No communication layers. 
                    Problems get resolved immediately because you're talking to the owner.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                  <p className="text-gray-700">
                    Based in Yorba Linda since {company.founded}, we understand Orange County's unique landscape 
                    challenges, water district regulations, and fire zone requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24-Hour Emergency Response</h3>
                  <p className="text-gray-700">
                    Irrigation breaks at 2 AM. Trees fall in storms. Commercial properties need rapid response. 
                    We answer emergency calls 24/7.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-700">
                    Fixed monthly agreements. No surprise charges. Additional work requires written approval. 
                    You know exactly what you're paying before work begins.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-xl mb-6 text-white/90">
                Call {company.phone} to discuss your commercial landscape needs.
              </p>
              <a href={`tel:${company.phone}`} className="btn-secondary inline-block">
                Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
