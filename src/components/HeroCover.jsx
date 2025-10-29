import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/70" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live Plant Operations Dashboard
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Modern insights for your plant industry operations
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-200">
            Monitor production, quality, energy, and logistics in real time with a clean, actionable view.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#dashboard" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition">
              View Dashboard
            </a>
            <a href="#profile" className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10 transition">
              Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
