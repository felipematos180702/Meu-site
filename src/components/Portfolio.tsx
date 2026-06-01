import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Vícios de Pipoca',
    category: 'Landing Page de Vendas',
    image: 'https://lh3.googleusercontent.com/d/1kJTehz7DUisMq_vzwTo8gcFGDe_0iiEL',
    url: 'viciosdepipoca.com.br',
    fullUrl: 'https://viciosdepipoca.com.br/',
    description: 'Portal moderno de entretenimento e cultura pop com design imersivo focado em engajamento, retenção e monetização qualificada.'
  },
  {
    title: 'Impulso Musical',
    category: 'Landing Page de Vendas',
    image: 'https://lh3.googleusercontent.com/d/1lJMYoZynYRHoCy9sbLT2jyBcnHJaFKuK',
    url: 'impulsomusical.com.br',
    fullUrl: 'https://www.impulsomusical.com.br/',
    description: 'página de vendas em modo escuro com visual moderno e dinâmico, estruturado para captar novos alunos e conectar estudantes de música à plataforma.'
  },
  {
    title: 'Mentoria Doces da Naty',
    category: 'Landing Page de Alta Conversão',
    image: 'https://lh3.googleusercontent.com/d/1DTpOE4s7344dIke9DTWN-dUoBH5p_seK',
    url: 'cursodocesdanaty.com.br',
    fullUrl: 'https://www.cursodocesdanaty.com.br/',
    description: 'Landing Page elegante e sofisticada desenvolvida para o lançamento de cursos de confeitaria. Design focado em desejo visual e facilidade de inscrição.'
  },
  {
    title: 'Barbearia Seu Tom',
    category: 'Site Institucional Premium',
    image: 'https://lh3.googleusercontent.com/d/1ZRcORmV_gI5r8ExCA2pIT8Hxvw2fRfZA',
    url: 'barbeariaseutom.com.br',
    fullUrl: 'https://barbeariaseutom.com.br/',
    description: 'Landing page comercial minimalista com foco em agendamento rápido de serviços. Criada para elevar o ticket médio e fidelizar clientes da região.'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden border-t border-b border-zinc-100">
      {/* Structural visual cue - ambient background radial mask */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[600px] bg-gradient-to-tr from-blue-50/5 via-zinc-150/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-extrabold text-zinc-900 mb-2 md:mb-3 tracking-tight leading-[1.1]">
              Projetos Recentes
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
              Clique em um dos nossos últimos projetos e veja-os em tamanho real.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-white rounded-2xl border border-zinc-200/40 hover:border-zinc-300/70 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Browser Window Mockup wrapper */}
              <div className="w-full bg-zinc-50 border-b border-zinc-200/80 px-4 py-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-450 group-hover:bg-rose-500 transition-colors duration-300" style={{ backgroundColor: '#f43f5e' }} />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-450 group-hover:bg-amber-500 transition-colors duration-300" style={{ backgroundColor: '#eab308' }} />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-450 group-hover:bg-emerald-500 transition-colors duration-300" style={{ backgroundColor: '#22c55e' }} />
                </div>
                <div className="flex-1 max-w-[200px] mx-auto bg-zinc-200/40 rounded-lg py-1 text-[11px] text-zinc-500 font-mono text-center truncate px-3 border border-zinc-300/10">
                  {project.url}
                </div>
                <div className="w-8 flex justify-end">
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
              </div>

              {/* Card visual content staging */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full scale-[1.01] group-hover:scale-106 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/[0.02] transition-colors duration-500" />
              </div>

              {/* Text content details at bottom */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950 mt-1.5 mb-2.5 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors duration-300">
                  <span>Ver site ao vivo</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

