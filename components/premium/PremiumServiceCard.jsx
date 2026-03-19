'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const iconMap = {
  '🌳': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6m0 0c-3-3-5-5-5-8a5 5 0 1110 0c0 3-2 5-5 8z" />
    </svg>
  ),
  '🏘️': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
    </svg>
  ),
  '💧': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 2.4-6 8.4-6 12a6 6 0 1012 0c0-3.6-4.8-9.6-6-12z" />
    </svg>
  ),
  '🌲': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 14h4l-2 7h12l-2-7h4L12 3z" />
    </svg>
  ),
  '✨': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  '🏜️': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  '🔥': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 003.75-3.75c0-2.654-3.75-5.25-3.75-5.25s-3.75 2.596-3.75 5.25A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  '💡': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
};

const colorSets = [
  { bg: 'from-blue-500/10 to-cyan-500/10', icon: 'text-blue-500', border: 'hover:border-blue-500/30' },
  { bg: 'from-emerald-500/10 to-teal-500/10', icon: 'text-emerald-500', border: 'hover:border-emerald-500/30' },
  { bg: 'from-cyan-500/10 to-blue-500/10', icon: 'text-cyan-500', border: 'hover:border-cyan-500/30' },
  { bg: 'from-green-500/10 to-emerald-500/10', icon: 'text-green-500', border: 'hover:border-green-500/30' },
  { bg: 'from-violet-500/10 to-purple-500/10', icon: 'text-violet-500', border: 'hover:border-violet-500/30' },
  { bg: 'from-amber-500/10 to-orange-500/10', icon: 'text-amber-500', border: 'hover:border-amber-500/30' },
  { bg: 'from-red-500/10 to-orange-500/10', icon: 'text-red-500', border: 'hover:border-red-500/30' },
  { bg: 'from-yellow-500/10 to-amber-500/10', icon: 'text-yellow-500', border: 'hover:border-yellow-500/30' },
];

export default function PremiumServiceCard({ service, index = 0 }) {
  const colors = colorSets[index % colorSets.length];
  const icon = iconMap[service.icon] || iconMap['🌳'];

  return (
    <Link href={`/services/${service.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`relative h-full bg-white rounded-3xl p-8 border border-gray-100 ${colors.border} shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden`}
      >
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
            {service.name}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {service.heroDescription}
          </p>

          {/* Features preview */}
          <div className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all">
            <span>Learn more</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
