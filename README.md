# Promo Portal MVP

## Supabase + Vercel setup

### 1. Create Supabase project

1. Open https://supabase.com and create a free project.
2. In **SQL Editor**, run `supabase/schema.sql` first.
3. Run `supabase/001_auth.sql` second.
4. In **Authentication → Providers → Email**, keep Email enabled. For easiest testing, disable email confirmation; for a public launch, keep confirmation enabled and configure the site URL.
5. In **Project Settings → API**, copy the Project URL and the `anon` public key.

Use only these two browser variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

Do not put `SUPABASE_SERVICE_ROLE_KEY` in client code or any `NEXT_PUBLIC_` variable.

### 2. Run locally

```bash
npm install
cp .env.example .env.local
# edit .env.local with your Supabase URL and anon key
npm run dev
```

Visit http://localhost:3000/register, create an account, and then log in. The database trigger creates the profile, wallet, and ₦200 welcome-bonus transaction.

### 3. Deploy to Vercel free tier

1. Open https://vercel.com/new.
2. Import `Taskoradestiny/promo-portal-mvp` from GitHub.
3. Framework preset: **Next.js**. Build command: `npm run build`.
4. Add the two environment variables above under **Settings → Environment Variables** for Production, Preview, and Development.
5. Deploy. Vercel will provide a free `*.vercel.app` address.
6. Copy that address into Supabase **Authentication → URL Configuration → Site URL** and add it to **Redirect URLs**.
7. Redeploy after changing environment variables.

### Current scope

Authentication is connected to Supabase. The remaining dashboard values and approval lists are intentionally demo data until the CRUD/API layer is wired to the database. Do not process real deposits or withdrawals until compliance, security, and payment controls have been reviewed.
