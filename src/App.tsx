import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import PhoneFrame from "./components/PhoneFrame";
import {
  CERTIFICATIONS,
  EXPERIENCE,
  MARQUEE_STACK,
  OSS,
  PILLARS,
  PROFILE,
  STACK_GROUPS,
  TRUST_STATS,
  WORK,
} from "./data";

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-[#C8A96A]">
      <span className="inline-block h-px w-8 bg-[#C8A96A]/70" />
      {children}
    </p>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const downloadResume = () => {
    const body = [
      `${PROFILE.name} — ${PROFILE.title}`,
      PROFILE.subtitle,
      PROFILE.location,
      "",
      `Email: ${PROFILE.email}`,
      `Phone: ${PROFILE.phonePrimary} · ${PROFILE.phoneSecondary}`,
      `GitHub: ${PROFILE.github}`,
      "",
      "TRUST SIGNALS",
      `• ${PROFILE.years} years shipping Android (Kotlin, Compose, offline-first)`,
      "• 16 apps in production · 43 live domains · 21+ open-source repos",
      "• Certifications: " + CERTIFICATIONS.join(" · "),
      "",
      "SELECTED WORK & RESULTS",
      ...WORK.map(
        (w) =>
          `• ${w.name} — ${w.summary} Results: ${w.results.map((r) => `${r.value} ${r.label}`).join(", ")}.`
      ),
      "",
      "CORE STACK",
      ...STACK_GROUPS.map((g) => `• ${g.title}: ${g.items.join(", ")}`),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([body], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "Moe-Kyaw-Aung-Resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const navLinks = [
    { id: "work", label: "Work" },
    { id: "approach", label: "Approach" },
    { id: "stack", label: "Stack" },
    { id: "about", label: "About" },
    { id: "opensource", label: "Open Source" },
  ];

  return (
    <div className="grain relative min-h-screen bg-[#0B0B0E] text-[#E7E5DF]">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="animate-glow absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-[#C8A96A]/[0.07] blur-[120px]" />
        <div className="absolute right-[-160px] top-[38%] h-[480px] w-[480px] rounded-full bg-[#7C8CFF]/[0.07] blur-[120px]" />
        <div className="absolute left-[-180px] top-[68%] h-[420px] w-[420px] rounded-full bg-[#3DDC84]/[0.05] blur-[120px]" />
      </div>

      {/* ── nav ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0B0B0E]/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${scrolled ? "border-b hairline" : ""}`}>
          <div className="flex h-16 items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F4F1EA] font-serif text-sm font-semibold text-[#0B0B0E]">
                M
              </span>
              <span className="text-sm font-semibold tracking-tight">
                Moe Kyaw Aung
                <span className="ml-2 hidden font-mono text-[10px] font-normal tracking-[0.2em] text-zinc-500 sm:inline">
                  MKA
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
              {navLinks.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="link-underline text-[13px] font-medium text-zinc-400 transition hover:text-white"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="btn-sheen hidden rounded-full bg-[#F4F1EA] px-5 py-2.5 text-[13px] font-semibold text-[#0B0B0E] transition hover:bg-white sm:inline-flex"
              >
                Let&apos;s Talk
              </a>
              <button
                className="grid h-10 w-10 place-items-center rounded-full border hairline text-zinc-300 md:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t hairline bg-[#0B0B0E]/95 px-5 py-4 backdrop-blur-xl md:hidden">
            <div className="grid gap-1">
              {navLinks.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#F4F1EA] px-5 py-3 text-center text-sm font-semibold text-[#0B0B0E]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        {/* ═══ HERO ═══ */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            {/* copy */}
            <div>
              <div className="animate-rise inline-flex items-center gap-2.5 rounded-full border hairline bg-white/[0.03] py-1.5 pl-2 pr-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3DDC84]/15 px-2.5 py-1 font-mono text-[10px] font-medium tracking-widest text-[#3DDC84]">
                  <span className="animate-pulse-soft h-1.5 w-1.5 rounded-full bg-[#3DDC84]" />
                  AVAILABLE
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-zinc-400">
                  SELECT ROLES · 2026
                </span>
              </div>

              <h1
                className="serif-display animate-rise mt-6 text-[2.6rem] font-medium leading-[1.04] text-[#F4F1EA] sm:text-6xl lg:text-[4.2rem]"
                style={{ animationDelay: "80ms" }}
              >
                Moe Kyaw Aung —<br />
                Senior Android{" "}
                <em className="font-normal italic text-[#C8A96A]">Developer.</em>
              </h1>

              <p
                className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
                style={{ animationDelay: "160ms" }}
              >
                Building secure, scalable, human-centered mobile products.
              </p>

              <p
                className="animate-rise mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-500"
                style={{ animationDelay: "220ms" }}
              >
                I take Android apps from first sketch to Play release — Kotlin, Compose, and
                offline-first architecture that teams can maintain with confidence.
              </p>

              <div
                className="animate-rise mt-8 flex flex-wrap gap-2.5"
                style={{ animationDelay: "300ms" }}
              >
                <a
                  href="#work"
                  className="btn-sheen inline-flex items-center gap-2 rounded-full bg-[#F4F1EA] px-6 py-3 text-sm font-semibold text-[#0B0B0E] transition hover:bg-white"
                >
                  Explore Work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border hairline bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub Profile
                </a>
                <button
                  onClick={downloadResume}
                  className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/10 px-6 py-3 text-sm font-semibold text-[#E9D5A8] transition hover:bg-[#C8A96A]/20"
                >
                  Let&apos;s Talk
                </a>
              </div>

              {/* mini trust row */}
              <div
                className="animate-rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
                style={{ animationDelay: "380ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {[PROFILE.avatar, PROFILE.portrait, PROFILE.avatar].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        aria-hidden
                        className="h-8 w-8 rounded-full border-2 border-[#0B0B0E] object-cover"
                      />
                    ))}
                  </div>
                  <div className="text-xs leading-tight">
                    <span className="flex items-center gap-1 text-[#E9D5A8]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-[#C8A96A] text-[#C8A96A]" />
                      ))}
                    </span>
                    <span className="mt-1 block text-zinc-500">
                      Trusted across 43 live products
                    </span>
                  </div>
                </div>
                <span className="hidden h-8 w-px bg-white/10 sm:block" />
                <p className="font-mono text-[11px] tracking-widest text-zinc-500">
                  KOTLIN · COMPOSE · FIREBASE · SECURITY
                </p>
              </div>
            </div>

            {/* portrait */}
            <div className="animate-fade relative mx-auto w-full max-w-[400px]" style={{ animationDelay: "200ms" }}>
              <div className="absolute -inset-8 rounded-full bg-[#C8A96A]/10 blur-[70px]" aria-hidden />
              <div className="portrait-ring portrait-arch animate-float relative overflow-hidden p-2">
                <div className="portrait-arch relative overflow-hidden">
                  <img
                    src={PROFILE.portrait}
                    alt="Portrait of Moe Kyaw Aung"
                    className="portrait-arch aspect-[4/5] w-full object-cover"
                    fetchPriority="high"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,11,14,0.72) 0%, transparent 42%, rgba(200,169,106,0.10) 100%)",
                    }}
                    aria-hidden
                  />
                  {/* name plate */}
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                    <p className="font-mono text-[9px] tracking-[0.24em] text-[#C8A96A]">
                      {PROFILE.mmName} · MKA
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{PROFILE.title}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-zinc-400">
                      <MapPin className="h-3 w-3" />
                      {PROFILE.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* floating badges */}
              <div className="glass-dark absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 sm:block lg:-left-10">
                <p className="serif-display text-2xl text-white">{PROFILE.years}</p>
                <p className="font-mono text-[9px] tracking-[0.2em] text-zinc-400">
                  YEARS ANDROID
                </p>
              </div>
              <div className="glass-dark absolute -right-3 top-1/2 hidden rounded-2xl px-4 py-3 sm:block lg:-right-8">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <BadgeCheck className="h-4 w-4 text-[#3DDC84]" />
                  Play-ready
                </p>
                <p className="mt-0.5 font-mono text-[9px] tracking-[0.18em] text-zinc-400">
                  CLEAN · TESTED · SECURE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ marquee ═══ */}
        <div className="border-y hairline bg-white/[0.015] py-3.5" aria-hidden>
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap px-4">
              {[0, 1].map((d) => (
                <div key={d} className="flex items-center gap-8">
                  {MARQUEE_STACK.map((s) => (
                    <span key={`${d}-${s}`} className="flex items-center gap-8">
                      <span className="font-mono text-[11px] tracking-[0.22em] text-zinc-500">
                        {s.toUpperCase()}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#C8A96A]/60" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ trust signals ═══ */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <Eyebrow>Proof, not promises</Eyebrow>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <h2 className="serif-display max-w-xl text-3xl font-medium leading-tight text-white sm:text-4xl">
                Hired for outcomes. <em className="italic text-zinc-500">Kept for craft.</em>
              </h2>
              <a
                href={PROFILE.githubOrg}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white"
              >
                Browse the org <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {TRUST_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="glass-dark group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8A96A]/30 sm:p-6">
                  <p className="serif-display text-4xl text-white transition group-hover:text-[#E9D5A8] sm:text-5xl">
                    {s.value}
                  </p>
                  <div className="gold-rule my-3 opacity-40" />
                  <p className="text-[13px] text-zinc-400">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-4 flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border hairline bg-white/[0.03] px-3.5 py-2 text-xs text-zinc-300"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-[#3DDC84]" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ═══ work ═══ */}
        <section id="work" className="border-t hairline bg-white/[0.012]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <Eyebrow>Selected work</Eyebrow>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <h2 className="serif-display max-w-2xl text-3xl font-medium leading-tight text-white sm:text-[2.75rem]">
                  Three products. <em className="italic text-[#C8A96A]">Real users, real revenue.</em>
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                  Concise on purpose — each project below ships, scales, and survives the field.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 space-y-6">
              {WORK.map((w, i) => (
                <Reveal key={w.id} delay={60}>
                  <article
                    className={`glass-dark group grid gap-8 overflow-hidden rounded-3xl p-6 transition duration-500 hover:border-[#C8A96A]/25 sm:p-9 lg:grid-cols-[1fr_320px] lg:items-center ${
                      i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="serif-display text-sm italic text-[#C8A96A]">{w.no}</span>
                        <span className="h-px w-10 bg-[#C8A96A]/40" />
                        <span className="font-mono text-[10px] tracking-[0.22em] text-zinc-500">
                          {w.category.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="serif-display mt-3 text-2xl font-medium text-white sm:text-3xl">
                        {w.name}
                      </h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-400">
                        {w.summary}
                      </p>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {w.results.map((r) => (
                          <div
                            key={r.label}
                            className="rounded-2xl border hairline bg-black/30 p-3.5 sm:p-4"
                          >
                            <p className="serif-display text-xl text-[#E9D5A8] sm:text-2xl">
                              {r.value}
                            </p>
                            <p className="mt-1 text-[11px] leading-snug text-zinc-500">{r.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {w.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border hairline px-3 py-1 font-mono text-[10px] tracking-widest text-zinc-400"
                          >
                            {s.toUpperCase()}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2.5">
                        <a
                          href={w.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#F4F1EA] px-5 py-2.5 text-[13px] font-semibold text-[#0B0B0E] transition hover:bg-white"
                        >
                          <GitHubIcon className="h-3.5 w-3.5" />
                          View code
                        </a>
                        {"live" in w && w.live && (
                          <a
                            href={w.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-2.5 text-[13px] font-medium text-zinc-200 transition hover:bg-white/5"
                          >
                            Live build <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="transition duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[0.5deg]">
                        <PhoneFrame src={w.media} type={w.mediaType} caption={w.name} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ approach ═══ */}
        <section id="approach" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <Eyebrow>How I work</Eyebrow>
            <h2 className="serif-display mt-4 max-w-2xl text-3xl font-medium leading-tight text-white sm:text-[2.75rem]">
              Calm code for <em className="italic text-zinc-500">high-stakes</em> products.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.index} delay={i * 90}>
                <div className="group h-full rounded-3xl border hairline bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C8A96A]/30 hover:bg-white/[0.035]">
                  <p className="serif-display text-sm italic text-[#C8A96A]">{p.index}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══ stack + experience ═══ */}
        <section id="stack" className="border-t hairline bg-white/[0.012]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <Eyebrow>Featured technologies</Eyebrow>
              <h2 className="serif-display mt-4 text-3xl font-medium text-white sm:text-4xl">
                A tight stack, <em className="italic text-[#C8A96A]">deeply known.</em>
              </h2>
              <div className="mt-8 space-y-5">
                {STACK_GROUPS.map((g) => (
                  <div key={g.title} className="rounded-2xl border hairline bg-black/25 p-5">
                    <p className="font-mono text-[10px] tracking-[0.24em] text-[#C8A96A]">
                      {g.title.toUpperCase()}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-lg border hairline bg-white/[0.03] px-3 py-1.5 text-[13px] text-zinc-300"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Eyebrow>Experience</Eyebrow>
              <h2 className="serif-display mt-4 text-3xl font-medium text-white sm:text-4xl">
                {PROFILE.years} years of <em className="italic text-zinc-500">shipping.</em>
              </h2>
              <ol className="relative mt-8 space-y-0 border-l hairline pl-0">
                {EXPERIENCE.map((e) => (
                  <li key={e.period} className="relative pb-8 pl-8 last:pb-0">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#C8A96A] shadow-[0_0_14px_rgba(200,169,106,0.7)]" />
                    <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-500">
                      {e.period.toUpperCase()} · {e.place.toUpperCase()}
                    </p>
                    <p className="mt-1.5 font-semibold text-white">{e.role}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{e.text}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl border border-[#3DDC84]/20 bg-[#3DDC84]/[0.06] p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="animate-pulse-soft h-2 w-2 rounded-full bg-[#3DDC84]" />
                  Open to senior roles & select contracts
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">
                  Android-first, full-stack when it helps. Remote-friendly across MY ↔ TH
                  timezones.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ open source ═══ */}
        <section id="opensource" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <div className="glass-dark relative overflow-hidden rounded-3xl p-8 sm:p-12">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-[80px]"
                aria-hidden
              />
              <Eyebrow>Open source</Eyebrow>
              <h2 className="serif-display mt-4 max-w-xl text-3xl font-medium leading-tight text-white sm:text-4xl">
                Built in the open, <em className="italic text-[#C8A96A]">used in the wild.</em>
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {OSS.map((o) => (
                  <a
                    key={o.label}
                    href={o.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border hairline bg-black/30 p-5 transition hover:-translate-y-1 hover:border-[#C8A96A]/30"
                  >
                    <p className="serif-display text-4xl text-white group-hover:text-[#E9D5A8]">
                      {o.value}
                    </p>
                    <p className="mt-1 text-[13px] text-zinc-400">{o.label}</p>
                    <p className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.2em] text-zinc-500 group-hover:text-[#C8A96A]">
                      OPEN <ArrowUpRight className="h-3 w-3" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ═══ about ═══ */}
        <section id="about" className="border-t hairline">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <blockquote className="serif-display mt-5 text-2xl font-normal leading-snug text-white sm:text-[2rem]">
                “I care about the person holding the phone — the shopkeeper on patchy wifi, the
                commuter mid-tunnel. <em className="italic text-[#C8A96A]">If it works for them, it works.”</em>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="h-11 w-11 rounded-full border border-white/15 object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {PROFILE.name}{" "}
                    <span className="font-mm font-normal text-zinc-500">{PROFILE.mmName}</span>
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                    {PROFILE.title.toUpperCase()}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-2.5">
                {[
                  { icon: MapPin, k: "BASE", v: PROFILE.location },
                  { icon: Mail, k: "EMAIL", v: PROFILE.email, href: `mailto:${PROFILE.email}` },
                  { icon: Phone, k: "PHONE", v: `${PROFILE.phonePrimary} · ${PROFILE.phoneSecondary}`, href: `tel:${PROFILE.phonePrimary.replace(/\s/g, "")}` },
                ].map((row) => (
                  <div key={row.k} className="flex items-center gap-3.5 rounded-2xl border hairline bg-white/[0.02] px-5 py-4">
                    <row.icon className="h-4 w-4 shrink-0 text-[#C8A96A]" />
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] tracking-[0.24em] text-zinc-500">{row.k}</p>
                      {row.href ? (
                        <a href={row.href} className="link-underline block truncate text-sm font-medium text-white">
                          {row.v}
                        </a>
                      ) : (
                        <p className="truncate text-sm font-medium text-white">{row.v}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-2 rounded-2xl border border-[#3DDC84]/20 bg-[#3DDC84]/[0.06] px-5 py-4">
                  <Check className="h-4 w-4 shrink-0 text-[#3DDC84]" />
                  <p className="text-[13px] text-zinc-300">
                    Burmese · English · Kotlin — fluent in product, design, and engineering.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ contact ═══ */}
        <section id="contact" className="border-t hairline bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
            <Reveal>
              <p className="eyebrow justify-center text-[#C8A96A]">Final call</p>
              <h2 className="serif-display mx-auto mt-5 max-w-2xl text-4xl font-medium leading-[1.06] text-white sm:text-6xl">
                Let&apos;s build something <em className="italic text-[#C8A96A]">people trust.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400">
                One message is enough — I reply within a day, with honest timelines and a clear
                plan for your Android product.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-2.5">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="btn-sheen inline-flex items-center gap-2 rounded-full bg-[#F4F1EA] px-7 py-3.5 text-sm font-semibold text-[#0B0B0E] transition hover:bg-white"
                >
                  <Mail className="h-4 w-4" />
                  Let&apos;s Talk
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border hairline bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub Profile
                </a>
                <button
                  onClick={downloadResume}
                  className="inline-flex items-center gap-2 rounded-full border hairline px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-widest text-zinc-500">
                <a href={`tel:${PROFILE.phonePrimary.replace(/\s/g, "")}`} className="transition hover:text-white">
                  {PROFILE.phonePrimary.toUpperCase()}
                </a>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <a href={`mailto:${PROFILE.email}`} className="transition hover:text-white">
                  {PROFILE.email.toUpperCase()}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── footer ── */}
      <footer className="relative z-10 border-t hairline">
        <div className="gold-rule" />
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm font-semibold text-white">
            {PROFILE.name}
            <span className="ml-2 font-mono text-[10px] font-normal tracking-[0.2em] text-zinc-500">
              © 2026 · MY ↔ TH
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-5 font-mono text-[10px] tracking-[0.18em] text-zinc-500">
            <a href="#work" className="transition hover:text-white">WORK</a>
            <a href="#about" className="transition hover:text-white">ABOUT</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GITHUB
            </a>
            <a href="#top" className="transition hover:text-white">↑ TOP</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
