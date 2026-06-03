import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projEstetica from "@/assets/ImgElectromWEBP.webp";
import projPsicanalise from "@/assets/IMGPsicanaliseWEBP800x388.webp";
import projInstitutoMovimento from "./assets/LandingPageMovimentoWEBP.webp";
import projFaleFacil from "./assets/FaleFacilWEBP.webp";

const projects = [
  {
    title: "Mara Lúcia Psicanálise",
    category: "Landing Page",
    desc: "Página acolhedora e estratégica para atrair novos pacientes e transmitir confiança no primeiro contato.",
    image: projPsicanalise,
    imageAlt: "Landing page da psicanalista Mara Lúcia criada pela Koala Studio",
  },
  {
    title: "Instituto Movimento Landing Page",
    category: "Landing Page",
    desc: "Landing pages otimizadas para atrair alunos e pacientes para clínicas de fisioterapia, pilates e academias.",
    image: projInstitutoMovimento,
    imageAlt: "Landing page Instituto Movimento criada pela Koala Studio",
  },
  {
    title: "Software Fale Fácil",
    category: "Software",
    desc: "Sistema completo de gestão de reclamações para empresas que querem organizar e resolver feedbacks com eficiência.",
    image: projFaleFacil,
    imageAlt: "Software Fale Fácil desenvolvido pela Koala Studio",
  },
  {
    title: "Software de Gerenciamento de Estoque",
    category: "Software",
    desc: "Sistema completo com controle de estoque, emissão de recibos e histórico de vendas.",
    image: projEstetica,
    imageAlt: "Interface do software de gerenciamento de estoque desenvolvido pela Koala Studio",
  },
];

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    watchDrag: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="projetos"
      className="max-w-6xl mx-auto py-24"
      aria-labelledby="projects-heading"
    >
      {/* Header com padding lateral */}
      <div className="px-5 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-eucalyptus uppercase tracking-wider">Portfólio</p>
          <h2 id="projects-heading" className="mt-3 text-4xl md:text-5xl font-bold">
            Projetos que já saíram do forno.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Uma amostra do que a gente já abraçou por aí.
          </p>
        </div>

        <div className="flex gap-3" role="group" aria-label="Controles do carrossel">
          <button
            type="button"
            aria-label="Projeto anterior"
            onClick={scrollPrev}
            className="neo-btn bg-cream text-ink w-12 h-12 flex items-center justify-center text-2xl font-bold"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            onClick={scrollNext}
            className="neo-btn bg-ink text-cream w-12 h-12 flex items-center justify-center text-2xl font-bold"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Carrossel: padding-left pra alinhar com o header, overflow visível nas laterais */}
      <div
        className="overflow-hidden mt-12 pl-5"
        ref={emblaRef}
        aria-label="Carrossel de projetos"
        role="region"
      >
        <div className="flex gap-5">
          {projects.map((p, index) => (
            <div
              key={p.title}
              className="flex-none w-[82vw] sm:w-[55vw] md:w-[44%] lg:w-[36%] max-w-sm"
            >
              <article className="neo-card overflow-hidden bg-cream h-full">
                <div className="h-56 border-b-2 border-ink overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="w-full h-full object-cover"
                    width={600}
                    height={224}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-eucalyptus-soft border-2 border-ink">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
