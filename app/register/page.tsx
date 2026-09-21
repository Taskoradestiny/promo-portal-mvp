"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Shield, UserRound } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: "", phone: "", email: "", password: "", referralCode: "", bankName: "", bankAccountName: "", bankAccountNumber: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const update = (key: keyof typeof form, value: string) => setForm((old) => ({ ...old, [key]: value }));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setMessage("");
    if (!supabase) { setMessage("Supabase is not configured yet. Add the environment variables in Vercel or .env.local."); setLoading(false); return; }
    const { data, error } = await supabase.auth.signUp({ email: form.email, password: form.password, options: { data: { full_name: form.fullName, phone: form.phone, referral_code: form.referralCode, bank_name: form.bankName, bank_account_name: form.bankAccountName, bank_account_number: form.bankAccountNumber } } });
    if (error) setMessage(error.message);
    else if (data.session) router.push("/dashboard");
    else setMessage("Account created. Check your email to confirm your address, then log in.");
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft"><div className="inline-flex rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">Join the network</div><h1 className="mt-6 text-3xl font-bold text-white">Create your member account</h1><p className="mt-3 text-slate-400">Register to earn from approved tasks, share your referral link, and manage your wallet.</p><div className="mt-8 space-y-4 text-sm text-slate-300"><div className="flex items-center gap-3"><UserRound className="h-4 w-4 text-brand-300" /> Secure email authentication</div><div className="flex items-center gap-3"><Shield className="h-4 w-4 text-brand-300" /> Profile and bank details</div><div className="flex items-center gap-3"><ArrowRight className="h-4 w-4 text-brand-300" /> Welcome bonus tracked in the ledger</div></div></div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft"><h2 className="text-2xl font-bold text-white">Register</h2><form className="mt-6 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          {([['fullName','Full name','text'],['phone','Phone number','tel'],['email','Email address','email'],['password','Password','password'],['referralCode','Referral code (optional)','text'],['bankName','Bank name','text'],['bankAccountName','Account name','text'],['bankAccountNumber','Account number','text']] as const).map(([key,label,type]) => <div key={key}><label className="mb-2 block text-sm text-slate-300">{label}</label><input required={!key.includes('referral')} type={type} minLength={key === 'password' ? 6 : undefined} value={form[key]} onChange={(e) => update(key, e.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-brand-500" /></div>)}
          <div className="md:col-span-2 rounded-2xl border border-brand-500/25 bg-brand-500/10 p-4 text-sm text-brand-100">New users receive a ₦200 welcome bonus, subject to platform terms.</div>
          {message && <p className="md:col-span-2 text-sm text-rose-300">{message}</p>}
          <button disabled={loading} className="md:col-span-2 inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 disabled:opacity-50">{loading ? "Creating account…" : "Create account"}</button>
        </form><p className="mt-6 text-center text-sm text-slate-400">Already have an account? <Link href="/login" className="text-brand-300">Login here</Link></p></div>
      </div>
    </div>
  );
}
