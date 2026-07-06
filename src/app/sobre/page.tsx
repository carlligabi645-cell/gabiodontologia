import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Heart, Microscope, Award } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Dra. Gabriela Carli, sua formação, filosofia de atendimento e paixão pela odontologia.",
};

const values = [
  {
    icon: Heart,
    title: "Cuidado humano",
    text: "Atendimento acolhedor, sem pressa, respeitando o tempo de cada paciente.",
  },
  {
    icon: Microscope,
    title: "Precisão técnica",
    text: "Diagnóstico detalhado e planejamento minucioso em cada procedimento.",
  },
  {
    icon: GraduationCap,
    title: "Atualização constante",
    text: "Formação continuada para oferecer o que há de mais moderno.",
  },
  {
    icon: Award,
    title: "Compromisso",
    text: "Transparência e ética do primeiro contato ao acompanhamento pós-tratamento.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Dra. Gabriela Carli"
        subtitle="Uma odontologia que une ciência, estética e sensibilidade."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80"
                alt="Retrato da Dra. Gabriela Carli"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="gold-rule mb-6" />
            <p className="text-lg leading-relaxed text-foreground/90">
              Sou a Dra. Gabriela Carli, cirurgiã-dentista apaixonada por
              devolver às pessoas o prazer de sorrir com confiança.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Ao longo da minha trajetória, aprendi que a melhor odontologia
              nasce da relação de confiança com o paciente. Por isso, dedico
              tempo a ouvir, entender expectativas e explicar cada etapa do
              tratamento com clareza.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Combino técnica apurada, materiais de alta qualidade e um olhar
              atento à estética natural, sempre em um ambiente pensado para o seu
              conforto. Meu objetivo é que você se sinta cuidado de verdade.
            </p>
            <div className="mt-8">
              <Button href={whatsappLink()} external>
                Agendar uma conversa
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Minha filosofia de atendimento
            </h2>
            <p className="mt-4 text-muted">
              Princípios que guiam cada consulta na clínica.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.08}>
                <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft/40 text-gold-hover">
                    <v.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 text-center">
        <Container>
          <Reveal>
            <p className="text-sm text-muted">{siteConfig.cro}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
