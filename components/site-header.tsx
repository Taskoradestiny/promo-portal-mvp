import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function HeaderCTA() {
  return (
    <div className="flex items-center gap-3">
      <a href="/login" className="hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:border-slate-500 sm:inline-flex">Login</a>
      <a href="/register" className="inline-flex items-center rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-brand-400">Join now <ArrowRight className="ml-2 h-4 w-4" /></a>
    </div>
  );
}
