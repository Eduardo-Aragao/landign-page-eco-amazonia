import { useEffect, useRef, useState } from 'react';
import { stats } from '@/constants';
import type { Stat } from '@/types';

export function useStatsViewModel() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>(
    () => Object.fromEntries(stats.map((s) => [s.id, 0])),
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            const duration = 1600;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 4);
              const next: Record<string, number> = {};
              stats.forEach((s) => {
                next[s.id] = Math.round(s.value * eased);
              });
              setAnimatedValues(next);
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatValue = (stat: Stat) => {
    const v = animatedValues[stat.id] ?? 0;
    if (stat.value >= 1000) {
      const rounded = (v / 1000).toFixed(v >= stat.value ? 2 : 1);
      return rounded.replace(/\.0+$/, '') + 'k';
    }
    return v.toString();
  };

  return { ref, stats, formatValue };
}
