import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a clínica da Dra. Gabriela Carli. Endereço, telefone, horários e agendamento pelo WhatsApp.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar"
        subtitle="Agende sua avaliação ou tire suas dúvidas. Estamos prontos para receber você."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold">Informações</h2>
            <span className="gold-rule mt-3" />

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft/40 text-gold-hover">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-sm text-muted">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.district} — {siteConfig.address.city}/
                    {siteConfig.address.state}
                    <br />
                    CEP {siteConfig.address.zip}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft/40 text-gold-hover">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-sm text-muted">{siteConfig.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft/40 text-gold-hover">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-sm text-muted">{siteConfig.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft/40 text-gold-hover">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="font-medium">Horários</p>
                  <ul className="text-sm text-muted">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day}>
                        {h.day}: {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle size={18} /> Chamar no WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="text-2xl font-semibold">Envie uma mensagem</h2>
              <p className="mt-1 text-sm text-muted">
                Preencha e conclua a conversa pelo WhatsApp.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-sm">
              <iframe
                title="Localização da clínica"
                src={`https://www.google.com/maps?q=${siteConfig.address.mapsQuery}&output=embed`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
