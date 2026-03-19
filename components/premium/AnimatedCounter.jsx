'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCounter({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  sublabel
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  const displayValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        {prefix}{displayValue}{suffix}
      </div>
      {label && (
        <div className="mt-2 text-lg font-semibold opacity-90">{label}</div>
      )}
      {sublabel && (
        <div className="mt-1 text-sm opacity-60">{sublabel}</div>
      )}
    </motion.div>
  );
}
