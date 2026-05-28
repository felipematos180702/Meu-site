export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico e Briefing',
      description: 'Uma reunião focada para entender seu negócio, seu cliente ideal e os objetivos principais do seu novo site.',
    },
    {
      step: '02',
      title: 'Proposta & Design UI',
      description: 'Desenho das telas e arquitetura da informação priorizando uma jornada do usuário fluida e que incentiva a conversão.',
    },
    {
      step: '03',
      title: 'Desenvolvimento Ágil',
      description: 'Programação utilizando as tecnologias mais modernas do mercado, garantindo um código limpo, rápido e seguro.',
    },
    {
      step: '04',
      title: 'Entrega e Suporte',
      description: 'Revisão final, publicação do site no seu domínio oficial e treinamento para uso. Além de suporte com contato direto.',
    },
  ];

  return (
    <section id="processo" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900">
      {/* Background radial soft light to lift the premium feeling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[450px] bg-gradient-to-tr from-blue-900/10 via-zinc-950 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-blue-500 font-bold mb-3.5 block tracking-widest uppercase text-xs">
            Metodologia Científica
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-5 tracking-tight leading-[1.12]">
            O Fluxo de Trabalho
          </h2>
          <p className="text-zinc-300 text-sm md:text-lg lg:text-[17px] leading-relaxed font-light max-w-2xl mx-auto">
            Um processo previsível, ágil e 100% transparente. Você acompanha o progresso e o cronograma de cada etapa sem surpresas, do design à publicação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line for desktop with delicate animated gradient flow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[44px] left-[60%] w-full h-[1px] bg-zinc-800/80 group-hover:bg-gradient-to-r group-hover:from-zinc-800 group-hover:to-blue-500/20 transition-all duration-500" />
              )}
              
              <div className="relative z-10 p-6 md:p-7 bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-800/80 hover:border-zinc-700/60 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-zinc-950/50 transition-all duration-300 h-full flex flex-col justify-between">
                
                {/* Header of the Phase inside the Card */}
                <div>
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-zinc-850/60">
                    <span className="inline-flex py-1 px-3.5 rounded-full bg-zinc-800/80 text-zinc-300 text-xs font-bold font-mono tracking-wide">
                      Fase {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600 group-hover:text-blue-500 transition-colors duration-300">
                      STEP // {step.step}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-zinc-400 leading-relaxed text-xs md:text-sm font-light">
                    {step.description}
                  </p>
                </div>

                {/* Symmetrical indicator highlight accent */}
                <div className="mt-6 pt-4 border-t border-zinc-850/30 flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 animate-pulse" />
                  <span>Iteração e Validação</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
