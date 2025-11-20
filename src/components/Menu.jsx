import { motion } from 'framer-motion'

const items = [
  { name: 'Divine Smash Burger', desc: 'Double smashed beef, caramelized onions, house sauce', price: 10, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Spicy Fried Chicken', desc: 'Buttermilk brined, chili honey glaze, pickles', price: 9, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Truffle Parmesan Fries', desc: 'Hand cut, truffle oil, parmesan snow', price: 6, img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Green Goddess Salad', desc: 'Crisp greens, avocado, herby dressing', price: 8, img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Matcha Shake', desc: 'Soft serve, ceremonial matcha, mochi crumble', price: 5, img: 'https://images.unsplash.com/photo-1542444459-db63c7b4f481?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Yuzu Soda', desc: 'Sparkling citrus pick‑me‑up', price: 4, img: 'https://images.unsplash.com/photo-1600275669439-14e2bde877b8?q=80&w=1200&auto=format&fit=crop' },
]

export default function Menu() {
  return (
    <section id="menu" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Our Signatures</h2>
            <p className="mt-3 text-white/70 max-w-xl">Sourced locally, cooked to order. Classics elevated with our playful twist.</p>
          </div>
          <a href="#reserve" className="hidden md:inline-flex px-4 py-2 rounded-full bg-amber-300 text-slate-900 font-semibold hover:bg-white transition">Reserve</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group rounded-2xl overflow-hidden bg-white/10 border border-white/15 backdrop-blur">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 text-white">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg">{it.name}</h3>
                  <span className="font-bold">${it.price}</span>
                </div>
                <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
                <button className="mt-4 w-full py-2 rounded-xl bg-white text-slate-900 font-semibold hover:bg-amber-300 transition">Add to order</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
