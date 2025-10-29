import React from 'react';
import { Activity, BarChart3, LineChart, PieChart } from 'lucide-react';

function LineChartSVG({ data, color = '#10b981' }) {
  const width = 320;
  const height = 120;
  const padding = 8;
  const maxY = Math.max(...data);
  const minY = Math.min(...data);
  const points = data.map((d, i) => {
    const x = padding + (i * (width - padding * 2)) / (data.length - 1);
    const y = height - padding - ((d - minY) / (maxY - minY || 1)) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-28">
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke={color} strokeWidth="2.5" points={points} />
      <polygon fill="url(#lineGradient)" points={`${points} ${width - padding},${height - padding} ${padding},${height - padding}`} />
    </svg>
  );
}

function BarChartSVG({ data, color = '#6366f1' }) {
  const width = 320;
  const height = 120;
  const padding = 8;
  const barW = (width - padding * 2) / data.length - 6;
  const maxY = Math.max(...data);
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-28">
      {data.map((d, i) => {
        const x = padding + i * ((width - padding * 2) / data.length);
        const h = ((d) / (maxY || 1)) * (height - padding * 2);
        const y = height - padding - h;
        return <rect key={i} x={x} y={y} width={barW} height={h} rx="3" fill={color} />;
      })}
    </svg>
  );
}

function AreaChartSVG({ data, color = '#f59e0b' }) {
  const width = 320;
  const height = 120;
  const padding = 8;
  const maxY = Math.max(...data);
  const minY = Math.min(...data);
  const points = data.map((d, i) => {
    const x = padding + (i * (width - padding * 2)) / (data.length - 1);
    const y = height - padding - ((d - minY) / (maxY - minY || 1)) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-28">
      <defs>
        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke={color} strokeWidth="2.5" points={points} />
      <polygon fill="url(#areaGradient)" points={`${points} ${width - padding},${height - padding} ${padding},${height - padding}`} />
    </svg>
  );
}

function DonutChart({ value = 62, color = '#ef4444' }) {
  const size = 120;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <svg width={size} height={size} className="w-32 h-32">
      <circle cx={size/2} cy={size/2} r={radius} stroke="#1f2937" strokeWidth={stroke} fill="none" />
      <circle
        cx={size/2}
        cy={size/2}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-white text-sm font-semibold">
        {value}%
      </text>
    </svg>
  );
}

function Card({ title, icon, children, accent = 'emerald' }) {
  const Accent = {
    emerald: 'from-emerald-500/10 to-emerald-500/0',
    indigo: 'from-indigo-500/10 to-indigo-500/0',
    amber: 'from-amber-500/10 to-amber-500/0',
    rose: 'from-rose-500/10 to-rose-500/0',
  }[accent] || 'from-emerald-500/10 to-emerald-500/0';

  const Icon = icon;

  return (
    <div className="relative rounded-xl border border-white/10 bg-slate-900 p-4 overflow-hidden">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${Accent}`} />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">{title}</p>
          <div className="mt-1 flex items-center gap-2">
            <Icon className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
      <div className="relative mt-4">{children}</div>
    </div>
  );
}

export default function DashboardGrid() {
  return (
    <section id="dashboard" className="mx-auto max-w-6xl px-6 -mt-10 md:-mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Production Output" icon={Activity} accent="emerald">
          <LineChartSVG data={[60, 72, 68, 80, 76, 90, 104, 96]} />
          <p className="mt-2 text-sm text-slate-300">104 tons today • up 8%</p>
        </Card>
        <Card title="Quality Index" icon={LineChart} accent="indigo">
          <AreaChartSVG data={[92, 88, 90, 94, 93, 95, 97, 96]} color="#6366f1" />
          <p className="mt-2 text-sm text-slate-300">Defects <span className="text-emerald-400">-12%</span> week-over-week</p>
        </Card>
        <Card title="Energy Usage" icon={BarChart3} accent="amber">
          <BarChartSVG data={[40, 52, 46, 50, 62, 55, 49, 58]} color="#f59e0b" />
          <p className="mt-2 text-sm text-slate-300">1.2 MW avg • peak at 4 PM</p>
        </Card>
        <Card title="OEE" icon={PieChart} accent="rose">
          <div className="flex items-center justify-center">
            <DonutChart value={67} color="#ef4444" />
          </div>
          <p className="mt-2 text-sm text-slate-300 text-center">Overall Equipment Effectiveness</p>
        </Card>
      </div>
    </section>
  );
}
