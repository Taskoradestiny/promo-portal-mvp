import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, UserRound } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <div className="inline-flex rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
            Secure access
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white">Welcome back</h1>
          <p className="mt-3 text-slate-400">Log in to manage your wallet, tasks, referrals, and advertising activity.</p>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Tracking of earnings and deposits</div>
            <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Admin-reviewed task status</div>
            <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Fast access to withdrawal history</div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <h2 className="text-2xl font-bold text-white">Sign in</h2>
          <form className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email address</label>
              <input type="email" defaultValue="user@example.com" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Password</label>
              <input type="password" defaultValue="password123" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-brand-500" />
            </div>

            <div className="flex items-center justify-between text-sm text-slate-400">
              <label className="inline-flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-950" /> Remember me</label>
              <Link href="/contact" className="text-brand-300 hover:text-brand-200">Need help?</Link>
            </div>

            <button type="button" className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 hover:bg-brand-400">
              Login to dashboard
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
            <p className="font-medium text-white">Demo account</p>
            <p className="mt-2">Email: demo@promoportal.test</p>
            <p>Password: demo123</p>
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Don&apos;t have an account? <Link href="/register" className="text-brand-300 hover:text-brand-200">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
