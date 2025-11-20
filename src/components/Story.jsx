import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Our Story</h2>
            <p className="mt-6 text-white/80 leading-relaxed">Born from late‑night cravings and a love for high‑contrast flavor, Divines reimagines fast food as a creative canvas. We source from farms we know, celebrate global street food culture, and craft every bite with intention.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-white/80">
              <div className="p-4 rounded-xl bg-white/10 border border-white/10"><p className="text-2xl font-bold text-white">2019</p><p className="text-sm">Founded</p></div>
              <div className="p-4 rounded-xl bg-white/10 border border-white/10"><p className="text-2xl font-bold text-white">18</p><p className="text-sm">Chefs</p></div>
              <div className="p-4 rounded-xl bg-white/10 border border-white/10"><p className="text-2xl font-bold text-white">3</p><p className="text-sm">Locations</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/15">
              <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1400&auto=format&fit=crop" alt="Kitchen" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 px-4 py-3 rounded-xl bg-emerald-400 text-emerald-900 font-semibold shadow-lg">Sustainable sourcing</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
