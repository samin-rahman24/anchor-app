import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { TdHead } from './SvgSymbols';
import { useAppState } from '../data/store';

export default function AppLayout() {
  const { form, getBestBuddy } = useAppState();
  const navigate = useNavigate();
  const buddy = getBestBuddy();
  const initials = (form.name || 'SA').substring(0, 2).toUpperCase();

  const navItems = [
    { to: '/app', label: 'Dashboard', icon: '🏠', desc: '90-day journey & buddy', end: true },
    { to: '/app/lifemap', label: 'Life Map', icon: '🗺️', desc: 'Local tips & TAS benefits' },
    { to: '/app/pulse', label: 'Pulse Check', icon: '💚', desc: 'AI fortnightly check-in', badge: true },
    { to: '/app/services', label: 'Services', icon: '🛎️', desc: 'All support in one place' },
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Top bar */}
      <div className="grad px-6 py-3 flex items-center justify-between shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <TdHead />
          <span className="text-white font-black text-lg tracking-tight">Anchor</span>
          <span className="hidden sm:block text-white/30 text-sm">·</span>
          <span className="hidden sm:block text-white/50 text-xs">TasNetworks Relocation Companion</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white text-sm hidden md:block bg-white/20 px-3 py-1 rounded-full font-semibold">🌿 Day 14 in Tasmania</span>
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30">
            {initials}
          </div>
          <button onClick={() => navigate('/')} className="text-white/50 text-sm hover:text-white transition-all hidden sm:block">Sign out</button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0 shadow-sm">
          <div className="px-4 pt-5 pb-4 border-b border-gray-100">
            <div className="bg-[#F0F6FB] rounded-2xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 grad rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{initials}</div>
              <div className="overflow-hidden">
                <div className="font-bold text-gray-800 text-sm truncate">{form.name || 'New Starter'}</div>
                <div className="text-[#0099CC] text-xs font-semibold">● Week 2 in Tasmania</div>
              </div>
            </div>
          </div>

          <nav className="px-3 py-4 space-y-1 flex-1">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest px-3 mb-2">Navigation</p>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-item group ${isActive ? 'nav-on' : 'nav-off'}`}
              >
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1 text-left">
                  <div className="text-sm font-bold flex items-center gap-2">
                    {item.label}
                    {item.badge && <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>}
                  </div>
                  <div className="text-xs opacity-60 group-hover:opacity-80">{item.desc}</div>
                </div>
              </NavLink>
            ))}
          </nav>

          <div className="mx-3 mb-3 p-3 bg-[#F0F6FB] rounded-2xl border border-[#B3DFF0]">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm">🤝</span>
              <p className="text-xs text-gray-500 font-bold">Your Anchor Buddy</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 bg-[#0099CC] rounded-full flex items-center justify-center text-xl shrink-0">{buddy.avatar}</div>
              <div>
                <div className="font-bold text-gray-800 text-xs">{buddy.name}</div>
                <div className="text-green-600 text-xs">🟢 Active now</div>
              </div>
            </div>
            <button className="w-full bg-[#002E5D] text-white text-xs font-bold py-2 rounded-xl hover:bg-[#0099CC] transition-all">
              💬 Message {buddy.name.split(' ')[0]}
            </button>
          </div>

          <div className="px-3 pb-4">
            <button onClick={() => navigate('/')} className="w-full flex items-center gap-2 px-4 py-2.5 text-gray-400 hover:text-red-500 text-sm transition-all rounded-xl hover:bg-red-50">
              <span>🚪</span><span>Sign out</span>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 scr bg-[#F0F6FB] p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
