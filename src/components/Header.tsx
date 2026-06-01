import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-zinc-200/80 py-2.5 shadow-sm'
          : 'bg-transparent border-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGOTIPO */}
        <a href="#" className="flex items-center text-xl md:text-2xl font-black tracking-tight transition-colors">
          <span className="bg-linear-to-r from-zinc-950 via-blue-600 to-zinc-950 bg-[length:300%_auto] bg-clip-text text-transparent animate-neon-flow">
            Felipe Matos
          </span>
          <span className="text-blue-600">.</span>
        </a>

        {/* Desktop Nav & CTA (Aligned vertically perfectly using flex items-center) */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop outline button with conversion focus */}
          <a
            href="https://wa.me/5575982392535"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-zinc-350 hover:border-blue-600 hover:text-blue-600 text-zinc-700 text-xs font-semibold px-4.5 py-2 rounded-lg transition-all"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-1.5 -mr-1.5 text-zinc-600 hover:text-zinc-950 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl py-4 px-6 flex flex-col gap-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-700 py-1.5 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5575982392535"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-300 hover:border-blue-600 text-zinc-750 hover:text-blue-600 text-center text-xs font-bold px-4 py-2.5 rounded-lg mt-1.5 transition-all block w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Entre em Contato
          </a>
        </div>
      )}
    </header>
  );
}
