import type { TeamMember } from '@/types';
import { teamPhotos } from './assets';

export const teamContent = {
  eyebrow: 'Equipe',
  title: 'Construído por pessoas que acreditam na Amazônia.',
  description:
    'Um time multidisciplinar entre design, mobile, web e backend, unidos pela missão de transformar dados em ação real.',
};

const gabrielSocial = {
  github: 'https://github.com/bielmotaa',
  linkedin: 'https://www.linkedin.com/in/gabriel-mota-19305b2ab/',
};

export const designTeam: TeamMember[] = [
  {
    id: 'gabriel-design',
    name: 'Gabriel Mota',
    role: 'UX/UI · Mobile Lead',
    bio: 'Responsável pelo design da aplicação mobile e da Landing Page. Liderança no time mobile, com atuação também em front-end web.',
    track: 'design',
    photo: teamPhotos.gabriel,
    social: gabrielSocial,
  },
];

export const mobileTeam: TeamMember[] = [
  {
    id: 'gabriel-mobile',
    name: 'Gabriel Mota',
    role: 'Mobile Lead',
    bio: 'Liderou a equipe mobile, sendo responsável pela criação, gerenciamento e implementação das telas do aplicativo.',
    track: 'mobile',
    photo: teamPhotos.gabriel,
    social: gabrielSocial,
  },
  {
    id: 'davi',
    name: 'Davi Brasil',
    role: 'Mobile Engineer',
    bio: 'Desenvolvedor mobile, atuando na equipe de desenvolvimento mobile da aplicação.',
    track: 'mobile',
    photo: teamPhotos.davi,
    social: {
      github: 'https://github.com/Davibrasil05',
      linkedin: 'https://www.linkedin.com/in/davi-brasiil/',
    },
  },
];

export const webTeam: TeamMember[] = [
  {
    id: 'dave-web',
    name: 'Dave Songnata',
    role: 'Web Lead',
    bio: 'Liderou o desenvolvimento da plataforma web, conectando front-end, backend e infraestrutura para entregar uma experiência consistente e escalável.',
    track: 'web',
    photo: teamPhotos.dave,
    social: {
      github: 'https://github.com/DaveSongnata',
      linkedin: 'https://www.linkedin.com/in/davisouza2/',
    },
  },
  {
    id: 'gabriel-web',
    name: 'Gabriel Mota',
    role: 'Front-end Web',
    bio: 'Atuou como desenvolvedor front-end web, contribuindo no desenvolvimento da Landing Page e da plataforma web.',
    track: 'web',
    photo: teamPhotos.gabriel,
    social: gabrielSocial,
  },
  {
    id: 'thiago',
    name: 'Thiago Massa',
    role: 'Web Engineer',
    bio: 'Desenvolvimento e manutenção das funcionalidades front-end da aplicação.',
    track: 'web',
    photo: teamPhotos.thiago,
    social: {
      linkedin: 'https://www.linkedin.com/in/thiago-massa-70ba5b2a7/',
    },
  },
];

export const backendTeam: TeamMember[] = [
  {
    id: 'dave',
    name: 'Dave Songnata',
    role: 'Backend Lead',
    bio: 'Gerenciamento da equipe back-end e desenvolvimento web. Atuou em banco de dados, DevOps e infraestrutura da aplicação.',
    track: 'backend',
    photo: teamPhotos.dave,
    social: {
      github: 'https://github.com/DaveSongnata',
      linkedin: 'https://www.linkedin.com/in/davisouza2/',
    },
  },
  {
    id: 'raymond',
    name: 'Raymond',
    role: 'Backend Engineer',
    bio: 'Desenvolvimento e manutenção da aplicação back-end.',
    track: 'backend',
    photo: teamPhotos.raymond,
    social: {
      github: 'https://github.com/RayStackDev',
      linkedin: 'https://www.linkedin.com/in/raymondlugo/',
    },
  },
  {
    id: 'victor',
    name: 'Victor Matthaus',
    role: 'Backend Engineer',
    bio: 'Desenvolvimento e suporte das funcionalidades da aplicação.',
    track: 'backend',
    photo: teamPhotos.victor,
    social: {
      linkedin: 'https://www.linkedin.com/in/victor-matthaus10/',
    },
  },
  {
    id: 'enzo',
    name: 'Enzo',
    role: 'Backend Engineer',
    bio: 'Desenvolvimento e manutenção da aplicação back-end.',
    track: 'backend',
    photo: teamPhotos.enzo,
    social: {
      github: 'https://github.com/enzoleiva07',
      linkedin: 'https://www.linkedin.com/in/enzo-leiva-294091324/',
    },
  },
];

export const teamTracks = [
  { id: 'design' as const, label: 'UX/UI · Design', icon: 'sparkles', members: designTeam },
  { id: 'mobile' as const, label: 'Mobile', icon: 'smartphone', members: mobileTeam },
  { id: 'web' as const, label: 'Web', icon: 'globe', members: webTeam },
  { id: 'backend' as const, label: 'Backend', icon: 'server', members: backendTeam },
];
