import React from 'react';
import HeroCover from './components/HeroCover';
import KpiRow from './components/KpiRow';
import DashboardGrid from './components/DashboardGrid';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroCover />
      <KpiRow />
      <DashboardGrid />
      <ProfileCard />
      <footer className="mx-auto max-w-6xl px-6 py-12 text-slate-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} GreenPlant Analytics. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="hover:text-white transition" href="#dashboard">Dashboard</a>
            <a className="hover:text-white transition" href="#profile">Profile</a>
            <a className="hover:text-white transition" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
