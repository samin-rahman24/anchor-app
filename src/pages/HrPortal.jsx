import { useNavigate } from 'react-router-dom';
import { TdHead } from '../components/SvgSymbols';
import { hrEmps, awsArch } from '../data/store';

export default function HrPortal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F0F6FB]">
      <div className="grad px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <TdHead />
          <span className="text-white font-black text-lg">Anchor</span>
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">HR Portal</span>
        </div>
        <button onClick={() => navigate('/')} className="bg-white/20 text-white text-sm px-4 py-2 rounded-xl hover:bg-white/30 transition font-semibold">← Sign out</button>
      </div>

      <div className="p-6 max-w-5xl mx-auto space-y-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="card p-4 text-center"><div className="text-3xl font-black text-[#002E5D]">37</div><div className="text-gray-400 text-xs mt-1">Interstate/int'l hires since Mar 2025</div></div>
          <div className="card p-4 text-center border-l-4 border-red-400"><div className="text-3xl font-black text-red-500">3</div><div className="text-gray-400 text-xs mt-1">At-risk this fortnight 🔴</div></div>
          <div className="card p-4 text-center border-l-4 border-amber-400"><div className="text-3xl font-black text-amber-500">71%</div><div className="text-gray-400 text-xs mt-1">Got a buddy under current system ⚠️</div></div>
          <div className="card p-4 text-center border-l-4 border-green-400"><div className="text-3xl font-black text-green-600">100%</div><div className="text-gray-400 text-xs mt-1">Anchor buddy match rate ✓</div></div>
        </div>

        <div className="card p-5 border-l-4 border-red-500">
          <h4 className="font-bold text-gray-800 mb-3">🚨 At-Risk Alerts — Immediate Action</h4>
          <div className="space-y-3">
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl shrink-0">👩‍💼</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Aisha Al-Rashid</div>
                <div className="text-gray-400 text-xs">8 weeks · Dubai · Pulse: 3.8/10 · International hire</div>
                <div className="text-red-500 text-xs font-semibold mt-0.5">⚠️ Isolation flagged · No GP registered · Mentioned missing family</div>
              </div>
              <button className="bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shrink-0 hover:bg-red-600 transition">Reach Out</button>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl shrink-0">👨‍💼</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Marcus Osei</div>
                <div className="text-gray-400 text-xs">4 weeks · Brisbane · Pulse: 4.2/10</div>
                <div className="text-red-500 text-xs font-semibold mt-0.5">⚠️ Housing stress · Hasn't used Life Map · No community connections yet</div>
              </div>
              <button className="bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shrink-0 hover:bg-red-600 transition">Reach Out</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="card p-5">
            <h4 className="font-bold text-gray-800 mb-4">Active Relocators</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase border-b border-gray-100">
                    <th className="text-left pb-2 font-semibold">Employee</th>
                    <th className="text-left pb-2 font-semibold">Wks</th>
                    <th className="text-left pb-2 font-semibold">Buddy</th>
                    <th className="text-left pb-2 font-semibold">Pulse</th>
                    <th className="text-left pb-2 font-semibold">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {hrEmps.map((e) => (
                    <tr key={e.id} className="border-b border-gray-50">
                      <td className="py-2.5"><div className="font-bold text-gray-800 text-sm">{e.name}</div><div className="text-gray-400 text-xs">{e.origin}</div></td>
                      <td className="py-2.5 text-gray-500 text-sm">{e.weeks}w</td>
                      <td className="py-2.5"><span className={`font-bold ${e.buddy ? 'text-green-600' : 'text-red-400'}`}>{e.buddy ? '✓' : '✗'}</span></td>
                      <td className="py-2.5"><span className={`font-bold ${e.pulse >= 7 ? 'text-green-600' : e.pulse >= 5 ? 'text-amber-600' : 'text-red-500'}`}>{e.pulse ? `${e.pulse}/10` : '—'}</span></td>
                      <td className="py-2.5"><span className={`text-xs font-bold px-2 py-1 rounded-full ${e.risk === 'low' ? 'rlo' : e.risk === 'mid' ? 'rmi' : 'rhi'}`}>{e.risk === 'low' ? '🟢 Low' : e.risk === 'mid' ? '🟡 Med' : '🔴 High'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grad rounded-2xl p-5 text-white">
            <h4 className="font-black text-xl mb-1">📊 Real Cost per Early Exit</h4>
            <p className="text-white/60 text-xs mb-4">From TasNetworks actual recruitment data</p>
            <div className="space-y-2 bg-white/10 rounded-xl p-4 mb-4 text-sm">
              <div className="flex justify-between"><span className="text-white/80">Relocation assistance</span><span className="font-bold text-yellow-300">$5K–$40K</span></div>
              <div className="flex justify-between"><span className="text-white/80">Visa sponsorship</span><span className="font-bold text-yellow-300">$15K–$21K</span></div>
              <div className="flex justify-between"><span className="text-white/80">Recruitment process</span><span className="font-bold text-yellow-300">~$5K</span></div>
              <div className="flex justify-between"><span className="text-white/80">10-week vacancy @ $187.5K/yr</span><span className="font-bold text-yellow-300">~$36K</span></div>
              <div className="border-t border-white/20 pt-2 flex justify-between font-black"><span>Per early relocator exit</span><span className="text-yellow-300">$61K–$122K</span></div>
            </div>
            <div className="bg-yellow-400/20 border border-yellow-400/40 rounded-xl p-4 text-center">
              <p className="font-black text-lg">Prevent 5 exits = <span className="text-yellow-300">$405K saved</span></p>
              <p className="text-white/70 text-sm">Anchor cost ~$22K/yr → <strong className="text-yellow-300">18× ROI</strong></p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h4 className="font-bold text-gray-800 mb-4">☁️ AWS Architecture</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {awsArch.map((a) => (
              <div key={a.s} className={`flex items-center gap-3 p-3 rounded-xl ${a.bg}`}>
                <span className={`font-black text-xs w-28 shrink-0 ${a.tc}`}>{a.s}</span>
                <span className="text-gray-600 text-xs leading-tight">{a.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
