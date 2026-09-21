-- Fresh Supabase schema for the authenticated MVP.
-- Run this on a new Supabase project before supabase/001_auth.sql.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '', phone text, referral_code text unique,
  bank_name text, bank_account_name text, bank_account_number text,
  welcome_bonus numeric(12,2) not null default 200,
  is_admin boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.packages (
  id uuid primary key default gen_random_uuid(), name text not null, amount numeric(12,2) not null check (amount >= 0),
  reward_amount numeric(12,2) not null default 0 check (reward_amount >= 0), description text,
  is_active boolean not null default true, created_at timestamptz not null default now()
);
create table if not exists public.wallets (
  id uuid primary key default gen_random_uuid(), user_id uuid not null unique references public.profiles(id) on delete cascade,
  wallet_balance numeric(12,2) not null default 0, available_balance numeric(12,2) not null default 0,
  active_package_id uuid references public.packages(id), task_earnings numeric(12,2) not null default 0,
  referral_earnings numeric(12,2) not null default 0, welcome_bonus numeric(12,2) not null default 200,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade,
  type text not null, amount numeric(12,2) not null, description text, reference_id uuid,
  status text not null default 'approved' check (status in ('pending','approved','rejected','reversed')),
  created_at timestamptz not null default now()
);
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(), title text not null, description text not null default '', instructions text,
  reward_amount numeric(12,2) not null default 0, deadline date, requirements text,
  status text not null default 'active' check (status in ('active','paused','archived')), created_at timestamptz not null default now()
);
create table if not exists public.task_submissions (
  id uuid primary key default gen_random_uuid(), task_id uuid not null references public.tasks(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade, evidence_url text, status text not null default 'pending'
    check (status in ('pending','approved','rejected')), review_note text, created_at timestamptz not null default now(), reviewed_at timestamptz,
  unique(task_id, user_id)
);
create table if not exists public.referrals (
  id uuid primary key default gen_random_uuid(), referrer_id uuid not null references public.profiles(id) on delete cascade,
  referred_id uuid not null unique references public.profiles(id) on delete cascade, reward_amount numeric(12,2) not null default 0,
  status text not null default 'pending' check (status in ('pending','approved','rejected')), created_at timestamptz not null default now()
);
create table if not exists public.deposits (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade,
  amount numeric(12,2) not null check (amount > 0), payment_reference text, evidence_url text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')), review_note text,
  created_at timestamptz not null default now(), reviewed_at timestamptz
);
create table if not exists public.withdrawals (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade,
  amount numeric(12,2) not null check (amount > 0), bank_name text, account_name text, account_number text,
  status text not null default 'pending' check (status in ('pending','approved','processing','paid','rejected')),
  review_note text, created_at timestamptz not null default now(), reviewed_at timestamptz
);
create table if not exists public.advertisements (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null, content text, image_url text, website_url text, social_url text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')), review_note text,
  created_at timestamptz not null default now(), reviewed_at timestamptz
);
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null, message text not null, is_read boolean not null default false, created_at timestamptz not null default now()
);
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(), actor_id uuid references public.profiles(id), action text not null,
  target_type text, target_id uuid, details jsonb, created_at timestamptz not null default now()
);

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.profiles where id = auth.uid() and is_admin = true) $$;

alter table public.profiles enable row level security;
alter table public.packages enable row level security;
alter table public.wallets enable row level security;
alter table public.transactions enable row level security;
alter table public.tasks enable row level security;
alter table public.task_submissions enable row level security;
alter table public.referrals enable row level security;
alter table public.deposits enable row level security;
alter table public.withdrawals enable row level security;
alter table public.advertisements enable row level security;
alter table public.notifications enable row level security;
alter table public.audit_logs enable row level security;

do $$ declare t text; begin for t in select unnest(array['profiles','packages','wallets','transactions','tasks','task_submissions','referrals','deposits','withdrawals','advertisements','notifications','audit_logs']) loop execute format('drop policy if exists "admin_all_%s" on public.%I', t, t); execute format('create policy "admin_all_%s" on public.%I for all using (public.is_admin()) with check (public.is_admin())', t, t); end loop; end $$;
create policy "profile_self" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "packages_public_read" on public.packages for select using (is_active or public.is_admin());
create policy "wallet_self_read" on public.wallets for select using (auth.uid() = user_id);
create policy "transactions_self_read" on public.transactions for select using (auth.uid() = user_id);
create policy "tasks_read" on public.tasks for select using (status = 'active' or public.is_admin());
create policy "submission_self" on public.task_submissions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "referral_self_read" on public.referrals for select using (auth.uid() = referrer_id or auth.uid() = referred_id);
create policy "deposit_self" on public.deposits for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "withdrawal_self" on public.withdrawals for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "advert_self" on public.advertisements for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "notification_self" on public.notifications for select using (auth.uid() = user_id);

insert into public.packages (name, amount, reward_amount, description) values
('Starter',1000,250,'Starter activation package'),('Growth',2000,500,'Growth activation package'),('Popular',3500,0,'Reward configured by administrator'),('Premium',5500,0,'Reward configured by administrator') on conflict do nothing;

create or replace function public.record_admin_decision(p_table text, p_id uuid, p_status text, p_note text default null)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Administrator access required'; end if;
  if p_table = 'deposits' then update deposits set status=p_status, review_note=p_note, reviewed_at=now() where id=p_id;
  elsif p_table = 'withdrawals' then update withdrawals set status=p_status, review_note=p_note, reviewed_at=now() where id=p_id;
  elsif p_table = 'task_submissions' then update task_submissions set status=p_status, review_note=p_note, reviewed_at=now() where id=p_id;
  elsif p_table = 'advertisements' then update advertisements set status=p_status, review_note=p_note, reviewed_at=now() where id=p_id;
  else raise exception 'Unsupported table'; end if;
  insert into audit_logs(actor_id, action, target_type, target_id, details) values(auth.uid(), 'status_update', p_table, p_id, jsonb_build_object('status',p_status,'note',p_note));
end; $$;
