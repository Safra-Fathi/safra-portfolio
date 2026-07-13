import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const QUICK_REPLIES = [
  "Who is Shabra?",
  "What projects has she built?",
  "What tech does she know?",
  "Is she open to internships?",
  "How can I contact her?",
];

function answerFor(q: string): string {
  const s = q.toLowerCase();
  if (/(who|about|shabra)/.test(s))
    return "Shabra Fathima is a final-year B.Sc. Software Engineering student at NIBM in collaboration with Coventry University (UK). She's an aspiring AI/ML Engineer focused on Computer Vision, Deep Learning, Data Science and Intelligent Systems.";
  if (/(project|build|portfolio|work)/.test(s))
    return "She's built 10+ AI projects including Plant Disease Detection, Face Mask Detection, Customer Churn Prediction, Fake News Detection, Sentiment Analysis, Medical Image Classification and an LLM-powered chatbot. Scroll to the Featured Projects section to explore them.";
  if (/(tech|stack|skill|language|tool|framework)/.test(s))
    return "Python, Java, TypeScript, SQL · TensorFlow, PyTorch, Scikit-Learn, OpenCV, Pandas, NumPy · FastAPI, Flask · Docker, Git, Linux · MySQL, MongoDB · React, Next.js, Tailwind. Currently learning AWS & Azure.";
  if (/(study|studying|education|degree|university|nibm|coventry)/.test(s))
    return "She's in her final year of B.Sc. Software Engineering at NIBM affiliated with Coventry University (UK). She also holds an HND in Software Engineering (Merit Pass) and an HND in English.";
  if (/(intern|hire|available|opportunit|job|work)/.test(s))
    return "Yes — actively seeking AI Engineer, Machine Learning, Data Science or Software Engineer internships. Open to remote work and relocation.";
  if (/(contact|email|reach|linkedin|github|social)/.test(s))
    return "You can reach her via the Contact section below — email, LinkedIn, and GitHub links are all there. She's based in Sri Lanka and available worldwide (remote).";
  if (/(resume|cv|download)/.test(s))
    return "Her resume is available via the 'Download Resume' button in the hero section.";
  if (/(hello|hi|hey|greet)/.test(s))
    return "Hello! 👋 I'm Shabra's AI Portfolio Assistant. Ask me anything about her projects, skills, education, or how to reach her.";
  return "Great question! Try asking about her projects, skills, education, internship availability, or how to get in touch. You can also scroll through the sections below.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hello! 👋 I'm Shabra's AI Portfolio Assistant. Ask me anything about her projects, skills, education, experience, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answerFor(q) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="glass-card mb-4 w-[22rem] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl shadow-2xl animate-fade-up">
          <div className="flex items-center justify-between border-b border-border bg-white/[0.03] p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan shadow-lg">
                <Bot className="size-4 text-white" />
              </div>
              <div>
                <h5 className="text-sm font-semibold">Shabra's AI Assistant</h5>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <p className="text-[10px] text-muted-foreground">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex h-72 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-relaxed ${
                  m.role === "bot"
                    ? "self-start rounded-tl-sm bg-white/[0.05] text-foreground"
                    : "self-end rounded-tr-sm bg-gradient-to-br from-brand-blue to-brand-purple text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="self-start rounded-2xl rounded-tl-sm bg-white/[0.05] px-3.5 py-3">
                <div className="flex gap-1">
                  <span className="size-1.5 animate-bounce rounded-full bg-brand-cyan [animation-delay:0ms]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-brand-blue [animation-delay:120ms]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-brand-purple [animation-delay:240ms]" />
                </div>
              </div>
            )}
          </div>

          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 border-t border-border px-4 pt-3">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[10px] text-muted-foreground transition-colors hover:border-brand-blue/40 hover:text-brand-cyan"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-black/20 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Shabra..."
              className="flex-1 rounded-lg border border-border bg-white/[0.04] px-3 py-2 text-xs outline-none placeholder:text-muted-foreground/60 focus:border-brand-blue/50"
            />
            <button
              type="submit"
              className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple text-white transition-transform hover:scale-105"
              aria-label="Send"
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative"
        aria-label="Open AI assistant"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan opacity-60 blur transition duration-500 group-hover:opacity-100" />
        <div className="glass-card relative flex size-14 items-center justify-center rounded-full">
          {open ? (
            <X className="size-5 text-brand-cyan" />
          ) : (
            <Sparkles className="size-5 text-brand-cyan" />
          )}
        </div>
      </button>
    </div>
  );
}
