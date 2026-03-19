'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeInSection from './FadeInSection';

export default function ServiceAreaSection({ cities }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const orangeCounty = cities.filter(c => c.county === 'Orange County');
  const inlandEmpire = cities.filter(c => c.county !== 'Orange County');

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Service Coverage
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            18 Cities.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              One Team.
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Owner-operated quality across Orange County and the Inland Empire
          </p>
        </FadeInSection>

        <div ref={ref} className="space-y-12">
          {/* Orange County */}
          <div>
            <FadeInSection>
              <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-6">
                Orange County
              </h3>
            </FadeInSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {orangeCounty.map((city, i) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    href={`/locations/${city.slug}`}
                    className="group block bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                        {city.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Inland Empire */}
          <div>
            <FadeInSection>
              <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-6">
                Inland Empire
              </h3>
            </FadeInSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {inlandEmpire.map((city, i) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: (orangeCounty.length + i) * 0.05 }}
                >
                  <Link
                    href={`/locations/${city.slug}`}
                    className="group block bg-white rounded-2xl p-5 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-900 font-semibold text-sm group-hover:text-emerald-600 transition-colors">
                        {city.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
