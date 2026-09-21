-- Supabase Auth integration for Promo Portal.
-- Run after the original schema.sql in Supabase SQL Editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  referral_code text unique,
  bank_name text,
  bank_account_name text,
  bank_account_number text,
  welcome_bonus numeric not null default 200,
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, phone, referral_code, bank_name, bank_account_name, bank_account_number)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''), new.raw_user_meta_data->>'phone', nullif(new.raw_user_meta_data->>'referral_code',''), new.raw_user_meta_data->>'bank_name', new.raw_user_meta_data->>'bank_account_name', new.raw_user_meta_data->>'bank_account_number');
  insert into public.wallets (user_id, wallet_balance, available_balance, welcome_bonus)
  values (new.id, 200, 200, 200);
  insert into public.transactions (user_id, type, amount, description, status)
  values (new.id, 'welcome_bonus', 200, 'New member welcome bonus', 'approved');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.wallets enable row level security;
alter table public.transactions enable row level security;
create policy "Users can read own wallet" on public.wallets for select using (auth.uid() = user_id);
create policy "Users can read own transactions" on public.transactions for select using (auth.uid() = user_id);

-- Never expose the service-role key in browser code or NEXT_PUBLIC variables.
