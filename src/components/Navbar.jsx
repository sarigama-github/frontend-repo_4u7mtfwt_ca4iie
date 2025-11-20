import { useState, useEffect } from 'react'
import { Menu, X, UtensilsCrossed } from 'lucide-react'

function NavLink({ children, href }) {
  return (
    <a href={href} className="text-sm md:text-base text-white/80 hover:text-white transition-colors tracking-wide">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-rose-500/30 via-amber-400/30 to-emerald-400/30 blur-md group-hover:opacity-100 opacity-0 transition" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 grid place-items-center shadow-lg">
              <UtensilsCrossed size={22} className="text-white drop-shadow" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-wider text-lg">Divines</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#story">Our Story</NavLink>
          <NavLink href="#awards">Awards</NavLink>
          <NavLink href="#visit">Visit</NavLink>
        </nav>

        <div className="hidden md:flex">
          <a href="#reserve" className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold hover:bg-amber-300 transition shadow">
            Reserve a table
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 grid gap-4 bg-slate-900/90 border-t border-white/10">
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#story">Our Story</NavLink>
          <NavLink href="#awards">Awards</NavLink>
          <NavLink href="#visit">Visit</NavLink>
          <a href="#reserve" className="px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-center">Reserve a table</a>
        </div>
      )}
    </header>
  )
}
