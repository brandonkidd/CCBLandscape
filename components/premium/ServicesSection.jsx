'use client';

import FadeInSection from './FadeInSection';
import StaggerChildren from './StaggerChildren';
import PremiumServiceCard from './PremiumServiceCard';

export default function ServicesSection({ services }) {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection className="text-center mb-20">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Landscape Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Eight specialized services covering every aspect of commercial landscape management
          </p>
        </FadeInSection>

        {/* Service cards grid */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.08}
        >
          {services.map((service, i) => (
            <PremiumServiceCard key={service.slug} service={service} index={i} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
