"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold text-foreground">
            Gabriela Carli
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">
            Odontologia
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors hover:text-gold-hover",
                  active ? "text-gold-hover" : "text-foreground/80"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-hover md:inline-flex"
        >
          Agendar consulta
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-foreground/90 hover:bg-surface-alt hover:text-gold-hover"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-medium text-white"
            >
              Agendar pelo WhatsApp
            </a>
            <p className="mt-3 px-2 text-xs text-muted">{siteConfig.phoneDisplay}</p>
          </Container>
        </div>
      )}
    </header>
  );
}
