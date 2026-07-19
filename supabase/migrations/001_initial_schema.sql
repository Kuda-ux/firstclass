-- Initial schema for First Class Private School website
-- Run this in the Supabase SQL Editor or with the Supabase CLI.

create extension if not exists "pgcrypto";

-- User profiles and roles

create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text,
  full_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

comment on table public.profiles is 'Public-facing user profile for authenticated admin users.';

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  role text not null check (role in ('administrator', 'content_editor')),
  created_at timestamptz default now()
);

create index if not exists idx_user_roles_user_id on public.user_roles(user_id);

-- Trigger to create a profile on auth signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Site settings

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- CMS pages and sections

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  meta_title text,
  meta_description text,
  status text not null default 'draft' check (status in ('draft','published','scheduled','archived')),
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

create table if not exists public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages on delete cascade,
  section_key text not null,
  title text,
  content jsonb,
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_page_sections_page on public.page_sections(page_id);

-- School leadership and staff

create table if not exists public.staff_members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  title text,
  bio text,
  photo_url text,
  display_order integer default 0,
  status text not null default 'draft' check (status in ('draft','published','archived')),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

-- Academic programmes

create table if not exists public.academic_programmes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  curriculum text not null,
  levels text[],
  status text not null default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

-- News, events and notices

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  title text not null,
  excerpt text,
  content text,
  category text,
  featured_image text,
  status text not null default 'draft' check (status in ('draft','published','scheduled','archived')),
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

create index if not exists idx_news_status on public.news_posts(status, published_at desc);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  title text not null,
  description text,
  start_date date,
  end_date date,
  time text,
  location text,
  category text,
  featured boolean default false,
  status text not null default 'draft' check (status in ('draft','published','scheduled','archived')),
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

create index if not exists idx_events_status on public.events(status, start_date);

create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text,
  status text not null default 'draft' check (status in ('draft','published','scheduled','archived')),
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

-- Gallery

create table if not exists public.gallery_albums (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  cover_image text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  album_id uuid references public.gallery_albums on delete set null,
  image_url text not null,
  caption text,
  display_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Downloads and FAQs

create table if not exists public.downloads (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  file_url text,
  file_type text,
  file_size text,
  status text not null default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text,
  category text,
  display_order integer default 0,
  status text not null default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enquiries and applications

create table if not exists public.admission_applications (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  learner_name text not null,
  date_of_birth text,
  gender text,
  grade_applying text not null,
  curriculum text not null,
  day_or_boarding text not null,
  previous_school text,
  intake_term text not null,
  parent_name text not null,
  relationship text not null,
  phone text not null,
  alt_phone text,
  email text,
  residential_area text not null,
  preferred_contact text not null,
  message text,
  status text not null default 'new' check (status in ('new','reviewing','accepted','rejected','archived')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_admissions_status on public.admission_applications(status, created_at desc);

create table if not exists public.general_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  subject text not null,
  message text not null,
  status text not null default 'open',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.transport_enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  organisation text,
  phone text not null,
  email text,
  journey_type text not null,
  pickup text not null,
  destination text not null,
  travel_date text not null,
  passengers integer not null,
  message text,
  status text not null default 'open',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Media assets

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  file_url text not null,
  file_type text,
  file_size integer,
  alt_text text,
  created_at timestamptz default now(),
  created_by uuid references auth.users on delete set null
);

-- Row Level Security

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.site_settings enable row level security;
alter table public.pages enable row level security;
alter table public.page_sections enable row level security;
alter table public.staff_members enable row level security;
alter table public.academic_programmes enable row level security;
alter table public.news_posts enable row level security;
alter table public.events enable row level security;
alter table public.notices enable row level security;
alter table public.gallery_albums enable row level security;
alter table public.gallery_images enable row level security;
alter table public.downloads enable row level security;
alter table public.faqs enable row level security;
alter table public.admission_applications enable row level security;
alter table public.general_enquiries enable row level security;
alter table public.transport_enquiries enable row level security;
alter table public.media_assets enable row level security;

-- Anonymous can create enquiries (insert only). Public read for published pages/news/events is handled by service role / server functions.
create policy "anon_insert_admissions" on public.admission_applications for insert to anon using (true);
create policy "anon_insert_general" on public.general_enquiries for insert to anon using (true);
create policy "anon_insert_transport" on public.transport_enquiries for insert to anon using (true);

-- Authenticated users can read and manage all content (admin/editor role enforcement is handled in application logic / extra checks can be added)
create policy "auth_read_all" on public.admission_applications for select to authenticated using (true);
create policy "auth_read_all_general" on public.general_enquiries for select to authenticated using (true);
create policy "auth_read_all_transport" on public.transport_enquiries for select to authenticated using (true);
