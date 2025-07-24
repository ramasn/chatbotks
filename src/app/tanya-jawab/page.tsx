// To render markdown beautifully, ensure you have 'react-markdown' installed: npm install react-markdown
"use client";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useState, useRef } from "react";

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export default function TanyaJawab() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const systemMsg = {
        role: "system",
        content:
          "Anda adalah seorang AI dengan gelar S3 di bidang hukum, sangat ahli tentang penegak hukum di Indonesia. Jawablah semua pertanyaan dengan bahasa Indonesia yang ramah, lembut, dan mudah dipahami oleh anak Sekolah Dasar. Jangan gunakan istilah sulit, dan selalu berikan penjelasan yang sederhana dan menyenangkan. Jawaban jangan terlalu panjang, maksimal 3 kalimat sederhana.",
      };
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            process.env.NEXT_PUBLIC_GROQ_API_KEYS || process.env.GROQ_API_KEYS
          }`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [systemMsg, userMsg],
          max_tokens: 512,
        }),
      });
      const data = await res.json();
      let botMsg =
        data.choices?.[0]?.message?.content || "Maaf, terjadi kesalahan.";
      // Truncate to 3 sentences max
      const sentences = botMsg.split(/(?<=[.!?])\s+/);
      if (sentences.length > 3) {
        botMsg = sentences.slice(0, 3).join(" ") + " ...";
      }
      setMessages((msgs) => [...msgs, { role: "assistant", content: botMsg }]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Maaf, terjadi kesalahan." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function resetChat() {
    setMessages([]);
    setInput("");
    inputRef.current?.focus();
  }

  return (
    <div className="text-black min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-fuchsia-100 to-cyan-100 p-4 font-[Quicksand,sans-serif] transition-all duration-500">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-600 mb-4 drop-shadow-lg tracking-tight animate-fade-in">
        Tanya Jawab
      </h1>
      <div className="w-full max-w-md bg-white/80 rounded-2xl shadow-xl p-4 flex flex-col gap-2 mb-4 animate-fade-in h-[60vh] sm:h-[70vh] overflow-y-auto">
        {messages.length === 0 && (
          <div className="text-center text-fuchsia-400 italic">
            Mulai tanya apa saja!
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col items-${
              msg.role === "user" ? "end" : "start"
            } animate-chat-bubble`}
          >
            {msg.role === "assistant" ? (
              <div className="rounded-xl px-4 py-3 shadow font-semibold mb-1 max-w-[80%] break-words transition-all duration-300 bg-gradient-to-br from-cyan-200 to-fuchsia-200 text-fuchsia-900 self-start prose prose-sm prose-p:my-1">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ) : (
              <div className="rounded-xl px-4 py-3 shadow font-semibold mb-1 max-w-[80%] break-words transition-all duration-300 bg-gradient-to-br from-emerald-200 to-blue-100 text-emerald-900 self-end">
                {msg.content}
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex flex-col items-start animate-chat-bubble">
            <div className="bg-gradient-to-br from-cyan-200 to-fuchsia-200 text-fuchsia-900 rounded-xl px-4 py-3 shadow font-semibold self-start transition-all duration-300 opacity-70">
              ...
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={sendMessage}
        className="w-full max-w-md flex gap-2 items-center animate-fade-in"
      >
        <input
          ref={inputRef}
          type="text"
          className="flex-1 rounded-lg border border-fuchsia-200 px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-fuchsia-300 transition-all"
          placeholder="Tulis pertanyaan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          maxLength={200}
        />
        <button
          type="submit"
          className="cursor-pointer bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-bold px-4 py-2 rounded-lg shadow transition-colors duration-200 disabled:opacity-50"
          disabled={loading || !input.trim()}
        >
          Kirim
        </button>
        <button
          type="button"
          className="cursor-pointer ml-2 bg-yellow-100 hover:bg-yellow-200 text-fuchsia-700 font-bold px-3 py-2 rounded-lg shadow transition-colors duration-200"
          onClick={resetChat}
          disabled={loading}
        >
          Reset
        </button>
      </form>
      <Link
        href="/"
        className="mt-4 text-cyan-700 underline hover:text-fuchsia-500 font-semibold transition-colors duration-200"
      >
        ← Kembali ke Beranda
      </Link>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s;
        }
        @keyframes chat-bubble {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-chat-bubble {
          animation: chat-bubble 0.5s;
        }
        .prose {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}
