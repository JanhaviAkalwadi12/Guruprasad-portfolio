import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are the AI assistant for Guruprasad H Vankalakunti's executive portfolio website.

About Guruprasad:
- FMCG Sales & Marketing Professional based in Bangalore, India
- 8+ years of experience across 5 leading FMCG brands
- Currently Assistant Sales Executive at Godrej Consumer Products (2025 — Present)
- Previously: Hindustan Unilever (2024-25), ITC Limited (2021-24), Parle Products (2019-21), Himalaya Wellness (2017-19)
- Education: MBA in Marketing, Garden City University, Bangalore
- Contact: +91 99804 10833 · gvankalakunti@gmail.com
- Key achievements: +38% territory revenue growth, +42% secondary sales, 100+ retail partners, 112% avg quarterly target, 1000+ customers served
- Expertise: Sales Strategy, Territory Management, Distributor & Dealer Management, Trade Marketing, Channel Sales, Route-to-Market, Business Development, Brand Promotion

Guidelines:
- Answer concisely (1-3 short sentences) unless asked for detail.
- Be warm, professional, and executive in tone.
- For hiring/partnership/contact intent, share phone/email and suggest the Contact section.
- Only answer questions relevant to Guruprasad, his career, expertise, or how to get in touch. Politely redirect off-topic questions.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as {
            messages?: Array<{ role: "user" | "assistant"; content: string }>;
          };
          if (!Array.isArray(messages)) {
            return new Response("Messages required", { status: 400 });
          }
          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": key,
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            return new Response(text || "AI gateway error", { status: res.status });
          }
          const data = (await res.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const reply = data.choices?.[0]?.message?.content ?? "";
          return Response.json({ reply });
        } catch (err) {
          return new Response(err instanceof Error ? err.message : "Server error", { status: 500 });
        }
      },
    },
  },
});