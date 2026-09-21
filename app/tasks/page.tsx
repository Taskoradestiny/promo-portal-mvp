import Link from "next/link";
import { Clock3, FileImage, Sparkles } from "lucide-react";

const tasks = [
  { title: "Join Telegram channel", reward: "₦500", deadline: "3 days", status: "Active" },
  { title: "Follow Facebook page", reward: "₦600", deadline: "5 days", status: "Active" },
  { title: "Follow TikTok account", reward: "₦750", deadline: "2 days", status: "Urgent" },
  { title: "Join WhatsApp group", reward: "₦900", deadline: "7 days", status: "Active" },
];

export default function TasksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Promotional tasks</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Earn by completing approved tasks</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
        {tasks.map((task) => (
          <div key={task.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xl font-semibold text-white">{task.title}</p>
                <p className="mt-2 text-sm text-slate-400">Reward: <span className="font-medium text-brand-300">{task.reward}</span></p>
              </div>
              <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-2 py-1 text-[10px] uppercase tracking-wider text-brand-200">{task.status}</span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-300" /> Instructions shown to user before submission</div>
              <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-brand-300" /> Deadline: {task.deadline}</div>
              <div className="flex items-center gap-2"><FileImage className="h-4 w-4 text-brand-300" /> Upload screenshot evidence required</div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-slate-400">Admin review required</span>
              <Link href="/login" className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2 font-semibold text-slate-950 hover:bg-brand-400">
                Submit task
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
