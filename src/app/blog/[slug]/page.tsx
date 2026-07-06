import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { posts, getPost, formatDate } from "@/lib/content";
import { whatsappLink } from "@/lib/site-config";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.cover], title: post.title },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold-hover"
        >
          <ArrowLeft size={16} /> Voltar para o blog
        </Link>

        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-gold">
          {formatDate(post.date)} · {post.readingTime} de leitura
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
          {post.title}
        </h1>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[2rem] shadow-lg">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="prose-custom mt-10 flex flex-col gap-5 text-lg leading-relaxed text-foreground/90">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-8 text-center">
          <h2 className="text-2xl font-semibold">Ficou com alguma dúvida?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Agende uma avaliação com a Dra. Gabriela Carli e cuide do seu sorriso
            com quem entende.
          </p>
          <div className="mt-6">
            <Button href={whatsappLink()} external>
              Agendar avaliação
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
