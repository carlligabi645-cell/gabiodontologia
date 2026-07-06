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
  cro: "CRO-MG 57351",
  tagline: "Odontologia de excelência com um cuidado que você sente.",
  description:
    "Clínica odontológica da Dra. Gabriela Carli. Tratamentos estéticos, clínicos e preventivos com atendimento humanizado e tecnologia de ponta.",
  url: "https://gabiodontologia.com.br",

  // Contato — PLACEHOLDERS
  whatsapp: "5535992453191", // formato internacional, sem símbolos
  phoneDisplay: "(35) 99245-3191",
  email: "contato@gabiodontologia.com.br",

  address: {
    street: "Rua Dr. Manoel Rodrigues, 5",
    district: "", // TODO: bairro (opcional)
    city: "Varginha",
    state: "MG",
    zip: "37006-140",
    mapsQuery: "Rua+Dr.+Manoel+Rodrigues,+5+-+Varginha+-+MG+37006-140",
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
