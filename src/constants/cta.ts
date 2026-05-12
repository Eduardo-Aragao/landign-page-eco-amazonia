const whatsappMessage = encodeURIComponent(
  'Olá! Vim pelo site do EcoAmazônia e gostaria de mais informações.',
);

export const ctaContent = {
  eyebrow: 'Em breve',
  title: 'Em breve nas lojas.',
  highlight: 'lojas',
  description:
    'O aplicativo EcoAmazônia estará disponível em breve nas principais plataformas mobile. Estamos finalizando os últimos ajustes para entregar uma experiência moderna, estável e premium para todos os usuários.',
  contactsLabel: 'Para mais informações, suporte ou dúvidas',
  contacts: [
    {
      id: 'gabriel',
      name: 'Gabriel Mota',
      phone: '+55 92 99453-6158',
      link: `https://wa.me/5592994536158?text=${whatsappMessage}`,
    },
    {
      id: 'dave',
      name: 'Dave Songnata',
      phone: '+55 92 9446-6994',
      link: `https://wa.me/559294466994?text=${whatsappMessage}`,
    },
  ],
};

export const footerContent = {
  description:
    'EcoAmazônia é um projeto integrador que une tecnologia, sustentabilidade e cidadania.',
  newsletterTitle: 'Receba novidades do projeto',
  newsletterPlaceholder: 'seu@email.com',
  newsletterCta: 'Inscrever',
  copyright: 'Todos os direitos reservados - Gabriel Mota',
};
