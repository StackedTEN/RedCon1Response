import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-[#0a0f1c] text-white">
      <h1 className="text-5xl font-bold mb-6">
        From <span className="text-[#E63946]">Automation</span> to <span className="text-[#00C2FF]">Autonomy</span>
      </h1>
      <p className="text-lg text-white/80 max-w-2xl">
        The world’s first <strong>Cognitive Security Fabric</strong> — adaptive, explainable AI that detects, decides, and responds in real time.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/contact" className="px-6 py-3 bg-[#E63946] rounded-xl hover:bg-red-600 transition">Request a Demo</Link>
        <Link href="/product" className="px-6 py-3 border border-[#00C2FF] rounded-xl hover:bg-[#00C2FF] hover:text-black transition">See It in Action</Link>
      </div>
    </main>
  );
}
