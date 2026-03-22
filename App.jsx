import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, ChevronRight, Droplets, Shield, Sparkles, MousePointer2, Instagram, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// COMPONENT: NAVBAR (A Ilha Flutuante)
// ==========================================
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-16 w-[90%] md:w-auto max-w-4xl ${scrolled ? 'bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-accent" />
        <span className="font-heading font-bold tracking-tight text-white text-lg">POLISH <span className="text-accent">CLEAN</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-textMuted">
        <a href="#servicos" className="hover:text-white hover-lift">Automotivo</a>
        <a href="#processo" className="hover:text-white hover-lift">O Protocolo</a>
        <a href="#residencial" className="hover:text-white hover-lift">Residencial & Sofás</a>
      </div>
      <a href="https://wa.me/5511978017263" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 bg-accent text-background px-5 py-2 rounded-full font-bold text-sm magnetic-btn overflow-hidden relative group">
        <span className="relative z-10 flex items-center gap-2">Agendar <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" /></span>
        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
      </a>
    </nav>
  );
};

// ==========================================
// COMPONENT: HERO SECTION (A Cena de Abertura)
// ==========================================
const Hero = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(".hero-text-part",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, delay: 0.2 }
      );
      tl.fromTo(".hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-background">
      {/* Background Video with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="hero-text-part mb-4 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="font-mono text-xs text-textMuted tracking-wider uppercase">Estúdio de Estética Automotiva de Alta Performance</span>
        </div>
        <h1 className="hero-text-part font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-2">
          O Padrão é a <br />
          <span className="font-drama italic text-7xl md:text-9xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200 text-glow inline-block mt-2">Perfeição.</span>
        </h1>
        <p className="hero-text-part font-heading text-lg md:text-xl text-textMuted max-w-xl mt-8 mb-10 leading-relaxed">
          Nós não lavamos carros. Nós restauramos, corrigimos e vitrificamos superfícies para alcançar o brilho absoluto e a proteção definitiva.
        </p>
        <div className="hero-cta">
          <a href="#servicos" className="inline-flex items-center justify-center gap-3 bg-white text-background px-8 py-4 rounded-full font-bold text-lg magnetic-btn">
            Ver Serviços <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: FEATURES (Artefatos Funcionais)
// ==========================================
const Features = () => {
  // Artefato 1: Shuffler State
  const [shufflerData, setShufflerData] = useState([
    { id: 1, text: "Correção Nível 1" },
    { id: 2, text: "Polimento Técnico" },
    { id: 3, text: "Refino & Lustro" }
  ]);

  // Artefato 2: Typewriter State
  const [typedText, setTypedText] = useState("");
  const fullText = "Aplicando Coating Cerâmico 9H... Monitorando cura cruzada... Proteção UV ativa. Hidrofobia máxima alcançada.";

  useEffect(() => {
    // Logic for Shuffler
    const intervalId = setInterval(() => {
      setShufflerData(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);

    // Logic for Typewriter
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        setTimeout(() => { i = 0; setTypedText(""); }, 5000);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <section id="servicos" className="py-32 px-6 md:px-16 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Artefatos de <span className="font-drama italic text-accent">Performance</span></h2>
          <p className="text-textMuted text-lg max-w-2xl">A engenharia por trás do nosso detalhamento técnico. Nossos serviços operam em níveis não vistos em estéticas comuns.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Diagnostic Shuffler (Correção) */}
          <div className="bg-surface rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/15 transition-colors">
            <div className="mb-12">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Correção de Pintura</h3>
              <p className="text-textMuted text-sm">Remoção de micro-riscos, hologramas e oxidação. Restauração do brilho profundo.</p>
            </div>
            <div className="relative h-48 w-full flex flex-col justify-end perspective-1000">
              {shufflerData.map((item, index) => {
                const isSelected = index === 2;
                return (
                  <div
                    key={item.id}
                    className="absolute w-full bottom-0 left-0 transition-all duration-700 p-4 rounded-xl border border-white/10 flex items-center justify-between"
                    style={{
                      transform: `translateY(-${(2 - index) * 20}px) scale(${1 - (2 - index) * 0.05})`,
                      opacity: 1 - (2 - index) * 0.3,
                      zIndex: index,
                      backgroundColor: isSelected ? '#F59E0B' : '#0F172A',
                      color: isSelected ? '#000' : '#fff'
                    }}
                  >
                    <span className="font-mono text-sm font-bold">{item.text}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                )
              })}
            </div>
            <div className="absolute top-8 right-8 text-accent/20 group-hover:text-accent/40 transition-colors">
              <Sparkles className="w-12 h-12" />
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter (Vitrificação) */}
          <div className="bg-surface rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/15 transition-colors">
            <div className="mb-12">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Vitrificação</h3>
              <p className="text-textMuted text-sm">Ceramic Coating com propriedades hidrofóbicas extremas e proteção química.</p>
            </div>
            <div className="bg-background rounded-xl p-4 border border-white/10 h-48 font-mono text-xs text-accent leading-relaxed relative">
              <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-textMuted uppercase tracking-wider text-[10px]">Live Feed</span>
              </div>
              <p>{typedText}<span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1 align-middle"></span></p>
            </div>
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
              <Shield className="w-12 h-12" />
            </div>
          </div>

          {/* Card 3: Cursor Protocol (Higienização) */}
          <div className="bg-surface rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/15 transition-colors">
            <div className="mb-8">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Detailing Automotivo</h3>
              <p className="text-textMuted text-sm">Higienização profunda de bancos de couro, superfícies plásticas e tecidos do veículo. Biossegurança a bordo.</p>
            </div>
            <div className="flex flex-col gap-3 mt-4 relative z-10">
              <a href="https://wa.me/5511978017263" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-background p-4 rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="font-heading font-bold text-sm text-textMuted group-hover:text-white transition-colors">Agendar via WhatsApp</div>
                </div>
                <ArrowRight className="w-4 h-4 text-textMuted group-hover:text-green-500 transition-colors" />
              </a>

              <a href="https://www.instagram.com/polish.clean" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-background p-4 rounded-xl border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="font-heading font-bold text-sm text-textMuted group-hover:text-white transition-colors">Ver no Instagram</div>
                </div>
                <ArrowRight className="w-4 h-4 text-textMuted group-hover:text-accent transition-colors" />
              </a>
            </div>
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
              <Droplets className="w-12 h-12" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: PHILOSOPHY (O Manifesto)
