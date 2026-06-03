import { useState } from "react";
import logo from "@/assets/LogoSemBackGroundWEBP.webp";
import logoNav from "@/assets/LogoNav.webp";
import logoYbranco from "@/assets/LogoYbrancoWEBP.webp";
import ProjectsCarousel from "./ProjectsCarousel";

// ─── Dados estáticos ────────────────────────────────────────────────────────
const services = [
  {
    title: "Sites Institucionais",
    desc: "Sites rápidos, responsivos e otimizados para o Google. Sua marca com cara de gente grande.",
  },
  {
    title: "Softwares Locais",
    desc: "Sistemas sob medida para o seu comércio: caixa, estoque, agendamentos e muito mais.",
  },
  {
    title: "Landing Pages",
    desc: "Páginas de venda que convertem. Copy persuasiva e design que prende o olhar.",
  },
  {
    title: "UI / UX Design",
    desc: "Interfaces bonitas e fáceis de usar. Seu produto com experiência de aplicativo top.",
  },
  {
    title: "Posts para Instagram",
    desc: "Feed coeso, carrosséis que prendem atenção e stories estratégicos.",
  },
  {
    title: "Identidade Visual",
    desc: "Logos, paletas e tipografia que fazem sua marca ser inesquecível.",
  },
];

const steps = [
  {
    n: "1",
    t: "Conversa",
    d: "A gente entende seu negócio, seus clientes e objetivos numa call descontraída.",
  },
  {
    n: "2",
    t: "Proposta",
    d: "Você recebe um plano claro com prazos, valores e tudo que vai ser entregue.",
  },
  {
    n: "3",
    t: "Criação",
    d: "Mão na massa: design, código e revisões com você acompanhando cada passo.",
  },
  {
    n: "4",
    t: "Entrega",
    d: "Tudo no ar, com suporte e orientação para você continuar crescendo.",
  },
];

