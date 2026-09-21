import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const packages = [
  { name: "Starter", amount: "₦1,000", reward: "₦250", status: "Available" },
  { name: "Growth", amount: "₦2,000", reward: "₦500", status: "Available" },
  { name: "Popular", amount: "₦3,500", reward: "Custom", status: "Configurable" },
  { name: "Premium", amount: "₦5,500", reward: "Custom", status: "Configurable" },
];

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Packages</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Membership activation plans</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((pkg) => (
          <div key={pkg.name} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-widest text-brand-300">{pkg.name}</p>
            <p className="mt-4 text-3xl font-bold text-white">{pkg.amount}</p>
            <p className="mt-2 text-slate-300">Reward: {pkg.reward}</p>
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-300">
              {pkg.status}
            </div>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Activation conditions shown before purchase</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-300" /> Admin-configurable reward rules</div>
            </div>
            <Link href="/register" className="mt-6 inline-flex w-full justify-center rounded-xl bg-brand-500 px-4 py-3 font-semibold text-slate-950 hover:bg-brand-400">
              Choose package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
