import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Background } from '@/components/ui/Background';
import { PhoneFrame, Screenshot } from '@/components/mockups';
import { appScreens, appScreensContent } from '@/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function AppShowcase() {
  return (
    <section
      id="app"
      className="relative isolate py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <Background variant="dark" />

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
            {appScreensContent.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display tracking-tightest text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.04] text-balance max-w-3xl mx-auto"
          >
            Uma experiência mobile{' '}
            <span className="text-gradient-warm">premium</span>, na palma da sua mão.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 mx-auto max-w-2xl text-white/70 text-pretty"
          >
            {appScreensContent.description}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-6 sm:gap-x-8 justify-items-center"
        >
          {appScreens.map((screen, idx) => {
            const rotate = idx % 2 === 0 ? -3 : 3;
            return (
              <motion.div
                key={screen.id}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-8 bg-gradient-to-br from-primary-light/30 to-accent-base/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="relative transition-transform duration-700 group-hover:-translate-y-2">
                    <PhoneFrame size="sm" rotate={rotate}>
                      <Screenshot src={screen.src} alt={screen.title} />
                    </PhoneFrame>
                  </div>
                </div>
                <div className="mt-8">
                  <span className="inline-block text-[10px] uppercase tracking-widest text-white/50 mb-1">
                    {screen.badge}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tighter">
                    {screen.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60 max-w-[14rem] mx-auto">
                    {screen.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
