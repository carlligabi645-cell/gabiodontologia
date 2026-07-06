/**
 * Configuração central do site — Dra. Gabriela Carli.
 *
 * ⚠️ FASE 1: os dados abaixo são PLACEHOLDERS. Troque pelos dados reais
 * (WhatsApp, endereço, redes sociais) editando apenas este arquivo.
 */

export const siteConfig = {
  name: "Gabriela Carli",
  title: "Dra. Gabriela Carli — Odontologia",
  role: "Cirurgiã-Dentista",
  cro: "CRO-XX 00000", // TODO: número real do CRO
  tagline: "Odontologia de excelência com um cuidado que você sente.",
  description:
    "Clínica odontológica da Dra. Gabriela Carli. Tratamentos estéticos, clínicos e preventivos com atendimento humanizado e tecnologia de ponta.",
  url: "https://gabrielacarli.com.br", // TODO: domínio real

  // Contato — PLACEHOLDERS
  whatsapp: "5511999999999", // formato internacional, sem símbolos
  phoneDisplay: "(11) 99999-9999",
  email: "contato@gabrielacarli.com.br",

  address: {
    street: "Av. Exemplo, 1234 — Sala 56",
    district: "Jardim Modelo",
    city: "São Paulo",
    state: "SP",
    zip: "01234-567",
    // Embed de mapa genérico (troque pelo endereço real depois)
    mapsQuery: "Avenida+Paulista+São+Paulo",
  },

  hours: [
    { day: "Segunda a Sexta", time: "09h00 — 19h00" },
    { day: "Sábado", time: "09h00 — 13h00" },
    { day: "Domingo", time: "Fechado" },
  ],

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
} as const;

/** Monta um link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  const text =
    message ??
    `Olá! Gostaria de agendar uma avaliação com a Dra. ${siteConfig.name}.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Dicas" },
  { href: "/contato", label: "Contato" },
] as const;
