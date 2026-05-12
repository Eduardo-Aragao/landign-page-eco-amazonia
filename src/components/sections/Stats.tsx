import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { statsContent } from '@/constants';
import { useStatsViewModel } from '@/viewmodels/useStatsViewModel';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function Stats() {
  const { ref, stats, formatValue } = useStatsViewModel();

  return (
    <section id="stats" className="relative isolate py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-[#04181f]" />
        <div className="absolute inset-0 bg-mesh-eco opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 grid-bg opacity-[0.06]" />
        <div className="absolute -top-32 left-1/4 size-[500px] rounded-full bg-primary-light/20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 size-[400px] rounded-full bg-accent-base/15 blur-[120px]" />
      </div>

      <Container>
        <div className="text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-medium"
          >
            <span className="size-1.5 rounded-full bg-primary-clin shadow-[0_0_10px_rgba(87,157,103,0.9)]" />
            {statsContent.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display tracking-tightest text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.04] text-balance max-w-3xl mx-auto"
          >
            Resultados que <span className="text-gradient-warm">falam por si</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 mx-auto max-w-2xl text-white/70 text-pretty"
          >
            {statsContent.description}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 size-32 rounded-full bg-primary-light/15 blur-2xl"
              />
              <p className="font-display text-[1.6rem] xs:text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tightest text-white leading-none break-words">
                {formatValue(stat)}
                {stat.suffix && <span className="text-primary-clin">{stat.suffix}</span>}
              </p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base font-medium text-white/85 leading-tight">
                {stat.label}
              </p>
              {stat.sub && (
                <p className="text-[10px] sm:text-xs text-white/45 mt-1">{stat.sub}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
