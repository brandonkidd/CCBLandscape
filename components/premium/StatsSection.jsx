'use client';

import AnimatedCounter from './AnimatedCounter';
import AnimatedDonutChart from './AnimatedDonutChart';
import AnimatedBarChart from './AnimatedBarChart';
import FadeInSection from './FadeInSection';

const waterSavingsData = [
  { label: 'Before', value: 100, displayValue: '100%', color: '#ef4444' },
  { label: 'Year 1', value: 45, displayValue: '45%', color: '#f59e0b' },
  { label: 'Year 2', value: 25, displayValue: '25%', color: '#22c55e' },
  { label: 'Year 3', value: 15, displayValue: '15%', color: '#06b6d4' },
];

export default function StatsSection() {
  return (
    <section className="relative py-32 bg-gray-950 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,187,219,0.08),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInSection className="text-center mb-20">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Owner-Operated
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Christian Burke answers directly. No call centers. No layers.
            Real results backed by real numbers.
          </p>
        </FadeInSection>

        {/* Main stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-24">
          <AnimatedCounter end={13} suffix="+" label="Years" sublabel="In Business" />
          <AnimatedCounter end={99} label="BuildZoom" sublabel="Top 15% of Contractors" />
          <AnimatedCounter end={150} suffix="+" label="Turf Conversions" sublabel="Completed" />
          <AnimatedCounter end={1.5} suffix="M" prefix="$" decimals={1} label="Rebates Secured" sublabel="For Our Clients" />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Donut charts */}
          <FadeInSection direction="left">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-2">Success Rates</h3>
              <p className="text-sm text-white/40 mb-8">Industry-leading approval and satisfaction rates</p>
              <div className="grid grid-cols-2 gap-8">
                <AnimatedDonutChart
                  percentage={98}
                  color="#22c55e"
                  label="Rebate Approval"
                  sublabel="Rate"
                />
                <AnimatedDonutChart
                  percentage={95}
                  color="#6DBBDB"
                  label="Client Retention"
                  sublabel="Annual"
                />
              </div>
            </div>
          </FadeInSection>

          {/* Bar chart */}
          <FadeInSection direction="right">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-2">Water Cost Reduction</h3>
              <p className="text-sm text-white/40 mb-8">Average client water usage over time</p>
              <AnimatedBarChart data={waterSavingsData} height={200} />
            </div>
          </FadeInSection>
        </div>

        {/* Bottom trust strip */}
        <FadeInSection className="mt-20">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40">
            <div className="text-center">
              <div className="text-sm font-semibold">License</div>
              <div className="text-lg font-bold">#981154</div>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-sm font-semibold">BBB Rating</div>
              <div className="text-lg font-bold">A+</div>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-sm font-semibold">Insurance</div>
              <div className="text-lg font-bold">$1,000,000</div>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-sm font-semibold">QAL Licensed</div>
              <div className="text-lg font-bold">Certified</div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
