import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  highlight?: string;
  /** When true, the highlighted word renders as an editorial serif italic
   * flourish (matches the Hero typography). Otherwise stays as plain gradient. */
  highlightSerif?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
  highlight,
  highlightSerif = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span
          className={cn(
            'text-gradient-eco',
            highlightSerif &&
              'font-serif italic font-normal tracking-tight leading-[0.95]',
          )}
        >
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        'flex flex-col gap-4',
        isCenter ? 'items-center text-center mx-auto max-w-2xl' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <motion.span variants={fadeInUp} className="chip">
          <span className="size-1.5 rounded-full bg-primary-light shadow-[0_0_8px_rgba(38,140,140,0.7)]" />
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        variants={fadeInUp}
        className={cn(
          'font-display tracking-tightest text-primary-dark text-balance',
          'text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.04]',
          titleClassName,
        )}
      >
        {renderTitle()}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'text-gray-300 text-base sm:text-lg leading-relaxed text-pretty',
            isCenter ? 'max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
