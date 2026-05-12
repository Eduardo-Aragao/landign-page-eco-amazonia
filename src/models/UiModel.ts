export type ThemeMode = 'light' | 'dark';

export interface UiModelState {
  isMobileMenuOpen: boolean;
  activeSection: string;
  scrollProgress: number;
  hasScrolled: boolean;
}

export const initialUiState: UiModelState = {
  isMobileMenuOpen: false,
  activeSection: 'home',
  scrollProgress: 0,
  hasScrolled: false,
};
