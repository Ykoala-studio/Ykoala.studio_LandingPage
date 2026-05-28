import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo-koala.png";
import projPadaria from "@/assets/proj-padaria.jpg";
import projEstetica from "@/assets/proj-estetica.jpg";
import projMercado from "@/assets/proj-mercado.jpg";
import projAcademia from "@/assets/proj-academia.jpg";
import projCafe from "@/assets/proj-cafe.jpg";
import projPetshop from "@/assets/proj-petshop.jpg";

const projects = [
  { title: "Padaria Pão Dourado", category: "Site Institucional", desc: "Site responsivo com cardápio digital e integração WhatsApp.", image: projPadaria },
  { title: "Studio Bella Estética", category: "Landing Page", desc: "LP de alta conversão com agendamento online integrado.", image: projEstetica },
  { title: "Mercadinho do Zé", category: "Software Local", desc: "Sistema de caixa, estoque e controle de fiado sob medida.", image: projMercado },
  { title: "Academia Movimento", category: "UI/UX + App", desc: "App de treinos com design moderno e fluxo simples.", image: projAcademia },
  { title: "Café Aroma Verde", category: "Identidade + Posts", desc: "Branding completo e pack de 30 posts pro Instagram.", image: projCafe },
  { title: "Pet Shop Patinhas", category: "Site + E-commerce", desc: "Loja online com agendamento de banho e tosa.", image: projPetshop },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koala Studio — Sites, Software & Design que abraçam seu negócio" },
      { name: "description", content: "Criamos sites, softwares locais, landing pages, UI/UX e posts para Instagram. Design bonito, código limpo e entregas rápidas." },
      { property: "og:title", content: "Koala Studio — Sites, Software & Design" },
      { property: "og:description", content: "Sites, softwares locais, landing pages, UI/UX e posts para Instagram." },
    ],
  }),
  component: Landing,
});

const services = [
  { tag: "01", title: "Sites Institucionais", desc: "Sites rápidos, responsivos e otimizados pra Google. Sua marca com cara de gente grande.", icon: "🌐" },
  { tag: "02", title: "Softwares Locais", desc: "Sistemas sob medida pro seu comércio: caixa, estoque, agendamentos e mais.", icon: "💻" },
  { tag: "03", title: "Landing Pages", desc: "Páginas de venda que convertem. Copy persuasiva + design que segura o olho.", icon: "🚀" },
  { tag: "04", title: "UI / UX Design", desc: "Interfaces bonitas e fáceis de usar. Seu produto com experiência de aplicativo top.", icon: "🎨" },
  { tag: "05", title: "Posts pro Instagram", desc: "Feed coeso, carrosséis que prendem atenção e stories estratégicos.", icon: "📱" },
  { tag: "06", title: "Identidade Visual", desc: "Logos, paletas e tipografia que fazem sua marca ser inesquecível.", icon: "✨" },
];

const steps = [
  { n: "1", t: "Conversa", d: "A gente entende seu negócio, seus clientes e seus objetivos numa call descontraída." },
  { n: "2", t: "Proposta", d: "Você recebe um plano claro com prazos, valores e tudo que vai entregar." },
  { n: "3", t: "Criação", d: "Mão na massa: design, código e revisões com você acompanhando cada passo." },
  { n: "4", t: "Entrega", d: "Tudo no ar, com suporte e orientação pra você seguir crescendo." },
];

const plans = [
  {
    name: "Mudinha",
    price: "R$ 890",
    sub: "pra quem tá começando",
    features: ["Landing page de 1 seção", "Design responsivo", "Formulário de contato", "1 rodada de ajustes"],
    highlight: false,
  },
  {
    name: "Eucalipto",
    price: "R$ 2.490",
    sub: "o queridinho da galera",
    features: ["Site completo até 5 páginas", "UI/UX personalizado", "Integração com WhatsApp", "SEO básico + Analytics", "3 rodadas de ajustes", "30 dias de suporte"],
    highlight: true,
  },
  {
    name: "Floresta",
    price: "Sob consulta",
    sub: "software + presença completa",
    features: ["Software local sob medida", "Site institucional", "Identidade visual", "Pack de 12 posts Instagram", "Suporte estendido"],
    highlight: false,
  },
];

const faqs = [
  { q: "Quanto tempo leva pra ficar pronto?", a: "Landing pages saem em 5–10 dias. Sites completos entre 2 e 4 semanas. Softwares variam conforme o escopo — combinamos tudo na proposta." },
  { q: "Eu consigo mexer no site depois?", a: "Sim! Entregamos com painel simples e te mostramos como editar textos, imagens e seções. Sem letrinha miúda." },
  { q: "Vocês fazem só projetos grandes?", a: "Não. A gente atende desde o autônomo até comércios locais e startups. Tem plano pra cada tamanho de sonho." },
  { q: "E se eu não souber o que quero?", a: "Tranquilo. Na conversa inicial te ajudamos a desenhar a ideia. Trazemos referências e direções pra você escolher." },
];

