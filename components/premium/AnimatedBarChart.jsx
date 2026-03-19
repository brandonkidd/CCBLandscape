'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedBarChart({
  data = [],
  maxValue,
  barColor = '#6DBBDB',
  height = 240
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-end justify-between gap-3" style={{ height }}>
        {data.map((item, i) => {
          const barHeight = (item.value / max) * 100;
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
              <motion.div
                className="text-sm font-bold opacity-0"
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 + 0.8 }}
              >
                {item.displayValue || item.value}
              </motion.div>
              <motion.div
                className="w-full rounded-t-lg relative overflow-hidden"
                style={{ backgroundColor: item.color || barColor }}
                initial={{ height: 0 }}
                animate={isInView ? { height: `${barHeight}%` } : {}}
                transition={{
                  duration: 1,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/10" />
              </motion.div>
              <div className="text-xs font-medium opacity-60 text-center mt-1 whitespace-nowrap">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
