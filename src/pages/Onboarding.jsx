import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TdFull } from '../components/SvgSymbols';
import { useAppState } from '../data/store';
import { hobbies, needs } from '../data/store';

export default function Onboarding() {
  const { form, updateForm, toggleHobby, toggleNeed } = useAppState();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F0F6FB] flex flex-col items-center pt-0 pb-8">
      <div className="grad w-full px-6 pt-10 pb-14 text-center relative">
        <button onClick={() => navigate('/')} className="absolute top-4 left-4 text-white/50 text-sm hover:text-white">← Back</button>
        <div className="mb-2 flex justify-center">
          <TdFull className="w-20 h-18" />
        </div>
        <h2 className="text-2xl font-black text-white">Let's set up your Anchor</h2>
        <p className="text-white/70 text-sm mt-1">Make settling down in Tasmania easier</p>
        <div className="mt-4 max-w-xs mx-auto bg-white/20 rounded-full h-2">
          <div className="bg-white rounded-full h-2 transition-all duration-500" style={{ width: step === 1 ? '50%' : '100%' }}></div>
        </div>
        <p className="text-white/50 text-xs mt-1">Step {step} of 2</p>
      </div>

      <div className="card p-6 w-full max-w-lg -mt-8 mx-4 fu">
        {step === 1 && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Tell us about yourself</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-1">Your first name</label>
                <input value={form.name} onChange={(e) => updateForm({ name: e.target.value })} type="text" placeholder="e.g. Sarah"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#0099CC] focus:ring-2 focus:ring-[#0099CC]/20" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-1">Moving from</label>
                <select value={form.origin} onChange={(e) => updateForm({ origin: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#0099CC]">
                  <option value="">Select city…</option>
                  <option value="Melbourne">Melbourne, VIC</option>
                  <option value="Sydney">Sydney, NSW</option>
                  <option value="Brisbane">Brisbane, QLD</option>
                  <option value="Perth">Perth, WA</option>
                  <option value="Adelaide">Adelaide, SA</option>
                  <option value="Auckland">Auckland, NZ</option>
                  <option value="Overseas">Overseas (International)</option>
                </select>
              </div>
              {form.origin === 'Overseas' && (
                <div className="bg-[#E6F4FA] rounded-xl p-3 border border-[#B3DFF0]">
                  <label className="text-xs font-semibold text-[#002E5D] uppercase tracking-wide block mb-1">
                    Which country? <span className="text-gray-400 font-normal normal-case">(optional)</span>
                  </label>
                  <input value={form.country} onChange={(e) => updateForm({ country: e.target.value })} type="text" placeholder="e.g. India, Philippines, UK, Germany…"
                    className="w-full border border-[#B3DFF0] bg-white rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0099CC] focus:ring-2 focus:ring-[#0099CC]/20 transition" />
                </div>
              )}
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-2">Who's making the move?</label>
                <div className="grid grid-cols-3 gap-2">
                  {[{ v: 'single', e: '🧑', l: 'Just me' }, { v: 'couple', e: '👫', l: 'Me & partner' }, { v: 'family', e: '👨‍👩‍👧', l: 'Family' }].map((f) => (
                    <button key={f.v} onClick={() => updateForm({ family: f.v })}
                      className={`border-2 rounded-xl py-3 text-sm transition-all flex flex-col items-center gap-1 ${form.family === f.v ? 'border-[#0099CC] bg-[#0099CC]/10 text-[#002E5D] font-bold' : 'border-gray-200 text-gray-500'}`}>
                      <span className="text-2xl">{f.e}</span>
                      <span className="text-xs">{f.l}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-2">Interests & hobbies</label>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((h) => (
                    <button key={h.id} onClick={() => toggleHobby(h.id)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${form.hobbies.includes(h.id) ? 'bg-[#002E5D] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {h.e} {h.l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => setStep(2)} className="w-full grad text-white font-bold py-3.5 rounded-xl mt-6 hover:opacity-90 transition shadow-md">
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">What services would you use the most?</h3>
            <p className="text-sm text-gray-400 mb-4">This will let us help you tailor your experience</p>
            <div className="space-y-2">
              {needs.map((n) => (
                <button key={n.id} onClick={() => toggleNeed(n.id)}
                  className={`w-full flex items-center gap-3 border-2 rounded-xl p-3.5 text-left transition-all ${form.needs.includes(n.id) ? 'border-[#0099CC] bg-[#E6F4FA]' : 'border-gray-200 hover:border-gray-300'}`}>
                  <span className="text-2xl shrink-0">{n.e}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm">{n.l}</div>
                    <div className="text-gray-400 text-xs">{n.d}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${form.needs.includes(n.id) ? 'border-[#0099CC] bg-[#0099CC]' : 'border-gray-300'}`}>
                    {form.needs.includes(n.id) && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                </button>
              ))}
            </div>
            <button onClick={() => navigate('/matching')} className="w-full grad text-white font-bold py-3.5 rounded-xl mt-6 hover:opacity-90 transition shadow-md">
              🤝 Find My Anchor Community
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
