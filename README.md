# Site — Dra. Gabriela Carli · Odontologia

Site institucional da clínica odontológica da Dra. Gabriela Carli.
Construído com **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** e **Framer Motion**.

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
pnpm build   # build de produção
pnpm start   # servir o build
pnpm lint    # verificação de lint
```

## Estrutura

```
src/
  app/            → páginas (App Router): /, /sobre, /servicos, /blog, /blog/[slug], /contato
  components/     → Header, Footer, WhatsAppFloat, Button, ServiceCard, ContactForm, etc.
  lib/
    site-config.ts → ⭐ dados de contato/endereço/horários/redes (EDITE AQUI)
    content.ts     → serviços, depoimentos e posts do blog (textos e imagens)
    utils.ts       → utilitários
```

## Como editar o conteúdo (Fase 1 → dados reais)

Nesta primeira fase os textos e imagens são **exemplos**. Para colocar os dados reais:

1. **Contato, WhatsApp, endereço, horários e redes sociais:**
   edite [`src/lib/site-config.ts`](src/lib/site-config.ts). Os campos marcados com `TODO`
   (WhatsApp, CRO, domínio) precisam dos valores reais.

2. **Serviços, depoimentos e posts do blog:**
   edite [`src/lib/content.ts`](src/lib/content.ts).

3. **Imagens:**
   atualmente usam URLs do Unsplash (placeholders). Para usar fotos próprias, coloque os
   arquivos em `public/` e troque as URLs (ex.: `/fotos/gabriela.jpg`). Domínios remotos
   permitidos ficam em [`next.config.ts`](next.config.ts).

> WhatsApp: o número fica em `siteConfig.whatsapp`, no formato internacional sem símbolos
> (ex.: `5511999999999`). O botão flutuante e todos os CTAs usam esse número.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — basta confirmar (gerenciador **pnpm**).
4. Após o deploy, configure o domínio próprio em *Settings → Domains* e atualize
   `siteConfig.url` em `site-config.ts`.
