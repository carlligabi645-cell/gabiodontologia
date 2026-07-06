import {
  Stethoscope,
  Sparkles,
  Sun,
  Anchor,
  AlignHorizontalDistributeCenter,
  Activity,
  Smile,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Sparkles,
  Sun,
  Anchor,
  AlignHorizontalDistributeCenter,
  Activity,
  Smile,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Sparkles;
  return (
    <article className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft/40 text-gold-hover transition-colors group-hover:bg-gold group-hover:text-white">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.short}</p>
    </article>
  );
}
