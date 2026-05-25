import { useNavigate } from 'react-router-dom';
import { TdFull } from '../components/SvgSymbols';
import { useAppState } from '../data/store';

export default function Dashboard() {
  const { form, getBestBuddy, buddyLatestMsg, getTailoredJourney } = useAppState();
  const navigate = useNavigate();
  const buddy = getBestBuddy();
  const journey = getTailoredJourney();

  return (
    <div className="fi max-w-4xl mx-auto space-y-5">
      <div className="grad rounded-2xl p-6 text-white flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">🌿 Day 14 in lutruwita (Tasmania)</p>
          <h2 className="text-3xl font-black mt-0.5">Good morning, {form.name || 'Sarah'} 👋</h2>
          <p className="text-white/70 text-sm mt-1">Your buddy {buddy.name.split(' ')[0]} is online · Pulse check is due today</p>
        </div>
        <div className="hidden md:block opacity-50">
          <TdFull className="w-24 h-24" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="card p-5 border-l-4 border-[#0099CC]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#E6F4FA] rounded-2xl flex items-center justify-center text-2xl shrink-0">💚</div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">Pulse Check due today</h4>
              <p className="text-gray-400 text-xs">2 questions · 60 seconds · confidential</p>
            </div>
            <button onClick={() => navigate('/app/pulse')} className="grad text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:opacity-90 transition shrink-0">Start</button>
          </div>
        </div>

        <div className="card p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">🤝 Your Anchor Buddy</p>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#0099CC] rounded-2xl flex items-center justify-center text-2xl shadow">{buddy.avatar}</div>
            <div className="flex-1">
              <h5 className="font-black text-gray-800">{buddy.name}</h5>
              <p className="text-gray-400 text-xs">{buddy.role} · From {form.origin || 'Interstate'}</p>
              <p className="text-green-600 text-xs font-semibold">🟢 Active · replied 2h ago</p>
            </div>
            <button className="bg-[#E6F4FA] text-[#002E5D] font-bold px-3 py-2 rounded-xl text-sm hover:bg-[#0099CC] hover:text-white transition">Chat</button>
          </div>
          <div className="bg-[#F0F6FB] rounded-xl p-3 text-sm text-gray-600 italic border border-gray-100">{buddyLatestMsg()}</div>
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-gray-800">📋 Your Personalised 90-Day Checklist</h4>
          <span className="bg-[#E6F4FA] text-[#002E5D] text-xs font-bold px-3 py-1 rounded-full">Day 14 / 90</span>
        </div>
        <div className="bg-gray-100 rounded-full h-3 mb-5">
          <div className="bg-[#0099CC] rounded-full h-3 transition-all" style={{ width: '15.5%' }}></div>
        </div>
        <div className="space-y-3">
          {journey.map((m) => (
            <div key={m.id} className="flex items-start gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${m.done ? 'bg-[#0099CC] text-white' : m.active ? 'bg-amber-400 text-white' : 'bg-gray-200'}`}>
                {m.done ? '✓' : m.active ? '⟳' : '○'}
              </div>
              <div className="flex-1">
                <div className={`text-sm ${m.done ? 'text-gray-500' : m.active ? 'text-gray-800 font-semibold' : 'text-gray-400'}`}>{m.label}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full tag-${m.tag}`}>{m.tag}</span>
                  <span className={`text-xs ${m.done ? 'text-gray-300' : m.active ? 'text-amber-500 font-semibold' : 'text-gray-300'}`}>{m.when}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
