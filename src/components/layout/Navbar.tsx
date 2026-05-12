import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { LinkButton } from '@/components/ui/Button';
import { useNavbarViewModel } from '@/viewmodels/useNavbarViewModel';
import { cn } from '@/utils/cn';

export function Navbar() {
  const {
    links,
    isMobileMenuOpen,
    hasScrolled,
    activeSection,
    toggleMobileMenu,
    handleLinkClick,
  } = useNavbarViewModel();

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          hasScrolled ? 'pt-3' : 'pt-5',
        )}
      >
        <Container>
          <nav
            className={cn(
              'flex items-center justify-between rounded-full px-2 py-2 sm:px-3 transition-all duration-500',
              hasScrolled
                ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_-12px_rgba(10,46,46,0.18)] border border-white/60'
                : 'bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_4px_24px_-12px_rgba(10,46,46,0.12)]',
            )}
          >
            <div className="pl-2 sm:pl-3 min-w-0">
              <Logo />
            </div>

            <ul className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                        isActive
                          ? 'text-primary-dark'
                          : 'text-gray-300 hover:text-primary-dark',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-nav"
                          className="absolute inset-0 rounded-full bg-primary-base/8 border border-primary-base/15"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <LinkButton
                href="#cta"
                variant="primary"
                size="sm"
                className="hidden lg:inline-flex"
                rightIcon={<ArrowRight className="size-3.5" />}
              >
                Ver app
              </LinkButton>
              <button
                onClick={toggleMobileMenu}
                aria-label="Abrir menu"
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden flex size-10 items-center justify-center rounded-full bg-white border border-black/5 text-primary-dark shadow-sm"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="size-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="m"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="size-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 pt-24 pb-10 px-5 bg-gradient-to-b from-background via-background to-shape backdrop-blur-2xl overflow-y-auto"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="space-y-2"
            >
              {links.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-5 py-4 text-lg font-display font-medium text-primary-dark shadow-sm"
                  >
                    {link.label}
                    <ArrowRight className="size-5 text-primary-light" />
                  </button>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="pt-4"
              >
                <LinkButton
                  href="#cta"
                  onClick={() => handleLinkClick('#cta')}
                  className="w-full"
                  rightIcon={<ArrowRight className="size-4" />}
                >
                  Conhecer aplicativo
                </LinkButton>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
