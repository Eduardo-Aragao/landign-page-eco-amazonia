import { motion } from 'framer-motion';
import { ArrowRight, Play, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { PhoneFrame, Screenshot } from '@/components/mockups';
import { heroContent, screenshots } from '@/constants';
import { fadeInUp, staggerContainer } from '@/utils/motion';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 overflow-hidden"
    >
      {/* Atmospheric background — single light source, more restraint */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />

        {/* Top spotlight (single primary light, like macOS Sequoia wallpapers) */}
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 size-[1200px] rounded-full opacity-95"
          style={{
            background:
              'radial-gradient(closest-side, rgba(38,140,140,0.22) 0%, rgba(87,157,103,0.14) 28%, rgba(255,255,255,0.04) 52%, transparent 72%)',
          }}
        />

        {/* Faint editorial grid */}
        <div className="absolute inset-0 grid-bg opacity-25 mask-fade-b" />

        {/* Secondary side glows — gentle */}
        <div className="absolute top-[30%] -left-44 size-[460px] rounded-full bg-primary-clin/10 blur-[140px]" />
        <div className="absolute top-[44%] -right-44 size-[480px] rounded-full bg-accent-base/8 blur-[150px]" />

        {/* Top macOS-style hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-base/18 to-transparent" />

        {/* Grain — atmospheric, restrained */}
        <div className="absolute inset-0 noise opacity-70" />

        {/* Bottom fade for clean transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.09, 0.1)}
          className="flex flex-col items-center text-center"
        >
          {/* Editorial eyebrow — pill with status badge + project label, hairline divider */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 rounded-full pl-1.5 pr-3.5 py-1"
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(14px) saturate(180%)',
              WebkitBackdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.75)',
              boxShadow:
                '0 1px 0 rgba(255,255,255,0.95) inset, 0 6px 22px -10px rgba(10,46,46,0.18)',
            }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-base/10 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase text-primary-base">
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 rounded-full bg-primary-clin animate-ping opacity-75" />
                <span className="relative size-1.5 rounded-full bg-primary-clin" />
              </span>
              {heroContent.badge.pill}
            </span>
            <span className="h-3 w-px bg-primary-base/15" />
            <span className="text-xs font-medium tracking-wide text-primary-base/85">
              {heroContent.badge.label}
            </span>
          </motion.div>

          {/* Editorial headline — sans display + serif italic flourish */}
          <motion.h1
            variants={fadeInUp}
            style={{ fontSize: 'clamp(2.5rem, 10vw, 3.25rem)' }}
            className="mt-7 sm:mt-8 font-display font-medium tracking-tightest text-primary-dark leading-[0.96] sm:!text-[3.75rem] md:!text-[4.75rem] lg:!text-[5.5rem] xl:!text-[6.25rem] text-balance max-w-5xl"
          >
            {heroContent.title.line1}
            <br />
            {heroContent.title.line2}{' '}
            <span className="font-serif italic font-normal text-gradient-eco tracking-tight leading-[0.92] [font-feature-settings:'liga','calt']">
              {heroContent.title.highlight}
            </span>
          </motion.h1>

          {/* Concise editorial subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 sm:mt-7 max-w-xl text-[15px] sm:text-base lg:text-lg text-gray-300 leading-relaxed text-pretty"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* Refined CTAs — primary button + minimal text link (Apple-style) */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-5"
          >
            <LinkButton
              href={heroContent.primaryCta.href}
              rightIcon={
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              }
            >
              {heroContent.primaryCta.label}
            </LinkButton>
            <a
              href={heroContent.secondaryCta.href}
              className="group inline-flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-primary-dark hover:text-primary-base transition-colors"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-primary-base/8 group-hover:bg-primary-base/15 transition-colors">
                <Play className="size-2.5 fill-current text-primary-base translate-x-px" />
              </span>
              {heroContent.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Phone composition — refined, with meaningful ambient cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="relative mt-14 sm:mt-18 lg:mt-24 mx-auto"
        >
          <div className="relative h-[440px] xs:h-[480px] sm:h-[580px] md:h-[620px] lg:h-[680px] flex items-end justify-center">
            {/* Glass stage plate behind phones */}
            <div
              aria-hidden
              className="absolute bottom-0 inset-x-2 sm:inset-x-12 lg:inset-x-24 h-[55%] sm:h-[60%] rounded-[28px] sm:rounded-[40px]"
              style={{
                background:
                  'linear-gradient(160deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.32) 60%, rgba(255,255,255,0.15) 100%)',
                backdropFilter: 'blur(22px) saturate(180%)',
                WebkitBackdropFilter: 'blur(22px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.65)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(255,255,255,0.25) inset, 0 40px 100px -30px rgba(10,46,46,0.32)',
              }}
            />
            {/* Specular highlight on top edge of glass plate */}
            <div
              aria-hidden
              className="absolute bottom-[55%] sm:bottom-[60%] inset-x-12 sm:inset-x-24 lg:inset-x-44 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
            />

            {/* Ambient card 1 — Live status (top-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 14 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex absolute top-12 right-4 xl:right-8 items-center gap-3 rounded-2xl px-3.5 py-2.5 animate-float-slow"
              style={{
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(22px) saturate(180%)',
                WebkitBackdropFilter: 'blur(22px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.95) inset, 0 22px 50px -20px rgba(10,46,46,0.22)',
              }}
            >
              <span className="relative flex size-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative size-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(40,167,69,0.6)]" />
              </span>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700/85 leading-none">
                  {heroContent.ambient.live.eyebrow}
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-primary-dark leading-tight">
                  {heroContent.ambient.live.label}
                </p>
              </div>
            </motion.div>

            {/* Ambient card 2 — Recent resolution (top-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: -14 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex absolute top-24 left-4 xl:left-8 items-center gap-3 rounded-2xl px-3.5 py-2.5 animate-float-slower"
              style={{
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(22px) saturate(180%)',
                WebkitBackdropFilter: 'blur(22px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.95) inset, 0 22px 50px -20px rgba(10,46,46,0.22)',
              }}
            >
              <span className="relative flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary-clin to-primary-light text-white shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_-6px_12px_rgba(0,0,0,0.15)_inset,0_8px_16px_-6px_rgba(10,46,46,0.35)]">
                <Check className="size-4" strokeWidth={2.6} />
                <span
                  aria-hidden
                  className="absolute inset-px rounded-[10px] bg-gradient-to-b from-white/30 to-white/0 pointer-events-none"
                />
              </span>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-base/85 leading-none">
                  {heroContent.ambient.resolved.eyebrow}
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-primary-dark leading-tight">
                  {heroContent.ambient.resolved.label}
                </p>
              </div>
            </motion.div>

            {/* Side phone (left) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block absolute bottom-0 left-[2%] lg:left-[8%] xl:left-[16%] origin-bottom"
              style={{ zIndex: 1 }}
            >
              <PhoneFrame size="md">
                <Screenshot
                  src={screenshots.maps}
                  alt="Tela de mapas do EcoAmazônia"
                />
              </PhoneFrame>
            </motion.div>

            {/* Side phone (right) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block absolute bottom-0 right-[2%] lg:right-[8%] xl:right-[16%] origin-bottom"
              style={{ zIndex: 1 }}
            >
              <PhoneFrame size="md">
                <Screenshot
                  src={screenshots.myOccurrences}
                  alt="Tela de ocorrências do EcoAmazônia"
                />
              </PhoneFrame>
            </motion.div>

            {/* Center phone — the hero moment */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <PhoneFrame size="lg">
                <Screenshot
                  src={screenshots.home}
                  alt="Tela principal do EcoAmazônia"
                  priority
                />
              </PhoneFrame>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
