import Link from "next/link";
import { ArrowRight, Crown, LayoutDashboard, ShieldCheck, UserRound } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/tasks", label: "Tasks" },
  { href: "/advertise", label: "Advertise" },
  { href: "/deposits", label: "Deposit" },
  { href: "/withdrawals", label: "Withdraw" },
  { href: "/refer", label: "Referrals" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin", label: "Admin" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-black text-slate-950">P</div>
          <div>
            <p className="text-base font-semibold text-white">Promo Portal</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">MVP</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:border-slate-500 sm:inline-flex">
            Login
          </Link>
          <Link href="/register" className="inline-flex items-center rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-brand-400">
            Join now
          </Link>
        </div>
      </div>
    </header>
  );
}
