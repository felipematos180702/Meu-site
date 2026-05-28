import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Process />
      <FAQ />
      <Footer />
    </div>
  );
}

