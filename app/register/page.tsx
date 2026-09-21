import Link from "next/link";
import { ArrowRight, Shield, UserRound } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <div className="inline-flex rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
            Join the network
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white">Create your member account</h1>
          <p className="mt-3 text-slate-400">Register to earn from tasks, share your referral link, and manage your wallet.</p>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3"><UserRound className="h-4 w-4 text-brand-300" /> Full name, email, phone, and password</div>
            <div className="flex items-center gap-3"><Shield className="h-4 w-4 text-brand-300" /> Bank details stored securely</div>
            <div className="flex items-center gap-3"><ArrowRight className="h-4 w-4 text-brand-300" /> Welcome bonus ₦200 activation</div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <h2 className="text-2xl font-bold text-white">Register</h2>
          <form className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Full name</label>
              <input type="text" defaultValue="Ada Okafor" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Phone number</label>
              <input type="tel" defaultValue="0803 000 0000" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Email address</label>
              <input type="email" defaultValue="ada@example.com" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Password</label>
              <input type="password" defaultValue="********" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Referral code (optional)</label>
              <input type="text" defaultValue="AFF-1001" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Bank name</label>
              <input type="text" defaultValue="Access Bank" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Account name</label>
              <input type="text" defaultValue="Ada Okafor" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm text-slate-300">Account number</label>
              <input type="text" defaultValue="0123456789" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>

            <div className="md:col-span-2 mt-2 rounded-2xl border border-brand-500/25 bg-brand-500/10 p-4 text-sm text-brand-100">
              New users receive a ₦200 welcome bonus, subject to platform terms.
            </div>

            <div className="md:col-span-2">
              <button type="button" className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 hover:bg-brand-400">
                Create account
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account? <Link href="/login" className="text-brand-300 hover:text-brand-200">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
