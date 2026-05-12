export function Roadmap() {
  const steps = [
    {
      title: 'Navegação principal',
      description:
        'Definir as telas do app: mapa de pontos, feed de resíduos, relatório e perfil do usuário.',
      status: 'Concluído',
    },
    {
      title: 'Captura de dados',
      description:
        'Criar fluxo para cadastrar e classificar resíduos, com campos exemplo de peso, tipo e local.',
      status: 'Em andamento',
    },
    {
      title: 'Painel de monitoramento',
      description:
        'Montar a interface que mostra métricas, tendências e alertas de impacto em tempo real.',
      status: 'Em breve',
    },
    {
      title: 'Relatórios e exportação',
      description:
        'Adicionar visualização de resultados e opção de exportar dados em CSV ou PDF.',
      status: 'Em breve',
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Estrutura do app
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white">Roadmap da aplicação</h2>
          <p className="mt-3 text-white/60">
            Acompanhe a evolução do EcoAmazônia. Nossa jornada é dividida em etapas claras, desde a concepção da inteligência de dados até a expansão do monitoramento em tempo real.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-sm ring-1 ring-white/10 sm:p-8">
          <div className="absolute inset-y-8 left-8 w-px bg-white/10" />

          <div className="space-y-6">
            {steps.map((step) => (
              <article
                key={step.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1"
              >
                <span className="absolute -left-5 top-10 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-white/10" />

                <div className="flex flex-col gap-4">
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
