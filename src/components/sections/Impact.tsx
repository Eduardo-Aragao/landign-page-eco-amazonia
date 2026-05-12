import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Background } from '@/components/ui/Background';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { impactContent } from '@/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function Impact() {
  return (
    <section id="impact" className="relative isolate py-20 sm:py-24 lg:py-32 overflow-hidden">
      <Background variant="mesh" />

      <Container>
        <SectionHeader
          eyebrow={impactContent.eyebrow}
          title={impactContent.title}
          description={impactContent.description}
          highlight="indicador"
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 sm:mt-16 relative"
        >
          {/* Connecting line */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary-base/30 to-transparent"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-10">
            {impactContent.steps.map((step, idx) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex size-20 sm:size-24 items-center justify-center rounded-full bg-white border border-white/80 shadow-[0_18px_50px_-22px_rgba(10,46,46,0.4)]">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-clin/15 to-primary-light/15" />
                  <span className="relative font-display text-xl sm:text-2xl font-semibold tracking-tightest text-gradient-eco">
                    {step.id}
                  </span>
                  {idx === 0 && (
                    <span
                      aria-hidden
                      className="absolute -top-1 -right-1 size-3 rounded-full bg-primary-clin shadow-[0_0_12px_rgba(87,157,103,0.9)] animate-pulse"
                    />
                  )}
                </div>
                <h3 className="mt-5 sm:mt-6 font-display text-lg sm:text-xl font-semibold text-primary-dark tracking-tighter">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300 max-w-[18rem] sm:max-w-[14rem] text-pretty">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
