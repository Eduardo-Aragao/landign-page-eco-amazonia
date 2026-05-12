import type { Feature } from '@/types';

export const featuresContent = {
  eyebrow: 'Funcionalidades',
  title: 'Tudo que você precisa para transformar a cidade.',
  description:
    'Uma suíte completa para cidadãos, agentes e gestores. Do registro do problema à medição do impacto.',
};

export const features: Feature[] = [
  {
    id: 'register',
    title: 'Registro com 1 toque',
    description:
      'Capture foto, localização e categoria do resíduo em segundos — sem precisar criar conta.',
    icon: 'camera',
    accent: 'primary',
  },
  {
    id: 'offline',
    title: 'Funciona offline',
    description:
      'SQLite local mantém tudo registrado mesmo sem internet. A sincronização acontece sozinha quando você reconecta.',
    icon: 'wifi-off',
    accent: 'accent',
  },
  {
    id: 'map',
    title: 'Mapa de calor',
    description:
      'Visualização em tempo real dos pontos críticos da sua cidade, com filtros por bairro, tipo e urgência.',
    icon: 'map',
    accent: 'primary',
  },
  {
    id: 'monitor',
    title: 'Monitoramento contínuo',
    description:
      'Acompanhe a evolução de cada ocorrência: aberta, em análise, em coleta, resolvida.',
    icon: 'activity',
    accent: 'accent',
  },
  {
    id: 'notify',
    title: 'Notificações inteligentes',
    description:
      'Receba alertas quando uma área próxima for resolvida, ou quando novos focos surgirem na sua região.',
    icon: 'bell',
    accent: 'primary',
  },
  {
    id: 'dashboard',
    title: 'Painel público',
    description:
      'Dashboards transparentes para gestores municipais e cidadãos acompanharem indicadores.',
    icon: 'layout-dashboard',
    accent: 'accent',
  },
];
