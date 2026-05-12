import type { TechDomain } from '@/types';

export const techStackContent = {
  eyebrow: 'Stack tecnológica',
  title: 'Engenharia em camadas.',
  description:
    'Cada decisão técnica do EcoAmazônia foi feita para garantir performance, escalabilidade e manutenibilidade — sem atalhos.',
};

export const techStack: TechDomain[] = [
  {
    id: 'mobile',
    number: '01',
    domain: 'Aplicativo mobile',
    architecture: {
      label: 'MVVM',
      subtitle: 'arquitetura clean para apps que escalam',
    },
    description:
      'Performance refinada com sincronização offline-first via SQLite local, gerenciamento reativo de estado com Zustand, data fetching declarativo com React Query e tipagem forte de ponta a ponta.',
    technologies: [
      { id: 'rn', name: 'React Native', icon: 'react', gradient: 'from-sky-400 to-cyan-500' },
      { id: 'expo', name: 'Expo', icon: 'expo', gradient: 'from-zinc-700 to-zinc-950' },
      { id: 'ts-mob', name: 'TypeScript', icon: 'typescript', gradient: 'from-blue-500 to-blue-700' },
      { id: 'zustand-mob', name: 'Zustand', icon: 'zustand', gradient: 'from-amber-400 to-orange-500' },
      { id: 'yup-mob', name: 'Yup', icon: 'yup', gradient: 'from-purple-500 to-fuchsia-600' },
      { id: 'rq-mob', name: 'React Query', icon: 'react-query', gradient: 'from-rose-400 to-red-600' },
      { id: 'sqlite', name: 'SQLite', icon: 'sqlite', gradient: 'from-slate-500 to-slate-700' },
      { id: 'tw-mob', name: 'Tailwind', icon: 'tailwind', gradient: 'from-cyan-400 to-sky-600' },
    ],
  },
  {
    id: 'backend',
    number: '02',
    domain: 'Backend',
    architecture: {
      label: 'DDD',
      subtitle: 'domain-driven para domínios complexos',
    },
    description:
      'Backend modular e escalável com separação clara de domínios, agregados e camadas de aplicação. Robustez e manutenibilidade pensadas para o longo prazo.',
    technologies: [
      { id: 'node', name: 'Node.js', icon: 'nodejs', gradient: 'from-emerald-500 to-green-700' },
      { id: 'nestjs', name: 'NestJS', icon: 'nestjs', gradient: 'from-rose-500 to-red-700' },
      { id: 'ts-back', name: 'TypeScript', icon: 'typescript', gradient: 'from-blue-500 to-blue-700' },
    ],
  },
  {
    id: 'web',
    number: '03',
    domain: 'Plataforma web',
    architecture: {
      label: 'Modular',
      subtitle: 'composição tipada e estado controlado',
    },
    description:
      'Plataforma web com componentes reutilizáveis, tipagem forte, validação de schemas e gerenciamento eficiente de estado client e server — pronta para crescer junto com o produto.',
    technologies: [
      { id: 'react', name: 'ReactJS', icon: 'react', gradient: 'from-sky-400 to-cyan-500' },
      { id: 'ts-web', name: 'TypeScript', icon: 'typescript', gradient: 'from-blue-500 to-blue-700' },
      { id: 'tw-web', name: 'Tailwind', icon: 'tailwind', gradient: 'from-cyan-400 to-sky-600' },
      { id: 'zustand-web', name: 'Zustand', icon: 'zustand', gradient: 'from-amber-400 to-orange-500' },
      { id: 'yup-web', name: 'Yup', icon: 'yup', gradient: 'from-purple-500 to-fuchsia-600' },
      { id: 'rq-web', name: 'React Query', icon: 'react-query', gradient: 'from-rose-400 to-red-600' },
    ],
  },
];
