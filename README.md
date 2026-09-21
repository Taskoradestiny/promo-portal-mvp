# Promo Portal MVP

A free starter build for a professional promotional, referral, advertising, and wallet platform.

## Overview

This project is a lightweight MVP intended to be deployed for free using:

- Next.js
- Tailwind CSS
- Supabase
- Vercel
- GitHub

It contains pages for:

- Landing page
- User registration and login
- User dashboard
- Admin dashboard
- Membership packages
- Promotional tasks
- Referral programme
- Advertising marketplace
- Deposits and withdrawals
- Terms, privacy, FAQ, and contact pages

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Create a Supabase project and copy the values into a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role
```

3. Run the app:

```bash
npm run dev
```

4. Open http://localhost:3000

## Free deployment

- Host frontend on Vercel: https://vercel.com
- Use Supabase Free tier for database and auth
- Use a free Vercel subdomain like `your-project.vercel.app`

## Important note

This is a starter MVP only. It does not include live payment processing or legal compliance checks for real-money financial operations. For a real public launch, review the reward, referral, deposit, and withdrawal model with legal and compliance experts before processing real funds.

## Supabase schema

A starter schema is included in `supabase/schema.sql`.
