import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Brain,
  Briefcase,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareCode,
  Rocket,
  Send,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import heroNeural from "@/assets/hero-neural.jpg";
import { Chatbot } from "@/components/portfolio/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shabra Fathima — AI / ML Engineer Portfolio" },
      {
        name: "description",
        content:
          "AI/ML Engineer portfolio of Shabra Fathima — Computer Vision, Deep Learning, Generative AI projects, skills and internship availability.",
      },
      { property: "og:title", content: "Shabra Fathima — AI / ML Engineer" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { label: "AI Projects", value: "10+" },
  { label: "Certificates", value: "8+" },
  { label: "Technologies", value: "25+" },
  { label: "GitHub Commits", value: "1.2k" },
];

const SKILLS: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  items: { name: string; level: number }[];
}[] = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    accent: "from-brand-blue to-brand-cyan",
    items: [
      { name: "TensorFlow / Keras", level: 85 },
      { name: "PyTorch", level: 78 },
      { name: "Scikit-Learn", level: 88 },
      { name: "Computer Vision (OpenCV)", level: 82 },
      { name: "NLP & Generative AI", level: 75 },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    accent: "from-brand-purple to-brand-blue",
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 78 },
      { name: "TypeScript", level: 72 },
      { name: "JavaScript", level: 78 },
    ],
  },
  {
    title: "Data & Backend",
    icon: Server,
    accent: "from-brand-cyan to-brand-purple",
    items: [
      { name: "Pandas / NumPy", level: 90 },
      { name: "FastAPI / Flask", level: 80 },
      { name: "MySQL / MongoDB", level: 82 },
      { name: "Data Visualization", level: 85 },
      { name: "Docker / Linux", level: 65 },
    ],
  },
];

const TOOL_CHIPS = [
  "Python", "TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Pandas", "NumPy",
  "Matplotlib", "Seaborn", "FastAPI", "Flask", "Hugging Face", "LangChain",
  "MySQL", "MongoDB", "PostgreSQL", "Docker", "Git", "GitHub", "Linux",
  "AWS", "Azure", "React", "Next.js", "Tailwind", "Jupyter", "Google Colab",
];

const PROJECTS = [
  {
    title: "Plant Disease Detection",
    icon: "🌿",
    desc: "CNN model that identifies 15+ crop diseases from leaf imagery with 98.4% validation accuracy.",
    tech: ["TensorFlow", "OpenCV", "Python"],
    gradient: "from-emerald-500/25 via-brand-cyan/20 to-brand-blue/25",
  },
  {
    title: "Medical Image Classification",
    icon: "🩻",
    desc: "Deep learning pipeline for classifying medical scans using transfer learning on ResNet50.",
    tech: ["PyTorch", "ResNet50", "Grad-CAM"],
    gradient: "from-brand-blue/30 via-indigo-500/20 to-brand-purple/25",
  },
  {
    title: "Face Mask Detection",
    icon: "😷",
    desc: "Real-time video-stream detector using MobileNetV2 optimized for edge inference at 30 FPS.",
    tech: ["OpenCV", "MobileNetV2", "Keras"],
    gradient: "from-brand-cyan/30 via-teal-400/20 to-brand-blue/25",
  },
  {
    title: "Customer Churn Prediction",
    icon: "📉",
    desc: "Ensemble model (XGBoost + LightGBM) predicting subscription churn with 92% F1 score.",
    tech: ["Scikit-Learn", "XGBoost", "Pandas"],
    gradient: "from-brand-purple/25 via-pink-500/15 to-brand-blue/25",
  },
  {
    title: "Fake News Detection",
    icon: "📰",
    desc: "NLP classifier using TF-IDF + PassiveAggressive to flag misleading articles in real time.",
    tech: ["NLTK", "Scikit-Learn", "Streamlit"],
    gradient: "from-orange-500/20 via-red-500/15 to-brand-purple/20",
  },
  {
    title: "Spam Email Classifier",
    icon: "✉️",
    desc: "Naive Bayes and SVM baseline pipeline reaching 97% accuracy on the SMS Spam Collection.",
    tech: ["Scikit-Learn", "NLTK", "Flask"],
    gradient: "from-brand-blue/25 via-sky-500/15 to-brand-cyan/25",
  },
  {
    title: "Sentiment Analysis Suite",
    icon: "💬",
    desc: "Transformer-based sentiment engine for social media, fine-tuned on domain-specific data.",
    tech: ["Hugging Face", "PyTorch", "FastAPI"],
    gradient: "from-brand-purple/30 via-fuchsia-500/20 to-brand-blue/25",
  },
  {
    title: "LLM Chatbot",
    icon: "🤖",
    desc: "Retrieval-augmented conversational agent over custom documentation with citations.",
    tech: ["LangChain", "OpenAI", "Chroma"],
    gradient: "from-brand-cyan/30 via-brand-blue/20 to-brand-purple/25",
  },
  {
    title: "Resume Screening AI",
    icon: "📄",
    desc: "NLP pipeline that scores and ranks resumes against a job description using embeddings.",
    tech: ["spaCy", "Sentence-Transformers"],
    gradient: "from-amber-400/20 via-brand-purple/20 to-brand-blue/25",
  },
  {
    title: "House Price Prediction",
    icon: "🏠",
    desc: "Regression benchmark comparing Linear, RandomForest and Gradient Boosting on Ames data.",
    tech: ["Scikit-Learn", "Pandas", "Seaborn"],
    gradient: "from-brand-blue/25 via-indigo-500/15 to-brand-purple/25",
  },
];

