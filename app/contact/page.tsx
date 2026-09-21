import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Contact</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Support and enquiries</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-center">
          <Mail className="mx-auto h-6 w-6 text-brand-300" />
          <p className="mt-4 font-semibold text-white">Email</p>
          <p className="mt-2 text-sm text-slate-400">support@promportal.example</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-center">
          <Phone className="mx-auto h-6 w-6 text-brand-300" />
          <p className="mt-4 font-semibold text-white">Phone</p>
          <p className="mt-2 text-sm text-slate-400">+234 800 000 0000</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-center">
          <MapPin className="mx-auto h-6 w-6 text-brand-300" />
          <p className="mt-4 font-semibold text-white">Location</p>
          <p className="mt-2 text-sm text-slate-400">Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
