import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { WhatsappIcon } from '@/components/ui/BrandIcons';
import { ctaContent } from '@/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

export function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] px-5 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-24 text-center"
          style={{
            background:
              'radial-gradient(120% 100% at 0% 0%, rgba(87,157,103,0.35) 0%, transparent 55%), radial-gradient(120% 100% at 100% 100%, rgba(217,125,101,0.25) 0%, transparent 55%), linear-gradient(135deg, #0A2E2E 0%, #155B5B 60%, #268C8C 100%)',
          }}
        >
          {/* Decorative layers */}
          <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.06]" />
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary-clin/20 blur-[140px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 right-0 size-[500px] rounded-full bg-accent-base/15 blur-[120px]"
          />

          {/* Headline group */}
          <div className="relative max-w-3xl mx-auto text-white">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-medium"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 rounded-full bg-primary-clin animate-ping opacity-75" />
                <span className="relative size-1.5 rounded-full bg-primary-clin shadow-[0_0_10px_rgba(87,157,103,0.9)]" />
              </span>
              {ctaContent.eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-5 font-display tracking-tightest text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.04] text-balance"
            >
              Em breve nas{' '}
              <span className="font-serif italic font-normal text-gradient-warm tracking-tight leading-[0.95]">
                {ctaContent.highlight}
              </span>
              .
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 mx-auto max-w-xl text-white/75 text-pretty leading-relaxed"
            >
              {ctaContent.description}
            </motion.p>
          </div>

          {/* Contacts block */}
          <div className="relative max-w-2xl mx-auto mt-10 sm:mt-12">
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3 mb-4 sm:mb-5"
            >
              <span className="h-px w-8 bg-white/20" />
              <p className="text-[10px] uppercase tracking-widest text-white/55 font-semibold whitespace-nowrap">
                {ctaContent.contactsLabel}
              </p>
              <span className="h-px w-8 bg-white/20" />
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {ctaContent.contacts.map((contact) => (
                <motion.a
                  key={contact.id}
                  variants={fadeInUp}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar com ${contact.name} no WhatsApp`}
                  className="group flex items-center gap-4 rounded-2xl p-4 sm:p-5 text-left transition-all duration-400 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow:
                      '0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(255,255,255,0.05) inset, 0 24px 50px -28px rgba(0,0,0,0.5)',
                  }}
                >
                  <div
                    className="relative flex size-11 sm:size-12 items-center justify-center rounded-2xl text-white shrink-0"
                    style={{
                      background:
                        'linear-gradient(160deg, #25D366 0%, #1FAA5C 50%, #128C7E 100%)',
                      boxShadow:
                        '0 1px 0 rgba(255,255,255,0.4) inset, 0 -6px 12px rgba(0,0,0,0.22) inset, 0 8px 18px -4px rgba(37,211,102,0.45)',
                    }}
                  >
                    <WhatsappIcon className="relative z-10 size-4 sm:size-[18px]" />
                    <span
                      aria-hidden
                      className="absolute inset-px rounded-[14px] bg-gradient-to-b from-white/30 to-white/0 pointer-events-none"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-base sm:text-lg font-display font-semibold text-white tracking-tighter leading-tight">
                        {contact.name}
                      </p>
                      <span className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest text-emerald-300/90 leading-none rounded-full bg-emerald-400/15 border border-emerald-300/25 px-1.5 py-0.5">
                        WhatsApp
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs sm:text-sm text-white/70 leading-tight">
                      {contact.phone}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-white/40 group-hover:text-white/85 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
