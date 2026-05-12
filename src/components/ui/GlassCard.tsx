import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: 'light' | 'dark' | 'subtle';
  hoverable?: boolean;
}

const toneMap = {
  light:
    'bg-white/70 border-white/60 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_24px_60px_-30px_rgba(10,46,46,0.25)]',
  dark:
    'bg-primary-dark/80 text-white border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_24px_80px_-20px_rgba(10,46,46,0.7)]',
  subtle:
    'bg-white/40 border-white/40 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_18px_40px_-22px_rgba(10,46,46,0.18)]',
};

export function GlassCard({
  children,
  tone = 'light',
  hoverable = false,
  className,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-3xl border backdrop-blur-xl backdrop-saturate-150 overflow-hidden transition-all duration-500',
        toneMap[tone],
        hoverable &&
          'hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(10,46,46,0.4)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
