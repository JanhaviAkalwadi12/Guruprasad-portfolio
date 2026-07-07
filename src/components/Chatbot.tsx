import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, ArrowRight } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const CONTACT_KEYWORDS = [
  "contact", "reach", "email", "phone", "call", "mail",
  "get in touch", "connect", "hire", "message", "number", "whatsapp",
];

function wantsContact(text: string) {
  const t = text.toLowerCase();
  return CONTACT_KEYWORDS.some((k) => t.includes(k));
}

const SUGGESTIONS = [
  "Summarize Guruprasad's experience",
  "Which brands has he worked with?",
  "Key achievements?",
  "How can I contact him?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Guruprasad's AI assistant. Ask me about his FMCG experience, achievements, or how to get in touch.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        const friendly =
          res.status === 429
            ? "Too many requests right now. Please try again in a moment."
            : res.status === 402
            ? "AI credits exhausted. Please try again later."
            : errText || "Something went wrong.";
        setMessages((m) => [...m, { role: "assistant", content: friendly }]);
      } else {
        const data = (await res.json()) as { reply?: string };
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.reply || "(no response)" },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        aria-label={open ? "Close AI chat" : "Open AI chat"}
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white shadow-[0_10px_40px_-10px_rgba(217,70,239,0.7)] ring-1 ring-white/20 transition hover:brightness-110"
        data-cursor-hover
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-fuchsia-500/40" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 z-[60] flex h-[min(560px,80vh)] w-[min(380px,92vw)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-fuchsia-600/20 to-violet-600/20 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">AI Assistant</div>
                <div className="text-[11px] text-white/60">Ask about Guruprasad's career</div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
              </span>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => {
                const prevUser = i > 0 ? messages[i - 1] : null;
                const showContactCta =
                  m.role === "assistant" &&
                  i > 0 &&
                  (wantsContact(m.content) ||
                    (prevUser?.role === "user" && wantsContact(prevUser.content)));
                return (
                  <div
                    key={i}
                    className={`flex flex-col gap-2 ${m.role === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white"
                          : "border border-white/10 bg-white/5 text-white/90"
                      }`}
                    >
                      {m.content}
                    </div>
                    {showContactCta && (
                      <button
                        onClick={() => {
                          setOpen(false);
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                          else window.location.hash = "#contact";
                        }}
                        className="group inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3 py-1.5 text-[11px] font-medium text-fuchsia-200 transition hover:border-fuchsia-300 hover:bg-fuchsia-500/20 hover:text-white"
                      >
                        Jump to Contact
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    )}
                  </div>
                );
              })}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && !loading && (
              <div className="flex flex-wrap gap-1.5 border-t border-white/10 p-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 transition hover:border-fuchsia-400/40 hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-fuchsia-400/50 focus:outline-none"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white transition hover:brightness-110 disabled:opacity-40"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}