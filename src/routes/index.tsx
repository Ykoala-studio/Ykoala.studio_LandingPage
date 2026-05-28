import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-koala.png";

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
      <footer className="border-t-2 border-ink bg-cream">
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8 w-8" />
            <span className="font-display font-bold">koala.studio</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Koala Studio · Feito com 💚 e muito eucalipto.</p>
          <div className="flex gap-4 text-sm font-medium">
            <a href="#" className="hover:text-eucalyptus">Instagram</a>
            <a href="#" className="hover:text-eucalyptus">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
