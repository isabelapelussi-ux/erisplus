import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const heroFootball = "/images/hero-football.jpg";
const heroAnime = "/images/hero-anime.jpg";
const heroMovie = "/images/hero-movie.jpg";
const heroSeries = "/images/hero-series.jpg";
const heroAction = "/images/hero-action.jpg";
const heroFantasy = "/images/hero-fantasy.jpg";
const heroTv = "/images/hero-tv.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

// ============================================================
// CONFIGURAÇÃO — altere aqui para atualizar links e preços
// ============================================================
const WHATSAPP_NUMBER = "5519958711611"; // formato internacional, sem +
const wa = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const PLANS = [
  {
    name: "Trimestral",
    price: "R$ 80",
    period: "/3 meses",
    highlight: false,
    tag: "Economize 10%",
    cta: "Assinar Trimestral",
    msg: "Olá! Quero assinar o plano Trimestral (R$ 80).",
    customBenefit: "Aqui voce tem 10 reais de desconto",
  },
  {
    name: "Mensal",
    price: "R$ 30",
    period: "\n",
    highlight: true,
    tag: "Mais escolhido!",
    cta: "Assinar Mensal",
    msg: "Olá! Quero assinar o plano Mensal (R$ 30).",
  },
  {
    name: "Semestral",
    price: "R$ 150",
    period: "/6 meses",
    highlight: false,
    tag: "Melhor economia longa",
    cta: "Assinar Semestral",
    msg: "Olá! Quero assinar o plano Semestral (R$ 150).",
    customBenefit: "Aqui voce ganhou 1 mês de graça!",
  },
];

const BENEFITS = [
  {
    icon: "⚡",
    title: "Infraestrutura de Ponta",
    text: "Servidores mais rápidos e consolidados do mercado. Estabilidade real, sem quedas em horário de pico.",
  },
  {
    icon: "🧑‍💻",
    title: "Suporte 100% Humano",
    text: "Nada de robôs. Equipe real pronta para configurar o sistema com você em minutos.",
  },
  {
    icon: "🎬",
    title: "+32 Mil Conteúdos",
    text: "Filmes atualizados, séries de todas as plataformas e canais de TV aberta e fechada.",
  },
  {
    icon: "🎯",
    title: "Qualidade Garantida",
    text: "Imagem 4K/FHD e som cristalino. Compromisso de entrega sem perdas.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rafael Andrade",
    date: "02/01/2026",
    text: "Assisti a rodada inteira do Brasileirão em 4K, zero travamento. Melhor investimento do ano.",
  },
  {
    name: "Camila Souza",
    date: "15/02/2026",
    text: "Instalei sozinha na Smart TV em 3 minutos com o passo a passo do suporte. Incrível.",
  },
  {
    name: "Marcos Ribeiro",
    date: "28/02/2026",
    text: "Domingo à noite, jogo do meu time, chamei no WhatsApp e responderam em 2 minutos.",
  },
  {
    name: "Juliana Prado",
    date: "10/03/2026",
    text: "Catálogo absurdo de séries. Achei tudo que queriaaaa",
  },
  {
    name: "Diego Nascimento",
    date: "22/04/2026",
    text: "Tinha medo de cair no golpe. Fiz o teste de 4h, aprovei, assinei o trimestral. Sem arrependimento até agora..",
  },
  {
    name: "Patrícia Lima",
    date: "05/05/2026",
    text: "Uso no celular no ônibus e na TV em casa. Nunca vi imagem tão limpa em IPTV.",
  },
  {
    name: "Eduardo Martins",
    date: "18/06/2026",
    text: "Já usei outros serviços que travavam nos jogos. Esse aqui aguenta Champions em 4K de boa.",
  },
];

const FAQS = [
  {
    q: "Como funciona o teste grátis de 4 horas?",
    a: "Você fala com nosso suporte no WhatsApp, recebe um acesso liberado por 4 horas com o catálogo completo e testa em qualquer dispositivo antes de decidir.",
  },
  {
    q: "Em quais aparelhos posso usar?",
    a: "Smart TVs (Samsung, LG, TCL, Roku), TV Box, Fire Stick, Chromecast, celulares Android/iPhone, tablets e computador. Rodamos em praticamente tudo.",
  },
  {
    q: "Como faço a instalação?",
    a: "Após a confirmação, enviamos o passo a passo do seu aparelho e o suporte humano acompanha em tempo real via WhatsApp — a maioria das instalações leva menos de 5 minutos.",
  },
  {
    q: "Preciso de qual internet?",
    a: "A partir de 15 Mbps já roda FHD tranquilo. Para 4K, recomendamos 25 Mbps. Wi-Fi ou cabo, funciona nos dois.",
  },
  {
    q: "Tem fidelidade ou multa?",
    a: "Zero fidelidade. Você paga o período que quiser e renova apenas se gostar. Sem letras miúdas.",
  },
];

