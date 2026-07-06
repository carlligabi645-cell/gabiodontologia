import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-surface-alt/60">
      <Container className="py-14 sm:py-20 text-center">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
