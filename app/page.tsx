import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const steps = [
  { title: "Free project setup", description: "Repository, Next.js app, Tailwind, and open-source stack already ready." },
  { title: "Supabase integration", description: "Authentication, wallets, admin review, and audit records connected to the database." },
  { title: "Vercel deployment", description: "Free `.vercel.app` address, environment variables, and redirect configuration." },
  { title: "Launch checklist", description: "Legal review, forms, security, and final QA before public use." },
];

export default function HomePage() {
  const [selected, setSelected] = useState(0);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">Live production polish</div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Professional starter platform for launch readiness</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">This version focuses on production polish: clean flows, secure auth setup, cleaner dashboard states, and a stronger foundation for Vercel hosting and Supabase-backed operations.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/register" className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-6 py-3 font-semibold text-slate-950 hover:bg-brand-400">Create account</Link>
            <Link href="/admin" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white hover:border-slate-500">Admin preview</Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-sm text-slate-400">Launch readiness</p>
              <h2 className="text-2xl font-bold text-white">94% ready</h2>
            </div>
            <div className="rounded-xl bg-brand-500/10 p-3 text-brand-300"><ShieldCheck className="h-6 w-6" /></div>
          </div>

          <div className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <button key={step.title} onClick={() => setSelected(index)} className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition ${selected === index ? "border-brand-500/40 bg-brand-500/10" : "border-slate-800 bg-slate-950/50"}`}>
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-slate-950">{index + 1}</div>
                <div>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{step.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <CheckCircle2 className="h-6 w-6 text-brand-300" />
          <h3 className="mt-4 text-xl font-semibold text-white">Security</h3>
          <p className="mt-2 text-slate-400">Auth-ready flow, RBAC friendly structure, and database-first logic preparation.</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <CheckCircle2 className="h-6 w-6 text-brand-300" />
          <h3 className="mt-4 text-xl font-semibold text-white">Deployment</h3>
          <p className="mt-2 text-slate-400">Vercel + Supabase free-tier flow is prepared for an easy public deployment link.</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <CheckCircle2 className="h-6 w-6 text-brand-300" />
          <h3 className="mt-4 text-xl font-semibold text-white">Compliance</h3>
          <p className="mt-2 text-slate-400">Important legal and payment review tasks are called out before any real-money public launch.</p>
        </div>
      </section>
    </main>
  );
}
