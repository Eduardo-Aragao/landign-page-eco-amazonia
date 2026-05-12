import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { techStack, techStackContent } from '@/constants';
import type { TechDomain, Technology } from '@/types';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';
import { cn } from '@/utils/cn';

/* ------------------------------------------------------------------ */
/*  Icon URLs — Simple Icons CDN (white-tinted) + local fallbacks      */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, string> = {
  react: 'https://cdn.simpleicons.org/react/FFFFFF',
  expo: 'https://cdn.simpleicons.org/expo/FFFFFF',
  typescript: 'https://cdn.simpleicons.org/typescript/FFFFFF',
  zustand: '/icons/zustand.svg',
  yup: '/icons/yup.svg',
  'react-query': 'https://cdn.simpleicons.org/reactquery/FFFFFF',
  sqlite: 'https://cdn.simpleicons.org/sqlite/FFFFFF',
  tailwind: 'https://cdn.simpleicons.org/tailwindcss/FFFFFF',
  nodejs: 'https://cdn.simpleicons.org/nodedotjs/FFFFFF',
  nestjs: 'https://cdn.simpleicons.org/nestjs/FFFFFF',
};

/* ------------------------------------------------------------------ */
/*  TechBadge — iOS app-icon style tile with real brand logo image     */
/* ------------------------------------------------------------------ */
function TechBadge({ tech }: { tech: Technology }) {
  const iconUrl = iconMap[tech.icon];

  return (
    <motion.div
      variants={fadeInUp}
      className="group flex flex-col items-center gap-2 w-[68px] xs:w-[76px] sm:w-[80px]"
    >
      <div
        className={cn(
          'relative size-12 xs:size-14 rounded-2xl bg-gradient-to-br flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.06] group-hover:-translate-y-0.5',
          tech.gradient,
        )}
        style={{
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.4) inset, 0 -7px 14px rgba(0,0,0,0.18) inset, 0 14px 26px -10px rgba(0,0,0,0.45)',
        }}
      >
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={tech.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="relative z-10 size-7 xs:size-8 object-contain select-none"
          />
        ) : null}
        {/* iOS sheen — translucent specular at the top */}
        <span
          aria-hidden
          className="absolute inset-px rounded-[14px] bg-gradient-to-b from-white/30 to-white/0 pointer-events-none"
        />
      </div>
      <span className="text-[10.5px] xs:text-[11px] text-center leading-tight text-gray-300 font-medium">
        {tech.name}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  TechCard — Liquid Glass card with architecture pillar + badges     */
/* ------------------------------------------------------------------ */
function TechCard({
  domain,
  variant = 'default',
}: {
  domain: TechDomain;
  variant?: 'default' | 'wide';
}) {
  const isWide = variant === 'wide';

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative h-full overflow-hidden rounded-[26px] sm:rounded-[30px] transition-all duration-500 hover:-translate-y-1"
      style={{
        background:
          'linear-gradient(155deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.3) 100%)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.7)',
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.95) inset, 0 -1px 0 rgba(255,255,255,0.3) inset, 0 30px 70px -32px rgba(10,46,46,0.32)',
      }}
    >
      {/* Subtle color tint */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-60 rounded-full blur-3xl opacity-50 bg-gradient-to-br from-primary-clin/25 to-primary-light/30"
      />

      {/* Specular highlight line */}
      <div
        aria-hidden
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />

      <div
        className={cn(
          'relative p-5 sm:p-7 lg:p-9 flex flex-col gap-6 sm:gap-7 h-full',
          isWide && 'lg:flex-row lg:items-center lg:gap-12 xl:gap-16',
        )}
      >
        {/* Left/top: header + pillar + description */}
        <div
          className={cn(
            'flex flex-col gap-4 sm:gap-5',
            isWide && 'lg:flex-1 lg:gap-6 lg:max-w-xl',
          )}
        >
          {/* Track-style header: [number] · domain */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold text-primary-base tracking-tighter">
              [{domain.number}]
            </span>
            <span className="h-px w-6 bg-primary-base/25" />
            <span className="text-[10.5px] uppercase tracking-widest text-gray-100 font-semibold">
              {domain.domain}
            </span>
          </div>

          {/* Architecture pillar — mono display + serif italic subtitle */}
          <div>
            <p className="font-mono text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold tracking-tightest text-gradient-eco leading-[0.95]">
              {domain.architecture.label}
            </p>
            <p className="mt-2 font-serif italic text-base sm:text-lg lg:text-xl text-gray-300 leading-tight text-pretty">
              {domain.architecture.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-gray-300 leading-relaxed text-pretty max-w-prose">
            {domain.description}
          </p>
        </div>

        {/* Right/bottom: tech badges grid */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className={cn(
            'flex flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-3 sm:gap-y-4',
            isWide && 'lg:max-w-md lg:justify-end',
          )}
        >
          {domain.technologies.map((tech) => (
            <TechBadge key={tech.id} tech={tech} />
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export function TechStack() {
  return (
    <section
      id="tech"
      className="relative isolate py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-bg opacity-25 mask-fade-b" />

        {/* Light atmospheric glows */}
        <div className="absolute -top-32 left-[20%] size-[560px] rounded-full bg-primary-light/12 blur-[160px]" />
        <div className="absolute bottom-0 right-[20%] size-[480px] rounded-full bg-accent-base/8 blur-[140px]" />

        {/* Top hairline (macOS toolbar style) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-base/18 to-transparent" />

        {/* Grain */}
        <div className="absolute inset-0 noise opacity-60" />
      </div>

      <Container>
        <SectionHeader
          eyebrow={techStackContent.eyebrow}
          title={techStackContent.title}
          description={techStackContent.description}
          highlight="camadas"
          highlightSerif
        />

        {/* Bento grid: 7 + 5 / full-width */}
        <motion.div
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5"
        >
          {/* Mobile — large featured (col-span-7) */}
          <div className="lg:col-span-7">
            <TechCard domain={techStack[0]} />
          </div>

          {/* Backend — compact (col-span-5) */}
          <div className="lg:col-span-5">
            <TechCard domain={techStack[1]} />
          </div>

          {/* Web — full-width below */}
          <div className="lg:col-span-12">
            <TechCard domain={techStack[2]} variant="wide" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
