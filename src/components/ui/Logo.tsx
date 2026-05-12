import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const isLight = variant === 'light';
  return (
    <a
      href="#home"
      className={cn(
        'group inline-flex items-center font-display font-semibold tracking-tighter whitespace-nowrap',
        isLight ? 'text-white' : 'text-primary-dark',
        className,
      )}
    >
      <span className="text-base sm:text-lg leading-none">
        <span className="font-semibold">Eco</span>
        <span className={cn('font-light', isLight ? 'text-white/70' : 'text-primary-light')}>
          Amazônia
        </span>
      </span>
    </a>
  );
}
