import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' })
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const backend = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '')
  const endpoint = `${backend || ''}/api/reservations`

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true, success: null, message: '' })
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        date: form.date,
        time: form.time,
        guests: Number(form.guests),
        notes: form.notes || undefined,
      }
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Reservation failed')
      setStatus({ loading: false, success: true, message: 'Reservation received! We\'ll email you the details shortly.' })
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' })
    } catch (err) {
      setStatus({ loading: false, success: false, message: err.message || 'Something went wrong' })
    }
  }

  return (
    <section id="reserve" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Reserve a table</h2>
          <p className="mt-4 text-white/80 max-w-xl">Book your spot for tonight. Walk‑ins welcome, but weekends fill fast.</p>

          <div className="mt-8 p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur">
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4 text-white">
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-white/70">Phone (optional)</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="(555) 555‑5555" />
              </div>
              <div>
                <label className="text-sm text-white/70">Date</label>
                <input required type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400/50" />
              </div>
              <div>
                <label className="text-sm text-white/70">Time</label>
                <input required type="time" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400/50" />
              </div>
              <div>
                <label className="text-sm text-white/70">Guests</label>
                <input required type="number" min="1" max="20" value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})} className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Notes (optional)</label>
                <textarea value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} rows={4} className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Allergies, occasions, seating preferences..." />
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button disabled={status.loading} className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-300/80 transition disabled:opacity-60">{status.loading ? 'Booking...' : 'Book reservation'}</button>
                {status.message && (
                  <span className={`${status.success ? 'text-emerald-400' : 'text-rose-400'} text-sm`}>{status.message}</span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] bg-gradient-to-br from-emerald-400/20 via-amber-300/10 to-rose-400/10 blur-3xl rounded-full -z-10" />
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/15">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" alt="Dining room" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-white/80">
            <div className="p-4 rounded-xl bg-white/10 border border-white/10"><p className="text-2xl font-bold text-white">11am–11pm</p><p className="text-sm">Open daily</p></div>
            <div className="p-4 rounded-xl bg-white/10 border border-white/10"><p className="text-2xl font-bold text-white">3 locations</p><p className="text-sm">Citywide</p></div>
            <div className="p-4 rounded-xl bg-white/10 border border-white/10"><p className="text-2xl font-bold text-white">Walk‑ins</p><p className="text-sm">Always welcome</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
