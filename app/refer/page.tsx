import { Gift, Link2, Share2, TrendingUp } from "lucide-react";

const referrals = [
  { label: "Total referrals", value: "128" },
  { label: "Active referred users", value: "85" },
  { label: "Referral earnings", value: "₦31,000" },
  { label: "Pending referrals", value: "12" },
];

export default function ReferralPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Referral programme</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Invite friends and grow your network</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {referrals.map(({ label, value }) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-brand-500/10 p-3 text-brand-300"><Link2 className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-slate-400">Your referral link</p>
              <p className="text-xl font-semibold text-white">promo-portal.app/ref/Ada123</p>
            </div>
          </div>
          <button className="mt-6 inline-flex w-full justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 hover:bg-brand-400">
            Copy referral link
          </button>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Referral structure</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"><Share2 className="h-4 w-4 text-brand-300" /> Referral rewards configurable by admin</div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"><Gift className="h-4 w-4 text-brand-300" /> Packages starting from ₦500 referral value</div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"><TrendingUp className="h-4 w-4 text-brand-300" /> Rewards are tracked automatically</div>
          </div>
        </div>
      </div>
    </div>
  );
}
