export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-white pt-20 pb-10 border-t border-zinc-200 text-zinc-600 text-sm scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 lg:gap-24 mb-16">
        <div className="md:col-span-2">
          <a href="#" className="inline-block text-2xl font-bold tracking-tight text-zinc-900 mb-6">
            Studio<span className="text-blue-600">.</span>
          </a>
          <p className="leading-relaxed mb-6 max-w-sm">
            Especialistas em desenvolvimento frontend focado em CRO, UI/UX de nível corporativo e soluções completas para escalar seus resultados pelo digital.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Navegação</h4>
          <ul className="space-y-4">
            <li><a href="#hero" className="hover:text-blue-600 transition-colors">Início</a></li>
            <li><a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfólio</a></li>
            <li><a href="#processo" className="hover:text-blue-600 transition-colors">Método</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Contato</h4>
          <ul className="space-y-4">
            <li>
              <a href="https://wa.me/5575982392535" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-medium flex items-center gap-2">
                Falar no WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:felipematos180702@gmail.com" className="hover:text-blue-600 transition-colors block truncate max-w-xs">
                felipematos180702@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/felipeematso" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-medium flex items-center gap-2">
                Instagram: @felipeematso
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {currentYear} Studio Ltda. Todos os direitos reservados.</p>
        <p>Design de excelência. Código implacável.</p>
      </div>
    </footer>
  );
}
