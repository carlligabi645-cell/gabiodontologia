/**
 * Conteúdo do site (FASE 1 — textos e imagens de exemplo).
 * Edite livremente. As imagens usam Unsplash como placeholder.
 */

export type Service = {
  slug: string;
  title: string;
  icon: string; // nome de ícone lucide (ver iconMap em ServiceCard)
  short: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "clinico-geral",
    title: "Clínica Geral",
    icon: "Stethoscope",
    short: "Cuidado completo e preventivo para toda a família.",
    description:
      "Consultas de rotina, limpeza, restaurações e prevenção. A base para um sorriso saudável ao longo da vida, com diagnóstico atento e plano de tratamento personalizado.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "estetica-dental",
    title: "Estética Dental",
    icon: "Sparkles",
    short: "Harmonia e beleza para o seu sorriso.",
    description:
      "Lentes de contato dental, facetas e restaurações estéticas que respeitam suas características naturais, devolvendo confiança ao sorrir.",
    image:
      "https://images.unsplash.com/photo-1595003500447-88a4e0f28ecb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "clareamento",
    title: "Clareamento",
    icon: "Sun",
    short: "Dentes mais brancos com segurança.",
    description:
      "Clareamento a laser no consultório ou supervisionado em casa, com protocolos seguros que preservam o esmalte e realçam o brilho do seu sorriso.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "implantes",
    title: "Implantes",
    icon: "Anchor",
    short: "Reabilitação com estabilidade e naturalidade.",
    description:
      "Reposição de dentes perdidos com implantes de titânio e coroas sob medida, restaurando função mastigatória e estética com resultados duradouros.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ortodontia",
    title: "Ortodontia",
    icon: "AlignHorizontalDistributeCenter",
    short: "Alinhamento com aparelhos e alinhadores.",
    description:
      "Aparelhos convencionais, estéticos e alinhadores transparentes para corrigir o posicionamento dos dentes e o encaixe da mordida.",
    image:
      "https://images.unsplash.com/photo-1620053112354-13bd3d2eb6f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "endodontia",
    title: "Endodontia",
    icon: "Activity",
    short: "Tratamento de canal com precisão e conforto.",
    description:
      "Tratamento de canal para eliminar a dor e preservar o dente comprometido por cárie profunda ou infecção, com técnicas modernas que tornam o procedimento mais rápido e confortável.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "proteses",
    title: "Próteses",
    icon: "Smile",
    short: "Reabilitação estética e funcional do sorriso.",
    description:
      "Próteses fixas e removíveis, coroas e facetas que devolvem função mastigatória, estética e naturalidade ao sorriso, feitas sob medida para cada paciente.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Testimonial = {
  name: string;
  text: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Souza",
    text: "A Dra. Gabriela transformou meu sorriso com muito cuidado e atenção. Me senti acolhida em cada consulta. Recomendo de olhos fechados!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rafael Lima",
    text: "Profissional impecável. Explicou todo o tratamento com calma e o resultado ficou perfeito. Consultório lindo e acolhedor.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Camila Rocha",
    text: "Sempre tive medo de dentista, mas aqui foi diferente. Atendimento humano e delicado do começo ao fim. Virei cliente fiel!",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  cover: string;
  content: string[]; // parágrafos
};

export const posts: Post[] = [
  {
    slug: "importancia-da-limpeza-regular",
    title: "A importância da limpeza dental regular",
    excerpt:
      "Entenda por que visitar o dentista a cada seis meses faz toda a diferença para a saúde do seu sorriso.",
    date: "2026-05-20",
    readingTime: "4 min",
    cover:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A limpeza profissional remove o tártaro e a placa bacteriana que a escovação em casa não alcança. Mesmo com uma boa rotina de higiene, áreas de difícil acesso acumulam resíduos que podem levar a cáries e problemas na gengiva.",
      "Recomenda-se realizar a profilaxia a cada seis meses. Nesse intervalo, o dentista também consegue identificar precocemente sinais de doenças, tornando o tratamento mais simples e confortável.",
      "Além da saúde, a limpeza deixa os dentes com aparência mais clara e o hálito mais fresco. É um cuidado simples que previne complicações maiores no futuro.",
    ],
  },
  {
    slug: "clareamento-dental-mitos-e-verdades",
    title: "Clareamento dental: mitos e verdades",
    excerpt:
      "Será que clareamento enfraquece os dentes? Separamos as principais dúvidas sobre o procedimento.",
    date: "2026-06-10",
    readingTime: "5 min",
    cover:
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Um dos mitos mais comuns é o de que o clareamento danifica o esmalte. Quando realizado com acompanhamento profissional e produtos adequados, o procedimento é seguro e não enfraquece os dentes.",
      "A sensibilidade temporária pode acontecer, mas costuma desaparecer em poucos dias. Produtos e géis dessensibilizantes ajudam a manter o conforto durante o tratamento.",
      "Vale lembrar: clareamento não funciona em restaurações e coroas. Por isso, é essencial uma avaliação prévia para planejar o melhor resultado para o seu caso.",
    ],
  },
  {
    slug: "como-cuidar-do-sorriso-das-criancas",
    title: "Como cuidar do sorriso das crianças",
    excerpt:
      "Hábitos simples desde cedo garantem dentes saudáveis na vida adulta. Confira as dicas.",
    date: "2026-06-28",
    readingTime: "3 min",
    cover:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A higiene bucal começa antes mesmo do primeiro dente, com a limpeza da gengiva usando uma gaze úmida. Assim que os dentinhos aparecem, uma escova macia e pasta com flúor na medida certa já podem ser introduzidas.",
      "Transformar a escovação em um momento divertido ajuda a criança a criar o hábito. Escolher uma escova colorida e escovar junto com ela faz toda a diferença.",
      "A primeira visita ao dentista deve acontecer por volta de um ano de idade. O acompanhamento precoce previne cáries e cria uma relação tranquila com o cuidado bucal.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
