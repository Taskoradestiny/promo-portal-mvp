import Link from "next/link";
import { ArrowRight, Coins, ShieldCheck, Smartphone, Sparkles, TrendingUp } from "lucide-react";

const packages = [
  { amount: "₦1,000", reward: "₦250", tag: "Starter" },
  { amount: "₦2,000", reward: "₦500", tag: "Growth" },
  { amount: "₦3,500", reward: "Custom reward", tag: "Popular" },
  { amount: "₦5,500", reward: "Custom reward", tag: "Premium" },
];

const stats = [
  { label: "Active users", value: "24.8k" },
  { label: "Tasks approved", value: "18.2k" },
  { label: "Referral payouts", value: "₦9.4m" },
  { label: "Ads published", value: "1.4k" },
];

const features = [
  { icon: TrendingUp, title: "Earn from tasks", description: "Complete promotional campaigns and unlock rewards after admin review." },
  { icon: Coins, title: "Track earnings", description: "Monitor wallet balance, referrals, welcome bonus, task payouts, and withdrawals." },
  { icon: Smartphone, title: "Mobile-first design", description: "Optimized experience for phones, tablets, and desktop browsing." },
  { icon: ShieldCheck, title: "Secure access", description: "Protected login, role-based admin controls, and auditable transaction records." },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
              <Sparkles className="mr-2 h-4 w-4" />
              Trusted digital earnings and promotion platform
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Grow your online earnings, referrals, and business reach.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              A professional affiliate, promotion, wallet, and advertising platform built for mobile users and admin oversight.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/register" className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand-400">
                Create free account
              </Link>
              <Link href="/tasks" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">
                Explore tasks
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>• Welcome bonus ₦200</span>
              <span>• Referral tracking</span>
              <span>• Admin reviews</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Wallet overview</p>
                  <h3 className="mt-2 text-3xl font-bold text-white">₦124,500</h3>
                </div>
                <div className="rounded-xl bg-brand-500/10 p-3 text-brand-300">
                  <Coins className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Available balance</p>
                  <p className="mt-2 text-xl font-bold text-white">₦48,200</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Referral earnings</p>
                  <p className="mt-2 text-xl font-bold text-white">₦31,000</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Task earnings</p>
                  <p className="mt-2 text-xl font-bold text-white">₦22,400</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Pending review</p>
                  <p className="mt-2 text-xl font-bold text-white">₦6,900</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl border border-brand-500/30 bg-brand-500/10 p-3 text-sm text-brand-200">
                <span>New member bonus</span>
                <span className="font-bold">₦200</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Membership packages</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Activation plans designed for growth</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div key={pkg.amount} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
              <div className="inline-flex rounded-full border border-brand-500/25 bg-brand-500/10 px-2 py-1 text-xs font-medium text-brand-200">
                {pkg.tag}
              </div>
              <p className="mt-5 text-2xl font-bold text-white">{pkg.amount}</p>
              <p className="mt-2 text-sm text-slate-400">Reward/earning: {pkg.reward}</p>
              <div className="mt-6 space-y-2 text-sm text-slate-300">
                <div className="flex items-center justify-between"><span>Activation</span><span>Available</span></div>
                <div className="flex items-center justify-between"><span>Admin review</span><span>Required</span></div>
                <div className="flex items-center justify-between"><span>Referral bonus</span><span>Eligible</span></div>
              </div>
              <Link href="/register" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-4 py-3 font-semibold text-slate-950 hover:bg-brand-400">
                Activate package
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Platform features</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Everything needed to manage a modern promotion and referral system</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="inline-flex rounded-xl bg-brand-500/10 p-3 text-brand-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-500/30 bg-brand-500/10 p-8 text-center shadow-soft">
          <h2 className="text-3xl font-bold text-white">Launch your free MVP and grow from there.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Start with a free Vercel/Supabase stack, manage packages, tasks, referrals, deposits, and withdrawals through a secure admin dashboard.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/register" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-200">
              Register now
            </Link>
            <Link href="/admin" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 font-semibold text-white hover:border-slate-500">
              Admin preview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
