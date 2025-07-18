"use client";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    emoji: "👮‍♂️",
    title: "Polisi",
    desc: "Polisi bertugas menjaga keamanan dan ketertiban masyarakat. Polisi juga membantu orang yang membutuhkan dan menegakkan hukum di jalan raya.",
    color: "from-blue-200 to-blue-100 border-blue-400 text-blue-800",
  },
  {
    emoji: "⚖️",
    title: "Hakim",
    desc: "Hakim memimpin persidangan di pengadilan dan memutuskan siapa yang benar atau salah sesuai hukum.",
    color: "from-pink-200 to-pink-100 border-pink-400 text-pink-800",
  },
  {
    emoji: "👩‍💼",
    title: "Jaksa",
    desc: "Jaksa bertugas menuntut pelaku kejahatan di pengadilan dan memastikan hukum ditegakkan dengan adil.",
    color: "from-yellow-200 to-yellow-100 border-yellow-400 text-yellow-800",
  },
];

export default function Flashcard() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handlePrev = () => {
    setFlipped(false);
    setTimeout(
      () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length),
      200
    );
  };
  const handleNext = () => {
    setFlipped(false);
    setTimeout(() => setCurrent((prev) => (prev + 1) % cards.length), 200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-sky-100 to-emerald-100 p-4 sm:p-8 font-[Quicksand,sans-serif] transition-all duration-500">
      <h1 className="text-4xl font-extrabold text-rose-500 mb-8 drop-shadow-lg tracking-tight animate-fade-in text-center">
        Kartu Pintar Penegak Hukum
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8 w-full max-w-md mx-auto">
        {/* Prev button for sm+ screens */}
        <button
          aria-label="Sebelumnya"
          onClick={handlePrev}
          className="text-black hidden sm:inline rounded-full bg-white/80 hover:bg-rose-200 border-2 border-rose-300 shadow-lg p-3 text-2xl transition-all duration-200 active:scale-90"
        >
          ←
        </button>
        {/* Card */}
        <div
          className="relative w-full max-w-xs h-56 perspective-1000 cursor-pointer"
          onClick={() => setFlipped((f) => !f)}
        >
          <div
            className={`absolute w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div
              className={`absolute w-full h-full flex flex-col items-center justify-center rounded-2xl shadow-2xl bg-gradient-to-br ${cards[current].color} border-4 select-none [backface-visibility:hidden]`}
            >
              <span className="text-6xl mb-2 animate-bounce-slow">
                {cards[current].emoji}
              </span>
              <span className="font-bold text-2xl text-center tracking-wide animate-fade-in">
                {cards[current].title}
              </span>
              <span className="text-xs text-gray-400 mt-2">
                (Klik untuk membalik)
              </span>
            </div>
            {/* Back */}
            <div
              className={`absolute w-full h-full flex flex-col items-center justify-center rounded-2xl shadow-2xl bg-white/90 border-4 ${cards[current].color} select-none [transform:rotateY(180deg)] [backface-visibility:hidden]`}
            >
              <span className="text-lg text-center text-gray-700 px-4 animate-fade-in">
                {cards[current].desc}
              </span>
            </div>
          </div>
        </div>
        {/* Next button for sm+ screens */}
        <button
          aria-label="Selanjutnya"
          onClick={handleNext}
          className="text-black hidden sm:inline rounded-full bg-white/80 hover:bg-emerald-200 border-2 border-emerald-300 shadow-lg p-3 text-2xl transition-all duration-200 active:scale-90"
        >
          →
        </button>
      </div>
      {/* Prev/Next buttons for xs screens */}
      <div className="flex sm:hidden w-full max-w-xs mx-auto gap-4 mb-4">
        <button
          aria-label="Sebelumnya"
          onClick={handlePrev}
          className="text-black flex-1 rounded-full bg-white/80 hover:bg-rose-200 border-2 border-rose-300 shadow-lg p-3 text-2xl transition-all duration-200 active:scale-90"
        >
          ←
        </button>
        <button
          aria-label="Selanjutnya"
          onClick={handleNext}
          className="text-black flex-1 rounded-full bg-white/80 hover:bg-emerald-200 border-2 border-emerald-300 shadow-lg p-3 text-2xl transition-all duration-200 active:scale-90"
        >
          →
        </button>
      </div>
      <div className="flex gap-2 mb-8">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-rose-400 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <Link
        href="/"
        className="mt-6 text-emerald-700 underline hover:text-rose-500 font-semibold transition-colors duration-200"
      >
        ← Kembali ke Beranda
      </Link>
      <footer className="mt-8 text-xs text-gray-500 text-center w-full">
        © 2024 Chatbot Edukasi KKN PPM UGM
      </footer>
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
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
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}
