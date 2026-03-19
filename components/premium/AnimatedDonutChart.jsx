'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedDonutChart({
  percentage = 98,
  size = 160,
  strokeWidth = 12,
  color = '#6DBBDB',
  bgColor = 'rgba(255,255,255,0.1)',
  label,
  sublabel
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-3xl font-bold">{percentage}%</span>
        </motion.div>
      </div>
      {label && <div className="text-base font-semibold text-center">{label}</div>}
      {sublabel && <div className="text-sm opacity-60 text-center">{sublabel}</div>}
    </div>
  );
}
