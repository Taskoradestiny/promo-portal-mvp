import Link from "next/link";

const faqs = [
  { q: "How do I activate a package?", a: "Users register, choose a package, and complete the required activation flow before admin review is completed." },
  { q: "How long does task approval take?", a: "Approval times depend on the review queue and the evidence submitted. Admins review evidence before approval." },
  { q: "Can I submit a deposit without a payment gateway?", a: "Yes. The free MVP uses a manual deposit request with bank details and evidence upload." },
  { q: "How do withdrawals work?", a: "Users submit withdrawal requests and the administrator reviews the request before paying or rejecting it." },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Frequently asked questions</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Common platform questions</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-lg font-semibold text-white">{item.q}</p>
            <p className="mt-2 text-slate-400">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 hover:bg-brand-400">
          Contact support
        </Link>
      </div>
    </div>
  );
}