function Landing() {
  return (
    <div className="grain min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-ink/10">
        <nav className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Koala Studio" className="h-10 w-10" />
            <span className="font-display text-xl font-bold">koala<span className="text-eucalyptus">.studio</span></span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#servicos" className="hover:text-eucalyptus transition">Serviços</a>
            <a href="#processo" className="hover:text-eucalyptus transition">Processo</a>
            <a href="#planos" className="hover:text-eucalyptus transition">Planos</a>
            <a href="#faq" className="hover:text-eucalyptus transition">FAQ</a>
          </div>
          <a href="#contato" className="neo-btn bg-ink text-cream px-5 py-2 text-sm font-semibold">
            Fala com a gente
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eucalyptus-soft border-2 border-ink text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-eucalyptus animate-pulse" />
              Aceitando novos projetos
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[0.95]">
              Sites e softwares que <span className="italic text-eucalyptus">abraçam</span> seu negócio.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              A gente cria sites, softwares locais, landing pages, design UI/UX e posts pra Instagram. Tudo bonito, tudo fácil de mexer, tudo pensado pra você vender mais.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#planos" className="neo-btn bg-ink text-cream px-7 py-3.5 font-semibold">
                Quero um orçamento →
              </a>
              <a href="#servicos" className="neo-btn bg-cream text-ink px-7 py-3.5 font-semibold">
                Ver serviços
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><strong className="text-ink text-2xl font-display">+80</strong><br/>projetos entregues</div>
              <div className="w-px h-10 bg-ink/20" />
              <div><strong className="text-ink text-2xl font-display">5★</strong><br/>avaliações reais</div>
              <div className="w-px h-10 bg-ink/20" />
              <div><strong className="text-ink text-2xl font-display">7d</strong><br/>prazo médio LP</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-eucalyptus-soft rounded-[2.5rem] rotate-3 border-2 border-ink" />
            <div className="relative neo-card p-10 flex items-center justify-center">
              <img src={logo} alt="Koala abraçando Y" className="w-full max-w-sm animate-float" />
            </div>
            <div className="absolute -bottom-6 -left-6 neo-card px-4 py-3 bg-cream rotate-[-6deg]">
              <p className="text-xs font-semibold">💚 Feito com carinho</p>
            </div>
            <div className="absolute -top-4 -right-4 neo-card px-4 py-3 bg-eucalyptus text-cream rotate-[8deg]">
              <p className="text-xs font-semibold">Design + Código</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y-2 border-ink bg-ink text-cream py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>🐨 Sites Institucionais</span><span>·</span>
              <span>Softwares Locais</span><span>·</span>
              <span>Landing Pages</span><span>·</span>
              <span>UI/UX Design</span><span>·</span>
              <span>Posts Instagram</span><span>·</span>
              <span>Identidade Visual</span><span>·</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-6xl mx-auto px-5 py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">O que entregamos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Tudo que sua marca precisa pra brilhar.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Seis serviços, uma estética só: bonita, funcional e fácil de manter.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.tag} className="neo-card p-7">
              <div className="flex items-start justify-between">
                <span className="text-4xl">{s.icon}</span>
                <span className="text-xs font-mono text-muted-foreground">{s.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROJETOS / CARROSSEL */}
      <ProjectsCarousel />



      {/* PROCESSO */}
      <section id="processo" className="bg-eucalyptus-soft border-y-2 border-ink py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider">Como funciona</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Simples como um abraço.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="neo-card bg-cream p-6">
                <div className="w-12 h-12 rounded-full bg-ink text-cream font-display text-2xl flex items-center justify-center">{s.n}</div>
                <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="max-w-6xl mx-auto px-5 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">Planos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Escolha o tamanho do seu sonho.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Preços transparentes. Sem letrinha miúda, sem surpresa no boleto.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`neo-card p-8 ${p.highlight ? "bg-ink text-cream" : "bg-card"}`}>
              {p.highlight && (
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-eucalyptus text-cream text-xs font-bold border-2 border-cream">
                  ⭐ Mais escolhido
                </span>
              )}
              <h3 className="font-display text-3xl font-bold">{p.name}</h3>
              <p className={`text-sm ${p.highlight ? "text-cream/70" : "text-muted-foreground"}`}>{p.sub}</p>
              <p className="mt-6 font-display text-5xl font-bold">{p.price}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className={p.highlight ? "text-eucalyptus-soft" : "text-eucalyptus"}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contato" className={`neo-btn mt-8 inline-block w-full text-center py-3 font-semibold ${p.highlight ? "bg-cream text-ink" : "bg-ink text-cream"}`}>
                Quero esse
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-5 py-24">
        <div className="text-center">
          <span className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">Dúvidas</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Perguntinhas que sempre rolam.</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="neo-card p-6 group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg">
                {f.q}
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="max-w-6xl mx-auto px-5 pb-24">
        <div className="neo-card bg-ink text-cream p-10 md:p-16 text-center relative overflow-hidden">
          <img src={logo} alt="" className="absolute -right-10 -bottom-10 w-64 opacity-10 invert" />
          <h2 className="font-display text-4xl md:text-6xl font-bold">Bora dar um abraço no seu projeto?</h2>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto text-lg">
            Conta o que você precisa. A gente responde em até 24h com ideias e um plano claro.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/5500000000000" className="neo-btn bg-eucalyptus text-cream px-7 py-3.5 font-semibold">
              💬 WhatsApp
            </a>
            <a href="mailto:ola@koala.studio" className="neo-btn bg-cream text-ink px-7 py-3.5 font-semibold">
              ✉ ola@koala.studio
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <img src={logo} alt="KtiptoY" className="h-9 w-9" />
                <span className="font-display text-2xl font-bold text-yellow-400">KtiptoY</span>
              </div>
              <p className="mt-5 text-sm text-cream/60 leading-relaxed max-w-xs">
                Transformando ideias em experiências digitais que geram resultados reais para seu negócio.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { label: "Instagram", href: "#", icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                  )},
                  { label: "LinkedIn", href: "#", icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.84-2.05 3.78-2.05 4.05 0 4.8 2.66 4.8 6.13V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9z"/></svg>
                  )},
                  { label: "Email", href: "mailto:ola@ktiptoy.com", icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                  )},
                ].map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-ink hover:border-yellow-400 transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="font-bold text-yellow-400 mb-5">Serviços</h4>
              <ul className="space-y-3 text-sm text-cream/70">
                <li><a href="#servicos" className="hover:text-yellow-400 transition">Sites Profissionais</a></li>
                <li><a href="#servicos" className="hover:text-yellow-400 transition">Landing Pages</a></li>
                <li><a href="#servicos" className="hover:text-yellow-400 transition">Softwares</a></li>
                <li><a href="#servicos" className="hover:text-yellow-400 transition">UI/UX Design</a></li>
                <li><a href="#servicos" className="hover:text-yellow-400 transition">Social Media</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-bold text-yellow-400 mb-5">Empresa</h4>
              <ul className="space-y-3 text-sm text-cream/70">
                <li><a href="#" className="hover:text-yellow-400 transition">Sobre Nós</a></li>
                <li><a href="#projetos" className="hover:text-yellow-400 transition">Portfólio</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Depoimentos</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="font-bold text-yellow-400 mb-5">Suporte</h4>
              <ul className="space-y-3 text-sm text-cream/70">
                <li><a href="#contato" className="hover:text-yellow-400 transition">Contato</a></li>
                <li><a href="#faq" className="hover:text-yellow-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-cream/60">
            <p>© {new Date().getFullYear()} KtiptoY. Todos os direitos reservados.</p>
            <p>Feito com <span className="text-yellow-400">♥</span> em São Paulo, Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  };

  const scrollBy = (dir: 1 | -1) => {
    const next = Math.min(projects.length - 1, Math.max(0, active + dir));
    setActive(next);
    scrollToIndex(next);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let best = Infinity;
      children.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cCenter - center);
        if (d < best) { best = d; nearest = i; }
      });
      setActive(nearest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="projetos" className="max-w-6xl mx-auto px-5 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">Portfólio</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Projetos que já saíram do forno.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Uma amostra do que a gente já abraçou por aí.</p>
        </div>
        <div className="flex gap-3">
          <button
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="neo-btn bg-cream text-ink w-12 h-12 flex items-center justify-center text-2xl font-bold"
          >
            ←
          </button>
          <button
            aria-label="Próximo"
            onClick={() => scrollBy(1)}
            className="neo-btn bg-ink text-cream w-12 h-12 flex items-center justify-center text-2xl font-bold"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        style={{ scrollPaddingLeft: "20px", scrollPaddingRight: "20px" }}
        className="mt-12 flex gap-6 overflow-x-auto overflow-y-visible snap-x snap-mandatory pt-3 pb-10 -mx-5 px-5 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <article
            key={p.title}
            className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[38%] neo-card overflow-hidden bg-cream"
          >
            <div className={`h-56 bg-gradient-to-br ${p.color} border-b-2 border-ink flex items-center justify-center text-7xl`}>
              {p.emoji}
            </div>
            <div className="p-6">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-eucalyptus-soft border-2 border-ink">
                {p.category}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>


      <div className="mt-2 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para projeto ${i + 1}`}
            onClick={() => { setActive(i); scrollToIndex(i); }}
            className={`h-2 rounded-full border-2 border-ink transition-all ${active === i ? "w-8 bg-eucalyptus" : "w-2 bg-cream"}`}
          />
        ))}
      </div>
    </section>
  );
}

