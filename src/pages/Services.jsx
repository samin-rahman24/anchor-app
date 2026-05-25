import { services } from '../data/store';

export default function Services() {
  return (
    <div className="fi max-w-4xl mx-auto">
      <div className="card p-5 mb-4">
        <h4 className="font-bold text-gray-800">🛎️ All Your Support Services — Centralised</h4>
        <p className="text-gray-400 text-sm mt-1">Everything you need to settle into Tasmania, in one place. Active from Day 1.</p>
      </div>

      <div className="card p-5 mb-4 border-2 border-[#0099CC]/30 bg-[#E6F4FA]">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 grad rounded-2xl flex items-center justify-center text-3xl shrink-0">✈️</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h5 className="font-black text-gray-800">Transport Assistance</h5>
              <span className="bg-[#0099CC] text-white text-xs font-bold px-2 py-0.5 rounded-full">Ongoing</span>
            </div>
            <p className="text-gray-600 text-sm">Not just for Day 1. Book airport pickups for family members arriving later, medical appointments, first office run — anytime you need it.</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <button className="grad text-white text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition">Book a pickup</button>
              <button className="bg-white text-[#002E5D] text-xs font-bold px-4 py-2 rounded-xl border border-[#0099CC]/30 hover:bg-[#002E5D] hover:text-white transition">Family arrival pickup</button>
              <button className="bg-white text-[#002E5D] text-xs font-bold px-4 py-2 rounded-xl border border-[#0099CC]/30 hover:bg-[#002E5D] hover:text-white transition">Medical transport</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
        {services.map((s) => (
          <button key={s.id} className="card p-4 text-left hover:shadow-md transition border border-transparent hover:border-[#B3DFF0] cursor-pointer">
            <span className="text-3xl block mb-2">{s.e}</span>
            <h5 className="font-bold text-gray-800 text-sm">{s.t}</h5>
            <p className="text-gray-400 text-xs mt-1 leading-tight">{s.d}</p>
          </button>
        ))}
      </div>

      <div className="grad rounded-2xl p-5 text-white">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl shrink-0">📞</div>
          <div className="flex-1">
            <h5 className="font-bold text-lg">Need a real human?</h5>
            <p className="text-white/80 text-sm">Our Anchor team answers directly — no bots, no call centres, no hold music. 8 am – 8 pm AEST.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:+61489180129" className="bg-white text-[#002E5D] font-bold py-3 px-4 rounded-xl hover:opacity-90 transition text-center text-sm flex items-center justify-center gap-2">
            📞 Call Samin<br /><span className="text-xs text-[#0099CC]">+61 489 180 129</span>
          </a>
          <a href="tel:+61424861396" className="bg-white/20 border border-white/40 text-white font-bold py-3 px-4 rounded-xl hover:bg-white/30 transition text-center text-sm flex items-center justify-center gap-2">
            📞 Call Team<br /><span className="text-xs text-white/70">+61 424 861 396</span>
          </a>
        </div>
      </div>
    </div>
  );
}
