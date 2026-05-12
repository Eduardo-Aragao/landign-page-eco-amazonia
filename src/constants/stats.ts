import type { Stat } from '@/types';

export const statsContent = {
  eyebrow: 'Em números',
  title: 'Resultados que falam por si.',
  description:
    'Dados consolidados durante as fases-piloto em comunidades amazônicas.',
};

export const stats: Stat[] = [
  { id: 'points', value: 12480, suffix: '+', label: 'Pontos mapeados', sub: 'cidadãos ativos' },
  { id: 'cities', value: 32, suffix: '', label: 'Cidades-piloto', sub: 'em 5 estados' },
  { id: 'response', value: 24, suffix: 'h', label: 'Tempo médio de resposta', sub: 'após registro' },
  { id: 'reduction', value: 42, suffix: '%', label: 'Redução de focos', sub: 'em áreas críticas' },
];
