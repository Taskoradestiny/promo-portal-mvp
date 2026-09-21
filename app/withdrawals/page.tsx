import { ArrowUpRight, BadgeCheck, Banknote } from "lucide-react";

const withdrawals = [
  { amount: "₦12,500", bank: "First Bank", status: "Pending", date: "15 Sep 2026" },
  { amount: "₦7,200", bank: "Zenith Bank", status: "Approved", date: "12 Sep 2026" },
  { amount: "₦5,900", bank: "Access Bank", status: "Paid", date: "08 Sep 2026" },
  { amount: "₦3,000", bank: "GTBank", status: "Rejected", date: "05 Sep 2026" },
];

export default function WithdrawalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Withdrawal section</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Request a payout</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-brand-500/10 p-3 text-brand-300"><Banknote className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-slate-400">Available balance</p>
              <p className="text-2xl font-bold text-white">₦72,400</p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Amount</label>
              <input type="number" defaultValue="12000" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Bank name</label>
              <input type="text" defaultValue="First Bank" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Account name</label>
              <input type="text" defaultValue="Ada Okafor" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Account number</label>
              <input type="text" defaultValue="0123456789" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <button className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 hover:bg-brand-400">
              Submit withdrawal
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Withdrawal history</h2>
          <div className="mt-5 space-y-3">
            {withdrawals.map((item) => (
              <div key={`${item.amount}-${item.date}`} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div>
                  <p className="font-medium text-white">{item.amount}</p>
                  <p className="text-sm text-slate-400">{item.bank} • {item.date}</p>
                </div>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.status === "Pending" ? "bg-amber-500/15 text-amber-300" : item.status === "Approved" ? "bg-cyan-500/15 text-cyan-300" : item.status === "Paid" ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
