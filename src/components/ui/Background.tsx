import { cn } from '@/utils/cn';

interface BackgroundProps {
  variant?: 'hero' | 'soft' | 'dark' | 'mesh';
  className?: string;
}

export function Background({ variant = 'soft', className }: BackgroundProps) {
  if (variant === 'hero') {
    return (
      <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-bg opacity-60 mask-fade-b" />
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 size-[1200px] rounded-full bg-mesh-eco blur-3xl opacity-90 animate-gradient-pan bg-[length:200%_200%]" />
        <div className="absolute top-1/3 -left-32 size-[420px] rounded-full bg-primary-light/30 blur-[120px]" />
        <div className="absolute top-1/2 -right-32 size-[480px] rounded-full bg-accent-base/20 blur-[140px]" />
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-base to-primary-dark" />
        <div className="absolute inset-0 bg-mesh-eco opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      </div>
    );
  }

  if (variant === 'mesh') {
    return (
      <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
        <div className="absolute inset-0 bg-background" />
        <div className="absolute -top-32 left-1/4 size-[600px] rounded-full bg-primary-light/12 blur-[140px]" />
        <div className="absolute bottom-0 right-0 size-[500px] rounded-full bg-accent-base/10 blur-[120px]" />
      </div>
    );
  }

  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-radial-fade opacity-60" />
    </div>
  );
}
