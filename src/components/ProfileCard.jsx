import React from 'react';
import { User, Settings, LogOut, Mail, Phone, Building2 } from 'lucide-react';

export default function ProfileCard() {
  return (
    <section id="profile" className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
              <User className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Alex Morgan</h3>
              <p className="text-sm text-slate-400">Plant Operations Manager</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-slate-400" /> alex.morgan@greenplant.io</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-slate-400" /> +1 (415) 555-0134</div>
            <div className="flex items-center gap-3"><Building2 className="h-4 w-4 text-slate-400" /> Bay Area Facility • Line A</div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm text-white hover:bg-emerald-600 transition"><Settings className="h-4 w-4" /> Edit Profile</button>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition"><LogOut className="h-4 w-4" /> Sign out</button>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-xl border border-white/10 bg-slate-900 p-6">
          <h4 className="text-sm uppercase tracking-wide text-slate-400">Responsibility Overview</h4>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg bg-slate-800/60 p-4">
              <p className="text-xs text-slate-400">Lines Overseen</p>
              <p className="text-xl font-semibold text-white">4</p>
            </div>
            <div className="rounded-lg bg-slate-800/60 p-4">
              <p className="text-xs text-slate-400">Shift Utilization</p>
              <p className="text-xl font-semibold text-white">86%</p>
            </div>
            <div className="rounded-lg bg-slate-800/60 p-4">
              <p className="text-xs text-slate-400">On-time Shipments</p>
              <p className="text-xl font-semibold text-white">97%</p>
            </div>
            <div className="rounded-lg bg-slate-800/60 p-4">
              <p className="text-xs text-slate-400">Open Incidents</p>
              <p className="text-xl font-semibold text-white">2</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm uppercase tracking-wide text-slate-400">Recent Activity</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Approved maintenance window for Line C</li>
              <li>• Reviewed quality deviation report (Batch #2391)</li>
              <li>• Coordinated outbound logistics for 3 shipments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