// ==========================================
const Philosophy = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Simple fade-up for philosophy text since SplitText is a premium plugin
      gsap.fromTo(".phil-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: comp.current,
            start: "top 60%",
          }
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} id="filosofia" className="relative py-40 px-6 md:px-16 bg-[#050507] overflow-hidden">
      {/* Background Texture image */}
      <div className="absolute inset-0 z-0 opacity-20 parallax-bg" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1600705505084-5f1591f2cc05?q=80&w=2670&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'grayscale(100%)'
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-24">
        <div>
          <p className="phil-text font-mono text-textMuted text-sm tracking-widest uppercase mb-6">A maioria do mercado foca em: Ducha Rápida e Cera Simples.</p>
          <h2 className="phil-text font-heading font-medium text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
            Nós focamos na <span className="font-drama italic text-accent">Descontaminação Absoluta</span> e preservação da estrutura automotiva.
          </h2>
        </div>

        <div>
          <p className="phil-text font-mono text-textMuted text-sm tracking-widest uppercase mb-6">A maioria vê: Um carro limpo.</p>
          <h2 className="phil-text font-heading font-medium text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
            Nós vemos: <span className="font-drama italic text-white flex items-center gap-4">O reflexo <div className="h-[2px] w-24 bg-accent mt-4"></div> perfeito.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: PROTOCOL (Sticky Stacking)
