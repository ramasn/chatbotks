import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-8 drop-shadow-lg text-center">
        Peran Penegak Hukum
      </h1>
      <p className="text-lg text-blue-700 mb-10 text-center max-w-xl">
        Yuk, kenali peran Polisi, Jaksa, dan Hakim di Indonesia dengan cara yang
        seru dan mudah dipahami!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        <Link
          href="/flashcard"
          className="rounded-xl bg-yellow-200 hover:bg-yellow-300 transition shadow-lg flex flex-col items-center p-6 border-4 border-yellow-400"
        >
          <span className="text-2xl mb-2">📚</span>
          <span className="font-bold text-lg text-yellow-800">
            Kartu Pintar
          </span>
          <span className="text-sm text-yellow-700 mt-1">
            Belajar lewat flashcard
          </span>
        </Link>
        <Link
          href="/chatbot"
          className="rounded-xl bg-green-200 hover:bg-green-300 transition shadow-lg flex flex-col items-center p-6 border-4 border-green-400"
        >
          <span className="text-2xl mb-2">🤖</span>
          <span className="font-bold text-lg text-green-800">Chatbot</span>
          <span className="text-sm text-green-700 mt-1">Tanya jawab seru!</span>
        </Link>
        <Link
          href="/infografis"
          className="rounded-xl bg-pink-200 hover:bg-pink-300 transition shadow-lg flex flex-col items-center p-6 border-4 border-pink-400"
        >
          <span className="text-2xl mb-2">🖼️</span>
          <span className="font-bold text-lg text-pink-800">Infografis</span>
          <span className="text-sm text-pink-700 mt-1">
            Lihat gambar menarik
          </span>
        </Link>
        <Link
          href="/tanya-jawab"
          className="w-full md:w-auto bg-gradient-to-br from-fuchsia-400 to-cyan-300 hover:from-fuchsia-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-2xl shadow-lg text-xl transition-all duration-200 mb-4 text-center"
          style={{ display: "block" }}
        >
          Tanya Jawab
        </Link>
        <a
          href="https://wayground.com/join/quiz/687a42d282ad0b6e864fa846/start?preview=true"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-200 hover:bg-blue-300 transition shadow-lg flex flex-col items-center p-6 border-4 border-blue-400"
        >
          <span className="text-2xl mb-2">🎮</span>
          <span className="font-bold text-lg text-blue-800">Main Kuis</span>
          <span className="text-sm text-blue-700 mt-1">Ayo coba kuis!</span>
        </a>
      </div>
      <footer className="mt-12 text-xs text-gray-500">
        © 2025 Website Edukasi SD - Peran Penegak Hukum
      </footer>
    </div>
  );
}
