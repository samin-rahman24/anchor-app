import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './data/store';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Matching from './pages/Matching';
import BuddyReveal from './pages/BuddyReveal';
import Dashboard from './pages/Dashboard';
import LifeMap from './pages/LifeMap';
import PulseCheck from './pages/PulseCheck';
import Services from './pages/Services';
import HrPortal from './pages/HrPortal';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/buddy-reveal" element={<BuddyReveal />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="lifemap" element={<LifeMap />} />
            <Route path="pulse" element={<PulseCheck />} />
            <Route path="services" element={<Services />} />
          </Route>
          <Route path="/hr" element={<HrPortal />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
