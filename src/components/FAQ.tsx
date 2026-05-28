import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Em quanto tempo o site fica pronto?',
    answer: 'O tempo de entrega varia entre 7 a 15 dias úteis para Landing Pages de alta conversão. Para sites corporativos mais robustos ou catálogos, o prazo médio é de 20 a 30 dias, dependendo da complexidade do projeto e da aprovação do design.',
  },
  {
    question: 'Eu preciso pagar mensalidade pelo site?',
    answer: 'Não cobramos mensalidades obrigatórias pela criação do site. Após a entrega, você terá total autonomia e os acessos às contas em seu nome. Os únicos custos recorrentes de mercado que você terá são os de hospedagem e o registro do seu domínio (geralmente pagos anualmente direto às plataformas). Caso precise de alterações ou atualizações futuras após a entrega, você pode contratar nossos pacotes de manutenção avulsa.',
  },
  {
    question: 'O site funciona bem no celular?',
    answer: 'Totalmente. Desenvolvemos com foco na experiência mobile, já que mais de 80% dos acessos atuais vêm de smartphones. O layout se adapta perfeitamente a qualquer tamanho de tela, garantindo que o seu cliente navegue de forma rápida e faça o contato sem dificuldades.',
  },
  {
    question: 'Como funciona o suporte pós-entrega?',
    answer: 'Após o lançamento oficial, você recebe 30 dias de suporte gratuito para garantir o monitoramento, estabilidade e o perfeito funcionamento da sua página. Passado esse período de garantia, oferecemos o serviço de manutenção para implementar novas atualizações, textos ou blocos sempre que precisar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-50/50 relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-blue-600 font-bold mb-3 block tracking-widest uppercase text-xs">
            Suporte e Transparência
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-4 tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-zinc-600 text-sm md:text-lg font-light">
            Transparência total sobre prazos, custos e funcionamento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-350 overflow-hidden ${
                  isOpen ? 'border-blue-600 bg-zinc-50/70 shadow-sm' : 'border-zinc-200 bg-white hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="flex items-center justify-between w-full p-4 md:p-6 text-left cursor-pointer select-none"
                >
                  <span className={`text-sm md:text-base font-semibold text-zinc-900 pr-4 md:pr-8 transition-colors duration-300 ${isOpen ? 'text-blue-600' : ''}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-zinc-100 text-zinc-600'}`}>
                    {isOpen ? <Minus size={11} className="w-3 h-3 md:w-3.5 md:h-3.5" /> : <Plus size={11} className="w-3 h-3 md:w-3.5 md:h-3.5" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 pt-0 text-zinc-650 text-[13px] md:text-sm lg:text-base leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
