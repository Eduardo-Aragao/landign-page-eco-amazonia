import { AnimatePresence, motion } from 'framer-motion';
import {
  Leaf,
  Recycle,
  BatteryWarning,
  Biohazard,
  Plus,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PhoneFrame, Screenshot } from '@/components/mockups';
import { wasteTypesContent } from '@/constants';
import type { WasteType } from '@/types';
import { useWasteTypesViewModel } from '@/viewmodels/useWasteTypesViewModel';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';
import { cn } from '@/utils/cn';

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  recycle: Recycle,
  'battery-warning': BatteryWarning,
  biohazard: Biohazard,
};

/* ------------------------------------------------------------------ */
/*  Phone stage — atmospheric glass plate + color glow + active screen */
/* ------------------------------------------------------------------ */
function PhoneStage({ type }: { type: WasteType }) {
  const Icon = iconMap[type.icon];

  return (
    <div className="relative flex items-center justify-center py-10 sm:py-14">
      {/* Glass plate behind phone — refined, not loud */}
      <div
        aria-hidden
        className="absolute inset-x-2 sm:inset-x-6 inset-y-0 rounded-[40px] sm:rounded-[48px]"
        style={{
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 60%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.55)',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(255,255,255,0.25) inset, 0 40px 90px -40px rgba(10,46,46,0.32)',
        }}
      />
      {/* Specular highlight line at top of glass plate */}
      <div
        aria-hidden
        className="absolute inset-x-12 sm:inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />

      {/* Animated color glow that shifts with selection */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${type.id}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.55, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
          className={cn(
            'absolute inset-0 m-auto size-[280px] sm:size-[360px] lg:size-[420px] rounded-full blur-[100px] bg-gradient-to-br',
            type.iconBg,
          )}
        />
      </AnimatePresence>

      <div className="relative">
        <PhoneFrame size="md">
          <AnimatePresence mode="wait">
            <motion.div
              key={`screen-${type.id}`}
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="size-full"
            >
              {type.screenshot ? (
                <Screenshot src={type.screenshot} alt={type.title} />
              ) : (
                <FallbackScreen type={type} icon={Icon} />
              )}
            </motion.div>
          </AnimatePresence>
        </PhoneFrame>
      </div>

      {/* Floating spec chip — bottom-left of stage */}
      <motion.div
        key={`chip-${type.id}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="hidden sm:inline-flex absolute left-6 bottom-10 items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium text-primary-dark"
        style={{
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(14px) saturate(180%)',
          WebkitBackdropFilter: 'blur(14px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.95) inset, 0 6px 18px -6px rgba(10,46,46,0.2)',
        }}
      >
        <span className={cn('size-1.5 rounded-full bg-gradient-to-br shadow-sm', type.iconBg)} />
        Tela do EcoAmazônia
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Fallback screen for waste types without screenshots (hospital)     */
/* ------------------------------------------------------------------ */
function FallbackScreen({ type, icon: Icon }: { type: WasteType; icon?: LucideIcon }) {
  return (
    <div className="relative size-full flex flex-col items-center justify-center overflow-hidden bg-[#F6F5F7] text-primary-dark">
      <div
        aria-hidden
        className={cn(
          'absolute -inset-20 rounded-full blur-3xl opacity-80 bg-gradient-to-br',
          type.iconBg,
        )}
      />
      <div className="absolute inset-0 noise" />
      <div className="relative flex flex-col items-center text-center px-6">
        <div
          className={cn(
            'relative flex size-20 items-center justify-center rounded-[26px] bg-gradient-to-br text-white shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_-10px_20px_rgba(0,0,0,0.18)_inset,0_18px_36px_-10px_rgba(0,0,0,0.4)]',
            type.iconBg,
          )}
        >
          {Icon && <Icon className="size-9" strokeWidth={1.8} />}
          <span
            aria-hidden
            className="absolute inset-px rounded-[22px] bg-gradient-to-b from-white/30 to-white/0 pointer-events-none"
          />
        </div>
        <p className="mt-5 font-display text-xl font-semibold tracking-tighter">{type.title}</p>
        <p className="mt-1.5 text-xs text-gray-300 leading-relaxed max-w-[14rem]">
          Em breve no aplicativo. Estamos integrando com normas sanitárias e parceiros especializados.
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur-md border border-black/5 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-primary-base shadow-sm">
          <span className="size-1 rounded-full bg-primary-clin animate-pulse" />
          Em desenvolvimento
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Selector item — Liquid Glass accordion                              */
/* ------------------------------------------------------------------ */
interface SelectorProps {
  type: WasteType;
  index: number;
  isActive: boolean;
  onSelect: (id: WasteType['id']) => void;
}

function SelectorItem({ type, index, isActive, onSelect }: SelectorProps) {
  const Icon = iconMap[type.icon];

  return (
    <motion.li variants={fadeInUp} layout="position">
      <button
        type="button"
        onClick={() => onSelect(type.id)}
        aria-expanded={isActive}
        className={cn(
          'group relative w-full overflow-hidden rounded-[22px] sm:rounded-[26px] text-left transition-all duration-500 outline-none',
          'focus-visible:ring-2 focus-visible:ring-primary-base/40',
        )}
        style={{
          background: isActive
            ? 'linear-gradient(155deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.4) 100%)'
            : 'linear-gradient(155deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: `1px solid ${isActive ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)'}`,
          boxShadow: isActive
            ? '0 1px 0 rgba(255,255,255,0.95) inset, 0 -1px 0 rgba(255,255,255,0.3) inset, 0 30px 70px -35px rgba(10,46,46,0.35)'
            : '0 1px 0 rgba(255,255,255,0.75) inset, 0 10px 30px -18px rgba(10,46,46,0.12)',
        }}
      >
        {/* Subtle color tint that bleeds through when active */}
        <motion.div
          aria-hidden
          animate={{ opacity: isActive ? 0.32 : 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            'pointer-events-none absolute -top-24 -right-20 size-56 rounded-full blur-3xl bg-gradient-to-br',
            type.gradient,
          )}
        />

        {/* Specular highlight line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />

        {/* Left accent rail */}
        <motion.span
          aria-hidden
          animate={{ height: isActive ? '46%' : '0%', opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-gradient-to-b',
            type.iconBg,
          )}
        />

        <div className="relative flex items-center gap-3 xs:gap-4 sm:gap-5 px-4 xs:px-5 sm:px-6 py-4 sm:py-5">
          {/* iOS-style icon */}
          <motion.div
            layout
            initial={false}
            animate={{ scale: isActive ? 1 : 0.94 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'relative shrink-0 flex items-center justify-center rounded-2xl transition-colors',
              isActive ? 'size-12 sm:size-14' : 'size-11 sm:size-12',
            )}
            style={{
              background: isActive
                ? undefined
                : 'linear-gradient(160deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
              border: isActive ? 'none' : '1px solid rgba(21,91,91,0.12)',
            }}
          >
            {isActive ? (
              <span
                className={cn(
                  'absolute inset-0 rounded-2xl bg-gradient-to-br shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_-8px_16px_rgba(0,0,0,0.15)_inset,0_10px_22px_-8px_rgba(0,0,0,0.25)]',
                  type.iconBg,
                )}
              >
                <span
                  aria-hidden
                  className="absolute inset-px rounded-[14px] bg-gradient-to-b from-white/35 to-white/0"
                />
              </span>
            ) : null}
            {Icon ? (
              <Icon
                className={cn(
                  'relative size-5 sm:size-6 transition-colors',
                  isActive ? 'text-white' : 'text-primary-base',
                )}
                strokeWidth={2}
              />
            ) : null}
          </motion.div>

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 sm:gap-3">
              <span
                className={cn(
                  'font-display text-[11px] sm:text-xs font-semibold tracking-tightest leading-none',
                  isActive ? 'text-primary-base' : 'text-gray-100',
                )}
              >
                0{index + 1}
              </span>
              <span className="hidden xs:inline-block h-px w-5 sm:w-7 bg-primary-base/20" />
              <h3
                className={cn(
                  'font-display font-semibold text-primary-dark tracking-tighter leading-tight',
                  isActive ? 'text-lg sm:text-xl' : 'text-base sm:text-lg',
                )}
              >
                {type.title}
              </h3>
            </div>
            <p
              className={cn(
                'mt-1 text-sm leading-snug text-gray-300',
                isActive ? '' : 'truncate',
              )}
            >
              {type.short}
            </p>
          </div>

          {/* iOS plus button — rotates to X / minus when active */}
          <motion.span
            aria-hidden
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'shrink-0 flex size-8 items-center justify-center rounded-full transition-colors',
              isActive
                ? 'bg-primary-dark text-white shadow-sm'
                : 'bg-white/70 text-primary-base border border-primary-base/10 group-hover:bg-white',
            )}
          >
            <Plus className="size-4" strokeWidth={2.4} />
          </motion.span>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 sm:gap-8 items-start">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-300 text-pretty max-w-prose">
                    {type.description}
                  </p>
                  <ul className="flex flex-col gap-2 sm:min-w-[180px]">
                    {type.examples.map((ex) => (
                      <li
                        key={ex}
                        className="flex items-center gap-2.5 text-sm text-primary-dark/90"
                      >
                        <span
                          className={cn(
                            'inline-flex shrink-0 size-5 items-center justify-center rounded-full bg-gradient-to-br shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]',
                            type.iconBg,
                          )}
                        >
                          <Check className="size-2.5 text-white" strokeWidth={3} />
                        </span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export function WasteTypes() {
  const { types, active, activeIndex, setActive } = useWasteTypesViewModel();

  return (
    <section
      id="waste-types"
      className="relative isolate py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Atmospheric layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-bg opacity-30 mask-fade-b" />

        {/* Color-shifting orb that follows selection */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${active.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
            className={cn(
              'absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 size-[760px] sm:size-[900px] lg:size-[1080px] rounded-full blur-[160px] bg-gradient-to-br',
              active.gradient,
            )}
          />
        </AnimatePresence>

        {/* Top hairline + bottom fade */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-base/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        {/* Subtle grain overlay */}
        <div className="absolute inset-0 noise opacity-60" />
      </div>

      <Container>
        {/* Editorial heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <motion.span variants={fadeInUp} className="chip">
            <span className="size-1.5 rounded-full bg-primary-clin shadow-[0_0_10px_rgba(87,157,103,0.7)]" />
            {wasteTypesContent.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-6 font-display tracking-tightest text-primary-dark leading-[0.98] text-balance text-[2.2rem] xs:text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]"
          >
            Cada resíduo no{' '}
            <span className="text-gradient-eco italic [font-feature-settings:'ss01']">
              lugar certo
            </span>
            .
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed text-pretty"
          >
            {wasteTypesContent.description}
          </motion.p>

          {/* Counter ribbon */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center gap-4"
          >
            <span className="font-display text-xs font-semibold tracking-tightest text-primary-base">
              {String(activeIndex + 1).padStart(2, '0')}{' '}
              <span className="text-gray-100">/ {String(types.length).padStart(2, '0')}</span>
            </span>
            <div className="flex-1 max-w-[180px] h-px bg-primary-base/15 relative overflow-hidden rounded-full">
              <motion.div
                animate={{ width: `${((activeIndex + 1) / types.length) * 100}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-light to-primary-base"
              />
            </div>
            <span className="hidden xs:inline-block text-[10px] uppercase tracking-widest text-gray-100 whitespace-nowrap">
              Categorias do app
            </span>
          </motion.div>
        </motion.div>

        {/* Stage + selector composition */}
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 lg:items-center"
        >
          {/* Phone stage */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 relative order-1"
          >
            <PhoneStage type={active} />
          </motion.div>

          {/* Liquid Glass selector */}
          <motion.ul
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3 order-2"
          >
            {types.map((type, idx) => (
              <SelectorItem
                key={type.id}
                type={type}
                index={idx}
                isActive={type.id === active.id}
                onSelect={setActive}
              />
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
