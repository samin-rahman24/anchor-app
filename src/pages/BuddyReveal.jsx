import { useNavigate } from 'react-router-dom';
import { useAppState } from '../data/store';

export default function BuddyReveal() {
  const { form, getBestBuddy, communityBuddies } = useAppState();
  const navigate = useNavigate();
  const buddy = getBestBuddy();
  const community = communityBuddies();

  return (
    <div className="min-h-screen grad flex flex-col items-center justify-center p-6 overflow-y-auto">
      <div className="text-center mb-5 fu">
        <p className="text-white/80 text-lg">🫂 Your Anchor community is ready!</p>
        <h2 className="text-3xl font-black text-white">1 primary buddy + 2 community members</h2>
        <p className="text-white/60 text-sm mt-1">One friend to get started — a whole community to belong to</p>
      </div>

      <div className="card p-6 w-full max-w-lg pop mb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 grad-r rounded-2xl flex items-center justify-center text-5xl shadow-xl shrink-0">{buddy.avatar}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-xl font-black text-gray-800">{buddy.name}</h3>
              <span className="bg-[#0099CC] text-white text-xs font-bold px-2 py-0.5 rounded-full">⭐ Best match</span>
            </div>
            <p className="text-[#0099CC] font-semibold text-sm">{buddy.role} · TasNetworks</p>
            <p className="text-gray-400 text-xs mt-1">📍 From {form.origin || 'Melbourne'} · {buddy.months} months in Hobart · {buddy.tag}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-[#0099CC]/10 text-[#002E5D] text-xs font-bold px-3 py-1.5 rounded-full">✓ Same origin</span>
          {buddy.family === form.family && (
            <span className="bg-[#0099CC]/10 text-[#002E5D] text-xs font-bold px-3 py-1.5 rounded-full">✓ {buddy.tag}</span>
          )}
          {form.needs.filter((nd) => buddy.needs.includes(nd)).slice(0, 2).map((n) => (
            <span key={n} className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full">✓ Knows: {n}</span>
          ))}
        </div>
        <div className="bg-[#F0F6FB] rounded-2xl p-4 mb-4 border-l-4 border-[#0099CC] text-sm text-gray-700 italic">{buddy.bio}</div>
        <div className="flex gap-3">
          <button className="flex-1 grad text-white font-bold py-3 rounded-xl hover:opacity-90 transition">💬 Say Hello</button>
          <button className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition">📞 Call</button>
        </div>
      </div>

      <div className="w-full max-w-lg mb-4 fu">
        <p className="text-white/70 text-sm font-semibold mb-3 text-center">👥 Your broader Anchor community</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {community.map((b) => (
            <div key={b.id} className="card p-4 flex items-center gap-3 hover:shadow-md transition cursor-pointer border border-transparent hover:border-[#B3DFF0]">
              <div className="w-12 h-12 bg-[#E6F4FA] rounded-xl flex items-center justify-center text-2xl shrink-0">{b.avatar}</div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-800 text-sm">{b.name}</div>
                <div className="text-gray-400 text-xs truncate">{b.role}</div>
                <div className="text-[#0099CC] text-xs font-semibold">{b.tag} · {b.months}mo in Hobart</div>
              </div>
              <button className="text-xs bg-[#002E5D] text-white px-3 py-1.5 rounded-xl hover:bg-[#0099CC] transition shrink-0">Connect</button>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => navigate('/app')} className="w-full max-w-lg bg-white text-[#002E5D] font-black py-4 rounded-2xl hover:bg-white/90 transition shadow-xl fu text-lg">
        Go to my Dashboard →
      </button>
    </div>
  );
}
