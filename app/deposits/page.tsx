import { ArrowUpRight, Banknote, CreditCard } from "lucide-react";

const depositHistory = [
  { amount: "₦15,000", reference: "DEP-12435", status: "Approved", date: "12 Sep 2026" },
  { amount: "₦8,500", reference: "DEP-12410", status: "Pending", date: "11 Sep 2026" },
  { amount: "₦5,000", reference: "DEP-12307", status: "Rejected", date: "09 Sep 2026" },
];

export default function DepositsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Deposit section</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Fund your wallet</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-brand-500/10 p-3 text-brand-300"><Banknote className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-slate-400">Approved payment details</p>
              <p className="text-xl font-semibold text-white">Access Bank</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3"><span>Bank Name</span><span className="font-medium text-white">Access Bank</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3"><span>Account Name</span><span className="font-medium text-white">Promo Portal Limited</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3"><span>Account Number</span><span className="font-medium text-white">0012345678</span></div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Submit deposit request</h2>
          <form className="mt-5 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Amount paid</label>
              <input type="number" defaultValue="15000" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Payment reference / transaction ID</label>
              <input type="text" defaultValue="REF-123456" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Upload proof</label>
              <input type="file" className="block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-500 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-slate-950" />
            </div>
            <button className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 hover:bg-brand-400">
              Submit deposit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
        <h2 className="text-xl font-semibold text-white">Deposit history</h2>
        <div className="mt-5 space-y-3">
          {depositHistory.map((item) => (
            <div key={item.reference} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div>
                <p className="font-medium text-white">{item.amount}</p>
                <p className="text-sm text-slate-400">{item.reference} • {item.date}</p>
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.status === "Approved" ? "bg-emerald-500/15 text-emerald-300" : item.status === "Pending" ? "bg-amber-500/15 text-amber-300" : "bg-rose-500/15 text-rose-300"}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