const plans = [
  {
    name: "Mudinha",
    price: "Solicite seu orçamento",
    sub: "Para quem está começando",
    features: [
      "Landing page",
      "Design responsivo",
      "Formulário de contato",
      "1 rodada de ajustes",
    ],
    highlight: false,
  },
  {
    name: "Eucalipto",
    price: "A Combinar",
    sub: "O queridinho da galera",
    features: [
      "Loja virtual ou Aplicativo Local",
      "Design personalizado",
      "Integração com WhatsApp",
      "SEO + Analytics",
      "5 dias de suporte",
    ],
    highlight: true,
  },
  {
    name: "Floresta",
    price: "Sob consulta",
    sub: "Software + Landing Page",
    features: [
      "Aplicativo local + Landing Page",
      "Integração com WhatsApp",
      "SEO + Analytics",
      "Tráfego pago",
      "Identidade visual",
      "10 dias de suporte",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Landing pages saem em 5–10 dias. Sites completos entre 2 e 4 semanas. Softwares variam conforme o escopo — combinamos tudo na proposta.",
  },
  {
    q: "Como funciona a consulta de valor?",
    a: "O valor é definido com base na complexidade e no escopo do projeto solicitado.",
  },
  {
    q: "Posso pedir mudanças depois?",
    a: "Sim! Sempre que precisar atualizar textos, imagens ou seções, fazemos as alterações para você.",
  },
  {
    q: "Vocês fazem só projetos grandes?",
    a: "Não. Atendemos desde o autônomo até comércios locais e startups. Tem plano para cada tamanho de sonho.",
  },
  {
    q: "E se eu não souber o que quero?",
    a: "Sem problema. Na conversa inicial te ajudamos a desenhar a ideia. Trazemos referências e direções para você escolher.",
  },
];

const marqueeItems = [
  "Social Media",
  "Softwares Locais",
  "Landing Pages",
  "UI/UX Design",
  "Posts Instagram",
  "Identidade Visual",
];

// ─── Componente principal ────────────────────────────────────────────────────
export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="grain min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-ink/10">
        <nav
          className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          <a
            href="#"
            className="flex items-center gap-2"
            aria-label="Koala Studio — Página inicial"
          >
            <img
              src={logoNav}
              alt=""
              aria-hidden="true"
              className="h-10 w-10"
              width={40}
              height={40}
              decoding="async"
              loading="eager"
            />
            <span className="font-display text-xl font-bold" aria-hidden="true">
              koala<span className="text-eucalyptus">.studio</span>
            </span>
          </a>

          <div
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            role="list"
          >
            <a
              href="#servicos"
              className="hover:text-eucalyptus transition"
              role="listitem"
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="hover:text-eucalyptus transition"
              role="listitem"
            >
              Processo
            </a>
            <a
              href="#planos"
              className="hover:text-eucalyptus transition"
              role="listitem"
            >
              Planos
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden md:inline-flex neo-btn bg-ink text-cream px-5 py-2 text-sm font-semibold"
            >
              Fale com a gente
            </a>
            <button
              className="md:hidden neo-btn bg-cream text-ink w-10 h-10 flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-ink/10 bg-background/95 backdrop-blur-md"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-4 text-sm font-medium">
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-eucalyptus transition py-1"
              >
                Serviços
              </a>
              <a
                href="#processo"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-eucalyptus transition py-1"
              >
                Processo
              </a>
              <a
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-eucalyptus transition py-1"
              >
                Planos
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="main-content">
        {/* HERO */}
        <section
          className="max-w-6xl mx-auto px-5 pt-16 pb-24 md:pt-24 md:pb-32"
          aria-labelledby="hero-heading"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                id="hero-heading"
                className="mt-6 text-5xl md:text-7xl font-bold leading-[0.95]"
              >
                Sites e softwares que{" "}
                <em className="italic text-eucalyptus not-italic">abraçam</em>{" "}
                seu negócio.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                A gente cria sites, softwares locais, landing pages, design
                UI/UX e posts para Instagram. Tudo bonito, fácil de mexer e
                pensado para você vender mais.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#planos"
                  className="neo-btn bg-ink text-cream px-7 py-3.5 font-semibold"
                >
                  Quero um orçamento →
                </a>
                <a
                  href="#servicos"
                  className="neo-btn bg-cream text-ink px-7 py-3.5 font-semibold"
                >
                  Ver serviços
                </a>
              </div>
            </div>

            {/*
              hero-visual: reserva altura mínima no mobile para evitar CLS.
              No desktop o grid 2 colunas já reserva espaço automaticamente.
              O div rotacionado usa position:absolute, então sem min-height no pai
              ele não contribui para o fluxo e causa layout shift.
            */}
            <div className="relative hero-visual" aria-hidden="true">
              <div className="absolute inset-0 bg-eucalyptus-soft rounded-[2.5rem] rotate-3 border-2 border-ink" />
              <div className="relative neo-card p-10 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Logo Koala Studio"
                  className="w-full max-w-sm animate-float"
                  width={512}
                  height={512}
                  fetchPriority="high"
                  decoding="sync"
                  loading="eager"
                />
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
        <section
          className="border-y-2 border-ink bg-ink text-cream py-5 overflow-hidden"
          aria-label="Serviços oferecidos"
          aria-hidden="true"
        >
          <div
            className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl"
            role="presentation"
          >
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex gap-12"
                aria-hidden={i > 0 ? "true" : undefined}
              >
                {marqueeItems.map((item) => (
                  <span key={item}>
                    {item} <span aria-hidden="true">·</span>{" "}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section
          id="servicos"
          className="max-w-6xl mx-auto px-5 py-24"
          aria-labelledby="services-heading"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">
              O que entregamos
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-4xl md:text-5xl font-bold"
            >
              Tudo que sua marca precisa para brilhar.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="neo-card p-7">
                <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROJETOS */}
        <ProjectsCarousel />

        {/* PROCESSO */}
        <section
          id="processo"
          className="bg-eucalyptus-soft border-y-2 border-ink py-24"
          aria-labelledby="process-heading"
        >
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider">
                Como funciona
              </p>
              <h2
                id="process-heading"
                className="mt-3 text-4xl md:text-5xl font-bold"
              >
                Simples como um abraço.
              </h2>
            </div>
            <ol className="mt-14 grid md:grid-cols-4 gap-6">
              {steps.map((s) => (
                <li key={s.n} className="neo-card bg-cream p-6">
                  <div
                    className="w-12 h-12 rounded-full bg-ink text-cream font-display text-2xl flex items-center justify-center"
                    aria-label={`Etapa ${s.n}`}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PLANOS */}
        <section
          id="planos"
          className="max-w-6xl mx-auto px-5 py-24"
          aria-labelledby="plans-heading"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">
              Planos
            </p>
            <h2
              id="plans-heading"
              className="mt-3 text-4xl md:text-5xl font-bold"
            >
              Escolha o tamanho do seu sonho.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Preços transparentes. Sem letras miúdas, sem surpresa no boleto.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`neo-card p-8 ${p.highlight ? "bg-ink text-cream" : "bg-card"}`}
              >
                {p.highlight && (
                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-eucalyptus text-cream text-xs font-bold border-2 border-cream">
                    ⭐ Mais escolhido
                  </span>
                )}
                <h3 className="font-display text-3xl font-bold">{p.name}</h3>
                <p
                  className={`text-sm ${p.highlight ? "text-cream/80" : "text-muted-foreground"}`}
                >
                  {p.sub}
                </p>
                <p className="mt-6 font-display text-5xl font-bold">
                  {p.price}
                </p>
                <ul
                  className="mt-6 space-y-3 text-sm"
                  aria-label={`Recursos do plano ${p.name}`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span
                        className={
                          p.highlight
                            ? "text-eucalyptus-soft"
                            : "text-eucalyptus"
                        }
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`neo-btn mt-8 inline-block w-full text-center py-3 font-semibold ${p.highlight ? "bg-cream text-ink" : "bg-ink text-cream"}`}
                  aria-label={`Contratar plano ${p.name}`}
                >
                  Quero esse
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="max-w-4xl mx-auto px-5 py-24"
          aria-labelledby="faq-heading"
        >
          <div className="text-center">
            <p className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">
              Dúvidas
            </p>
            <h2
              id="faq-heading"
              className="mt-3 text-4xl md:text-5xl font-bold"
            >
              Perguntas que sempre aparecem.
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="neo-card p-6 group">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg">
                  {f.q}
                  <span
                    className="text-2xl group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA / CONTATO */}
        <section
          id="contato"
          className="max-w-6xl mx-auto px-5 pb-24"
          aria-labelledby="cta-heading"
        >
          <div className="neo-card bg-ink text-cream p-10 md:p-16 text-center relative overflow-hidden">
            <img
              src={logoNav}
              alt=""
              aria-hidden="true"
              className="absolute -right-10 -bottom-10 w-64 opacity-10 invert"
              width={80}
              height={80}
              decoding="async"
              loading="lazy"
            />
            <h2
              id="cta-heading"
              className="font-display text-4xl md:text-6xl font-bold"
            >
              Bora dar um abraço no seu projeto?
            </h2>
            <p className="mt-4 text-cream/80 max-w-xl mx-auto text-lg">
              Conta o que você precisa. A gente responde em até 24h com ideias e
              um plano claro.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/16991080800"
                className="neo-btn bg-eucalyptus text-cream px-7 py-3.5 font-semibold inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Koala Studio pelo WhatsApp (abre nova aba)"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/ykoala.studio/"
                className="neo-btn bg-[#E1306C] hover:bg-[#C13584] text-cream px-7 py-3.5 font-semibold inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar o Instagram da Koala Studio"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 16a3.5 3.5 0 010-7.5z" />
                  <circle cx="17.5" cy="6.5" r="1.2" />
                </svg>
                Instagram
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ykoalastudio@gmail.com&su=Olá Koala Studio&body=Quero um orçamento"
                className="neo-btn bg-cream text-ink px-7 py-3.5 font-semibold inline-flex items-center gap-2"
                aria-label="Enviar e-mail para ykoalastudio@gmail.com"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                E-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-cream" aria-label="Rodapé">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <img
                  src={logoYbranco}
                  alt="Koala Studio"
                  className="h-9 w-9"
                  width={36}
                  height={36}
                  decoding="async"
                  loading="lazy"
                />
                <span className="font-display text-2xl font-bold text-white">
                  koala.studio
                </span>
              </div>
              <p className="mt-5 text-sm text-cream/80 leading-relaxed max-w-xs">
                Transformando ideias em experiências digitais que geram
                resultados reais para seu negócio.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  {
                    label: "Falar no WhatsApp",
                    href: "https://wa.me/5516991080800",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M20.5 11.9a8.5 8.5 0 0 1-12.9 7.2L3 21l1.9-4.4A8.5 8.5 0 1 1 20.5 11.9Z" />
                        <path d="M8.5 9.5c.2-1 .9-1.3 1.3-1l.8 1c.2.3.2.7 0 1l-.5.7c.6 1.3 1.6 2.3 2.9 2.9l.7-.5c.3-.2.7-.2 1 0l1 0.8c.3.4 0 1.1-1 1.3-.8.2-1.7.1-2.7-.3a8.5 8.5 0 0 1-4.2-4.2c-.4-1-.5-1.9-.3-2.7Z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram da Koala Studio",
                    href: "https://www.instagram.com/ykoala.studio/",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn da Koala Studio",
                    href: "#",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.84-2.05 3.78-2.05 4.05 0 4.8 2.66 4.8 6.13V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Enviar e-mail para Koala Studio",
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ykoalastudio@gmail.com&su=Olá Koala Studio&body=Quero um orçamento",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    ),
                  },
                  
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-cream/40 flex items-center justify-center text-white hover:bg-white hover:text-ink hover:border-white transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Links de serviços">
              <h2 className="font-bold text-white mb-5">Serviços</h2>
              <ul className="space-y-3 text-sm text-cream/80">
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Sites Profissionais
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Softwares
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Social Media
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Links da empresa">
              <h2 className="font-bold text-white mb-5">Empresa</h2>
              <ul className="space-y-3 text-sm text-cream/80">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="hover:text-white transition">
                    Portfólio
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Links de suporte">
              <h2 className="font-bold text-white mb-5">Suporte</h2>
              <ul className="space-y-3 text-sm text-cream/80">
                <li>
                  <a href="#contato" className="hover:text-white transition">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-cream/80">
            <p>
              © {new Date().getFullYear()} Ykoala.studio. Todos os direitos
              reservados.
            </p>
            <p>
              Feito <span className="text-white" aria-hidden="true"></span> em
              São Carlos, São Paulo, Brasil
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
