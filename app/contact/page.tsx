'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const formAction = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORMSPREE_ID"}`;
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 text-white bg-[#0a0f1c]">
      <h1 className="text-4xl font-bold mb-6">Request a Demo</h1>
      <form action={formAction} method="POST" className="space-y-5" onSubmit={() => setStatus("Thanks! We'll be in touch shortly.")}>
        <div>
          <label className="block text-sm text-white/70">Name</label>
          <input name="name" required className="w-full mt-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none" />
        </div>
        <div>
          <label className="block text-sm text-white/70">Email</label>
          <input type="email" name="email" required className="w-full mt-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none" />
        </div>
        <div>
          <label className="block text-sm text-white/70">Message</label>
          <textarea name="message" rows={4} className="w-full mt-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none"></textarea>
        </div>
        <button type="submit" className="px-6 py-3 bg-[#E63946] rounded-xl hover:bg-red-600 transition">Send</button>
        {status && <div className="mt-3 text-[#00C2FF]">{status}</div>}
      </form>
    </section>
  );
}
