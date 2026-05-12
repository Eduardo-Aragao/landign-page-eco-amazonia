import { motion } from 'framer-motion';
import {
  Camera,
  WifiOff,
  Map,
  Activity,
  Bell,
  LayoutDashboard,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Background } from '@/components/ui/Background';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { features, featuresContent } from '@/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';
import { cn } from '@/utils/cn';

const iconMap: Record<string, LucideIcon> = {
  camera: Camera,
  'wifi-off': WifiOff,
  map: Map,
  activity: Activity,
  bell: Bell,
  'layout-dashboard': LayoutDashboard,
};

export function Features() {
  return (
    <section id="features" className="relative isolate py-20 sm:py-24 lg:py-32 overflow-hidden">
      <Background variant="soft" />

      <Container>
        <SectionHeader
          eyebrow={featuresContent.eyebrow}
          title={featuresContent.title}
          description={featuresContent.description}
          highlight="transformar"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
        >
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            const isAccent = feature.accent === 'accent';

            return (
              <motion.article
                key={feature.id}
                variants={fadeInUp}
                className={cn(
                  'group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 transition-all duration-500 hover:-translate-y-1',
                  idx === 0 || idx === 5
                    ? 'lg:row-span-1 lg:col-span-2'
                    : '',
                )}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.5))',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 50px -22px rgba(10,46,46,0.22)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div
                  aria-hidden
                  className={cn(
                    'absolute -top-16 -right-16 size-48 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80',
                    isAccent ? 'bg-accent-base/30' : 'bg-primary-light/30',
                  )}
                />

                <div
                  className={cn(
                    'relative flex size-12 items-center justify-center rounded-2xl text-white shadow-[0_8px_20px_-6px_rgba(21,91,91,0.6)]',
                    isAccent
                      ? 'bg-gradient-to-br from-accent-light to-accent-base'
                      : 'bg-gradient-to-br from-primary-light to-primary-base',
                  )}
                >
                  {Icon && <Icon className="size-5" />}
                </div>

                <h3 className="relative mt-5 sm:mt-6 text-lg sm:text-xl font-display font-semibold text-primary-dark tracking-tighter">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-gray-300 max-w-md text-pretty">
                  {feature.description}
                </p>

                <div className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary-base opacity-0 -translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Saiba mais
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
