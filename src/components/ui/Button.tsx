import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'ghost' | 'outline' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

const sizeMap: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

const variantMap: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-to-b from-primary-light to-primary-base shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_-10px_24px_rgba(10,46,46,0.35)_inset,0_14px_30px_-10px_rgba(10,46,46,0.55)] hover:brightness-105 hover:-translate-y-px',
  dark:
    'text-white bg-gradient-to-b from-primary-base to-primary-dark shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_-10px_24px_rgba(0,0,0,0.4)_inset,0_14px_30px_-10px_rgba(10,46,46,0.65)] hover:brightness-110 hover:-translate-y-px',
  ghost:
    'text-primary-base bg-white/70 border border-primary-base/15 backdrop-blur-md hover:bg-white hover:border-primary-base/30 hover:-translate-y-px',
  outline:
    'text-primary-dark border border-primary-dark/15 hover:bg-primary-dark/5 hover:border-primary-dark/30',
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  leftIcon,
  rightIcon,
  className,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, sizeMap[size], variantMap[variant], className)}
      {...rest}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  );
}

export function LinkButton({
  children,
  variant = 'primary',
  size = 'lg',
  leftIcon,
  rightIcon,
  className,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(base, sizeMap[size], variantMap[variant], className)}
      {...rest}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </a>
  );
}
