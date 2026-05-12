import { useEffect } from 'react';
import { useUiStore } from '@/stores/uiStore';
import { navLinks } from '@/constants';

export function useNavbarViewModel() {
  const isMobileMenuOpen = useUiStore((s) => s.isMobileMenuOpen);
  const hasScrolled = useUiStore((s) => s.hasScrolled);
  const activeSection = useUiStore((s) => s.activeSection);
  const setMobileMenuOpen = useUiStore((s) => s.setMobileMenuOpen);
  const toggleMobileMenu = useUiStore((s) => s.toggleMobileMenu);
  const setHasScrolled = useUiStore((s) => s.setHasScrolled);
  const setActiveSection = useUiStore((s) => s.setActiveSection);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setHasScrolled]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [setActiveSection]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const handleLinkClick = (href: string) => {
    closeMenu();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return {
    links: navLinks,
    isMobileMenuOpen,
    hasScrolled,
    activeSection,
    toggleMobileMenu,
    closeMenu,
    handleLinkClick,
  };
}
