import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Tratamentos odontológicos oferecidos: clínica geral, estética dental, clareamento, implantes, ortodontia e odontopediatria.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tratamentos"
        title="Serviços odontológicos"
        subtitle="Soluções completas para a saúde e a beleza do seu sorriso, com tecnologia e cuidado em cada detalhe."
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-16">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] shadow-lg">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
                    0{i + 1}
                  </p>
                  <h2 className="text-3xl font-semibold">{s.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={18} className="text-gold" />
                    {s.short}
                  </p>
                  <div className="mt-6">
                    <Button href={whatsappLink(`Olá! Tenho interesse em ${s.title}. Poderia me passar mais informações?`)} external variant="outline">
                      Saber mais <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-surface-alt py-16 text-center">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Não encontrou o que procura?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Fale com a gente pelo WhatsApp. Teremos prazer em esclarecer suas
              dúvidas e indicar o melhor tratamento para você.
            </p>
            <div className="mt-8">
              <Button href={whatsappLink()} external>
                Falar no WhatsApp
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
