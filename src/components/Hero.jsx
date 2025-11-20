import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden">
      {/* background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] bg-gradient-to-br from-rose-500 via-amber-400 to-emerald-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[60rem] h-[60rem] bg-gradient-to-br from-indigo-500 via-sky-400 to-teal-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 backdrop-blur">
            <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
            Now serving joy across the city
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Fast food, crafted with love. Welcome to Divines.
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-xl">
            A next‑gen fast food experience where bold flavors meet playful design. Order in seconds, stay for the vibes.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#menu" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-amber-300 transition shadow-lg shadow-amber-500/20">Explore the Menu</a>
            <a href="#reserve" className="px-5 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/20">Reserve a Table</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-white/80">
            <div>
              <p className="text-3xl font-bold text-white">10k+</p>
              <p className="text-sm">Happy guests</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9★</p>
              <p className="text-sm">Average rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">15 min</p>
              <p className="text-sm">Avg. delivery time</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          {/* product cards */}
          <div className="relative grid grid-cols-2 gap-6">
            {[{
              title: 'Divine Smash Burger', price: '$10', img: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd30?q=80&w=1200&auto=format&fit=crop'
            },{
              title: 'Truffle Fries', price: '$6', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
            },{
              title: 'Spicy Chicken', price: '$9', img: 'https://images.unsplash.com/photo-1617692855027-57996f276ece?q=80&w=1200&auto=format&fit=crop'
            },{
              title: 'Matcha Shake', price: '$5', img: 'https://images.unsplash.com/photo-1542444459-db63c7b4f481?q=80&w=1200&auto=format&fit=crop'
            }].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur group overflow-hidden">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="pt-4 flex items-center justify-between text-white">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-white/70 text-sm">Signature</p>
                  </div>
                  <span className="font-bold">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* floating badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="absolute -top-6 -right-6">
            <div className="px-4 py-2 rounded-full bg-emerald-400 text-emerald-900 font-semibold shadow-lg">
              Award‑ready design
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
