import type { WasteType } from '@/types';
import { screenshots } from './assets';

export const wasteTypesContent = {
  eyebrow: 'Tipos de resíduos',
  title: 'Cada resíduo no lugar certo.',
  description:
    'O EcoAmazônia classifica automaticamente o foco registrado em quatro categorias de descarte. Aprender a separar é o primeiro passo para reduzir o impacto ambiental.',
};

export const wasteTypes: WasteType[] = [
  {
    id: 'organic',
    title: 'Lixo Orgânico',
    short: 'Restos de origem natural e biodegradáveis.',
    description:
      'Restos de alimentos, cascas, podas e folhas. Decomposto pela natureza, pode virar adubo através da compostagem.',
    examples: ['Restos de comida', 'Cascas e sementes', 'Folhas e podas'],
    gradient: 'from-emerald-300 via-emerald-500 to-emerald-700',
    iconBg: 'from-emerald-400 to-emerald-600',
    glow: 'rgba(40,167,69,0.45)',
    icon: 'leaf',
    screenshot: screenshots.infoOrganic,
  },
  {
    id: 'recyclable',
    title: 'Lixo Reciclável',
    short: 'Materiais que voltam à cadeia produtiva.',
    description:
      'Papel, plástico, vidro e metal. Quando separados corretamente, viram matéria-prima para novos produtos e reduzem extração.',
    examples: ['Papel e papelão', 'Plásticos', 'Metais e vidros'],
    gradient: 'from-sky-300 via-cyan-500 to-blue-700',
    iconBg: 'from-sky-400 to-blue-600',
    glow: 'rgba(38,140,140,0.45)',
    icon: 'recycle',
    screenshot: screenshots.infoRecycle,
  },
  {
    id: 'special',
    title: 'Lixo Especial',
    short: 'Resíduos que exigem descarte controlado.',
    description:
      'Pilhas, baterias, eletrônicos e lâmpadas. Contêm metais pesados — precisam de pontos de coleta específicos para evitar contaminação.',
    examples: ['Pilhas e baterias', 'Eletrônicos', 'Lâmpadas e óleos'],
    gradient: 'from-amber-300 via-orange-500 to-amber-700',
    iconBg: 'from-amber-400 to-orange-600',
    glow: 'rgba(255,193,7,0.45)',
    icon: 'battery-warning',
    screenshot: screenshots.infoSpecial,
  },
  {
    id: 'hospital',
    title: 'Lixo Hospitalar',
    short: 'Materiais com risco biológico ou químico.',
    description:
      'Agulhas, gazes, medicamentos vencidos e produtos médicos. Seguem normas sanitárias específicas e exigem coleta segregada e selada.',
    examples: ['Agulhas e seringas', 'Curativos contaminados', 'Medicamentos'],
    gradient: 'from-rose-300 via-red-500 to-rose-700',
    iconBg: 'from-rose-400 to-red-600',
    glow: 'rgba(220,53,69,0.45)',
    icon: 'biohazard',
  },
];
