import { Monitor, Briefcase, Zap } from 'lucide-react';

const services = [
  {
    title: 'Landing Pages de Vendas',
    description: 'Páginas de alta conversão criadas exclusivamente para campanhas de anúncios (Google e Meta Ads). O design perfeito para transformar o clique do usuário em um contato direto no seu WhatsApp.',
    icon: Zap,
  },
  {
    title: 'Sites Institucionais',
    description: 'O endereço digital oficial da sua empresa. Uma estrutura imponente que transmite segurança, credibilidade e profissionalismo para fechar contratos de maior valor.',
    icon: Monitor,
  },
  {
    title: 'Catálogos e Portfólios Digitais',
    description: 'Exiba seus produtos, projetos ou serviços de forma elegante e organizada. Facilite a decisão de compra do seu cliente com uma vitrine online de alto padrão.',
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-4 tracking-tight">O que fazemos</h2>
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg">
            Soluções completas de desenvolvimento e design, focadas puramente nos resultados do seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-300 animate-fadeIn"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
