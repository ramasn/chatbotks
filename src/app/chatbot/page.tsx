"use client";
import Link from "next/link";
import { useState } from "react";

const tree = {
  q: "Siapa yang ingin kamu ketahui?",
  options: [
    {
      a: "Polisi",
      next: {
        q: "Apa tugas utama Polisi?",
        options: [
          {
            a: "Menjaga keamanan",
            next: "Benar! Polisi menjaga keamanan dan ketertiban.",
          },
          { a: "Memasak", next: "Ups, itu bukan tugas Polisi!" },
        ],
      },
    },
    {
      a: "Jaksa",
      next: {
        q: "Apa tugas utama Jaksa?",
        options: [
          {
            a: "Menuntut pelaku kejahatan",
            next: "Betul! Jaksa menuntut pelaku kejahatan di pengadilan.",
          },
          { a: "Mengajar di sekolah", next: "Ups, itu bukan tugas Jaksa!" },
        ],
      },
    },
    {
      a: "Hakim",
      next: {
        q: "Apa tugas utama Hakim?",
        options: [
          {
            a: "Memutuskan perkara di pengadilan",
            next: "Hebat! Hakim memutuskan perkara di pengadilan.",
          },
          { a: "Membuat kue", next: "Ups, itu bukan tugas Hakim!" },
        ],
      },
    },
  ],
};

type Node =
  | typeof tree
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { q: string; options: { a: string; next: any }[] }
  | string;

type ChatStep =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { type: "q"; text: string; options: { a: string; next: any }[] }
  | { type: "a"; text: string }
  | { type: "end"; text: string };

function getSteps(node: Node, path: number[]): ChatStep[] {
  const steps: ChatStep[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = node;
  for (let i = 0; i < path.length; i++) {
    steps.push({ type: "q", text: current.q, options: current.options });
    const idx = path[i];
    steps.push({ type: "a", text: current.options[idx].a });
    current = current.options[idx].next;
  }
  if (typeof current === "string") {
    steps.push({ type: "end", text: current });
  } else {
    steps.push({ type: "q", text: current.q, options: current.options });
  }
  return steps;
}

export default function Chatbot() {
  const [path, setPath] = useState<number[]>([]);
  const steps = getSteps(tree, path);
  const lastStep = steps[steps.length - 1];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-fuchsia-100 to-cyan-100 p-8 font-[Quicksand,sans-serif] transition-all duration-500">
      <h1 className="text-4xl font-extrabold text-fuchsia-600 mb-8 drop-shadow-lg tracking-tight animate-fade-in">
        Chatbot Penegak Hukum
      </h1>
      <div className="w-full max-w-lg bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col gap-4 mb-8 animate-fade-in">
        {steps.map((step, i) =>
          step.type === "q" ? (
            <div
              key={i}
              className="flex flex-col items-end animate-chat-bubble"
            >
              <div className="bg-gradient-to-br from-cyan-200 to-fuchsia-200 text-fuchsia-900 rounded-xl px-4 py-3 shadow font-semibold mb-2 self-start transition-all duration-300">
                {step.text}
              </div>
              {i === steps.length - 1 &&
                (!("type" in lastStep) || lastStep.type === "q") && (
                  <div className="flex flex-col gap-2 mt-2">
                    {step.options.map((opt, idx) => (
                      <button
                        key={idx}
                        className="bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-800 rounded-lg px-4 py-2 shadow transition-all duration-200 font-bold border border-fuchsia-200"
                        onClick={() => setPath([...path, idx])}
                      >
                        {opt.a}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ) : step.type === "a" ? (
            <div
              key={i}
              className="flex flex-col items-end animate-chat-bubble"
            >
              <div className="bg-gradient-to-br from-emerald-200 to-blue-100 text-emerald-900 rounded-xl px-4 py-3 shadow font-semibold self-end transition-all duration-300">
                {step.text}
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="flex flex-col items-end animate-chat-bubble"
            >
              <div className="bg-gradient-to-br from-yellow-100 to-emerald-100 text-emerald-900 rounded-xl px-4 py-3 shadow font-semibold self-end transition-all duration-300">
                {step.text}
              </div>
              <button
                className="mt-2 px-4 py-2 bg-fuchsia-200 rounded-lg text-fuchsia-900 font-bold shadow hover:bg-fuchsia-300"
                onClick={() => setPath([])}
              >
                Coba Lagi
              </button>
            </div>
          )
        )}
      </div>
      <Link
        href="/"
        className="mt-6 text-cyan-700 underline hover:text-fuchsia-500 font-semibold transition-colors duration-200"
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
      `}</style>
    </div>
  );
}
