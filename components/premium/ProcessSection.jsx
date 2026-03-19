'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeInSection from './FadeInSection';

const steps = [
  {
    number: '01',
    title: 'Property Assessment',
    description: 'Christian Burke personally evaluates your property, identifying opportunities and creating a customized plan.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'Detailed scope of work with transparent pricing, digital mock-ups, and phased implementation options.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Expert Execution',
    description: 'Consistent crew assignments, licensed chemical application, and proactive problem identification.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.53-3.18a2.25 2.25 0 01-1.14-1.95V5.71a2.25 2.25 0 011.14-1.95l5.53-3.18a2.25 2.25 0 012.16 0l5.53 3.18a2.25 2.25 0 011.14 1.95v4.33a2.25 2.25 0 01-1.14 1.95l-5.53 3.18a2.25 2.25 0 01-2.16 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ongoing Partnership',
    description: 'Direct access to the owner, regular property reviews, and continuous landscape improvement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-20">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Simple Process,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Exceptional Results
            </span>
          </h2>
        </FadeInSection>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-14 h-14 mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25" />
                  <div className="relative z-10 w-full h-full rounded-2xl flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>

                <div className="text-xs font-bold text-blue-500 tracking-widest mb-2">
                  STEP {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
