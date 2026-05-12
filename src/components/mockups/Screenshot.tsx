import { cn } from '@/utils/cn';

interface ScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function Screenshot({
  src,
  alt,
  className,
  priority = false,
}: ScreenshotProps) {
  return (
    <div className={cn('relative size-full overflow-hidden bg-black', className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className="block size-full object-cover select-none"
        style={{ objectPosition: 'center bottom' }}
      />
    </div>
  );
}
