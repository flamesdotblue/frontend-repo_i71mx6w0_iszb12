import React from 'react';
import { Leaf, Thermometer, Droplets, Truck } from 'lucide-react';

const KPICard = ({ title, value, sub, icon: Icon, color }) => (
  <div className="relative rounded-xl border border-white/10 bg-slate-900 p-4">
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-xl" />
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">{title}</p>
        <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
        <p className="mt-1 text-xs text-slate-400">{sub}</p>
      </div>
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

export default function KpiRow() {
  return (
    <section className="mx-auto max-w-6xl px-6 -mt-6 md:-mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Sustainability" value="A-" sub="Carbon Intensity 0.42 kg/kWh" icon={Leaf} color="text-emerald-400 bg-emerald-500/10" />
        <KPICard title="Avg. Temperature" value="22.8°C" sub="Optimal range maintained" icon={Thermometer} color="text-amber-400 bg-amber-500/10" />
        <KPICard title="Water Usage" value="14.3 m³" sub="-6% vs last week" icon={Droplets} color="text-sky-400 bg-sky-500/10" />
        <KPICard title="Logistics" value="31 loads" sub="5 inbound • 26 outbound" icon={Truck} color="text-indigo-400 bg-indigo-500/10" />
      </div>
    </section>
  );
}
