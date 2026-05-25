import { useState, useRef, useEffect } from 'react';
import { TdHead } from '../components/SvgSymbols';
import { useAppState } from '../data/store';

export default function PulseCheck() {
  const { form, getBestBuddy } = useAppState();
  const [chatMsgs, setChatMsgs] = useState([]);
  const [aiTyping, setAiTyping] = useState(false);
  const [showTxt, setShowTxt] = useState(false);
  const [pulseVal, setPulseVal] = useState(7);
  const [txtInput, setTxtInput] = useState('');
  const [started, setStarted] = useState(false);
  const chatRef = useRef(null);

  const scroll = () => {
    setTimeout(() => chatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 100);
  };

  const aiSay = (text, type = 'text') => {
    setAiTyping(true);
    setTimeout(() => {
      setAiTyping(false);
      setChatMsgs((prev) => [...prev, { id: Date.now(), role: 'ai', text, type, done: false }]);
      scroll();
    }, 900);
  };

  const userSay = (text) => {
    setChatMsgs((prev) => [...prev, { id: Date.now(), role: 'user', text, type: 'text', done: true }]);
    scroll();
  };

  const startPulse = () => {
    setStarted(true);
    const n = form.name || 'there';
    const origin = form.origin || 'your city';
    const isFamily = form.family === 'family';
    const isCouple = form.family === 'couple';

    let opener = `Hey ${n} 👋 Two weeks since you left ${origin} behind. Before we get into it — this stays between us. Not your leader, not your manager. Just Anchor and you.`;
    if (isFamily) opener += `\n\nHow are the kids finding it? Week two is usually when the newness wears off and the real feelings start.`;
    if (isCouple) opener += `\n\nHow's your partner settling in too? It's okay if they're finding it tougher than you — that's really common.`;

    aiSay(opener, 'text');
    setTimeout(() => {
      aiSay(`Real talk: how are you going right now?\n\nNot "fine". Actually going. Slide to where you're at — and be honest with us ❤️`, 'slider');
    }, 2500);
  };

  const submitScore = () => {
    const score = parseInt(pulseVal);
    setChatMsgs((prev) => prev.map((m) => m.type === 'slider' ? { ...m, done: true } : m));

    const isFamily = form.family === 'family';
    const label = score >= 8 ? 'honestly, really well!' : score >= 6 ? "up and down, if I'm honest." : score >= 4 ? 'finding it pretty tough.' : 'really struggling right now.';
    userSay(`${score} out of 10. ${label}`);

    setTimeout(() => {
      let resp = '';
      if (score >= 8) resp = `A ${score}/10 — that's genuinely great for week two. Either you're landing really well, or you're being very brave 😄\n\nEither way, I'm noting it. You're ahead of the curve.`;
      else if (score >= 6) resp = `A ${score}/10 — honest and real. You're finding your feet and that's exactly where you should be at two weeks.\n\nThe bit that usually clicks first is finding your person — someone who's been you. Sounds like James might already be that person 😊`;
      else if (score >= 4) resp = `${score} out of 10. That's hard to say and it matters that you did.\n\nYou've uprooted your whole life and you're supposed to just be fine? That's not how people work${isFamily ? ' — especially with kids adjusting too' : ''}.\n\nI'm flagging this for your People Partner. Not to get you in trouble — the opposite. They'll reach out this week to ask what YOU need.`;
      else resp = `${score} out of 10. Thank you for being honest — that takes real courage.\n\nSomething needs to change this week. I'm reaching out to your People Partner today. You're going to have a human call from the team — not a form, a real call.`;
      aiSay(resp);
      setTimeout(() => {
        aiSay(`One more question — and this one's important.\n\nWhat's the ONE thing that would make next week even slightly better? Could be tiny ("knowing where to get a decent coffee") or huge ("feeling less alone"). Just be honest with me.`, 'text');
        setShowTxt(true);
      }, 2200);
    }, 800);
  };

  const submitTxt = () => {
    if (!txtInput.trim()) return;
    const resp = txtInput;
    const lower = resp.toLowerCase();
    setTxtInput('');
    setShowTxt(false);
    userSay(resp);
    const n = form.name || 'friend';
    const buddy = getBestBuddy();
    const bn = buddy.name.split(' ')[0];

    let aiResp;
    if (lower.match(/\b(gp|doctor|medical|health|sick|clinic|appointment)\b/))
      aiResp = `GP access is one of the most common stressors in the first weeks — you're not alone.\n\nI've flagged this for ${bn}, who knows the local GP setup near the office. Sonic Health Plus on Elizabeth St does bulk-billing for TasNetworks staff. ✅`;
    else if (lower.match(/\b(school|childcare|kids|children|enrol|waitlist)\b/))
      aiResp = `Schools is one of the highest-stress parts of relocating with kids — and the waitlists here move faster than people expect.\n\n${bn} has navigated this and I've asked them to send you the suburb-by-school breakdown directly. 🏫`;
    else if (lower.match(/\b(lonely|alone|miss|friend|social|people|isolated)\b/))
      aiResp = `That feeling of "everyone knows everyone except me" usually peaks around weeks 3–4 — and it's completely normal.\n\nWhat actually helps: the Hobart Walking Club (Sundays, 12 TasNetworks members). ${bn} specifically joined Anchor because they remember this exact feeling. 🤝`;
    else if (lower.match(/\b(housing|rent|home|suburb|apartment|flat)\b/))
      aiResp = `Hobart housing is much more manageable than Melbourne or Sydney, but the good suburbs do go fast.\n\nI've surfaced the crowdsourced suburb guide in your Life Map. ${bn} settled somewhere similar — I've nudged them to share. 🏠`;
    else
      aiResp = `Got it — "${resp.slice(0, 60)}${resp.length > 60 ? '…' : ''}".\n\nI've saved that and matched it to tips in your Life Map. I've also nudged ${bn} — they're probably already thinking of something useful to share. 😊`;

    setTimeout(() => {
      aiSay(aiResp);
      setTimeout(() => {
        aiSay(`Check-in done 😈\n\nSee you in a fortnight, ${n}. You're doing better than you think. And if anything comes up before then — your Anchor community, the Services hub, or just come back here. We're not going anywhere. 🫂`);
      }, 2400);
    }, 1000);
  };

  return (
    <div className="fi max-w-xl mx-auto">
      <div className="card p-5 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#0099CC] rounded-full flex items-center justify-center shadow overflow-hidden">
            <TdHead className="w-10 h-10" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Anchor AI · Fortnightly Check-in</h4>
            <p className="text-xs text-gray-400">Confidential · <span className="text-[#0099CC] font-semibold">Amazon Bedrock</span> · Not shared with your leader</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4" ref={chatRef}>
        {chatMsgs.map((msg) => (
          <div key={msg.id} className={`flex msg ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
            <div className={`px-4 py-3 shadow-sm ${msg.role === 'ai' ? 'bai rounded-2xl rounded-tl-sm max-w-sm' : 'busr rounded-2xl rounded-tr-sm max-w-xs'}`}>
              <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
              {msg.type === 'slider' && !msg.done && (
                <div className="mt-3">
                  <input type="range" min="1" max="10" value={pulseVal} onChange={(e) => setPulseVal(e.target.value)} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 — Really tough</span>
                    <strong className="text-[#0099CC]">{pulseVal} / 10</strong>
                    <span>10 — Loving it</span>
                  </div>
                  <button onClick={submitScore} className="w-full mt-3 grad text-white text-sm font-bold py-2.5 rounded-xl hover:opacity-90 transition">
                    That's where I'm at
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {aiTyping && (
          <div className="flex justify-start msg">
            <div className="bai rounded-2xl rounded-tl-sm px-5 py-3.5 shadow-sm flex gap-1.5 items-center">
              <div className="w-2 h-2 bg-[#0099CC]/60 rounded-full bdot" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-[#0099CC]/60 rounded-full bdot" style={{ animationDelay: '.18s' }}></div>
              <div className="w-2 h-2 bg-[#0099CC]/60 rounded-full bdot" style={{ animationDelay: '.36s' }}></div>
            </div>
          </div>
        )}
      </div>

      {showTxt && (
        <div className="card p-3 flex gap-2 mb-4">
          <input value={txtInput} onChange={(e) => setTxtInput(e.target.value)} type="text" placeholder="Tell me honestly…"
            className="flex-1 text-sm text-gray-800 focus:outline-none" onKeyDown={(e) => e.key === 'Enter' && submitTxt()} />
          <button onClick={submitTxt} className="grad text-white rounded-xl px-4 py-2 text-sm font-bold hover:opacity-90 transition">Send</button>
        </div>
      )}

      {!started && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">💚</div>
          <h4 className="font-bold text-gray-800 mb-2">Fortnightly Check-in</h4>
          <p className="text-gray-400 text-sm mb-5">Just 2 questions · 60 seconds · Completely confidential</p>
          <button onClick={startPulse} className="grad text-white font-bold px-8 py-3.5 rounded-2xl hover:opacity-90 transition shadow-lg">
            Start Check-in 💚
          </button>
        </div>
      )}
    </div>
  );
}
