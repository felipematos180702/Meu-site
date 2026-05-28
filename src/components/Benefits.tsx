import { Gauge, Smartphone, Target } from 'lucide-react';

const benefits = [
  {
    title: 'Carregamento Instantâneo',
    description: 'Um site lento faz você perder até 70% dos clientes antes mesmo da página abrir. Nosso desenvolvimento foca em velocidade máxima para reter cada visitante.',
    icon: Gauge,
  },
  {
    title: 'Design que Converte',
    description: 'Não criamos apenas páginas bonitas. Usamos técnicas visuais e posicionamento estratégico de botões para guiar o olhar do visitante até a ação final de compra.',
    icon: Target,
  },
  {
    title: 'Perfeito em Qualquer Tela',
    description: 'Mais de 80% dos seus clientes vão acessar seu site pelo celular. Garantimos uma experiência de navegação rápida, fluida e impecável em smartphones, tablets e computadores.',
    icon: Smartphone,
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-zinc-100">
      {/* Subtle background detail to break monotony */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-zinc-50/80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Vertically Clean & Sticky to balance the vertical list height */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-center">
            <span className="text-blue-600 font-bold mb-3.5 block tracking-widest uppercase text-xs lg:text-[13px] lg:mt-[-32px]">
              Vantagens Competitivas
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[41px] font-extrabold text-zinc-900 mb-5 lg:mt-[5px] tracking-tight leading-[1.15]">
              Por que investir em um desenvolvimento personalizado conosco?
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] text-zinc-600 mb-6 md:mb-8 lg:mt-[8px] leading-relaxed font-light">
              Diferente de templates genéricos que deixam sua empresa invisível na internet, nosso método une design de alto padrão e estratégias eficazes testadas e validas. Entregamos uma estrutura sob medida para posicionar sua marca como autoridade e transformar visitantes em contatos comerciais.
            </p>
            <div className="flex">
              <a
                href="https://wa.me/5575982392535"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm md:text-base px-6 py-3 md:px-8 md:py-4 mt-2 lg:mt-[4px] rounded-xl shadow-xl shadow-zinc-900/10 hover:shadow-zinc-900/15 transition-all duration-300 cursor-pointer"
              >
                Consultoria Gratuita
              </a>
            </div>
          </div>

          {/* Right Column: Premium Minimalist Technical Vertical List (Apple style) */}
          <div className="lg:col-span-7 flex flex-col">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const stepNumber = String(index + 1).padStart(2, '0');
              
              return (
                <div 
                  key={index} 
                  className={`group py-5 md:py-10 border-b border-zinc-200/70 hover:border-zinc-900/40 transition-all duration-500 flex flex-col sm:flex-row items-start gap-4 sm:gap-8 relative overflow-hidden ${
                    index === 0 ? 'lg:mt-[1px]' : ''
                  }`}
                >
                  {/* Subtle hover background highlight sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                  {/* Step Code & Mini Icon Container */}
                  <div className="flex items-center sm:flex-col items-start gap-3 sm:gap-4 shrink-0 sm:w-16">
                    <span className="font-mono text-zinc-300 group-hover:text-blue-600 font-bold text-sm tracking-widest transition-colors duration-300">
                      {stepNumber}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-100/30 transition-all duration-350 transform group-hover:scale-105">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Text Details & Dynamics */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors duration-350 flex items-center gap-2">
                      <span>{benefit.title}</span>
                      <span className="inline-block transform opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-350 text-blue-500 font-light font-mono text-base">
                        &rarr;
                      </span>
                    </h3>
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
