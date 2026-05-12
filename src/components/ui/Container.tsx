import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

export function Container({
  children,
  size = 'xl',
  className,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 xs:px-5 sm:px-8 lg:px-10',
        sizeMap[size],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
