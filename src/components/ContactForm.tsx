"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `Olá, Dra. ${siteConfig.name}!`,
      name && `Meu nome é ${name}.`,
      service && `Tenho interesse em: ${service}.`,
      message && `Mensagem: ${message}`,
      phone && `Meu telefone: ${phone}`,
    ]
      .filter(Boolean)
      .join(" ");

    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
          Assunto
        </label>
        <input
          id="service"
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Ex.: Clareamento, avaliação..."
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Como podemos ajudar?"
          className={field}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gold-hover"
      >
        Enviar pelo WhatsApp <Send size={16} />
      </button>
      <p className="text-xs text-muted">
        Ao enviar, você será direcionado ao WhatsApp com a mensagem já
        preenchida.
      </p>
    </form>
  );
}
