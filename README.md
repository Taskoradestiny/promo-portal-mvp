# Promo Portal MVP

## Supabase + Vercel

1. Create a free Supabase project at https://supabase.com.
2. In SQL Editor, run `supabase/schema.sql`, then `supabase/001_auth.sql`.
3. In Authentication → Providers, enable Email. For testing you may disable email confirmation; enable it for production.
4. Copy Project URL and the public anon key from Project Settings → API.
5. In Vercel, import `Taskoradestiny/promo-portal-mvp` at https://vercel.com/new.
6. Add these variables for Production, Preview, and Development:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser code or a `NEXT_PUBLIC_` variable.

The login, registration, dashboard, wallet summary, transaction history, and admin approval queue now use Supabase. A user signup automatically creates a profile, wallet, ₦200 welcome-bonus transaction, and optional referral relationship.

Vercel supplies a free `*.vercel.app` address. Copy that address to Supabase Authentication → URL Configuration → Site URL and Redirect URLs, then redeploy.

## Local run

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Security and scope

The SQL includes RLS, admin-only approval RPCs, and an audit log. Review policies and test them with non-admin accounts before processing real money. Deposits, withdrawals, rewards, and referrals require legal/compliance review before a public launch.
