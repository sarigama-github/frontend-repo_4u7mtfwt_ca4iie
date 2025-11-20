import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Story from './components/Story'
import Awards from './components/Awards'
import CTA from './components/CTA'
import Reservation from './components/Reservation'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative text-white">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(255,255,255,0.06),transparent)]" />
        <div className="absolute inset-0 mix-blend-screen opacity-[0.07]" style={{backgroundImage:'url(data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 40 40\'><g fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.5\' opacity=\'0.6\'><path d=\'M0 20h40M20 0v40\'/></g></svg>)'}} />
      </div>

      <Navbar />
      <Hero />
      <Menu />
      <Story />
      <Awards />
      <Reservation />
      <CTA />

      <footer className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/70">© {new Date().getFullYear()} Divines. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#story" className="hover:text-white">Our Story</a>
            <a href="#awards" className="hover:text-white">Awards</a>
            <a href="#visit" className="hover:text-white">Visit</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
