import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { id: 'about', label: 'O Projeto', href: '#about' },
  { id: 'features', label: 'Funcionalidades', href: '#features' },
  { id: 'app', label: 'Aplicativo', href: '#app' },
  { id: 'waste-types', label: 'Resíduos', href: '#waste-types' },
  { id: 'impact', label: 'Impacto', href: '#impact' },
  { id: 'tech', label: 'Stack', href: '#tech' },
  { id: 'team', label: 'Equipe', href: '#team' },
];

export const footerLinks = {
  produto: [
    { id: 'about', label: 'Sobre', href: '#about' },
    { id: 'features', label: 'Funcionalidades', href: '#features' },
    { id: 'app', label: 'Aplicativo', href: '#app' },
    { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
  ],
  recursos: [
    { id: 'docs', label: 'Documentação', href: '#docs' },
    { id: 'api', label: 'API', href: '#api' },
    { id: 'changelog', label: 'Changelog', href: '#changelog' },
    { id: 'status', label: 'Status', href: '#status' },
  ],
  empresa: [
    { id: 'team', label: 'Equipe', href: '#team' },
    { id: 'impact', label: 'Impacto', href: '#impact' },
    { id: 'contact', label: 'Contato', href: '#contact' },
    { id: 'privacy', label: 'Privacidade', href: '#privacy' },
  ],
};
