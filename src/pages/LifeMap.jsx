import { useState } from 'react';
import { useAppState } from '../data/store';
import { lifeMapCats, lifeMapData } from '../data/store';

export default function LifeMap() {
  const { form } = useAppState();
  const [cat, setCat] = useState('essentials');
  const items = lifeMapData[cat] || [];

  return (
    <div className="fi max-w-4xl mx-auto">
      <div className="card p-5 mb-4">
        <h4 className="font-bold text-gray-800 mb-1">🗺️ Tasmania Life Map</h4>
        <p className="text-gray-400 text-sm">Crowdsourced by 847 TasNetworks employees · Personalised for <span className="text-[#0099CC] font-semibold">{form.name || 'you'}</span></p>
        <div className="flex gap-2 mt-2 flex-wrap">
          <span className="bg-[#E6F4FA] text-[#002E5D] text-xs font-semibold px-3 py-1 rounded-full">✨ Tailored to your needs</span>
          <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
            {form.family === 'family' ? '👨‍👩‍👧 Family' : form.family === 'couple' ? '👫 Couple' : '🧑 Solo'} · {form.origin || 'Your city'}
          </span>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {lifeMapCats.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm border border-transparent ${cat === c.id ? 'bg-[#002E5D] text-white shadow-md' : 'bg-white text-gray-500 hover:border-[#0099CC]'}`}>
            {c.e} {c.l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
        {items.map((item) => (
          <div key={item.id} className="card p-4 hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-[#B3DFF0]">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">{item.e}</span>
              <div className="flex-1">
                <h5 className="font-bold text-gray-800 text-sm leading-snug">{item.t}</h5>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.d}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-500 text-xs font-bold">⭐ {item.r}</span>
                  <span className="text-gray-200 text-xs">·</span>
                  <span className="text-gray-400 text-xs">{item.v} employees</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
