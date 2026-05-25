import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../data/store';

export default function Matching() {
  const { form, familyLabel } = useAppState();
  const [matchStep, setMatchStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [1, 2, 3, 4, 5].map((s, i) =>
      setTimeout(() => {
        setMatchStep(s);
        if (s === 5) setTimeout(() => navigate('/buddy-reveal'), 1000);
      }, (i + 1) * 900)
    );
    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div className="min-h-screen grad flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/15 rounded-full r1"></div>
          <div className="absolute inset-5 border-4 border-white/25 rounded-full r2"></div>
          <div className="absolute inset-10 border-4 border-white/35 rounded-full r3"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center glow">
              <span style={{ fontSize: '54px' }}>🤝</span>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-black text-white mb-1">Finding your Anchor community…</h2>
        <p className="text-white/60 text-sm mb-8">Amazon Bedrock is scanning 847 TasNetworks employee profiles</p>
        <div className="space-y-3 text-left max-w-xs mx-auto">
          {matchStep >= 1 && (
            <div className="bg-white/15 rounded-xl px-4 py-3 flex items-center gap-3 fi">
              <span className="text-green-300 font-bold">✓</span>
              <span className="text-white text-sm">Origin: {form.origin || 'Melbourne'} relocators found (23 profiles)</span>
            </div>
          )}
          {matchStep >= 2 && (
            <div className="bg-white/15 rounded-xl px-4 py-3 flex items-center gap-3 fi">
              <span className="text-green-300 font-bold">✓</span>
              <span className="text-white text-sm">{familyLabel()} situation aligned (11 matches)</span>
            </div>
          )}
          {matchStep >= 3 && (
            <div className="bg-white/15 rounded-xl px-4 py-3 flex items-center gap-3 fi">
              <span className="text-green-300 font-bold">✓</span>
              <span className="text-white text-sm">Shared interests &amp; hobbies matched (6 matches)</span>
            </div>
          )}
          {matchStep >= 4 && (
            <div className="bg-white/15 rounded-xl px-4 py-3 flex items-center gap-3 fi">
              <span className="text-green-300 font-bold">✓</span>
              <span className="text-white text-sm">Relocation needs — knowledge confirmed (4 matches)</span>
            </div>
          )}
          {matchStep >= 5 && (
            <div className="bg-[#0099CC]/40 border border-[#0099CC] rounded-xl px-4 py-3 flex items-center gap-3 fi">
              <span className="text-yellow-300 text-xl">🫂</span>
              <span className="text-white text-sm font-bold">3 community members found — your best match is ready!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
