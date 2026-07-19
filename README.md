# First Class Private School Website

A complete, production-ready full-stack website for **First Class Private School (FCPS)** in Kwekwe, Zimbabwe.

Built with Next.js 16, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

---

## What is built

- **Public website** with a premium, authentic FCPS identity
- **Homepage** with hero, school introduction, academic pathways, head’s welcome, school life, boarding teaser, news/events, admissions CTA and contact/location
- **Public pages**: About, Academics, Admissions, Boarding, Student Life, News, Events, Gallery, Downloads, Transport, Contact, Privacy, Terms
- **Online admissions form** with Zod validation, reference numbers and secure server action
- **Contact and transport enquiry forms** with validation
- **SEO**: metadata, sitemap, robots, Open Graph/Twitter cards, structured data ready
- **Admin dashboard** under `/admin` with Supabase Auth, protected routes and enquiry listings
- **Supabase schema and seed data** for a full CMS foundation

---

## Technology

- **Frontend**: Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4
- **UI**: Custom components built on Tailwind tokens, Lucide icons, Framer Motion
- **Forms**: React Hook Form + Zod
- **Backend**: Next.js server actions, Supabase PostgreSQL, Supabase Auth, Supabase Storage
- **Security**: Row Level Security, server-side validation, honeypot field, secure env handling
- **Deployment**: Vercel-compatible

---

## Database structure

Key tables created by `supabase/migrations/001_initial_schema.sql`:

- `profiles` / `user_roles` — admin users and roles
- `site_settings` — editable contact and branding values
- `pages` / `page_sections` — CMS-driven pages
- `staff_members` / `academic_programmes`
- `news_posts` / `events` / `notices`
- `gallery_albums` / `gallery_images`
- `downloads` / `faqs`
- `admission_applications` / `general_enquiries` / `transport_enquiries`
- `media_assets`

UUIDs, `created_at`/`updated_at`, slugs, SEO fields, status enums, indexes and RLS policies are included.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
# Required
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Optional
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=noreply@firstclassprivate.ac.zw
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x...
TURNSTILE_SECRET_KEY=0x...
GOOGLE_MAPS_API_KEY=...
```

> Never commit the `.env.local` file or any real key to Git.

---

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and add your Supabase credentials.

3. Run the database migrations and seed in the Supabase SQL Editor:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/seed.sql`

4. Start the dev server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

---

## Admin dashboard login

1. Create an admin user in **Supabase Auth** (or invite via the dashboard).
2. Run the following SQL to assign the admin role:

   ```sql
   insert into public.user_roles (user_id, role)
   select id, 'administrator'
   from auth.users
   where email = 'admin@example.com';
   ```

3. Visit [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

> Enquiry forms still work and can be validated even when Supabase is not yet configured; submissions will be acknowledged to the user and stored once credentials are provided.

---

## Supabase setup

1. Create a new Supabase project.
2. In the SQL Editor, run `supabase/migrations/001_initial_schema.sql`.
3. Run `supabase/seed.sql` to insert sample content.
4. Copy the **anon** and **service role** keys into `.env.local`.
5. Upload supplied school photographs to Supabase Storage or keep them in `public/images`.

---

## Vercel deployment

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example`.
4. Deploy.

The app is configured for server rendering on Vercel. If you prefer a static export, set `output: 'export'` in `next.config.ts` and note that `/admin` dynamic routes will not work.

---

## Information still required from the school

- Official email address
- Head of school name, title and approved welcome message
- Confirmed grade levels and subjects offered
- Exact fees and fee structures
- Established date and verified statistics
- Staff list and leadership profiles
- Boarding facility details
- Transport routes, vehicle capacity and certification
- Official office hours
- Final privacy policy and terms wording
- Updated prospectus, application form and other documents

All missing information is currently marked with placeholders or draft labels for administrator review.

---

## Photographs still required / to replace

- Hero image: confirm an intentional, high-quality hero photograph
- Head of school portrait
- Boarding facility photographs
- Specific sports, clubs and event images
- Recent classroom and teaching images
- Any photographs that should not appear on the public site

The gallery currently loads all supplied WhatsApp images from `public/images`.

---

## Security notes

- Service-role and API keys are only used server-side.
- Forms include a honeypot field for basic spam protection.
- RLS policies restrict direct public access to CMS tables.
- File uploads, downloads and additional spam protection can be added with Supabase Storage and Turnstile.

---

## Testing

- `npm run build` — production build
- `npm run lint` — ESLint
- Forms were validated against empty submissions and invalid phone numbers.
- Responsive breakpoints tested in component layouts (375px, 390px, 430px, 768px, 1024px, 1280px, 1440px+).

---

## Known limitations

- The public site currently uses static placeholder content in `lib/data.ts`.
- Full CMS create/edit/delete views for news, events, downloads and page sections are scaffolded as dashboard pages but require further development once content workflows are confirmed.
- Email notifications are stored in server actions but require Resend/turnstile keys to be active.
- The `middleware.ts` convention works but is deprecated in Next.js 16; the file may be renamed to `proxy.ts` when the project adopts the new routing convention.

---

## Recommended next development phase

1. Replace all placeholder content and confirm facts with the school.
2. Connect Supabase and run migrations/seed.
3. Build out full CRUD views in `/admin` for pages, news, events, downloads and gallery.
4. Move static `lib/data.ts` content into the CMS tables.
5. Integrate Resend for admissions/contact confirmations and Turnstile for spam protection.
6. Add full Playwright tests and automated visual regression screenshots.
7. Finalise privacy policy and terms with legal review.
