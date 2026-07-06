import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Gem,
  Star,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services, testimonials, posts, formatDate } from "@/lib/content";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Cada paciente é único. Escutamos, explicamos e cuidamos com carinho.",
  },
  {
    icon: Gem,
    title: "Estética natural",
    text: "Resultados harmônicos que respeitam suas características.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e tecnologia",
    text: "Protocolos rigorosos e equipamentos modernos em cada procedimento.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-alt/60 via-background to-background" />
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              <span className="gold-rule" /> {siteConfig.role}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Um sorriso cuidado <br />
              com <span className="text-gold">arte e dedicação</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {siteConfig.tagline} Na clínica da Dra. {siteConfig.name}, você
              encontra acolhimento, técnica e um atendimento pensado em cada
              detalhe.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={whatsappLink()} external>
                Agendar avaliação <ArrowRight size={18} />
              </Button>
              <Button href="/servicos" variant="outline">
                Ver tratamentos
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted">
              <span className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </span>
              Pacientes satisfeitos e sorrisos transformados
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                alt="Dra. Gabriela Carli em atendimento na clínica"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-border bg-surface px-6 py-4 shadow-lg sm:block">
              <p className="font-serif text-3xl font-semibold text-gold">+10</p>
              <p className="text-xs text-muted">anos cuidando de sorrisos</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-8">
        <Container className="grid gap-6 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft/40 text-gold-hover">
                  <h.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Tratamentos
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Cuidado completo para o seu sorriso
            </h2>
            <p className="mt-4 text-muted">
              Do preventivo ao estético, oferecemos soluções sob medida para
              cada fase da sua vida.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/servicos" variant="ghost">
              Conhecer todos os tratamentos <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-surface-alt py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                alt="Ambiente da clínica odontológica"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Sobre
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Dra. Gabriela Carli
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Cirurgiã-dentista dedicada a unir técnica, sensibilidade e estética.
              Acredita que um bom tratamento começa pela escuta e pela confiança —
              por isso, cada plano é construído junto com o paciente.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Em constante atualização, traz para a clínica o que há de mais
              moderno em odontologia, sempre com um toque humano e acolhedor.
            </p>
            <div className="mt-7">
              <Button href="/sobre" variant="outline">
                Conheça minha história
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Depoimentos
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Quem confia, recomenda
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
                  <span className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </span>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </span>
                    <span className="text-sm font-medium">{t.name}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-surface-alt py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
                Dicas
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Do nosso blog
              </h2>
            </div>
            <Button href="/blog" variant="ghost">
              Ver todos os artigos <ArrowRight size={16} />
            </Button>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-xs text-muted">
                      {formatDate(p.date)} · {p.readingTime}
                    </span>
                    <span className="mt-2 font-serif text-lg font-semibold leading-snug group-hover:text-gold-hover">
                      {p.title}
                    </span>
                    <span className="mt-2 line-clamp-2 text-sm text-muted">
                      {p.excerpt}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2b2620] to-[#3d362b] px-8 py-14 text-center text-white sm:px-16">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-2xl" />
              <h2 className="relative text-3xl font-semibold sm:text-4xl">
                Pronto para transformar seu sorriso?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/80">
                Agende sua avaliação e dê o primeiro passo para um sorriso mais
                saudável e bonito. Será um prazer receber você.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <Button href={whatsappLink()} external>
                  Agendar pelo WhatsApp <ArrowRight size={18} />
                </Button>
                <Button
                  href="/contato"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white hover:text-foreground"
                >
                  Ver contato e localização
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
