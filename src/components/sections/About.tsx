import { motion } from 'framer-motion';
import {
  Cpu,
  Accessibility,
  Leaf,
  LineChart,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Background } from '@/components/ui/Background';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { aboutContent } from '@/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  accessibility: Accessibility,
  leaf: Leaf,
  'line-chart': LineChart,
};

export function About() {
  return (
    <section id="about" className="relative isolate py-20 sm:py-24 lg:py-32 overflow-hidden">
      <Background variant="mesh" />

      <Container>
        <SectionHeader
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          description={aboutContent.description}
          highlight="cidade"
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {aboutContent.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div key={pillar.id} variants={fadeInUp}>
                <GlassCard hoverable className="h-full p-5 sm:p-6">
                  <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-light to-primary-base text-white shadow-[0_8px_20px_-6px_rgba(21,91,91,0.6)]">
                    {Icon && <Icon className="size-5" />}
                  </div>
                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-display font-semibold text-primary-dark tracking-tighter">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300 text-pretty">
                    {pillar.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
