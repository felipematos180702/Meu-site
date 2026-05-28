import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

const portfolioSites = [
  {
    title: "Barbearia Seu Tom",
    category: "Premium Landing Page - Conversão Máxima",
    url: "barbeariaseutom.com.br",
    fullUrl: "https://barbeariaseutom.com.br/",
    description: "Design clássico premium com tons de carvão e bronze, focado em alta captação de agendamentos com carregamento ultrarrápido.",
    image: "https://lh3.googleusercontent.com/d/1ZRcORmV_gI5r8ExCA2pIT8Hxvw2fRfZA",
    gradient: "from-amber-500/10 via-amber-600/5 to-transparent"
  },
  {
    title: "Curso Doces da Naty",
    category: "Página de Vendas - Alta Conversão (CRO)",
    url: "cursodocesdanaty.com.br",
    fullUrl: "https://www.cursodocesdanaty.com.br/",
    description: "Layout delicado em tons pastel e acabamentos dourados, estruturado cientificamente para escalar a venda de treinamentos de confeitaria.",
    image: "https://lh3.googleusercontent.com/d/1DTpOE4s7344dIke9DTWN-dUoBH5p_seK",
    gradient: "from-pink-500/10 via-pink-600/5 to-transparent"
  },
  {
    title: "Impulso Musical",
    category: "Site Institucional - Captação de Alunos",
    url: "impulsomusical.com.br",
    fullUrl: "https://www.impulsomusical.com.br/",
    description: "Interface vibrante de alta performance em modo escuro com contrastes neon, desenvolvida para conectar e converter futuros músicos.",
    image: "https://lh3.googleusercontent.com/d/1lJMYoZynYRHoCy9sbLT2jyBcnHJaFKuK",
    gradient: "from-indigo-500/10 via-indigo-600/5 to-transparent"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [magneticCoords, setMagneticCoords] = useState({ x: 0, y: 0 });
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!hero || !spotlight) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isHovering = true;
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (spotlight) {
        spotlight.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (spotlight) {
        spotlight.style.opacity = '0';
      }
    };

    const updatePosition = () => {
      if (isHovering && spotlight) {
        // Fine interpolation for organic lag-behind momentum
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        spotlight.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseenter', handleMouseEnter);
    hero.addEventListener('mouseleave', handleMouseLeave);
    
    // Setup initial sleek responsive state
    spotlight.style.opacity = '0';
    spotlight.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    
    updatePosition();

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseenter', handleMouseEnter);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Restart/Manage slider autoplay timer
  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    if (isAutoplayActive) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % portfolioSites.length);
      }, 6000);
    }
  }, [isAutoplayActive]);

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [resetAutoplayTimer]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioSites.length);
    resetAutoplayTimer();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioSites.length) % portfolioSites.length);
    resetAutoplayTimer();
  };

  const handleSlideSelect = (index: number) => {
    setCurrentSlide(index);
    resetAutoplayTimer();
  };

  // Magnetic cursor interaction logic for main CTA
  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth magnetic follow factor (limiting movement to max 12px for high-end feel)
    const factor = 0.3;
    setMagneticCoords({ x: x * factor, y: y * factor });
  };

  const handleCtaMouseLeave = () => {
    setIsCtaHovered(false);
    setMagneticCoords({ x: 0, y: 0 });
  };

  // Entry animation parameters with custom cubic-bezier (0.16, 1, 0.3, 1) - easeOutExponential style
  const cubicBezierEasing = [0.16, 1, 0.3, 1];

  return (
    <section id="hero" ref={heroRef} className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-white">
      
      {/* 1. PLANO DE FUNDO (Figma-like grid lines with soft radial masks) */}
      <div className="absolute inset-0 bg-white pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Figma/Design Grid line overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.35]" 
        />
        {/* Spotlight / Gradient Reveal Effect Layer */}
        <div 
          ref={spotlightRef}
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none select-none bg-[radial-gradient(circle,rgba(37,99,235,0.22)_0%,transparent_70%)]"
          style={{ willChange: 'transform', top: 0, left: 0, zIndex: 1 }}
        />
        {/* Soft radial overlay that focuses the contrast on the content center */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#ffffff_90%)]" 
          style={{ zIndex: 2 }}
        />
        
        {/* Geometric crosshair details on Figma grid line intersections */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-zinc-400/40" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-zinc-400/40" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-zinc-400/40" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-zinc-400/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="w-full text-center">
          
          {/* 2. BADGE SUPERIOR CONVERSÃO (Status Active with ping/pulse) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: cubicBezierEasing, delay: 0 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/75 shadow-sm text-xs font-semibold text-zinc-600 mb-8 md:mb-8 md:mt-[-66px] md:pt-[4px] md:ml-[0px] select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponível para novos projetos</span>
            </div>
          </motion.div>
 
          {/* TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: cubicBezierEasing, delay: 0.12 }}
            className="text-2xl sm:text-4xl md:text-[65px] font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-4 md:mb-6 md:mt-[34px] md:-ml-[1px] font-sans"
          >
            Transforme visitantes em <span className="text-blue-600 font-sans">clientes</span> com um site profissional de alto padrão
          </motion.h1>

          {/* SUBTITULO */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: cubicBezierEasing, delay: 0.24 }}
            className="text-sm sm:text-lg md:text-xl text-zinc-600 mb-8 md:mb-10 md:mt-[35px] md:ml-[224px] md:mb-[42px] leading-relaxed max-w-3xl mx-auto md:mx-0"
          >
            Criamos sites e landing pages exclusivas, ultra-velozes e otimizadas para posicionar sua empresa como autoridade e multiplicar suas vendas.
          </motion.p>

          {/* 3. CORREÇÃO DOS BOTÕES (CTA Principal "Fazer Orçamento Gratuito" com Magnetic & Glow) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: cubicBezierEasing, delay: 0.36 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative md:mt-[6px] md:pt-[7px]"
          >
            {/* Soft Glowing Aura backing the magnetic CTA */}
            <div 
              className={`absolute -inset-2 bg-blue-500/20 blur-xl rounded-2xl transition-all duration-700 pointer-events-none -z-10 ${
                isCtaHovered ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              }`}
            />

            {/* CTA Principal - Fazer Orçamento Gratuito */}
            <motion.a
              href="https://wa.me/5575982392535"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ x: magneticCoords.x, y: magneticCoords.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
              onMouseMove={handleCtaMouseMove}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={handleCtaMouseLeave}
              className="w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm md:text-lg font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/15 cursor-pointer"
            >
              {/* Shimmer light-sweep background */}
              <span className="absolute inset-x-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite]" />
              
              <span>Fazer Orçamento Gratuito</span>
              <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isCtaHovered ? 'translate-x-1.5' : ''}`} />
            </motion.a>

            {/* CTA Secundário */}
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-800 text-sm md:text-lg font-medium px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all"
            >
              Ver Projetos
            </a>
          </motion.div>
        </div>

        {/* 4. MOCKUP DINÂMICO (Portfólio em Fade com Slider Premium) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, ease: cubicBezierEasing, delay: 0.48 }}
          className="mt-20 max-w-5xl mx-auto relative group/mockup"
          onMouseEnter={() => setIsAutoplayActive(false)}
          onMouseLeave={() => setIsAutoplayActive(true)}
        >
          {/* Decorative ambient background matching active item's color pallet */}
          <div className={`absolute -inset-4 bg-gradient-to-tr ${portfolioSites[currentSlide].gradient} rounded-3xl blur-2xl opacity-75 transition-all duration-1000 -z-10`} />

          {/* Browser Window Wrapper */}
          <div className="relative rounded-2xl bg-white shadow-2xl border border-zinc-200/80 overflow-hidden aspect-[16/10] md:aspect-[16/9] flex flex-col">
            
            {/* Realistic Browser Header (Figma Minimalist Style) */}
            <div className="bg-zinc-50 flex items-center justify-between px-4 py-3 border-b border-zinc-200 select-none shrink-0">
              {/* Window buttons */}
              <div className="flex gap-2 w-16">
                <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80 hover:bg-amber-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors" />
              </div>

              {/* URL Address Bar with HTTPS Security */}
              <div className="flex items-center gap-2 bg-white border border-zinc-200 text-zinc-500 text-xs py-1.5 px-4 rounded-lg w-1/2 justify-center shadow-sm relative">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span className="font-mono tracking-tight text-zinc-600 font-medium">
                  {portfolioSites[currentSlide].url}
                </span>
                
                {/* External direct link */}
                <a
                  href={portfolioSites[currentSlide].fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 hover:text-blue-600 transition-colors"
                  title="Visitar site real"
                >
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 w-16 justify-end text-[10px] font-mono font-medium text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Slider Content Viewport */}
            <div className="relative flex-1 bg-zinc-950 overflow-hidden group">
              
              {/* Smooth Cross-Fade Image Transition via AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Portfolio Screenshot */}
                  <img
                    src={portfolioSites[currentSlide].image}
                    alt={portfolioSites[currentSlide].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-102"
                  />
                  {/* Subtle shadows / gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Control Arrows (Only visible on slider hover, high fidelity) */}
              <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all duration-300 opacity-0 group-hover/mockup:opacity-100 shadow-lg cursor-pointer transform hover:scale-[1.05]"
                aria-label="Slide anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all duration-300 opacity-0 group-hover/mockup:opacity-100 shadow-lg cursor-pointer transform hover:scale-[1.05]"
                aria-label="Próximo slide"
              >
                <ChevronRight size={20} />
              </button>

              {/* Floating Dynamic Project Info Tag (Desktop Only) */}
              <div className="hidden md:block absolute bottom-6 left-6 right-6 md:left-8 md:bottom-8 md:max-w-md z-20 pointer-events-none">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-5 text-white pointer-events-auto shadow-2xl"
                >
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400 block mb-1">
                    {portfolioSites[currentSlide].category}
                  </span>
                  
                  <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    {portfolioSites[currentSlide].title}
                    <a
                      href={portfolioSites[currentSlide].fullUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </h3>
                  
                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-4">
                    {portfolioSites[currentSlide].description}
                  </p>

                  <a
                    href={portfolioSites[currentSlide].fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white font-medium hover:text-blue-400 transition-colors cursor-pointer group/link whitespace-nowrap"
                  >
                    <span className="shrink-0">Visitar Projeto Real</span>
                    <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </motion.div>
              </div>

              {/* Minimalist Floating Link on Mobile Only */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 md:hidden pointer-events-auto">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={portfolioSites[currentSlide].fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs bg-black/70 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white font-medium hover:text-blue-400 transition-colors cursor-pointer group/link whitespace-nowrap"
                  >
                    <span className="shrink-0">Visite o projeto real</span>
                    <ExternalLink className="w-3 h-3 shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </motion.div>
              </div>

              {/* Slideshow Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 z-30 pointer-events-none">
                <motion.div 
                  key={currentSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-blue-500"
                />
              </div>

            </div>

            {/* Slider Dots Indicator */}
            <div className="bg-zinc-50 border-t border-zinc-200 py-3 flex items-center justify-center gap-2 select-none shrink-0">
              {portfolioSites.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideSelect(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index ? 'w-6 bg-blue-600' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
