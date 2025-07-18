"use client";
import Link from "next/link";

const data = [
  {
    emoji: "👮‍♂️",
    title: "Polisi",
    desc: "Menjaga keamanan, menolong masyarakat, dan menegakkan hukum di jalan raya.",
    color: "from-sky-200 to-blue-100 border-blue-300 text-blue-900",
  },
  {
    emoji: "👩‍💼",
    title: "Jaksa",
    desc: "Menuntut pelaku kejahatan di pengadilan dan memastikan hukum ditegakkan dengan adil.",
    color: "from-yellow-200 to-orange-100 border-yellow-300 text-yellow-900",
  },
  {
    emoji: "⚖️",
    title: "Hakim",
    desc: "Memimpin persidangan dan memutuskan perkara sesuai hukum.",
    color: "from-pink-200 to-purple-100 border-pink-300 text-pink-900",
  },
];

export default function Infografis() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 via-pink-100 to-yellow-100 p-8 font-[Quicksand,sans-serif] transition-all duration-500">
      <h1 className="text-4xl font-extrabold text-emerald-600 mb-8 drop-shadow-lg tracking-tight animate-fade-in">
        Infografis Penegak Hukum
      </h1>
      <div className="flex flex-col gap-10 w-full max-w-2xl animate-fade-in">
        {data.map((item, i) => (
          <div
            key={i}
            className={`relative flex items-center gap-6 bg-gradient-to-br ${item.color} border-4 rounded-2xl shadow-xl px-6 py-8 transition-all duration-500 animate-slide-in`}
            style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
          >
            <span className="text-6xl drop-shadow-lg animate-bounce-slow">
              {item.emoji}
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-2xl mb-2 tracking-wide">
                {item.title}
              </span>
              <span className="text-lg text-gray-700">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-base text-emerald-700 font-semibold animate-fade-in">
        Setiap penegak hukum punya tugas penting untuk menjaga keadilan dan
        ketertiban di masyarakat!
      </div>
      <Link
        href="/"
        className="mt-8 text-emerald-700 underline hover:text-pink-500 font-semibold transition-colors duration-200 animate-fade-in"
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
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.7s both;
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
