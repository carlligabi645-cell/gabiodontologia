import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { posts, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dicas & Blog",
  description:
    "Dicas de saúde bucal, cuidados com o sorriso e novidades da odontologia pela Dra. Gabriela Carli.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dicas"
        title="Blog"
        subtitle="Conteúdos para você cuidar melhor do seu sorriso no dia a dia."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
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
                    <span className="mt-2 font-serif text-xl font-semibold leading-snug group-hover:text-gold-hover">
                      {p.title}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {p.excerpt}
                    </span>
                    <span className="mt-4 text-sm font-medium text-gold-hover">
                      Ler artigo →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
