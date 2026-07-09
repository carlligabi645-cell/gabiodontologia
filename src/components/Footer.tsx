import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-alt">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">Gabriela Carli</p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">
            Odontologia
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-hover">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district
                  ? `${siteConfig.address.district} — `
                  : ""}
                {siteConfig.address.city}/{siteConfig.address.state}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="shrink-0 text-gold" />
              <span>{siteConfig.phoneDisplay}</span>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="shrink-0 text-gold" />
              <span>{siteConfig.email}</span>
            </li>
          </ul>
        </div>

        {/* <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Horários
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <span className="text-foreground">{h.day}</span>
                  <br />
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div> */}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.cro}
          </p>
          <p>Todos os direitos reservados.</p>
        </Container>
      </div>
    </footer>
  );
}
