import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rotate?: number;
  shadow?: boolean;
}

const sizeMap = {
  sm: 'w-[180px] h-[380px] sm:w-[210px] sm:h-[440px] md:w-[220px] md:h-[460px]',
  md: 'w-[210px] h-[440px] sm:w-[240px] sm:h-[500px] md:w-[260px] md:h-[540px]',
  lg: 'w-[240px] h-[500px] sm:w-[270px] sm:h-[560px] md:w-[290px] md:h-[600px] lg:w-[300px] lg:h-[620px]',
};

export function PhoneFrame({
  children,
  className,
  size = 'md',
  rotate = 0,
  shadow = true,
}: PhoneFrameProps) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn('relative will-change-transform', sizeMap[size], className)}
    >
      {shadow && (
        <div
          aria-hidden
          className="absolute -inset-x-8 -bottom-10 h-12 rounded-[50%] bg-primary-dark/40 blur-2xl opacity-30"
        />
      )}

      <div className="relative size-full rounded-[44px] bg-gradient-to-b from-[#1a1a1d] via-[#0c0c0e] to-[#1a1a1d] p-[3px] shadow-[0_30px_80px_-30px_rgba(10,46,46,0.55),0_8px_24px_-8px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-[1px] rounded-[42px] bg-gradient-to-b from-[#2a2a2d] to-[#0a0a0c] pointer-events-none" />

        <div className="relative size-full rounded-[40px] overflow-hidden bg-black">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 mt-2 flex h-6 w-20 sm:h-7 sm:w-24 md:w-28 items-center justify-center rounded-full bg-black">
            <div className="size-1.5 rounded-full bg-[#3a3a3d]" />
          </div>
          <div className="absolute inset-0 z-10">{children}</div>
        </div>

        <div className="absolute -left-[3px] top-16 sm:top-20 md:top-24 h-8 sm:h-10 w-[3px] rounded-l-full bg-[#3a3a3d]" />
        <div className="absolute -left-[3px] top-28 sm:top-32 md:top-40 h-12 sm:h-16 w-[3px] rounded-l-full bg-[#3a3a3d]" />
        <div className="absolute -left-[3px] top-44 sm:top-52 md:top-60 h-12 sm:h-16 w-[3px] rounded-l-full bg-[#3a3a3d]" />
        <div className="absolute -right-[3px] top-24 sm:top-28 md:top-32 h-20 sm:h-24 w-[3px] rounded-r-full bg-[#3a3a3d]" />
      </div>
    </div>
  );
}
