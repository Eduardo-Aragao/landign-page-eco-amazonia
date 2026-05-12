import { create } from 'zustand';
import { initialUiState, type UiModelState } from '@/models/UiModel';

interface UiActions {
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setActiveSection: (id: string) => void;
  setScrollProgress: (progress: number) => void;
  setHasScrolled: (value: boolean) => void;
}

export const useUiStore = create<UiModelState & UiActions>((set) => ({
  ...initialUiState,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setActiveSection: (id) => set({ activeSection: id }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setHasScrolled: (value) => set({ hasScrolled: value }),
}));
