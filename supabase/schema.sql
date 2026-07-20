-- Fox Solutions project showcase schema
-- Run in Supabase SQL Editor (new project or a schema in an existing one)

create table if not exists public.projects (
  id text primary key,                    -- e.g. 'P-2601'
  name text not null,
  industry text,
  weigher_type text not null,             -- filter facet 1
  bagger_config text not null,            -- filter facet 2: FSDWB4-1PV/1PF/3PV/3PF
  stations int not null default 1,        -- 1 or 2 wicketed stations
  bpm int,                                -- rated throughput, bags/min
  product text,
  dwg_number text,                        -- control panel drawing number
  year int,
  notes text,
  model_url text,                         -- public URL to GLB in Storage
  video_id text,                          -- Cloudflare Stream video UID
  layout_image_url text,                  -- optional PNG top view (overrides parametric SVG)
  is_public boolean not null default false,
  sort_order int default 100,
  created_at timestamptz default now()
);

alter table public.projects enable row level security;

create policy "public read of published projects"
  on public.projects for select
  to anon
  using (is_public = true);

create policy "staff full access"
  on public.projects for all
  to authenticated
  using (true) with check (true);

-- Storage: create a public bucket named 'models' in the dashboard
-- for GLB files, and optionally 'layouts' for PNG top views.

insert into public.projects
  (id, name, industry, weigher_type, bagger_config, stations, bpm, product, dwg_number, year, notes, is_public)
values
  ('P-2601','Frozen Vegetable Line — Monterrey','Frozen Foods','14-Head Multihead','FSDWB4-3PV',2,32,'IQF mixed vegetables, 1–2 kg','11777-S-25497-03-3PV',2026,'Dual wicketed stations with airsweep on both heads. Sync signal wired for dry-contact weigher output via bypass plug.',true),
  ('P-2534','Tortilla Chip Bagging — Laredo','Snack Foods','10-Head Multihead','FSDWB4-1PF',1,24,'Corn tortilla chips, 300–500 g','11777-S-25497-03-1PF',2025,'Fixed-funnel configuration with product-friendly drop chute. Feed belt delay timer tuned via Hidden Timers screen.',true),
  ('P-2518','Pet Food Portioning — San Antonio','Pet Food','Linear Net Weigher','FSDWB4-3PF',2,18,'Dry kibble, 2.5 kg wicketed bags','11777-S-25497-03-3PF',2025,'Heavy-product package with reinforced grippers. IFM OGD550 sensors set per v1.2 manual setpoint procedure.',true)
on conflict (id) do nothing;
