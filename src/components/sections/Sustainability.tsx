import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Background } from '@/components/ui/Background';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { sustainabilityContent } from '@/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative isolate py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <Background variant="soft" />
      <div className="absolute -top-32 -right-32 size-[500px] rounded-full bg-primary-clin/15 blur-[120px] -z-10" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeader
              eyebrow={sustainabilityContent.eyebrow}
              title={sustainabilityContent.title}
              description={sustainabilityContent.description}
              align="left"
              highlight="floresta"
            />

            {/* Decorative illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
              className="mt-10 hidden lg:block relative aspect-[5/4] rounded-3xl overflow-hidden border border-primary-base/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-base to-primary-clin" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent_60%)]" />

              {/* SVG forest illustration */}
              <svg
                viewBox="0 0 400 320"
                className="absolute inset-0 size-full opacity-90"
                aria-hidden
              >
                <defs>
                  <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F2C4B3" stopOpacity="0.0" />
                    <stop offset="100%" stopColor="#F2C4B3" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="circleGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>

                <circle cx="200" cy="160" r="120" fill="url(#circleGrad)" />
                <circle cx="200" cy="160" r="100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="200" cy="160" r="60" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

                {/* Trees */}
                {[60, 120, 200, 280, 340].map((x, i) => (
                  <g key={x} transform={`translate(${x}, ${230 - (i % 2) * 20})`}>
                    <path
                      d="M0 0 C -15 -20 -15 -40 0 -55 C 15 -40 15 -20 0 0 Z"
                      fill="#579D67"
                      opacity={0.85 - i * 0.05}
                    />
                    <rect x="-2" y="0" width="4" height="14" fill="#0A2E2E" opacity={0.7} />
                  </g>
                ))}

                {/* Floating leaves */}
                {[
                  { x: 90, y: 100, r: 15 },
                  { x: 310, y: 80, r: 25 },
                  { x: 260, y: 200, r: 12 },
                ].map((l, i) => (
                  <circle
                    key={i}
                    cx={l.x}
                    cy={l.y}
                    r={l.r}
                    fill="url(#leafGrad)"
                    opacity={0.7}
                  />
                ))}
              </svg>

              {/* Floating chip */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 p-4 text-white shadow-soft">
                <p className="text-[10px] uppercase tracking-widest text-white/70">
                  Resultado consolidado
                </p>
                <p className="mt-1 text-2xl font-display font-semibold tracking-tighter">
                  −42% de focos críticos
                </p>
                <p className="text-xs text-white/70">em áreas-piloto da Amazônia</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 space-y-4"
          >
            {sustainabilityContent.pillars.map((pillar) => (
              <motion.div key={pillar.id} variants={fadeInUp}>
                <GlassCard
                  hoverable
                  className="p-5 sm:p-7 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
                >
                  <div className="flex-1 order-2 sm:order-1 min-w-0">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-primary-dark tracking-tighter">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed text-pretty">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="shrink-0 order-1 sm:order-2 text-left sm:text-right w-full sm:w-auto">
                    <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tightest text-gradient-eco leading-none">
                      {pillar.metric}
                    </p>
                    <p className="text-xs text-gray-300 mt-1 sm:max-w-[12rem]">
                      {pillar.metricLabel}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
