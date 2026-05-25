import { useNavigate } from 'react-router-dom';
import { TdFull } from '../components/SvgSymbols';
import { useAppState } from '../data/store';

export default function Login() {
  const { loginName, setLoginName, loginEmail, setLoginEmail, updateForm } = useAppState();
  const navigate = useNavigate();

  const loginAsEmployee = () => {
    if (loginName) updateForm({ name: loginName.split(' ')[0] });
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen grad flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>

      <div className="text-center mb-8 fu">
        <div className="mx-auto mb-4 drop-shadow-2xl">
          <TdFull />
        </div>
        <h1 className="text-5xl font-black text-white">Anchor</h1>
        <p className="text-white/70 mt-1">TasNetworks Relocation Companion</p>
      </div>

      <div className="card p-8 w-full max-w-sm fu">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Welcome back</h2>
        <p className="text-gray-400 text-sm mb-6">Sign in to your Anchor account</p>

        <div className="space-y-3 mb-5">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Full name</label>
            <input value={loginName} onChange={(e) => setLoginName(e.target.value)} type="text" placeholder="e.g. Sarah Mitchell"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-[#0099CC] focus:ring-2 focus:ring-[#0099CC]/20 transition" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Email</label>
            <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="email" placeholder="you@tasnetworks.com.au"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-[#0099CC] focus:ring-2 focus:ring-[#0099CC]/20 transition" />
          </div>
        </div>

        <button onClick={loginAsEmployee} className="w-full grad text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-md mb-3">
          Sign in with TasNetworks SSO →
        </button>
        <p className="text-center text-gray-300 text-xs mb-3">— or —</p>
        <button onClick={() => navigate('/hr')} className="w-full bg-gray-50 text-gray-600 font-semibold py-3 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all text-sm">
          👔 Sign in as HR / People Partner
        </button>
      </div>

      <div className="mt-6 bg-white/10 rounded-2xl px-5 py-3 text-white/70 text-xs text-center fu max-w-xs">
        <strong className="text-white">Demo tip:</strong> Leave fields as-is and click SSO to enter the new employee onboarding experience
      </div>
      <p className="text-white/30 text-xs mt-6">Powered by Amazon Bedrock · TasNetworks × UTAS × AWS 2026</p>
    </div>
  );
}