// ==========================================
const Protocol = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      const wrappers = gsap.utils.toArray('.protocol-wrapper');

      wrappers.forEach((wrapper, i) => {
        // Efeito de escurecer e reduzir o card anterior ao dar scroll
        if (i < wrappers.length - 1) {
          gsap.to(cards[i], {
            scale: 0.9,
            opacity: 0.3,
            filter: "blur(10px)",
            scrollTrigger: {
              trigger: wrappers[i + 1],
              start: "top bottom-=100",
              end: "top top+=96",
              scrub: true,
              markers: false
            }
          });
        }
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Descontaminação Automotiva",
      desc: "A base de todo serviço premium. Limpeza profunda com snow foam e remoção de impurezas ferrosas que agridem o verniz e ofuscam o reflexo.",
      features: ["Lavagem Técnica Snow Foam", "Descontaminação Ferrosa", "Limpeza de Frestas/Emblemas", "Preparação de Superfície"]
    },
    {
      num: "02",
      title: "Detailing Interno Automotivo",
      desc: "O ecossistema de painéis e bancos deve ser imaculado. Higienização minuciosa para renovar o conforto e a biossegurança exclusiva do seu veículo.",
      features: ["Higienização de Bancos e Carpetes", "Tratamento de Couro Premium", "Revitalização de Plásticos Internos", "Oxi-Sanitização (Odonização)"]
    },
    {
      num: "03",
      title: "Correção & Micro-Pintura",
      desc: "A arte da restauração visual. Remoção sistemática de riscos, amassados e hologramas para revelar o verdadeiro nível da pintura.",
      features: ["Polimento Automotivo Técnico", "Martelinho de Ouro", "Pintura Automotiva Especial", "Funilaria de Alta Precisão"]
    },
    {
      num: "04",
      title: "Blindagem, Acabamento & Cursos",
      desc: "Proteção térmica, estética de longa duração e formação de profissionais. Blindamos seu veículo.",
      features: ["Vitrificação (Ceramic Coating)", "Aplicação Avançada de Insulfilm", "Inspeção Final Sob Luzes", "Cursos Profissionalizantes VIP"]
    }
  ];

  return (
    <section ref={comp} id="processo" className="protocol-container relative pb-32 pt-32 px-6 md:px-16 bg-background">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6">O Protocolo <span className="font-drama italic text-accent">Polish</span></h2>
        <p className="text-textMuted text-lg max-w-2xl mx-auto">Um ecossistema estruturado de estética automotiva. Sem atalhos, apenas perfeição meticulosa da pintura ao estofado.</p>
      </div>

      <div className="max-w-4xl mx-auto relative flex flex-col gap-[12vh] pb-8">
        {steps.map((step, i) => (
          <div key={i} className="protocol-wrapper sticky top-24 w-full h-[calc(100dvh-7rem)] md:h-[75dvh]" style={{ zIndex: i }}>
            <div className="protocol-card absolute inset-0 w-full h-full bg-surface/95 backdrop-blur-md border border-white/10 rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 flex flex-col justify-between overflow-y-auto overflow-x-hidden scrollbar-hide shadow-[0_0_80px_rgba(0,0,0,0.8)] border-t border-l">
              {/* Elemento Gráfico de Fundo Abstrato */}
              <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex justify-between items-start relative z-10">
                <span className="font-mono text-5xl md:text-8xl text-white/5 font-bold">{step.num}</span>
                <div className="hidden md:block w-32 h-32 relative">
                  {/* Micro-animação abstracta SVG baseada no índice */}
                  {i === 0 && <div className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>}
                  {i === 1 && <div className="absolute inset-0 border-t-2 border-b-2 border-accent/40 rounded-full animate-ping"></div>}
                  {i === 2 && <div className="absolute inset-0 border-x-2 border-white/30 rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>}
                  {i === 3 && <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse blur-2xl"></div>}
                </div>
              </div>

              <div className="max-w-3xl text-left bg-background/60 backdrop-blur-xl p-4 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 relative z-10 w-full shadow-2xl mt-auto">
                <h3 className="font-heading font-bold text-[22px] md:text-4xl text-white mb-2 md:mb-4 leading-tight">{step.title}</h3>
                <p className="font-mono text-[11px] md:text-sm text-textMuted leading-snug md:leading-relaxed mb-4 md:mb-8 border-b border-white/10 pb-4 md:pb-6">{step.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  {step.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 md:gap-3 text-[11px] md:text-sm text-textMain bg-white/5 hover:bg-white/10 transition-colors p-2 md:p-3 rounded-lg md:rounded-xl border border-white/5 group">
                      <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-medium tracking-wide leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: PRICING (Assinaturas / Agendamento)
// ==========================================
const Pricing = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-background border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Projetos de <span className="font-drama italic text-accent">Restauração</span></h2>
          <p className="text-textMuted text-lg">Selecione o pacote ideal para a necessidade da sua nave.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-surface rounded-[2rem] p-8 border border-white/5">
            <h3 className="font-heading font-bold text-xl text-white mb-2">Basic Detail</h3>
            <p className="text-textMuted text-sm mb-8 pr-4">Lavagem técnica detalhada, descontaminação e proteção com cera sintética de alta durabilidade.</p>
            <div className="mb-8">
              <ul className="space-y-4 font-mono text-xs text-textMuted">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white/30" /> Lavagem Snow Foam</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white/30" /> Limpeza interna básica</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white/30" /> Polimento Comercial</li>
              </ul>
            </div>
            <a href="https://wa.me/5511978017263" target="_blank" rel="noreferrer" className="block text-center w-full py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white inset-0 hover:text-background transition-colors cursor-pointer">Agendar</a>
          </div>

          <div className="bg-primary rounded-[2rem] p-8 border border-accent/30 scale-100 lg:scale-105 shadow-[0_0_50px_rgba(245,158,11,0.1)] relative z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest">Recomendado</div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Performance Focus</h3>
            <p className="text-accent/80 text-sm mb-8 pr-4">O equilíbrio ideal. Polimento técnico para correção de pintura e revestimento cerâmico (vitrificador 1 ano).</p>
            <div className="mb-8">
              <ul className="space-y-4 font-mono text-xs text-white/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-accent" /> Lavagem Técnica Avançada</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-accent" /> Polimento em 2 Etapas (Correção)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-accent" /> Vitrificação (Ceramic Coating)</li>
              </ul>
            </div>
            <a href="https://wa.me/5511978017263" target="_blank" rel="noreferrer" className="block text-center w-full py-4 rounded-full bg-accent text-background font-bold magnetic-btn cursor-pointer">Agendar Projeto</a>
          </div>

          <div className="bg-surface rounded-[2rem] p-8 border border-white/5">
            <h3 className="font-heading font-bold text-xl text-white mb-2">Enterprise Lab</h3>
            <p className="text-textMuted text-sm mb-8 pr-4">O pacote absoluto. Restauração 360º. Martelinho, reparos de pintura, insulfilm e vitrificação de até 3 anos.</p>
            <div className="mb-8">
              <ul className="space-y-4 font-mono text-xs text-textMuted">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white/30" /> Full Detail (Chassi a Teto)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white/30" /> Martelinho de Ouro / Funilaria</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white/30" /> Proteção PPF ou Coating Premium</li>
              </ul>
            </div>
            <a href="https://wa.me/5511978017263" target="_blank" rel="noreferrer" className="block text-center w-full py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white inset-0 hover:text-background transition-colors cursor-pointer">Consultoria VIP</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: RESIDENTIAL & UPHOLSTERY (Higienização Residencial)
// ==========================================
const HomeServices = () => {
  return (
    <section id="residencial" className="py-32 px-6 md:px-16 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="font-mono text-xs text-textMuted tracking-wider uppercase">Serviço Premium a Domicílio</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Especialistas em <span className="font-drama italic text-accent block mt-2">Estofados & Mobília</span>
          </h2>
          <p className="text-textMuted text-lg leading-relaxed mb-8">
            Levamos o mesmo rigor técnico e a perfeição da nossa estética automotiva diretamente para a sua casa ou escritório. Revitalização completa das tramas, hidratação profunda de couro e eliminação rigorosa de ácaros, fungos e bactérias.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-3 text-sm text-textMain bg-surface hover:bg-white/5 transition-colors p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="font-medium">Higienização de Sofás</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-textMain bg-surface hover:bg-white/5 transition-colors p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="font-medium">Limpeza de Colchões</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-textMain bg-surface hover:bg-white/5 transition-colors p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="font-medium">Impermeabilização Premium</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-textMain bg-surface hover:bg-white/5 transition-colors p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="font-medium">Tapetes e Cadeiras</span>
            </div>
          </div>

          <a href="https://wa.me/5511978017263" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-background px-8 py-4 rounded-full font-bold text-lg magnetic-btn hover-lift">
            Agendar Avaliação em Casa <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="lg:w-1/2 relative w-full mt-12 lg:mt-0">
          <div className="aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative">
            <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2670&auto=format&fit=crop" alt="Sofá Premium Clean" className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000 origin-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
          </div>
          {/* Badge flutuante */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:scale-100 scale-90 origin-bottom bg-surface/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center whitespace-nowrap w-max max-w-[90vw]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-white text-lg">Proteção & Saúde</p>
                <p className="font-mono text-xs text-textMuted">Odor Zero & Biossegurança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: FOOTER
// ==========================================
const Footer = () => {
  return (
    <footer className="bg-[#050507] pt-24 pb-8 px-6 md:px-16 rounded-t-[4rem] border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-heading font-bold text-2xl text-white">POLISH <span className="text-accent">CLEAN</span></span>
          </div>
          <p className="text-textMuted text-sm max-w-sm mb-8 leading-relaxed">
            Elevando os padrões de Estética Automotiva.
            Restauração, Proteção e Precisão Absoluta para os exigentes.
          </p>
          <div className="inline-flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-mono text-xs text-textMuted uppercase">Studio Operational</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-6">Navegação</h4>
          <ul className="space-y-4 font-mono text-sm text-textMuted">
            <li><a href="#servicos" className="hover:text-accent transition-colors">Automotivo</a></li>
            <li><a href="#processo" className="hover:text-accent transition-colors">O Protocolo</a></li>
            <li><a href="#residencial" className="hover:text-accent transition-colors">Residencial & Sofás</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-6">Contato/Social</h4>
          <ul className="space-y-4 font-mono text-sm text-textMuted">
            <li><a href="https://www.instagram.com/polish.clean/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">Instagram <ArrowRight className="w-3 h-3" /></a></li>
            <li><a href="https://wa.me/5511978017263" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">WhatsApp <ArrowRight className="w-3 h-3" /></a></li>
            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2">Cursos Profissionais <ArrowRight className="w-3 h-3" /></a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-mono text-textMuted/50">
        <p>© 2026 Polish Clean. Todos os direitos reservados.</p>

      </div>
    </footer>
  );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  return (
    <>
      <div className="noise-overlay fixed inset-0"></div>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <HomeServices />
      <Pricing />
      <Footer />
    </>
  );
}