const TIMELINE = [
  {
    tag: "Currently",
    title: "Final Year — B.Sc. Software Engineering",
    org: "NIBM × Coventry University (UK)",
    date: "2023 — Present",
    active: true,
    kind: "edu" as const,
  },
  {
    tag: "Open to Work",
    title: "AI / ML Engineer Internship",
    org: "Remote · Sri Lanka · Relocation friendly",
    date: "2026",
    active: true,
    kind: "work" as const,
  },
  {
    tag: "Completed",
    title: "Higher National Diploma — Software Engineering",
    org: "NIBM · Merit Pass",
    date: "2022",
    kind: "edu" as const,
  },
  {
    tag: "Completed",
    title: "Higher National Diploma — English",
    org: "Completed",
    date: "2020",
    kind: "edu" as const,
  },
];

const CERTIFICATES = [
  { title: "Machine Learning Specialization", org: "Coursera · DeepLearning.AI" },
  { title: "TensorFlow Developer Certificate", org: "Google" },
  { title: "Python for Data Science", org: "IBM" },
  { title: "Deep Learning with PyTorch", org: "Udacity" },
  { title: "Introduction to Generative AI", org: "Google Cloud" },
  { title: "SQL for Data Analysis", org: "Kaggle Learn" },
];

const BLOG = [
  {
    title: "Beginning My AI Journey",
    excerpt: "From software engineering student to ML practitioner — what I learned in year one.",
    date: "Mar 2026",
    tag: "Journey",
  },
  {
    title: "Notes on Convolutional Networks",
    excerpt: "Intuitions behind kernels, receptive fields and why depth still matters in 2026.",
    date: "Feb 2026",
    tag: "Deep Learning",
  },
  {
    title: "Building Computer Vision Projects",
    excerpt: "A practical pipeline template for going from raw imagery to a deployable model.",
    date: "Jan 2026",
    tag: "Computer Vision",
  },
];

const TESTIMONIALS = [
  {
    name: "Dr. R. Perera",
    role: "Lecturer, NIBM",
    quote:
      "Shabra approaches problems with the rigor of a researcher and the pragmatism of an engineer — a rare combination in an undergraduate.",
  },
  {
    name: "A. Silva",
    role: "Project Mentor",
    quote:
      "Consistently ships end-to-end AI projects with clean code, clear evaluation and thoughtful UI. She'll be an asset to any AI team.",
  },
  {
    name: "M. Fernando",
    role: "Peer, Software Engineering",
    quote:
      "The person you want in your study group. Deep curiosity for how models actually work under the hood.",
  },
];

/* ---------- Component ---------- */

