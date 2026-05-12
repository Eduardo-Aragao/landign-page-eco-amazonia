import type { AppScreen } from '@/types';
import { screenshots } from './assets';

export const appScreensContent = {
  eyebrow: 'Aplicativo mobile',
  title: 'Uma experiência mobile premium, na palma da sua mão.',
  description:
    'Cada tela foi desenhada para reduzir atrito. Em três toques, qualquer cidadão pode reportar um foco de resíduo. Em dois, qualquer gestor identifica prioridades.',
};

export const appScreens: AppScreen[] = [
  {
    id: 'home',
    title: 'Início inteligente',
    description: 'Visão geral da sua região com áreas próximas que precisam de atenção.',
    badge: 'Dashboard',
    accent: 'primary',
    src: screenshots.home,
  },
  {
    id: 'register',
    title: 'Registro rápido',
    description: 'Capture o foco em poucos segundos. Foto, localização e categoria automáticas.',
    badge: 'Reportar',
    accent: 'accent',
    src: screenshots.register,
  },
  {
    id: 'map',
    title: 'Mapa em tempo real',
    description: 'Pontos críticos visualizados no mapa, com filtros por região e urgência.',
    badge: 'Mapa',
    accent: 'primary',
    src: screenshots.maps,
  },
  {
    id: 'occurrences',
    title: 'Minhas ocorrências',
    description: 'Acompanhe todos os registros que você fez e o status de cada um.',
    badge: 'Ocorrências',
    accent: 'accent',
    src: screenshots.myOccurrences,
  },
];
