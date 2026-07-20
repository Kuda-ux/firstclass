-- Seed data for First Class Private School
-- Run this in the Supabase SQL Editor after migrations.

insert into public.site_settings (key, value) values
  ('school_name', 'First Class Private School'),
  ('abbreviation', 'FCPS'),
  ('motto', 'Non Ducor, Duco'),
  ('address', '8514/11 Kwekwe, Zimbabwe'),
  ('phone_primary', '+263 773 870 090'),
  ('phone_secondary', '+263 713 687 669'),
  ('email', 'info@firstclassprivate.ac.zw'),
  ('class_size', 'Approximately 25 learners'),
  ('curricula', 'ZIMSEC and Cambridge');

insert into public.pages (slug, title, status, published_at) values
  ('home', 'Home', 'published', now()),
  ('about', 'About Us', 'published', now()),
  ('academics', 'Academics', 'published', now()),
  ('admissions', 'Admissions', 'published', now()),
  ('boarding', 'Boarding', 'published', now()),
  ('student-life', 'Student Life', 'published', now()),
  ('news', 'News and Events', 'published', now()),
  ('gallery', 'Gallery', 'published', now()),
  ('downloads', 'Downloads', 'published', now()),
  ('transport', 'Transport and Bus Hire', 'published', now()),
  ('contact', 'Contact', 'published', now()),
  ('privacy', 'Privacy Policy', 'published', now()),
  ('terms', 'Terms of Use', 'published', now());

insert into public.news_posts (slug, title, excerpt, category, status, published_at) values
  ('athletics-day-2026', 'Athletics Day 2026', 'Our annual athletics day brings the whole school together for track and field events.', 'Sport', 'published', now()),
  ('valentines-kindness', 'Valentine’s Kindness Activity', 'Learners took part in a kindness campaign supporting the local community.', 'Community', 'published', now()),
  ('term-calendar', 'Term Calendar Released', 'Important dates for the new term are now available for parents.', 'Notice', 'published', now());

insert into public.events (slug, title, description, start_date, end_date, time, location, category, status, published_at) values
  ('open-day-2026', 'Open Day', 'Parents and learners are invited to visit the school and meet staff.', '2026-08-05', '2026-08-05', '09:00 – 13:00', 'FCPS Main Campus', 'Open day', 'published', now()),
  ('civics-day-2026', 'Civics Day', 'A day focused on citizenship, community and leadership.', '2026-08-15', '2026-08-15', '08:00 – 14:00', 'School Grounds', 'Culture', 'published', now());

insert into public.downloads (title, category, file_type, status) values
  ('Prospectus', 'Admissions', 'PDF', 'published'),
  ('Application Form', 'Admissions', 'PDF', 'published'),
  ('Term Calendar', 'Calendar', 'PDF', 'published'),
  ('Uniform List', 'General', 'PDF', 'published');

insert into public.faqs (question, answer, category, status) values
  ('What curricula do you offer?', 'We offer ZIMSEC and Cambridge pathways. Specific subjects and levels are confirmed by the school office.', 'Academics', 'published'),
  ('Do you offer boarding?', 'Yes, day and boarding options are available. Contact the office for details.', 'Admissions', 'published');
