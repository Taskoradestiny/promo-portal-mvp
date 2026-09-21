-- Run after supabase/schema.sql.
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
declare referral_owner uuid;
begin
  insert into public.profiles (id, full_name, phone, referral_code, bank_name, bank_account_name, bank_account_number)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name',''), new.raw_user_meta_data->>'phone', nullif(new.raw_user_meta_data->>'referral_code',''), new.raw_user_meta_data->>'bank_name', new.raw_user_meta_data->>'bank_account_name', new.raw_user_meta_data->>'bank_account_number');
  insert into public.wallets (user_id, wallet_balance, available_balance, welcome_bonus) values(new.id,200,200,200);
  insert into public.transactions(user_id,type,amount,description,status) values(new.id,'welcome_bonus',200,'New member welcome bonus','approved');
  select id into referral_owner from public.profiles where referral_code = nullif(new.raw_user_meta_data->>'referral_code','');
  if referral_owner is not null and referral_owner <> new.id then insert into public.referrals(referrer_id,referred_id) values(referral_owner,new.id); end if;
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
