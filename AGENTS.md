<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: First Class Private School (FCPS) Website

## Technology stack
- **Framework**: Next.js 16.2.10 (App Router, Turbopack default, v16 codemods applied)
- **Runtime**: React 19.2.4, TypeScript 5.x strict, Node 20.9+
- **Styling**: Tailwind CSS v4 with `@theme inline` custom tokens
- **Fonts**: Libre Baskerville (serif/headings) and Manrope (sans/body)
- **Motion**: Framer Motion via `FadeIn` wrapper component
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod (`@hookform/resolvers` v5)
- **Backend**: Supabase PostgreSQL + Supabase Auth + server actions (`lib/actions/enquiries.ts`)
- **Email (optional)**: Resend
- **Spam protection (optional)**: Cloudflare Turnstile
- **Testing**: Playwright (installed but not configured)

## Brand tokens (globals.css)
- `burgundy` `#7A1024` (primary brand)
- `wine` `#4B0713` (dark/hero backgrounds)
- `gold` `#C79A32` (accents/links)
- `cream` `#F7F1E7` (section background)
- `charcoal` `#202020` (body text)
- `muted` `#66615C` (secondary text)
- `soft` `#E7DED2` (borders)

## Project structure
```
app/                         # App Router
  layout.tsx                 # Root layout, metadata, fonts
  globals.css                # Tailwind theme tokens
  (public)/                  # Public group route (no layout shared, just URL grouping)
    page.tsx                 # Home page (sections composition)
    about/page.tsx
    academics/page.tsx
    admissions/page.tsx
    boarding/page.tsx
    contact/page.tsx
    downloads/page.tsx
    events/page.tsx
    gallery/page.tsx
    news/page.tsx
    privacy/page.tsx
    student-life/page.tsx
    terms/page.tsx
    transport/page.tsx
  admin/                     # Admin dashboard (authenticated)
    layout.tsx               # Protected layout with sidebar
    page.tsx                 # Dashboard counts
    applications/page.tsx
    enquiries/page.tsx
    events/page.tsx
    news/page.tsx
    transport/page.tsx
    downloads/page.tsx
    login/page.tsx
components/
  sections/                  # Page-building section blocks
  ui/                        # Reusable UI primitives (Button, Container, etc.)
  forms/                     # Public forms (AdmissionForm, ContactForm, TransportForm)
  animations/                # FadeIn motion wrapper
  layout/                    # Header, Footer
  admin/                     # LogoutButton
lib/
  data.ts                    # Single source of truth for all static school content
  image-manifest.ts          # ALL_IMAGES array (56 photos, file names normalised with underscores)
  schemas.ts                 # Zod schemas for forms
  types.ts                   # TypeScript interfaces
  utils.ts                   # `cn()` helper
  actions/enquiries.ts       # Server actions for form submissions
  supabase/
    client.ts
    server.ts
    admin.ts
supabase/migrations/001_initial_schema.sql  # Full CMS + enquiries schema
public/images/             # 56 WhatsApp image files with underscore-escaped names
```

## Content source of truth
All school text (vision, mission, fees, subjects, contact, etc.) lives in `lib/data.ts` as static exports. The pages consume these exports; there is no CMS wired in yet.

Key exports:
- `siteSettings` — name, motto, tagline, address, phones, email, registration, bank details
- `homeContent` — hero, intro, whyChoose, head quote, boardingTeaser, CTA
- `aboutContent` — intro, vision, mission, mandate, values (with Shona), focusAreas
- `academicsContent` — pathways (ZIMSEC/Cambridge) + 15 subjects in 4 groups
- `admissionsContent` — 2027 fees table, uniform list, entry requirements, bank, steps
- `newsItems`, `upcomingEvents` — static lists
- `downloads` — static list
- `images` — semantically mapped image constants for each section/page
- `privacyPolicy`, `termsOfUse` — plain text strings

## Images
- 56 WhatsApp photos in `public/images/` with filenames normalised to underscores (`WhatsApp_Image_...`)
- A second duplicate folder `new images/` exists at repo root with the same files but spaces in filenames; it is not used by the build
- `lib/image-manifest.ts` exports `ALL_IMAGES`
- `lib/data.ts` exports named `images` constants mapping each photo to a semantic usage

## Forms & validation
- `admissionSchema` in `lib/schemas.ts` validates admissions and generates reference `ADM-{ts}-{rand}`
- `contactSchema` validates general enquiries
- `transportSchema` validates transport enquiries
- All forms submit to server actions in `lib/actions/enquiries.ts` which insert into Supabase tables
- If `supabaseAdmin` is not configured, forms submit successfully but data is not persisted

## Authentication
- `/admin` routes protected by `AdminLayout` checking `supabase.auth.getUser()`
- Uses `createClient()` from `lib/supabase/server.ts` with `@supabase/ssr` and cookie handling
- Login via `/admin/login` client component using `createClient()` from `lib/supabase/client.ts`

## Environment variables
Required for admin/forms:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
Optional:
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`
- `GOOGLE_MAPS_API_KEY`

## Build & deploy
- `npm run build` uses Next.js Turbopack by default
- `npm run lint` runs `eslint`
- No `next export` configured (SSR/server actions used)
- `.next` directory is present in working copy; production build output should normally be ignored in `.gitignore`

## Common patterns
- `PageHeader` and `SectionHeader` UI components support `variant="dark"` for wine/burgundy backgrounds
- Headings inherit colour from parent (set in `globals.css`) so dark sections use `text-white` wrappers
- `Container` has `max-w-7xl` and responsive padding
- `FadeIn` wraps most sections for entrance animation
- `Button` supports `as="a"` for client-side Next.js Link rendering

## Localisation / Language
- Primary site language is English; some Shona labels are included in `aboutContent.values` for core values
- `formatDate` uses `en-ZW` locale

## Editing guidance
- When updating public text, prefer editing `lib/data.ts` first; most pages read from there
- Keep dark-section text colours correct: use `SectionHeader variant="dark"` or explicit `text-white`
- Maintain the existing underscore filename convention for any new images copied into `public/images/`
- Do not commit real credentials; keep them in `.env.local` only
- Remember: this is Next.js 16, not earlier versions; check `node_modules/next/dist/docs/` if unsure about an API
