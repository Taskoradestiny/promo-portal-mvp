import { DollarSign, Gift, TrendingUp, Wallet } from "lucide-react";

const stats = [
  { label: "Wallet balance", value: "₦125,200", icon: Wallet },
  { label: "Available balance", value: "₦72,400", icon: DollarSign },
  { label: "Task earnings", value: "₦21,500", icon: TrendingUp },
  { label: "Welcome bonus", value: "₦200", icon: Gift },
];

const recentTransactions = [
  { type: "Task payout", amount: "+₦4,300", status: "Approved", date: "12 Sep 2026" },
  { type: "Referral reward", amount: "+₦2,500", status: "Approved", date: "10 Sep 2026" },
  { type: "Withdrawal", amount: "-₦8,000", status: "Processing", date: "08 Sep 2026" },
  { type: "Deposit", amount: "+₦15,000", status: "Approved", date: "06 Sep 2026" },
];

const tasks = [
  { title: "Follow Facebook Page", reward: "₦600", status: "Pending review" },
  { title: "Join WhatsApp Group", reward: "₦700", status: "Approved" },
  { title: "Follow TikTok Account", reward: "₦900", status: "Pending review" },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-300">User dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Good evening, Ada</h1>
        </div>
        <div className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">Active package: Growth Plan</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">{label}</p>
              <div className="rounded-lg bg-brand-500/10 p-2 text-brand-300"><Icon className="h-4 w-4" /></div>
            </div>
            <p className="mt-4 text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent transactions</h2>
            <span className="text-sm text-brand-300">Last 30 days</span>
          </div>

          <div className="space-y-3">
            {recentTransactions.map((item) => (
              <div key={item.date} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div>
                  <p className="font-medium text-white">{item.type}</p>
                  <p className="text-sm text-slate-400">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${item.amount.startsWith("-") ? "text-rose-300" : "text-emerald-300"}`}>{item.amount}</p>
                  <p className="text-xs text-slate-400">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Pending tasks</h2>
          <div className="mt-5 space-y-3">
            {tasks.map((task) => (
              <div key={task.title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{task.title}</p>
                    <p className="mt-1 text-sm text-brand-300">Reward: {task.reward}</p>
                  </div>
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] uppercase tracking-wider text-amber-200">
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
