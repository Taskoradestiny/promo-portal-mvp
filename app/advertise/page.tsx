import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const adPlans = [
  { amount: "₦1,000", ads: "10", description: "Basic starter pack" },
  { amount: "₦2,000", ads: "25", description: "Growth marketing pack" },
  { amount: "₦5,000", ads: "70", description: "Business reach promotion" },
  { amount: "₦10,000", ads: "180", description: "Premium visibility" },
];

export default function AdvertisePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Advertising marketplace</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Boost your business with approved ad placements</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {adPlans.map((plan) => (
          <div key={plan.amount} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-3xl font-bold text-white">{plan.amount}</p>
            <p className="mt-2 text-sm text-brand-300">{plan.ads} advertisements</p>
            <p className="mt-4 text-slate-400">{plan.description}</p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-300" /> Image/video accepted</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-300" /> Social and website links supported</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-300" /> Admin approval required</div>
            </div>
            <button className="mt-6 inline-flex w-full justify-center rounded-xl bg-brand-500 px-4 py-3 font-semibold text-slate-950 hover:bg-brand-400">
              Buy package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
