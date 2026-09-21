import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">Promo Portal</p>
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            A free starter platform for membership activation, referral growth, tasks, deposits, and withdrawals.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link href="/packages" className="hover:text-white">Packages</Link></li>
            <li><Link href="/tasks" className="hover:text-white">Tasks</Link></li>
            <li><Link href="/advertise" className="hover:text-white">Advertise</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/register" className="hover:text-white">Register</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 Promo Portal. Built as a starter free MVP project.
      </div>
    </footer>
  );
}
