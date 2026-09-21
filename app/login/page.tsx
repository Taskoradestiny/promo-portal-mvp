"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    if (!supabase) {
      setMessage("Supabase is not configured yet. Add the environment variables in Vercel or .env.local.");
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else router.push("/dashboard");
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <div className="inline-flex rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">Secure access</div>
          <h1 className="mt-6 text-3xl font-bold text-white">Welcome back</h1>
          <p className="mt-3 text-slate-400">Log in to manage your wallet, tasks, referrals, and advertising activity.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Secure Supabase authentication</div>
            <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Admin-reviewed task status</div>
            <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Wallet and transaction history</div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <h2 className="text-2xl font-bold text-white">Sign in</h2>
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div><label className="mb-2 block text-sm text-slate-300">Email address</label><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-brand-500" /></div>
            <div><label className="mb-2 block text-sm text-slate-300">Password</label><input required minLength={6} type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-brand-500" /></div>
            {message && <p className="text-sm text-rose-300">{message}</p>}
            <button disabled={loading} className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 disabled:opacity-50">{loading ? "Signing in…" : "Login to dashboard"}</button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-400">Don&apos;t have an account? <Link href="/register" className="text-brand-300">Create one</Link></p>
        </div>
      </div>
    </div>
  );
}