const CONTEUDOS_TAGS = ["📺 Ao Vivo Agora!", "🎬 Incluso!", "📡 Sem Taxa Extra!"];

// ============================================================

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const handler = () => setMenuOpen(false);
    links.forEach((l) => l.addEventListener("click", handler));
    return () => links.forEach((l) => l.removeEventListener("click", handler));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.7 0.2 300 / 0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 glass">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2">
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="ErisPlus IPTV"
              className="h-[56px] w-auto object-contain md:h-[64px]"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#sobre-nos"
              className="text-base text-muted-foreground transition hover:text-foreground"
            >
              Sobre Nós
            </a>
            <a
              href="#conteudos"
              className="text-base text-muted-foreground transition hover:text-foreground"
            >
              Conteúdos
            </a>
            <a
              href="#depoimentos"
              className="text-base text-muted-foreground transition hover:text-foreground"
            >
              Depoimentos
            </a>
            <a
              href="#planos"
              className="text-base text-muted-foreground transition hover:text-foreground"
            >
              Planos
            </a>
            <a
              href="#cta-whatsapp"
              className="text-base text-muted-foreground transition hover:text-foreground"
            >
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={wa("Olá! Quero fazer o teste grátis de 4 horas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-5 py-2.5 text-sm btn-cta hover:scale-105 sm:inline-flex"
            >
              Teste Grátis
            </a>
            <button
              aria-label="Abrir menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
            >
              <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-border md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              <a href="#sobre-nos" className="rounded-lg px-3 py-3 hover:bg-muted/40">
                Sobre Nós
              </a>
              <a href="#conteudos" className="rounded-lg px-3 py-3 hover:bg-muted/40">
                Conteúdos
              </a>
              <a href="#depoimentos" className="rounded-lg px-3 py-3 hover:bg-muted/40">
                Depoimentos
              </a>
              <a href="#planos" className="rounded-lg px-3 py-3 hover:bg-muted/40">
                Planos
              </a>
              <a href="#cta-whatsapp" className="rounded-lg px-3 py-3 hover:bg-muted/40">
                Contato
              </a>
              <a
                href={wa("Olá! Quero fazer o teste grátis de 4 horas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full px-5 py-3 text-center btn-cta"
              >
                Teste Grátis
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-5 py-12 md:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium glass -mt-8">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ background: "var(--cta)" }}
              />
              Servidores online agora — 99,9% uptime
            </span>
            <h1
              className="mt-6 font-display text-4xl font-bold leading-[1.1] sm:text-5xl sm:leading-[1.05] md:text-6xl bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Tudo o que sua família gosta de assistir, em um só plano.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Canais, filmes e séries em qualidade 4K, rodando nos servidores mais rápidos e
              robustos do mercado. <strong className="text-foreground">Sem travamentos.</strong>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa("Olá! Quero solicitar o teste grátis de 4 horas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-4 text-center text-base btn-cta hover:scale-[1.03]"
              >
                🎁 Solicitar Teste Grátis de 4 Horas
              </a>
              <a
                href="#planos"
                className="rounded-full border border-border px-7 py-4 text-center text-base font-semibold glass transition hover:border-[color:var(--neon)]"
              >
                Conhecer Planos
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["32K+", "Conteúdos"],
                ["4K", "Qualidade"],
                ["24/7", "Suporte"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold" style={{ color: "var(--neon)" }}>
                    {n}
                  </div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl"
              style={{ background: "var(--gradient-primary)", opacity: 0.3 }}
            />
            <div className="glass rounded-3xl p-4 shadow-2xl">
              <div className="flex gap-1.5 px-2 pb-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {[
                  { src: heroFootball, alt: "Futebol ao vivo" },
                  { src: heroAnime, alt: "Animes" },
                  { src: heroMovie, alt: "Filmes" },
                  { src: heroSeries, alt: "Séries" },
                  { src: heroAction, alt: "Ação e blockbusters" },
                  { src: heroFantasy, alt: "Fantasia e aventura" },
                ].map(({ src, alt }, i) => (
                  <div
                    key={i}
                    className="aspect-[2/3] overflow-hidden rounded-xl border border-border"
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm">
                <span className="text-muted-foreground">▶ Assistindo agora</span>
                <span className="font-medium" style={{ color: "var(--neon)" }}>
                  ao vivo · 4K
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre-nos" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-base font-semibold uppercase tracking-widest"
            style={{ color: "var(--neon)" }}
          >
            Por que a ErisPlus
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Construído para quem odeia travamento.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-xl">
            Infraestrutura séria, equipe humana, catálogo gigante. É por isso que milhares de
            clientes ficam.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[color:var(--neon)]"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-2xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                {b.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEÚDOS — FUTEBOL, FILMES, SÉRIES */}
      <section id="conteudos" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--neon)" }}
          >
            Tudo em uma só tela
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            O que você quer assistir hoje?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Futebol ao vivo, animes, filmes de cinema e séries do momento. Tudo liberado, sem
            travar.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              image: heroFootball,
              title: "Futebol ao vivo",
              description:
                "Assista a qualquer jogo, de qualquer campeonato, ao vivo. Brasileirão, Champions, Libertadores e muito mais.",
              badge: "AO VIVO",
            },
            {
              image: heroMovie,
              title: "+32 mil filmes e séries",
              description:
                "Catálogo gigante com filmes e séries de todos os streamings. Desde clássicos até os lançamentos do cinema.",
              badge: "CINEMA",
            },
            {
              image: heroTv,
              title: "Centenas de canais de TV de todos os tipos",
              description:
                "TV aberta, fechada, esportes, filmes, infantil, documentários — todos os canais que você ama em um só lugar, sem precisar de assinatura separada.",
              badge: "TV",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-border transition duration-500 hover:-translate-y-1 hover:border-[color:var(--neon)] min-h-[360px] md:min-h-[620px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-bold glass md:left-4 md:top-4 md:gap-3 md:px-6 md:py-3 md:text-lg">
                {CONTEUDOS_TAGS[i]}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: "var(--gradient-cta)", color: "var(--cta-foreground)" }}
                >
                  {card.badge}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="pt-8 pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--neon)" }}
            >
              Quem já usa
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              Clientes reais. Resultados reais.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`glass rounded-2xl p-6 ${i === 6 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg font-bold"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.date}</div>
                    <div className="text-xs" style={{ color: "var(--cta)" }}>
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="mx-auto max-w-7xl px-5 pt-8 pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-lg font-semibold uppercase tracking-widest"
            style={{ color: "var(--neon)" }}
          >
            Planos
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Escolha o seu. Cancele quando quiser.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sem fidelidade. Sem letras miúdas. Sem surpresa na fatura.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`glass relative flex flex-col rounded-2xl p-8 transition ${p.highlight ? "scale-[1.02] border-2" : "hover:-translate-y-1"}`}
              style={
                p.highlight
                  ? { borderColor: "var(--neon)", boxShadow: "var(--shadow-glow)" }
                  : undefined
              }
            >
              {p.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold"
                  style={{ background: "var(--gradient-cta)", color: "var(--cta-foreground)" }}
                >
                  RECOMENDADO
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {p.tag}
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold">Plano {p.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-black">{p.price}</span>
                <span className="text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Acesso completo ao catálogo (+32 mil)",
                  "Suporte humano no WhatsApp",
                  "Qualidade 4K / FHD",
                  "Aceitamos Pix e Cartão de Crédito",
                  p.customBenefit || "Sem fidelidade — cancele quando quiser",
                  "Multi-dispositivo",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span style={{ color: "var(--cta)" }}>✓</span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={wa(p.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full rounded-full px-6 py-3.5 text-center font-semibold transition hover:scale-[1.03] sm:w-auto ${p.highlight ? "btn-cta" : "btn-primary-grad"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / CONTATO */}
      <section id="contato" className="mx-auto max-w-4xl px-5 py-16">
        <div className="text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--neon)" }}
          >
            Dúvidas Frequentes
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Ainda com dúvida? A gente responde.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-semibold">{f.q}</span>
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg transition-transform"
                    style={{
                      background: "var(--gradient-primary)",
                      transform: open ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="cta-whatsapp" className="mt-14 glass rounded-3xl p-8 text-center md:p-12">
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            Chega de pagar caro em streaming. Aqui é uma assinatura com tudo pra você.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Fale com nosso suporte humano no WhatsApp e libere seu teste grátis agora.
          </p>
          <a
            href={wa("Olá! Vim da landing page e quero o teste grátis de 4 horas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full rounded-full px-8 py-4 font-bold btn-cta hover:scale-105 sm:w-auto"
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="ErisPlus IPTV"
                className="h-[52px] w-auto object-contain md:h-[64px]"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A forma mais rápida e estável de assistir tudo em uma só tela.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre-nos" className="hover:text-foreground">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#conteudos" className="hover:text-foreground">
                  Conteúdos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-foreground">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-foreground">
                  Planos
                </a>
              </li>
              <li>
                <a href="#cta-whatsapp" className="hover:text-foreground">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Suporte</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={wa("Olá! Preciso de suporte.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  WhatsApp Suporte
                </a>
              </li>
              <li>
                <a
                  href={wa("Olá! Vim do site e quero falar por telefone.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  📞 +55 19 95871-1611
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-foreground">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ErisPlus IPTV. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={wa("Olá! Vim da landing page.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-2xl shadow-2xl transition hover:scale-110 btn-cta"
      >
        💬
      </a>
    </div>
  );
}