function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollPct =
    typeof window !== "undefined" && typeof document !== "undefined"
      ? Math.min(
          100,
          (scrollY /
            Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) *
            100,
        )
      : 0;

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      {/* Scroll progress bar */}
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan transition-[width] duration-100"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* Ambient background */}
      <div className="glow-mesh pointer-events-none fixed inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed left-1/2 top-4 z-50 w-[min(96%,44rem)] -translate-x-1/2 rounded-full transition-all ${
          scrollY > 20 ? "glass-card" : "border border-transparent bg-background/40 backdrop-blur"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-[10px] font-bold text-white">
              SF
            </div>
            <span className="text-sm font-semibold tracking-tight">Shabra Fathima</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full border border-border p-1.5 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-border px-4 pb-4 pt-2 md:hidden">
            <div className="grid grid-cols-2 gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-32 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/25 bg-brand-blue/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan animate-fade-up">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-blue" />
            </span>
            Available for AI/ML Internships · 2026
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-bold leading-[1.05] tracking-tight animate-fade-up [animation-delay:80ms] md:text-7xl lg:text-[5.5rem]">
            Hi, I'm <span className="text-gradient">Shabra Fathima</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-brand-cyan animate-fade-up [animation-delay:140ms] md:text-xl">
            Aspiring AI &amp; Machine Learning Engineer
          </p>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground animate-fade-up [animation-delay:200ms] md:text-lg">
            Final-year B.Sc. Software Engineering student at NIBM in collaboration with Coventry
            University (UK). Passionate about Computer Vision, Deep Learning, Data Science and
            Intelligent Systems — building AI that solves real problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:280ms]">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="glass-card inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-brand-cyan/40 hover:text-foreground"
            >
              <Mail className="size-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 animate-fade-up [animation-delay:340ms]">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
              { icon: MessageSquareCode, label: "Medium", href: "https://medium.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="glass-card flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-brand-cyan"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>

          <div className="mt-16 w-full max-w-5xl animate-fade-up [animation-delay:420ms]">
            <div className="glass-card relative overflow-hidden rounded-3xl">
              <img
                src={heroNeural}
                alt="Neural network visualization"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                fetchPriority="high"
              />
              {/* Floating tech chips */}
              <div className="pointer-events-none absolute inset-0">
                {[
                  { l: "TensorFlow", c: "top-6 left-6", d: "0s" },
                  { l: "PyTorch", c: "top-10 right-8", d: "1s" },
                  { l: "OpenCV", c: "bottom-16 left-10", d: "2s" },
                  { l: "Python", c: "bottom-10 right-6", d: "0.5s" },
                ].map((f) => (
                  <div
                    key={f.l}
                    className={`glass-card absolute ${f.c} animate-float-slow rounded-full px-3 py-1 text-[10px] font-mono text-brand-cyan`}
                    style={{ animationDelay: f.d }}
                  >
                    {f.l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT + STATS */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-28">
          <SectionHeader eyebrow="About" title="Engineer, learner, builder." />
          <div className="mt-12 grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <p className="text-base leading-relaxed text-slate-300">
                  I'm a passionate software engineering student transitioning into Artificial
                  Intelligence and Machine Learning. Currently pursuing my Bachelor's Degree in
                  Software Engineering at{" "}
                  <span className="text-brand-cyan">NIBM affiliated with Coventry University (UK)</span>.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  I love turning research papers into working prototypes, exploring the mathematics
                  behind neural networks, and designing AI products that feel effortless to use. I'm
                  a fast learner, a curious problem solver, and I collaborate well across teams.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "AI Research Interest",
                    "Fast Learner",
                    "Problem Solver",
                    "Team Player",
                    "Open to Remote",
                    "Open to Relocation",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-2 rounded-lg border border-border bg-white/[0.02] px-3 py-2 text-xs text-slate-300"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-brand-cyan shadow-[0_0_8px_#22d3ee]" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="glass-card flex flex-col justify-between rounded-2xl p-6"
                >
                  <span className="text-3xl font-bold text-gradient">{s.value}</span>
                  <span className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-28">
          <SectionHeader eyebrow="Skills" title="Technical Arsenal" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SKILLS.map((cat) => (
              <div
                key={cat.title}
                className="glass-card group rounded-2xl p-8 transition-transform hover:-translate-y-1"
              >
                <div
                  className={`mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} shadow-lg`}
                >
                  <cat.icon className="size-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <div className="mt-5 space-y-4">
                  {cat.items.map((it) => (
                    <div key={it.name}>
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="text-slate-300">{it.name}</span>
                        <span className="font-mono text-brand-cyan">{it.level}%</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${cat.accent}`}
                          style={{ width: `${it.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card mt-6 rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <Layers className="size-4 text-brand-cyan" />
              <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Tools &amp; Ecosystem
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOL_CHIPS.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-white/[0.03] px-3 py-1 text-xs text-slate-300 transition-colors hover:border-brand-blue/40 hover:text-brand-cyan"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative px-4 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader eyebrow="Projects" title="Featured AI Projects" />
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
              >
                All on GitHub <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <article
                  key={p.title}
                  className="glass-card group flex flex-col overflow-hidden rounded-3xl transition-transform hover:-translate-y-1.5"
                >
                  <div
                    className={`relative flex aspect-[16/10] items-center justify-center border-b border-border bg-gradient-to-br ${p.gradient}`}
                  >
                    <span className="text-6xl drop-shadow-lg">{p.icon}</span>
                    <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/30 px-2 py-0.5 text-[10px] font-mono text-white backdrop-blur">
                      ML
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-brand-blue/30 bg-brand-blue/10 px-2 py-0.5 text-[10px] font-mono text-brand-cyan"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs">
                      <a href="#" className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-brand-cyan">
                        <Github className="size-3.5" /> Code
                      </a>
                      <a href="#" className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-brand-cyan">
                        <ExternalLink className="size-3.5" /> Live
                      </a>
                      <a href="#" className="ml-auto inline-flex items-center gap-1 font-medium text-brand-cyan hover:underline">
                        Read more <ArrowRight className="size-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE / EDUCATION */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-28">
          <SectionHeader eyebrow="Timeline" title="Experience &amp; Education" />
          <div className="mt-12 grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="relative space-y-8 border-l border-border pl-8">
                {TIMELINE.map((t, i) => (
                  <div key={i} className="relative">
                    <div
                      className={`absolute -left-[41px] top-1.5 flex size-5 items-center justify-center rounded-full ring-4 ring-background ${
                        t.active
                          ? "bg-gradient-to-br from-brand-blue to-brand-purple shadow-[0_0_15px_#3b82f6]"
                          : "bg-muted"
                      }`}
                    >
                      {t.kind === "edu" ? (
                        <GraduationCap className="size-2.5 text-white" />
                      ) : (
                        <Briefcase className="size-2.5 text-white" />
                      )}
                    </div>
                    <div className="glass-card rounded-2xl p-5">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                            t.active
                              ? "bg-brand-blue/15 text-brand-cyan"
                              : "bg-white/5 text-muted-foreground"
                          }`}
                        >
                          {t.tag}
                        </span>
                        <span className="text-[11px] text-muted-foreground">{t.date}</span>
                      </div>
                      <h4 className="text-base font-semibold">{t.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="glass-card rounded-2xl border-brand-blue/30 bg-brand-blue/[0.06] p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Rocket className="size-4 text-brand-cyan" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                    Currently Seeking
                  </h4>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {[
                    "AI Engineer Internship",
                    "Machine Learning Internship",
                    "Data Science Internship",
                    "Software Engineer Internship",
                    "Remote Opportunities",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-brand-purple shadow-[0_0_8px_#a855f7]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card mt-6 rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Award className="size-4 text-brand-cyan" />
                  <h4 className="text-sm font-bold uppercase tracking-widest">Certificates</h4>
                </div>
                <ul className="space-y-3">
                  {CERTIFICATES.slice(0, 4).map((c) => (
                    <li key={c.title} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue/30 to-brand-purple/30">
                        <Sparkles className="size-3 text-brand-cyan" />
                      </div>
                      <div>
                        <div className="font-medium">{c.title}</div>
                        <div className="text-[11px] text-muted-foreground">{c.org}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GITHUB STATS */}
        <section className="mx-auto max-w-6xl px-4 py-28">
          <SectionHeader eyebrow="GitHub" title="Contribution &amp; Activity" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-2xl p-6 md:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="size-4 text-brand-cyan" />
                  <h4 className="text-sm font-semibold">Commit Activity — 12 months</h4>
                </div>
                <span className="font-mono text-xs text-muted-foreground">1,247 commits</span>
              </div>
              <ContributionGrid />
              <div className="mt-4 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0.1, 0.25, 0.45, 0.7, 1].map((o) => (
                    <span
                      key={o}
                      className="size-3 rounded-sm bg-brand-blue"
                      style={{ opacity: o }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h4 className="mb-4 text-sm font-semibold">Top Languages</h4>
              <div className="space-y-3">
                {[
                  { name: "Python", pct: 62, color: "bg-brand-blue" },
                  { name: "TypeScript", pct: 18, color: "bg-brand-cyan" },
                  { name: "Java", pct: 12, color: "bg-brand-purple" },
                  { name: "SQL", pct: 8, color: "bg-fuchsia-500" },
                ].map((l) => (
                  <div key={l.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{l.name}</span>
                      <span className="font-mono text-muted-foreground">{l.pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div className={`h-full ${l.color}`} style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient">42</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Repos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">128</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Stars</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="mx-auto max-w-6xl px-4 py-28">
          <SectionHeader eyebrow="Writing" title="Notes from the AI Journey" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BLOG.map((b) => (
              <a
                key={b.title}
                href="#"
                className="glass-card group flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2 py-0.5 text-brand-cyan">
                    {b.tag}
                  </span>
                  <span>{b.date}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug">{b.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{b.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-brand-cyan">
                  Read post <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-6xl px-4 py-28">
          <SectionHeader eyebrow="Kind words" title="Testimonials" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6">
                <div className="mb-4 text-3xl text-brand-cyan/70">"</div>
                <p className="text-sm leading-relaxed text-slate-300">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-xs font-bold text-white">
                    {t.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-28">
          <SectionHeader eyebrow="Contact" title="Let's build something intelligent." />
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            <div className="space-y-4 md:col-span-2">
              {[
                { icon: Mail, label: "Email", value: "hello@shabra.dev" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shabra-fathima" },
                { icon: Github, label: "GitHub", value: "github.com/shabra" },
                { icon: MapPin, label: "Location", value: "Sri Lanka · Remote-friendly" },
              ].map((c) => (
                <div key={c.label} className="glass-card flex items-center gap-4 rounded-2xl p-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20">
                    <c.icon className="size-4 text-brand-cyan" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3500);
              }}
              className="glass-card rounded-2xl p-6 md:col-span-3 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="mt-4">
                <Field label="Subject" name="subject" placeholder="Internship opportunity, collaboration..." />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-brand-blue/50"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {sent ? "Message sent ✓" : (<>Send Message <Send className="size-4" /></>)}
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-xs font-bold text-white">
                    SF
                  </div>
                  <span className="text-lg font-bold text-gradient">Shabra Fathima</span>
                </div>
                <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                  Aspiring AI/ML Engineer building intelligent systems, one model at a time.
                </p>
              </div>
              <FooterCol title="Quick Links" items={["Projects", "Skills", "Experience", "Contact"]} />
              <FooterCol title="Elsewhere" items={["GitHub", "LinkedIn", "Kaggle", "Medium"]} />
            </div>
            <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
              <p>© 2026 Shabra Fathima. All rights reserved.</p>
              <p>Built with React, TanStack Start, Tailwind &amp; AI.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating controls */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass-card fixed bottom-24 right-6 z-40 flex size-11 items-center justify-center rounded-full text-brand-cyan transition-transform hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-4" />
        </button>
      )}

      <Chatbot />
    </div>
  );
}

/* ---------- Sub-components ---------- */

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">
        <Cpu className="size-3" /> {eyebrow}
      </div>
      <h2
        className="mt-4 text-3xl font-bold tracking-tight md:text-4xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan" />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-brand-blue/50"
      />
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {title}
      </h5>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-sm text-slate-300 transition-colors hover:text-brand-cyan">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContributionGrid() {
  // Deterministic pseudo-random pattern (no runtime state, SSR-safe)
  const weeks = 26;
  const days = 7;
  return (
    <div className="flex gap-[3px] overflow-hidden">
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {Array.from({ length: days }).map((_, d) => {
            const seed = (w * 7 + d) * 9301 + 49297;
            const rand = ((seed % 233280) / 233280);
            const intensity = rand < 0.35 ? 0 : rand < 0.6 ? 0.25 : rand < 0.8 ? 0.5 : rand < 0.93 ? 0.75 : 1;
            return (
              <span
                key={d}
                className="size-3 rounded-sm bg-brand-blue"
                style={{ opacity: intensity === 0 ? 0.06 : intensity }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
