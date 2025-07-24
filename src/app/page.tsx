"use client";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 font-[Quicksand,sans-serif]">
      <div className="text-center mb-12 animate-bounce-slow">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text mb-4 drop-shadow-lg">
          Peran Penegak Hukum
        </h1>
        <div className="text-6xl mb-4 animate-wiggle">⚖️</div>
        <p className="text-lg text-blue-700 text-center max-w-xl mx-auto leading-relaxed">
          Yuk, kenali peran Polisi, Jaksa, dan Hakim di Indonesia dengan cara
          yang seru dan mudah dipahami! 🎉
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mb-8">
        <Link
          href="/flashcard"
          className="group rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col items-center p-8 border-4 border-yellow-400 hover:border-yellow-500 transform hover:scale-105 hover:-rotate-1"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce">📚</span>
          <span className="font-bold text-xl text-yellow-800 mb-2">
            Kartu Pintar
          </span>
          <span className="text-sm text-yellow-700 text-center leading-relaxed">
            Belajar lewat flashcard yang seru!
          </span>
        </Link>

        <Link
          href="/chatbot"
          className="group rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 hover:from-green-300 hover:to-emerald-300 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col items-center p-8 border-4 border-green-400 hover:border-green-500 transform hover:scale-105 hover:rotate-1"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce">🤖</span>
          <span className="font-bold text-xl text-green-800 mb-2">Chatbot</span>
          <span className="text-sm text-green-700 text-center leading-relaxed">
            Tanya jawab dengan robot pintar!
          </span>
        </Link>

        <Link
          href="/infografis"
          className="group rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 hover:from-pink-300 hover:to-rose-300 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col items-center p-8 border-4 border-pink-400 hover:border-pink-500 transform hover:scale-105 hover:-rotate-1"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce">🖼️</span>
          <span className="font-bold text-xl text-pink-800 mb-2">
            Infografis
          </span>
          <span className="text-sm text-pink-700 text-center leading-relaxed">
            Lihat gambar-gambar menarik!
          </span>
        </Link>

        <Link
          href="/tanya-jawab"
          className="group rounded-2xl bg-gradient-to-br from-purple-200 to-fuchsia-200 hover:from-purple-300 hover:to-fuchsia-300 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col items-center p-8 border-4 border-purple-400 hover:border-purple-500 transform hover:scale-105 hover:rotate-1"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce">💬</span>
          <span className="font-bold text-xl text-purple-800 mb-2">
            Tanya Jawab
          </span>
          <span className="text-sm text-purple-700 text-center leading-relaxed">
            Diskusi santai dengan AI ahli!
          </span>
        </Link>

        <a
          href="https://wayground.com/join/quiz/687a42d282ad0b6e864fa846/start?preview=true"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-gradient-to-br from-blue-200 to-cyan-200 hover:from-blue-300 hover:to-cyan-300 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col items-center p-8 border-4 border-blue-400 hover:border-blue-500 transform hover:scale-105 hover:-rotate-1"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce">🎮</span>
          <span className="font-bold text-xl text-blue-800 mb-2">
            Main Kuis
          </span>
          <span className="text-sm text-blue-700 text-center leading-relaxed">
            Ayo coba kuis seru!
          </span>
        </a>
      </div>

      <div className="mt-8 p-6 bg-white/60 rounded-2xl shadow-lg border-2 border-pink-200">
        <div className="flex items-center justify-center gap-2 text-pink-600">
          <span className="text-2xl">🌟</span>
          <span className="font-bold text-lg">Selamat Belajar!</span>
          <span className="text-2xl">🌟</span>
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-600 bg-white/40 px-4 py-2 rounded-full">
        © 2025 Website Edukasi SD - Peran Penegak Hukum 🏫
      </footer>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes wiggle {
          0%,
          7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%,
          100% {
            transform: rotateZ(0);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s infinite;
        }
      `}</style>
    </div>
  );
}
