import { motion } from 'framer-motion'

const awards = [
  { year: '2025', title: 'Community Favorite', org: 'City Eats' },
  { year: '2024', title: 'Best New Fast Casual', org: 'Food & Fun' },
  { year: '2023', title: 'Design of the Year', org: 'Taste Makers' },
]

export default function Awards() {
  return (
    <section id="awards" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Recognition</h2>
          <p className="text-white/70 max-w-lg">We obsess over details—from typography to texture—earning nods from design and food juries alike.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white/10 border border-white/15 text-white">
              <p className="text-5xl font-extrabold">{a.year}</p>
              <p className="mt-2 text-lg font-semibold">{a.title}</p>
              <p className="text-white/70">{a.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
