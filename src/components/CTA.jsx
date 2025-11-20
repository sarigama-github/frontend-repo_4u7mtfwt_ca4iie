export default function CTA() {
  return (
    <section id="visit" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Come by. Stay a while.</h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">Find us in the heart of the arts district. Open late, always lively. Walk‑ins welcome, reservations recommended on weekends.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#reserve" className="px-6 py-3 rounded-full bg-emerald-400 text-emerald-900 font-semibold hover:bg-white transition shadow-lg">Reserve now</a>
          <a href="https://maps.google.com" target="_blank" className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 font-semibold hover:bg-white/20 transition">Get directions</a>
        </div>
        <p className="mt-6 text-white/60">Open daily · 11am – 11pm</p>
      </div>
    </section>
  )
}
